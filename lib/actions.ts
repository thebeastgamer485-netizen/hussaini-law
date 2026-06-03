'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Record<string, string>
}

const required = (v: FormDataEntryValue | null) =>
  typeof v === 'string' && v.trim().length > 0 ? v.trim() : ''

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContactForm(_prev: ContactState, formData: FormData): Promise<ContactState> {
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
    console.info('[contact] (no RESEND_API_KEY set) submission:', {
      name, phone, email, area, language, matter,
    })
  }

  return {
    status: 'success',
    message: 'Thank you. Your inquiry has been received — we will respond within one business day.',
  }
}
