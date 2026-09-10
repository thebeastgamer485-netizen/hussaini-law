'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'
import { useFormState, useFormStatus } from 'react-dom'
import { Icon } from '@/components/ui/Icon'
import { submitContactForm, type ContactState } from '@/lib/actions'

// Set once the Cloudflare Turnstile site is created — see .env.local.example.
// The widget simply doesn't render until this is configured, so the form
// keeps working exactly as it does today in the meantime.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

const AREAS = [
  'Criminal Law',
  'Immigration Law',
  'Conveyancing',
  'Commercial Law',
  'Civil Litigation',
  'Other / Not sure',
]
const LANGUAGES = ['English', 'Dari']

const initialState: ContactState = { status: 'idle' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-semibold px-7 py-4 rounded-sm hover:bg-brand-gold/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending…' : 'Send Inquiry'}
      <span className="material-symbols-outlined text-lg">arrow_forward</span>
    </button>
  )
}

const fieldClass =
  'w-full rounded-sm border border-outline-variant bg-surface-container-lowest text-on-surface px-4 py-3 placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition'

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState)
  const renderedAtRef = useRef<HTMLInputElement>(null)

  // Timestamp the moment the form became interactive. Bots that submit
  // within a second or two of loading the page get caught by this
  // server-side — real people take longer to read and fill the form.
  useEffect(() => {
    if (renderedAtRef.current) renderedAtRef.current.value = String(Date.now())
  }, [])

  if (state.status === 'success') {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
        <div className="mx-auto mb-4 w-fit">
          <Icon name="check_circle" variant="gold" className="text-5xl" />
        </div>
        <h2 className="font-heading text-headline-md text-on-surface mb-2">Inquiry received</h2>
        <p className="text-body-md text-on-surface-variant max-w-md mx-auto">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.status === 'error' && state.message && (
        <div className="rounded-sm border border-error/30 bg-error/5 px-4 py-3 text-sm text-error" role="alert">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full name" name="name" autoComplete="name" required error={state.errors?.name} />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required error={state.errors?.phone} />
      </div>

      <Field label="Email" name="email" type="email" autoComplete="email" required error={state.errors?.email} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="area">Area of law</Label>
          <select id="area" name="area" required className={fieldClass}>
            <option value="">Select…</option>
            {AREAS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          <ErrorText>{state.errors?.area}</ErrorText>
        </div>
        <div>
          <Label htmlFor="language">Preferred language</Label>
          <select id="language" name="language" defaultValue="English" className={fieldClass}>
            {LANGUAGES.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="matter">Briefly describe your matter</Label>
        <textarea
          id="matter"
          name="matter"
          rows={5}
          required
          minLength={10}
          placeholder="Provide enough detail for us to triage your inquiry. Anything sensitive can wait for the consultation."
          className={fieldClass}
        />
        <ErrorText>{state.errors?.matter}</ErrorText>
      </div>

      {/* Honeypot — real users never see or fill this */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] w-1 h-1 opacity-0"
        aria-hidden="true"
      />
      {/* Set client-side on mount; lets the server reject instant bot submissions */}
      <input type="hidden" name="renderedAt" ref={renderedAtRef} />

      {TURNSTILE_SITE_KEY && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="afterInteractive" />
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="light" />
        </>
      )}

      <p className="text-xs text-on-surface-variant">
        By submitting you agree to be contacted by Hussaini Law Group regarding your matter. Submissions are confidential.
      </p>

      <SubmitButton />
    </form>
  )
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="block text-label-lg text-on-surface mb-1.5 font-semibold">
      {children}
    </label>
  )
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  required,
  error,
}: {
  label: string
  name: string
  type?: string
  autoComplete?: string
  required?: boolean
  error?: string
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={fieldClass}
      />
      <ErrorText>{error}</ErrorText>
    </div>
  )
}

function ErrorText({ children }: { children?: string }) {
  if (!children) return null
  return <p className="text-xs text-error mt-1.5">{children}</p>
}
