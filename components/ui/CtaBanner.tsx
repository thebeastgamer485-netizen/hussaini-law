import { Button } from './Button'
import { FIRM } from '@/lib/navigation'

type Props = {
  eyebrow?: string
  title?: string
  description?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function CtaBanner({
  eyebrow = 'Schedule a Confidential Consultation',
  title = 'Secure Your Legal Future',
  description = 'Your first consultation is complimentary. Let our expert specialists review your case in your language.',
  primaryHref = '/contact',
  primaryLabel = 'Request Free Case Review',
  secondaryHref = `tel:${FIRM.phoneTel}`,
  secondaryLabel = `Call ${FIRM.phone}`,
}: Props) {
  return (
    <section className="relative bg-primary text-white overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 texture-overlay opacity-50" aria-hidden="true" />
      <div className="orb bg-brand-gold/30 w-[500px] h-[500px] -top-40 -right-40" aria-hidden="true" />
      <div className="orb bg-primary-container w-[420px] h-[420px] -bottom-32 -left-32" aria-hidden="true" />
      <div className="container-page py-section-gap py-20 md:py-24 relative">
        <div className="max-w-3xl">
          <div className="text-label-sm uppercase tracking-[0.2em] text-brand-gold mb-4">
            {eyebrow}
          </div>
          <h2 id="cta-heading" className="font-heading text-headline-lg-mobile md:text-headline-xl text-white leading-tight">
            {title}
          </h2>
          <p className="mt-6 text-body-lg text-white/85 max-w-2xl">{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={primaryHref} icon="arrow_forward" size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="secondary" icon="call" iconPosition="left" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
