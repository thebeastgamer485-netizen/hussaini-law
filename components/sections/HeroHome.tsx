import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FIRM } from '@/lib/navigation'
import { HOME_IMAGES } from '@/lib/content'

const TRUST = [
  'Law Society of NSW',
  'Years of Experience',
  'Dari & English Spoken',
]

export function HeroHome() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-14 md:pb-16 text-white">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HOME_IMAGES.hero}
          alt="Hussaini Law Group — Sydney legal office"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-brand-navy/50" />
      </div>
      <div className="absolute inset-0 texture-overlay opacity-20 z-0" aria-hidden="true" />

      <div className="container-page relative z-10 w-full">
        <div className="hero-stagger mx-auto max-w-3xl text-center">
          <div className="text-label-sm uppercase tracking-[0.2em] text-brand-gold mb-4">
            Multicultural Legal Experts
          </div>

          <h1 className="font-heading text-[34px] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05] font-bold text-white tracking-tight">
            Advocacy for <span className="text-brand-gold">every community.</span>
          </h1>

          <div className="mt-6 text-brand-gold font-heading text-2xl md:text-3xl" dir="rtl">
            {FIRM.farsiName}
          </div>

          <p className="mt-6 text-body-lg md:text-xl text-white/85 max-w-xl mx-auto">
            Bilingual legal representation across New South Wales.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" icon="arrow_forward" size="lg">
              Free Case Review
            </Button>
            <Button
              href={`tel:${FIRM.phoneTel}`}
              variant="secondary"
              icon="call"
              iconPosition="left"
              size="lg"
            >
              Call {FIRM.phone}
            </Button>
          </div>

          <ul className="mt-8 md:mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {TRUST.map((t) => (
              <li key={t} className="inline-flex items-center gap-2 text-sm text-white/80">
                <span className="material-symbols-outlined text-brand-gold text-lg" aria-hidden="true">
                  verified
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
