import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  className = '',
}: Props) {
  const isCenter = align === 'center'
  const isDark = tone === 'dark'
  return (
    <div
      className={`${isCenter ? 'text-center mx-auto' : ''} ${isCenter ? 'max-w-3xl' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`text-label-sm uppercase tracking-[0.2em] mb-3 ${
            isDark ? 'text-brand-gold' : 'text-tertiary-container'
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-heading text-headline-lg-mobile md:text-headline-xl ${
          isDark ? 'text-white' : 'text-on-surface'
        } leading-tight`}
      >
        {title}
      </h2>
      <div
        className={`h-1 w-16 bg-brand-gold mt-5 ${isCenter ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      {intro && (
        <p
          className={`mt-6 text-body-lg ${
            isDark ? 'text-white/75' : 'text-on-surface-variant'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
