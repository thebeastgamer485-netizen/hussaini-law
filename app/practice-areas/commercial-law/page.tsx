import type { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import { Button } from '@/components/ui/Button'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { PRACTICE_AREAS, PRACTICE_IMAGES } from '@/lib/content'
import { FIRM } from '@/lib/navigation'
import { Reveal } from '@/components/ui/Reveal'
import { BLUR_DATA_URL_LIGHT } from '@/lib/images'

const data = PRACTICE_AREAS['commercial-law']
const SITE = 'https://hussainilaw.com.au'
const PAGE_URL = `${SITE}/practice-areas/commercial-law`

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
}

export const revalidate = 300

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Commercial Law', item: PAGE_URL },
  ],
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Commercial Law',
  serviceType: 'Commercial and business law',
  url: PAGE_URL,
  description:
    'Commercial law — business structuring, contracts, shareholder agreements, sale of business, debt recovery and disputes — in English and Dari.',
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

const SERVICES = [
  { icon: 'business_center', title: 'Business Structuring', body: 'Strategic optimisation of entity frameworks to ensure tax efficiency, operational fluidity, and robust liability protection for emerging and established enterprises.', dark: false },
  { icon: 'contract_edit', title: 'Complex Contracts', body: 'Drafting and negotiating bulletproof commercial agreements that safeguard your interests while facilitating seamless cross-border and domestic transactions.', dark: true },
  { icon: 'groups', title: 'Shareholder Agreements', body: 'Defining clear governance structures and dispute resolution mechanisms to align stakeholder interests and ensure long-term corporate stability.', dark: false },
  { icon: 'shopping_cart_checkout', title: 'Business Sale & Purchase', body: 'Meticulous due diligence and transaction management for mergers, acquisitions, and asset transfers to maximise value and minimise risk.', dark: false },
  { icon: 'gavel', title: 'Dispute Resolution', body: 'Aggressive advocacy and strategic mediation to resolve high-stakes commercial conflicts with a focus on protecting your corporate reputation and bottom line.', dark: false },
  { icon: 'account_balance_wallet', title: 'Debt Recovery', body: 'Persistent and professional recovery strategies designed to restore cash flow through sophisticated legal channels and negotiation tactics.', dark: false },
]

const ADVANTAGE = [
  { icon: 'verified', title: 'Decades of Specialisation', body: 'Deep-rooted experience in navigating the regulatory hurdles of global and local trade.' },
  { icon: 'shield_with_heart', title: 'Integrity-First Approach', body: 'A commitment to the highest ethical standards, ensuring your reputation remains untarnished.' },
  { icon: 'psychology', title: 'Strategic Foresight', body: "We don't just solve problems; we anticipate them through rigorous risk assessment models." },
]

export default function CommercialLawPage() {
  return (
    <>
      <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      {faqLd && <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-deep-navy/60 z-10" />
          <Image src={PRACTICE_IMAGES.commercialHero} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="relative z-20 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl text-on-primary hero-stagger">
            <span className="inline-block py-1 px-3 border border-brand-gold text-brand-gold font-label-sm uppercase tracking-widest mb-6">
              Commercial &amp; Corporate Law
            </span>
            <h1 className="font-headline-xl text-4xl md:text-headline-xl mb-6 leading-tight">
              Commercial Lawyers in Fairfield &amp; Sydney
            </h1>
            <p className="mb-6 text-label-sm uppercase tracking-widest text-brand-gold font-semibold">
              Bilingual service — English · Dari
            </p>
            <p className="font-body-lg text-body-lg text-on-primary/90 mb-10 border-l-4 border-brand-gold pl-6">
              Navigating the complexities of the corporate landscape requires more than just legal advice — it requires a
              strategic partnership built on precision and institutional excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">Expert Consultation</Button>
              <Button href="#services" variant="secondary" size="lg">Explore Services</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <Reveal>
      <section id="services" className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Core Corporate Expertise</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className={`p-10 border gold-border-glow group rounded-xl ${
                  s.dark ? 'bg-deep-navy border-brand-gold/30' : 'bg-surface-container border-outline/10'
                }`}
              >
                <div className="mb-6">
                  <span className="material-symbols-outlined text-4xl text-brand-gold">{s.icon}</span>
                </div>
                <h3 className={`font-headline-md text-headline-md mb-4 group-hover:text-brand-gold transition-colors ${s.dark ? 'text-on-primary' : 'text-primary'}`}>
                  {s.title}
                </h3>
                <p className={`font-body-md ${s.dark ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* The Hussaini Advantage */}
      <Reveal>
      <section className="py-16 md:py-28 bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-gold z-10" />
            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden shadow-2xl">
              <Image src={PRACTICE_IMAGES.commercialWhy} alt="A distinguished senior partner in a mahogany-paneled law library" fill sizes="(max-width:1024px) 100vw, 50vw" placeholder="blur" blurDataURL={BLUR_DATA_URL_LIGHT} className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold z-10" />
          </div>
          <div className="lg:w-1/2">
            <span className="text-brand-gold font-label-sm uppercase tracking-widest mb-4 block">The Hussaini Advantage</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Unwavering Excellence in Corporate Advocacy.</h2>
            <ul className="space-y-6">
              {ADVANTAGE.map((a) => (
                <li key={a.title} className="flex gap-4">
                  <span className="material-symbols-outlined text-brand-gold">{a.icon}</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1 font-heading">{a.title}</h4>
                    <p className="text-on-surface-variant">{a.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
      <section className="py-16 md:py-28 max-w-3xl mx-auto px-margin-mobile">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary">Commercial Law FAQs</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Practical answers for founders and business owners in Fairfield and Greater Sydney.
          </p>
        </div>
        <FaqAccordion items={data.faqs!} />
      </section>
      </Reveal>

      {/* CTA — dotted pattern */}
      <Reveal direction="scale">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-deep-navy">
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C89B3C 1px, transparent 0)', backgroundSize: '40px 40px' }}
          />
        </div>
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-primary mb-6">Ready to Secure Your Business Future?</h2>
          <p className="text-on-primary/70 max-w-2xl mx-auto mb-10 text-body-lg">
            Connect with our senior partners today for a comprehensive evaluation of your commercial legal requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg" icon="arrow_forward">Schedule a Consultation</Button>
            <Button href={`tel:${FIRM.phoneTel}`} variant="secondary" size="lg" icon="call" iconPosition="left">
              Call Our Office
            </Button>
          </div>
        </div>
      </section>
      </Reveal>
    </>
  )
}
