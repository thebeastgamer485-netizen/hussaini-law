import type { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import { Button } from '@/components/ui/Button'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { PRACTICE_AREAS, PRACTICE_IMAGES } from '@/lib/content'
import { Reveal } from '@/components/ui/Reveal'
import { BLUR_DATA_URL_LIGHT } from '@/lib/images'

const data = PRACTICE_AREAS['conveyancing']
const SITE = 'https://hussainilaw.com.au'
const PAGE_URL = `${SITE}/practice-areas/conveyancing`

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: PAGE_URL },
}

export const revalidate = 300

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Conveyancing', item: PAGE_URL },
  ],
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Conveyancing',
  serviceType: 'Property conveyancing',
  url: PAGE_URL,
  description:
    'Residential, off-the-plan and strata conveyancing and pre-signing contract review across NSW — in English and Dari.',
  provider: { '@id': `${SITE}/#legalservice` },
  areaServed: { '@type': 'AdministrativeArea', name: 'New South Wales' },
  availableLanguage: ['en', 'fa'],
}

const faqLd = data.faqs?.length
  ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    }
  : null

const SMALL = [
  { icon: 'sync_alt', title: 'Title Transfers', body: 'Streamlined transfers for family settlements, gifting, or corporate restructuring.' },
  { icon: 'account_balance', title: 'Refinancing', body: 'Liaising with financial institutions to secure your mortgage discharge and new registration.' },
  { icon: 'layers', title: 'Strata Title', body: 'Specialised advice on by-laws, levies, and management statement compliance.' },
]

export default function ConveyancingPage() {
  return (
    <>
      <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      {faqLd && <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      {/* Hero */}
      <header className="relative pt-28 pb-16 md:pt-48 md:pb-40 hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="space-y-8 hero-stagger">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary-fixed/30 bg-secondary-fixed/10 text-secondary-fixed">
              <span className="material-symbols-outlined text-[18px]">real_estate_agent</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Property Law Specialists</span>
            </div>
            <h1 className="font-headline-xl text-4xl md:text-headline-xl text-on-primary leading-tight">
              Conveyancing Solicitors in <span className="text-gradient-cta">Fairfield &amp; Sydney</span>
            </h1>
            <p className="text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
              Bilingual service — English · Dari
            </p>
            <p className="font-body-lg text-body-lg text-on-primary/80 max-w-xl">
              Hussaini Law Group provides distinguished legal counsel for your most significant assets. From first-time
              buyers to portfolio investors, we ensure your property transition is handled with meticulous precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="/contact" size="lg" icon="arrow_forward">Get Your Free Quote</Button>
              <Button href="/contact" variant="secondary" size="lg">Speak to a Solicitor</Button>
            </div>
          </div>
          <div className="hidden lg:block relative h-[500px] hero-image-animate">
            <div className="absolute top-0 right-0 w-4/5 h-full rounded-xl overflow-hidden shadow-2xl border border-on-primary/10">
              <Image src={PRACTICE_IMAGES.conveyancingHero} alt="Modern architectural interior" fill priority sizes="40vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 left-0 bg-surface p-8 rounded shadow-xl border border-outline/10 max-w-xs space-y-4">
              <div className="flex gap-1 text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                &ldquo;The most precise and reliable conveyancing team we&apos;ve ever worked with. Every detail was
                meticulously managed.&rdquo;
              </p>
              <div className="font-label-sm text-label-sm text-on-surface">— Dr. Alexander V., Property Developer</div>
            </div>
          </div>
        </div>
      </header>

      {/* Services bento */}
      <Reveal>
      <section className="py-16 md:py-28 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-primary">Specialised Property Services</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Comprehensive legal support tailored to the Australian property market, ensuring compliance, security, and
            peace of mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Large residential card */}
          <div className="md:col-span-2 group relative bg-white p-10 border border-outline/10 rounded-xl hover:shadow-2xl transition-all overflow-hidden">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="material-symbols-outlined text-primary text-[40px] mb-6 block">home</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Residential Purchase &amp; Sale</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-8">
                  Whether you&apos;re entering the market or liquidating an asset, our expert solicitors manage the entire
                  contract-to-settlement lifecycle with absolute rigor.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-on-surface font-body-md">
                {['Contract Review & Drafting', 'Auction Representation', 'Due Diligence & Searches', 'Stamp Duty Calculations'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand-gold text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-[300px] -rotate-12">receipt_long</span>
            </div>
          </div>

          {/* Dark off-the-plan card */}
          <div className="bg-primary text-on-primary p-10 rounded-xl border border-on-primary/10 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary-fixed text-[40px] mb-6 block">apartment</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-secondary-fixed">Off-the-Plan</h3>
              <p className="font-body-md text-body-md text-on-primary/70">
                Mitigating risks in complex pre-construction contracts. We protect your interests against sunset clauses
                and building variations.
              </p>
            </div>
          </div>

          {/* Small cards */}
          {SMALL.map((c) => (
            <div key={c.title} className="bg-white p-8 border border-outline/10 rounded-xl hover:border-primary/30 transition-all flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary text-[32px]">{c.icon}</span>
              <h3 className="font-headline-md text-headline-md text-primary">{c.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
      </Reveal>

      {/* Process — sticky sidebar + steps */}
      <Reveal>
      <section className="bg-surface-container py-16 md:py-28">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-28 space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-primary">Our Process</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We believe in clarity at every milestone. Our three-step framework ensures your transaction is transparent,
              legally sound, and completed on schedule.
            </p>
            <div className="pt-4 relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src={PRACTICE_IMAGES.conveyancingProcess} alt="Legal documents and fountain pen on a desk" fill sizes="(max-width:1024px) 100vw, 30vw" placeholder="blur" blurDataURL={BLUR_DATA_URL_LIGHT} className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-12">
            {data.process!.steps.map((s, i) => (
              <div key={s.title} className="flex gap-8 group">
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-md text-headline-md">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="space-y-4">
                  <h3 className="font-headline-md text-headline-md text-primary">{s.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{s.description}</p>
                  <div className="h-1 w-20 bg-brand-gold/30 rounded group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
      <section className="py-16 md:py-28 max-w-3xl mx-auto px-margin-mobile">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary">Property Law FAQs</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">Essential insights for your property journey.</p>
        </div>
        <FaqAccordion items={data.faqs!} />
      </section>
      </Reveal>

      {/* CTA */}
      <Reveal direction="scale">
      <section className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-max-width mx-auto bg-primary rounded-xl overflow-hidden relative shadow-2xl">
          <div className="relative z-10 p-12 md:p-20 text-center">
            <h2 className="font-headline-xl text-headline-xl text-white mb-6">{data.cta.title}</h2>
            <p className="text-white/80 font-body-lg text-body-lg max-w-2xl mx-auto mb-10">{data.cta.description}</p>
            <Button href="/contact" size="lg" icon="arrow_forward">Get Your Free Quote</Button>
          </div>
        </div>
      </section>
      </Reveal>
    </>
  )
}
