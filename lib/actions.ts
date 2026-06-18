'use server'

import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { headers } from 'next/headers'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Record<string, string>
}

// Rate limiting: 5 submissions per hour per IP.
// Initialised lazily so the form still works when Upstash isn't configured —
// Redis.fromEnv() throws if the env vars are missing, which would otherwise
// crash the whole server action on module load.
let ratelimit: Ratelimit | null = null
function getRatelimit(): Ratelimit | null {
  if (ratelimit) return ratelimit
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null
  }
  ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, '1 h'),
  })
  return ratelimit
}

const required = (v: FormDataEntryValue | null) =>
  typeof v === 'string' && v.trim().length > 0 ? v.trim() : ''

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContactForm(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Rate limiting check (skipped when Upstash isn't configured)
  try {
    const limiter = getRatelimit()
    if (limiter) {
      const headersList = headers()
      const ip = headersList.get('x-forwarded-for')?.split(',')[0] || headersList.get('x-real-ip') || 'unknown'
      const { success } = await limiter.limit(ip)

      if (!success) {
        return {
          status: 'error',
          message: 'Too many submissions. Please try again in an hour.',
        }
      }
    }
  } catch (err) {
    // If rate limiting fails, log it but don't block submission
    console.error('[contact] Rate limiting check failed:', err instanceof Error ? err.message : String(err))
  }

  const name = required(formData.get('name'))
  const phone = required(formData.get('phone'))
  const email = required(formData.get('email'))
  const area = required(formData.get('area'))
  const language = required(formData.get('language'))
  const matter = required(formData.get('matter'))
  // Honeypot
  if ((formData.get('website') as string | null)?.length) {
    return { status: 'success', message: 'Thanks. We will be in touch shortly.' }
  }

  const errors: Record<string, string> = {}
  if (!name) errors.name = 'Please enter your full name.'
  if (!phone) errors.phone = 'A contact number helps us respond quickly.'
  if (!email) errors.email = 'Please provide an email address.'
  else if (!EMAIL_RE.test(email)) errors.email = 'That email address looks incomplete.'
  if (!area) errors.area = 'Please choose an area of law.'
  if (!matter || matter.length < 10) errors.matter = 'Please add a few sentences about your matter.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please correct the highlighted fields.', errors }
  }

  // Email via Resend if configured; otherwise log and succeed.
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || 'info@hussainilaw.com.au'
  const from = process.env.CONTACT_FROM_EMAIL || 'website@hussainilaw.com.au'

  if (apiKey) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)
      await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `New inquiry — ${area} (${language || 'English'})`,
        text: [
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `Area of law: ${area}`,
          `Preferred language: ${language || 'English'}`,
          '',
          'Matter:',
          matter,
        ].join('\n'),
      })
    } catch (err) {
      console.error('[contact] Resend failed:', err)
      return {
        status: 'error',
        message: 'We could not send your message right now. Please call 02 8764 7885.',
      }
    }
  } else {
    // Resend not configured; log generic success without PII
    console.info('[contact] Form submitted successfully (Resend not configured)')
  }

  return {
    status: 'success',
    message: 'Thank you. Your inquiry has been received — we will respond within one business day.',
  }
}
