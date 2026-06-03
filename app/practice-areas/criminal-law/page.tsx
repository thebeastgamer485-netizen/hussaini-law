import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { PRACTICE_AREAS, PRACTICE_IMAGES } from '@/lib/content'
import { FIRM } from '@/lib/navigation'

const data = PRACTICE_AREAS['criminal-law']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
}

export const revalidate = 300

const MEDIUM = [
  { icon: 'directions_car', title: 'Traffic Offences', body: 'Protecting your license and livelihood from drink driving and other major traffic charges.' },
  { icon: 'sports_kabaddi', title: 'Assault', body: 'Robust defense against common assault, GBH, and other person-to-person charges.' },
  { icon: 'medication', title: 'Drug Offences', body: 'Handling possession, supply, and manufacture charges with meticulous strategy.' },
  { icon: 'payments', title: 'Fraud', body: 'Defense against white-collar crime, financial fraud, and embezzlement allegations.' },
]

const WIDE = [
  { icon: 'history', title: 'Appeals', body: 'Challenging convictions and severity of sentences in higher jurisdictions.' },
  { icon: 'home_pin', title: 'Domestic Violence', body: 'Navigating ADVOs and related charges with sensitivity and firm legal footing.' },
]

const TRUST = [
  { icon: 'balance', label: 'Law Society of NSW Member' },
  { icon: 'gavel', label: 'Experienced Court Advocates' },
  { icon: 'verified_user', label: 'Trusted Counsel Since 2004' },
]

export default function CriminalLawPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <Image src={PRACTICE_IMAGES.criminalHero} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="relative z-10 container-page w-full grid md:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30 font-label-sm text-label-sm rounded-full">
              Practice Area: Criminal Law
            </span>
            <h1 className="font-headline-xl text-4xl md:text-headline-xl text-on-primary leading-tight">
              Criminal Defense &amp; Court Representation
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/80 max-w-lg">
              Protecting your rights and delivering expert legal advocacy when it matters most. We stand by you through
              every stage of the legal process.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="/contact" size="lg">Book Case Evaluation</Button>
              <Button href="/contact" variant="secondary" size="lg">Speak to Our Team</Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-gold/20 blur-3xl rounded-full group-hover:bg-brand-gold/30 transition-all" />
              <div className="relative w-80 h-[480px] rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl">
                <Image
                  src={PRACTICE_IMAGES.criminalPortrait}
                  alt="Criminal defence lead counsel at Hussaini Law Group"
                  fill
                  priority
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-surface-container py-12">
        <div className="container-page flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {t.icon}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sub-services bento grid */}
      <section className="py-section-gap py-20 md:py-28 container-page">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-primary">Specialized Legal Defense</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Our expertise spans the full spectrum of criminal law. We provide strategic defense for cases of all
            complexities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Large card */}
          <div className="md:col-span-2 md:row-span-2 p-10 bg-primary text-on-primary rounded-xl flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-[160px]">account_balance</span>
            </div>
            <div>
              <span className="material-symbols-outlined text-brand-gold text-5xl mb-6">cases</span>
              <h3 className="font-headline-md text-headline-md mb-4">Court Representation</h3>
              <p className="font-body-md text-on-primary/70 mb-8">
                Professional advocacy in all NSW courts, from the Local Court to the Supreme Court and beyond. We prepare
                every case as if it were going to trial.
              </p>
            </div>
            <ul className="space-y-3 font-body-md relative">
              {['Bail Applications & Variations', 'Sentencing Hearings', 'Jury Trials & Defended Hearings'].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-fixed text-base">check_circle</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Medium glass cards */}
          {MEDIUM.map((c) => (
            <div
              key={c.title}
              className="p-8 glass-card rounded-xl border-l-4 border-primary hover:shadow-xl transition-all group"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:rotate-12 transition-transform">
                {c.icon}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">{c.title}</h3>
              <p className="font-body-md text-on-surface-variant">{c.body}</p>
            </div>
          ))}

          {/* Wide cards */}
          {WIDE.map((c) => (
            <div
              key={c.title}
              className="p-8 glass-card rounded-xl flex items-center gap-6 md:col-span-2 group hover:bg-surface-container transition-colors"
            >
              <div className="p-4 bg-primary/10 rounded-full text-primary">
                <span className="material-symbols-outlined text-3xl">{c.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md text-primary">{c.title}</h3>
                <p className="font-body-md text-on-surface-variant">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process — navy with big faded numbers */}
      <section className="bg-primary py-section-gap py-20 md:py-28 relative overflow-hidden">
        <div className="container-page relative z-10 grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="font-label-sm text-label-sm text-brand-gold block mb-2 uppercase tracking-widest">
              The Methodology
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary">Our Rigorous Advocacy Process</h2>
            <p className="font-body-md text-on-primary/60">
              How we prepare, protect, and prevail for our clients in the criminal justice system.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-8">
            {data.process!.steps.map((s, i) => (
              <div key={s.title} className="relative group">
                <div className="text-8xl font-bold text-on-primary/5 absolute -top-8 -left-4 font-heading">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative pt-4">
                  <h3 className="font-headline-md text-headline-md text-on-primary mb-3">{s.title}</h3>
                  <p className="font-body-md text-on-primary/70">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section-gap py-20 md:py-28 container-page max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Frequently Asked Questions</h2>
          <p className="font-body-md text-on-surface-variant">
            General guidance on the criminal justice system in New South Wales.
          </p>
        </div>
        <FaqAccordion items={data.faqs!} />
      </section>

      {/* CTA */}
      <section className="container-page mb-20 md:mb-28">
        <div className="bg-tertiary rounded-2xl p-12 md:p-20 relative overflow-hidden text-center flex flex-col items-center">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline-xl text-headline-xl text-on-tertiary-container mb-6">
              Secure Your Future with Expert Defense
            </h2>
            <p className="font-body-lg text-body-lg text-on-tertiary-container/80 mb-10">
              Don&apos;t face the criminal justice system alone. Our experienced advocates are ready to protect your
              interests and fight for the best possible outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" icon="arrow_forward">Book a Confidential Consultation</Button>
              <Button href={`tel:${FIRM.phoneTel}`} variant="secondary" size="lg" icon="call" iconPosition="left">
                Call {FIRM.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
