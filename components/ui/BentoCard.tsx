import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'

export type BentoCardProps = {
  icon: string
  title: string
  description: string
  href?: string
  ctaLabel?: string
  size?: 'sm' | 'lg'
  tone?: 'light' | 'navy' | 'gold-border'
  bullets?: string[]
  className?: string
}

export function BentoCard({
  icon,
  title,
  description,
  href,
  ctaLabel = 'Explore',
  size = 'sm',
  tone = 'light',
  bullets,
  className = '',
}: BentoCardProps) {
  const isLarge = size === 'lg'

  const toneClasses = {
    light: 'bg-surface-container-lowest border border-outline-variant/60 text-on-surface',
    navy: 'bg-brand-navy text-white border border-white/10',
    'gold-border': 'bg-surface-container-lowest border-2 border-brand-gold/40 text-on-surface',
  }[tone]

  const titleColor = tone === 'navy' ? 'text-white' : 'text-on-surface'
  const descColor = tone === 'navy' ? 'text-white/75' : 'text-on-surface-variant'

  const inner = (
    <article
      className={`card-hover rounded-xl p-6 md:p-8 h-full flex flex-col ${toneClasses} ${
        isLarge ? 'md:row-span-2' : ''
      } ${className}`}
    >
      <div className="mb-5">
        <Icon name={icon} variant={tone === 'navy' ? 'gold' : 'navy'} className="text-[52px]" />
      </div>
      <h3
        className={`font-heading ${
          isLarge ? 'text-headline-lg' : 'text-headline-md'
        } ${titleColor} mb-3`}
      >
        {title}
      </h3>
      <p className={`text-body-md ${descColor} ${bullets?.length ? 'mb-5' : 'mb-5 flex-1'}`}>
        {description}
      </p>

      {bullets && bullets.length > 0 && (
        <ul className={`space-y-2.5 ${isLarge ? 'mb-5' : 'mb-5 flex-1'}`}>
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span
                className={`material-symbols-outlined text-lg shrink-0 ${
                  tone === 'navy' ? 'text-brand-gold' : 'text-brand-gold'
                }`}
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className={`text-sm ${tone === 'navy' ? 'text-white/85' : 'text-on-surface'}`}>
                {b}
              </span>
            </li>
          ))}
        </ul>
      )}

      {href && (
        <span className="inline-flex items-center gap-2 text-brand-gold font-semibold text-label-lg link-underline w-fit mt-auto">
          {ctaLabel}
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </span>
      )}
    </article>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-xl"
      >
        {inner}
      </Link>
    )
  }
  return inner
}
