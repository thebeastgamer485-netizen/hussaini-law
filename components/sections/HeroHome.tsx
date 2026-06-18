import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { FIRM } from '@/lib/navigation'
import { HOME_IMAGES } from '@/lib/content'

export function HeroHome() {
  return (
    <section
      className="relative bg-brand-navy text-white overflow-hidden pt-32 md:pt-36 pb-20 md:pb-28"
      style={{ minHeight: '85vh' }}
    >
      <div className="orb bg-primary-container w-[520px] h-[520px] -top-32 -left-40" aria-hidden="true" />
      <div className="orb bg-secondary w-[600px] h-[600px] top-1/4 -right-40" aria-hidden="true" />
      <div className="orb bg-brand-gold/25 w-[360px] h-[360px] bottom-0 left-1/3" aria-hidden="true" />
      <div className="absolute inset-0 texture-overlay opacity-40" aria-hidden="true" />

      <div className="container-page relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 hero-stagger">
          <div className="text-label-sm uppercase tracking-[0.2em] text-brand-gold mb-4">
            Imperial Juris &amp; Multicultural Excellence
          </div>

          <h1 className="font-heading text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05] font-bold text-white tracking-tight">
            Advocacy for{' '}
            <span className="italic text-brand-gold">Every Community</span>
          </h1>

          {/* Multilingual strip */}
          <div className="mt-6 inline-flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-y border-white/10 px-1 py-3">
            <div className="text-brand-gold font-heading text-xl md:text-2xl" dir="rtl">
              {FIRM.farsiName}
            </div>
            <div className="hidden sm:block text-brand-gold/80" aria-hidden="true">
              •
            </div>
            <div className="text-brand-gold font-heading text-xl md:text-2xl" dir="rtl">
              {FIRM.arabicName}
            </div>
          </div>

          <p className="mt-6 text-body-lg md:text-xl text-white/80 max-w-2xl">
            Rooted in Fairfield and serving Greater Sydney with sophisticated multicultural expertise. We bridge cultural
            understanding and legal excellence to protect your future.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
        </div>

        {/* Right column: hero image with floating trust badge */}
        <div className="lg:col-span-5 relative hero-image-animate">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={HOME_IMAGES.hero}
              alt="Hussaini Law Group — Sydney legal office"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
          </div>

          <div className="hero-badge-animate absolute -left-4 md:-left-6 -bottom-6 bg-white text-on-surface rounded-xl shadow-2xl p-5 max-w-[260px]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-sm bg-brand-gold/15 flex items-center justify-center">
                <span className="material-symbols-outlined text-brand-gold text-2xl">verified</span>
              </div>
              <div>
                <div className="font-heading font-semibold leading-tight text-2xl text-primary">
                  <AnimatedCounter target={15} suffix="+" />
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-wider">Years</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-outline-variant text-xs text-on-surface-variant uppercase tracking-wider leading-tight">
              of Accredited Multicultural Advocacy
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
