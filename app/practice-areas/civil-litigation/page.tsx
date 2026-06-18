import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { PRACTICE_AREAS, PRACTICE_IMAGES } from '@/lib/content'
import { FIRM } from '@/lib/navigation'
import { BLUR_DATA_URL } from '@/lib/images'

const data = PRACTICE_AREAS['civil-litigation']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
}

export const revalidate = 300

const TOP = [
  { icon: 'account_balance_wallet', title: 'Debt Recovery', body: 'Persistent and strategic recovery of outstanding debts for corporations and individuals, leveraging statutory demands and court actions.' },
  { icon: 'gavel', title: 'Contract Disputes', body: 'Expert interpretation and enforcement of contractual obligations, resolving breaches with clinical precision and commercial foresight.' },
  { icon: 'person_search', title: 'Consumer Claims', body: 'Protecting consumer rights against unfair trade practices and misleading conduct under the Australian Consumer Law framework.' },
]

export default function CivilLitigationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image src={PRACTICE_IMAGES.civilHero} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 academic-overlay" />
        </div>
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-brand-gold font-label-sm text-label-sm uppercase tracking-widest mb-4">
              Civil Litigation Experts
            </span>
            <h1 className="font-headline-xl text-4xl md:text-headline-xl text-white mb-6 leading-tight">
              Rigorous Advocacy in <br />
              <span className="text-brand-gold">Civil Disputes</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 mb-10 max-w-xl">
              Navigating the complexities of the Australian legal system with unwavering precision. From high-stakes debt
              recovery to complex contract litigation, we protect your interests with scholarly authority.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">Initiate Your Claim</Button>
              <Button href="/contact" variant="secondary" size="lg">Request Case Review</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services bento */}
      <section className="py-section-gap py-20 md:py-28 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">Specialised Legal Focus</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOP.map((c) => (
            <div key={c.title} className="group bg-white p-8 border border-outline-variant/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden rounded-xl">
              <span className="material-symbols-outlined text-4xl text-deep-navy mb-6 block">{c.icon}</span>
              <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">{c.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{c.body}</p>
            </div>
          ))}

          {/* NCAT large dark card */}
          <div className="group bg-deep-navy p-8 md:col-span-2 flex flex-col md:flex-row gap-8 items-center border border-deep-navy shadow-lg rounded-xl">
            <div className="flex-1">
              <span className="material-symbols-outlined text-4xl text-brand-gold mb-6 block">balance</span>
              <h3 className="font-headline-md text-headline-md text-white mb-4">NCAT Applications</h3>
              <p className="font-body-md text-body-md text-white/80">
                Representation in the NSW Civil and Administrative Tribunal for tenancy, building disputes, and general
                division matters. We ensure your case is presented with technical excellence.
              </p>
            </div>
            <div className="w-full md:w-48">
              <Button href="/contact" variant="secondary" className="w-full justify-center">Learn More</Button>
            </div>
          </div>

          {/* Mediation */}
          <div className="group bg-white p-8 border border-outline-variant/30 hover:shadow-xl transition-all duration-500 rounded-xl">
            <span className="material-symbols-outlined text-4xl text-deep-navy mb-6 block">handshake</span>
            <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">Mediation</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Alternative dispute resolution strategies designed to achieve favorable outcomes without the protracted
              costs of a courtroom trial.
            </p>
          </div>
        </div>
      </section>

      {/* Litigation process — image + circle numbers */}
      <section className="bg-surface-container-low py-section-gap py-20 md:py-28">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[600px] shadow-2xl border-l-8 border-brand-gold overflow-hidden">
                <Image src={PRACTICE_IMAGES.civilProcess} alt="Fountain pen on a legal document" fill sizes="(max-width:768px) 100vw, 50vw" placeholder="blur" blurDataURL={BLUR_DATA_URL} className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-8">Our Litigation Process</h2>
              <div className="space-y-10">
                {data.process!.steps.map((s, i) => (
                  <div key={s.title} className="flex gap-6">
                    <span className="shrink-0 w-12 h-12 rounded-full border border-brand-gold text-brand-gold flex items-center justify-center font-headline-md">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">{s.title}</h3>
                      <p className="text-on-surface-variant">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — grid pattern */}
      <section className="relative py-24 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full w-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full" />
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-margin-mobile text-center">
          <h2 className="font-headline-xl text-headline-xl text-white mb-6">Resolve Your Dispute Today</h2>
          <p className="font-body-lg text-body-lg text-white/70 mb-10">
            Time is often of the essence in civil litigation. Secure your legal position with a confidential consultation
            with our lead counsel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button href="/contact" size="lg">Book Now</Button>
            <Button href={`tel:${FIRM.phoneTel}`} variant="secondary" size="lg" icon="call" iconPosition="left">
              Call {FIRM.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
