import type { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import { Button } from '@/components/ui/Button'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { Reveal } from '@/components/ui/Reveal'
import { PRACTICE_AREAS, PRACTICE_IMAGES } from '@/lib/content'

const data = PRACTICE_AREAS['family-law']
const SITE = 'https://hussainilaw.com.au'
const PAGE_URL = `${SITE}/practice-areas/family-law`

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
    { '@type': 'ListItem', position: 2, name: 'Family Law', item: PAGE_URL },
  ],
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
  { icon: 'gavel', title: 'Divorce & Separation', body: 'Strategic advice for complex marriage dissolutions, ensuring your rights and assets are protected through every stage.' },
  { icon: 'real_estate_agent', title: 'Property Settlement', body: 'Meticulous handling of asset division, including business interests, real estate, and superannuation portfolios.' },
  { icon: 'family_restroom', title: 'Parenting Orders', body: 'Prioritizing the best interests of children through sensitive negotiation and firm representation in custody matters.' },
  { icon: 'child_care', title: 'Child Support', body: "Navigating financial obligations to ensure fair and sustainable outcomes for the children's well-being." },
  { icon: 'security', title: 'Intervention Orders', body: 'Immediate legal protection and advocacy for domestic violence matters and personal safety intervention orders.' },
  { icon: 'diversity_3', title: 'De Facto Relationships', body: 'Expert guidance on the legal standing and rights of partners in unregistered domestic relationships.' },
]

export default function FamilyLawPage() {
  return (
    <>
      <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-deep-navy pt-20">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/60 to-transparent z-10" />
          <Image src={PRACTICE_IMAGES.familyHero} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-20 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-2xl hero-stagger">
            <span className="inline-block px-3 py-1 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold font-label-sm text-label-sm mb-6 rounded">
              Family Law Excellence
            </span>
            <h1 className="font-headline-xl text-4xl md:text-headline-xl text-white mb-6 leading-tight">
              Compassionate Advocacy for Family Matters.
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 mb-10 max-w-lg">
              Navigating the complexities of domestic relationships with the sensitivity and expertise your family
              deserves. We protect your future through unwavering dedication.
            </p>
            <Button href="/contact" size="lg" icon="arrow_forward">Request Private Consultation</Button>
          </div>
        </div>
      </section>

      {/* Bento grid — 6 equal cards */}
      <Reveal>
      <section className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Family Law Expertise</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {SERVICES.map((s) => (
            <div key={s.title} className="bento-card bg-white p-8 border border-outline-variant/20 flex flex-col items-start group rounded-xl">
              <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">{s.title}</h3>
              <p className="text-on-surface-variant font-body-md mb-6">{s.body}</p>
              <span className="text-brand-gold font-label-lg text-label-lg mt-auto inline-flex items-center gap-1">
                Learn More <span className="material-symbols-outlined text-sm">chevron_right</span>
              </span>
            </div>
          ))}
        </div>
      </section>
      </Reveal>

      {/* Process — 4 steps with progress line */}
      <Reveal>
      <section className="bg-surface-container-low py-16 md:py-28">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-gold font-label-sm text-label-sm uppercase tracking-widest block mb-2">Our Workflow</span>
              <h2 className="font-headline-lg text-headline-lg text-primary">A Measured Approach to Resolution</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              We follow a structured, empathetic process to ensure no detail is overlooked while minimizing the emotional
              strain on your family.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
            <div className="hidden md:block absolute top-5 left-0 w-full h-px bg-outline-variant/30 z-0" />
            {data.process!.steps.map((s, i) => (
              <div key={s.title} className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-6">
                  {i + 1}
                </div>
                <h3 className="font-headline-md text-headline-md mb-2 text-primary">{s.title}</h3>
                <p className="text-on-surface-variant font-body-md">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
      <section className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant">Clarifying the legal landscape of family law in Australia.</p>
        </div>
        <FaqAccordion items={data.faqs!} />
      </section>
      </Reveal>

      {/* CTA */}
      <Reveal direction="scale">
      <section className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-max-width mx-auto bg-primary rounded-xl overflow-hidden relative shadow-2xl">
          <div className="relative z-10 p-12 md:p-20 text-center">
            <h2 className="font-headline-xl text-headline-xl text-white mb-6">Begin Your Path to Resolution</h2>
            <p className="text-white/80 font-body-lg text-body-lg max-w-2xl mx-auto mb-10">
              Our Family Law specialists are ready to provide the clarity and support you need. Book a confidential
              consultation today to discuss your circumstances.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href="/contact" size="lg" icon="calendar_month" iconPosition="left">Book Online Now</Button>
              <Button href="/contact" variant="secondary" size="lg" icon="call" iconPosition="left">Call Our Office</Button>
            </div>
          </div>
        </div>
      </section>
      </Reveal>
    </>
  )
}
