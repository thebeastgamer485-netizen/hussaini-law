import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FIRM } from '@/lib/navigation'
import { HOME_IMAGES } from '@/lib/content'

const TRUST = [
  'Law Society of NSW',
  '7 Years Experience',
  'Bilingual Service',
]

export function HeroHome() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden flex items-center min-h-[100svh] pt-28 pb-14 md:pb-16">
      <div className="orb bg-primary-container w-[320px] h-[320px] md:w-[520px] md:h-[520px] -top-32 -left-40" aria-hidden="true" />
      <div className="orb bg-secondary w-[360px] h-[360px] md:w-[600px] md:h-[600px] top-1/4 -right-40" aria-hidden="true" />
      <div className="orb bg-brand-gold/25 w-[240px] h-[240px] md:w-[360px] md:h-[360px] bottom-0 left-1/3" aria-hidden="true" />
      <div className="absolute inset-0 texture-overlay opacity-40" aria-hidden="true" />

      <div className="container-page relative w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 hero-stagger">
          <div className="text-label-sm uppercase tracking-[0.2em] text-brand-gold mb-4">
            Multicultural Legal Experts
          </div>

          <h1 className="font-heading text-[34px] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05] font-bold text-white tracking-tight">
            Advocacy for <span className="text-brand-gold">every community.</span>
          </h1>

          <div className="mt-6 text-brand-gold font-heading text-2xl md:text-3xl text-center" dir="rtl">
            {FIRM.farsiName}
          </div>

          <p className="mt-6 text-body-lg md:text-xl text-white/80 max-w-xl">
            Bilingual legal representation across New South Wales.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
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

          <ul className="mt-8 md:mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST.map((t) => (
              <li key={t} className="inline-flex items-center gap-2 text-sm text-white/70">
                <span className="material-symbols-outlined text-brand-gold text-lg" aria-hidden="true">
                  verified
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: Sydney legal office */}
        <div className="lg:col-span-5 hero-image-animate">
          <div className="relative mx-auto lg:ml-auto w-full max-w-sm lg:max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={HOME_IMAGES.hero}
              alt="Hussaini Law Group — Sydney legal office"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
