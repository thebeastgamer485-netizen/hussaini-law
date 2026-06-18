import type { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import { Button } from '@/components/ui/Button'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { PRACTICE_AREAS, PRACTICE_IMAGES } from '@/lib/content'
import { Reveal } from '@/components/ui/Reveal'
import { BLUR_DATA_URL, BLUR_DATA_URL_LIGHT } from '@/lib/images'

const data = PRACTICE_AREAS['immigration-law']
const SITE = 'https://hussainilaw.com.au'
const PAGE_URL = `${SITE}/practice-areas/immigration-law`

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
    { '@type': 'ListItem', position: 2, name: 'Immigration Law', item: PAGE_URL },
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

const CARDS = [
  { icon: 'family_history', title: 'Partner & Family', body: 'Securing visas for spouses, de facto partners, and family members with a focus on genuine relationship evidentiary standards.', bullets: ['Spouse / Partner Visas', 'Parent & Child Visas'] },
  { icon: 'work', title: 'Skilled Migration', body: 'Expert navigation of points-based systems and employer-sponsored streams for professionals and trade specialists.', bullets: ['Subclass 189 / 190 / 491', 'Employer Sponsorship (482 / 186)'] },
  { icon: 'account_balance', title: 'Business & Investor', body: 'High-level advisory for high-net-worth individuals seeking significant investment or business innovation visas.', bullets: ['Significant Investor (188C)', 'Business Innovation (188A)'] },
  { icon: 'gavel', title: 'Appeals & Merits', body: 'Representation at the Administrative Appeals Tribunal (AAT) for visa cancellations or refusals.', bullets: ['AAT Review Representation', 'Judicial Review Liaison'] },
]

const AUDIENCE = [
  { icon: 'corporate_fare', title: 'Multinational Corporations', body: 'Ensuring seamless talent transfer and regulatory compliance for international workforces.' },
  { icon: 'person_pin', title: 'Private Clients', body: 'Bespoke migration strategies for high-net-worth individuals and their families.' },
  { icon: 'school', title: 'Specialist Talent', body: 'Researchers, athletes, and artists seeking distinguished talent visas.' },
]

const WHY = [
  { icon: 'verified_user', title: 'MARA Accredited Excellence', body: 'Our practitioners are fully accredited and strictly adhere to the MARA Code of Conduct for Migration Agents.' },
  { icon: 'balance', title: 'Heritage of Advocacy', body: 'We bring the weight of a multi-disciplinary firm to your case, looking beyond migration to your commercial or family law needs.' },
  { icon: 'location_on', title: 'Sydney Expertise, Global Reach', body: 'Deep local knowledge of Australian immigration policy with a sophisticated understanding of international jurisdictions.' },
]

export default function ImmigrationLawPage() {
  return (
    <>
      <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image src={PRACTICE_IMAGES.immigrationHero} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile hero-stagger">
          <span className="font-label-sm text-secondary-fixed tracking-widest uppercase mb-4 block">
            Specialised Legal Services
          </span>
          <h1 className="font-display-lg text-3xl sm:text-4xl md:text-display-lg text-on-primary mb-6">Immigration Law</h1>
          <p className="font-body-lg text-on-primary/90 max-w-2xl mx-auto">
            Navigating the complexities of global mobility with precision, heritage, and unwavering advocacy for your
            future in Australia.
          </p>
        </div>
      </section>

      {/* Service messaging + bento */}
      <Reveal>
      <section className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline-xl text-headline-xl text-primary mb-8">
              Strategic Pathways to Your <span className="italic text-primary-container">Aspiration</span>
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-8">
              At Hussaini Law Group, we understand that migration is more than a legal process; it is a life-defining
              transition. Our Sydney-based team provides elite advisory services for high-stakes immigration matters,
              ensuring every detail of your application is meticulously crafted.
            </p>
            <div className="p-8 border-l-2 border-primary-container bg-surface-container-low italic text-on-surface-variant font-body-md">
              &ldquo;Precision in documentation is the bridge between uncertainty and a successful migration outcome.&rdquo;
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {CARDS.map((c) => (
              <div key={c.title} className="bg-white p-8 border border-outline-variant/30 hover:border-primary transition-colors rounded-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {c.icon}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">{c.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-4">{c.body}</p>
                <ul className="space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 font-label-sm text-on-surface uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Who We Advocate For + Process — navy */}
      <Reveal>
      <section className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary">
        <div className="max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            <div className="relative">
              <div className="relative aspect-square overflow-hidden border-2 border-secondary-fixed/30 rounded-xl">
                <Image src={PRACTICE_IMAGES.immigrationAudience} alt="A diverse professional group in a modern boardroom" fill sizes="(max-width:1024px) 100vw, 45vw" placeholder="blur" blurDataURL={BLUR_DATA_URL} className="object-cover grayscale opacity-80" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-secondary-fixed p-8 lg:p-10 hidden lg:block rounded-xl">
                <div className="text-on-secondary-fixed font-headline-lg text-headline-lg">20+ Years</div>
                <div className="text-on-secondary-fixed font-label-sm uppercase tracking-widest">Combined Expertise</div>
              </div>
            </div>
            <div>
              <h2 className="font-headline-xl text-headline-xl mb-8">Who We Advocate For</h2>
              <div className="space-y-6">
                {AUDIENCE.map((a) => (
                  <div key={a.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary-fixed mt-1">{a.icon}</span>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-secondary-fixed">{a.title}</h3>
                      <p className="text-on-primary/70">{a.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-headline-xl text-headline-xl mb-4">Our Methodical Process</h2>
            <div className="w-24 h-1 bg-secondary-fixed mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-secondary-fixed/30 z-0" />
            {data.process!.steps.map((s, i) => (
              <div key={s.title} className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-full bg-primary-container border-2 border-secondary-fixed flex items-center justify-center mx-auto mb-6">
                  <span className="text-secondary-fixed font-headline-lg text-headline-lg">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-2">{s.title}</h3>
                <p className="text-on-primary/60 px-4">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Why Choose */}
      <Reveal>
      <section className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop bg-surface-container">
        <div className="max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-primary mb-8">Why Global Citizens Choose Hussaini Law</h2>
            <ul className="space-y-6">
              {WHY.map((w) => (
                <li key={w.title} className="flex gap-4 p-8 bg-white border border-outline-variant/30 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">{w.icon}</span>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary">{w.title}</h3>
                    <p className="text-on-surface-variant font-body-md">{w.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[350px] md:h-[600px] overflow-hidden rounded-xl">
            <Image src={PRACTICE_IMAGES.immigrationWhy} alt="A luxury law firm lobby with city views" fill sizes="(max-width:1024px) 100vw, 45vw" placeholder="blur" blurDataURL={BLUR_DATA_URL_LIGHT} className="object-cover" />
          </div>
        </div>
      </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
      <section className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-xl text-headline-xl text-primary text-center mb-10">Frequently Asked Questions</h2>
          <FaqAccordion items={data.faqs!} />
        </div>
      </section>
      </Reveal>

      {/* CTA */}
      <Reveal direction="scale">
      <section className="py-16 md:py-28 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-max-width mx-auto bg-primary-container p-8 md:p-16 relative overflow-hidden text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline-xl text-headline-xl text-on-primary mb-6">Begin Your Australian Journey</h2>
            <p className="font-body-lg text-on-primary/80 mb-8">
              Connect with our specialized immigration lawyers for a confidential and thorough assessment of your visa
              options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">Schedule Consultation</Button>
              <Button href="/contact" variant="secondary" size="lg">Contact Firm</Button>
            </div>
          </div>
        </div>
      </section>
      </Reveal>
    </>
  )
}
