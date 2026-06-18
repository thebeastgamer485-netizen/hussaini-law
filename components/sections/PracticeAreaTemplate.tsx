import { HeroSubpage } from './HeroSubpage'
import { FeatureSplit } from './FeatureSplit'
import { TrustBar } from '@/components/ui/TrustBar'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BentoCard } from '@/components/ui/BentoCard'
import { ProcessSteps } from '@/components/ui/ProcessSteps'
import { FaqAccordion } from '@/components/ui/FaqAccordion'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { Spotlight } from '@/components/ui/Spotlight'
import { Reveal } from '@/components/ui/Reveal'
import type { PracticeAreaContent } from '@/lib/content'

export function PracticeAreaTemplate({ data }: { data: PracticeAreaContent }) {
  return (
    <>
      <HeroSubpage
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        imageSrc={data.heroImage}
        imageAlt={`${data.eyebrow} illustration`}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Practice Areas', href: '/#practice-areas' },
          { label: data.eyebrow },
        ]}
      />
      <TrustBar />

      <section id="services" className="bg-surface" aria-labelledby="services-heading">
        <div className="container-page py-16 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={data.servicesEyebrow}
              title={<span id="services-heading">{data.servicesTitle}</span>}
              intro={data.servicesIntro}
            />
            {data.spotlight && <Spotlight data={data.spotlight} />}
          </Reveal>
          <Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 md:auto-rows-fr">
              {data.services.map((s) => (
                <BentoCard
                  key={s.title}
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  bullets={s.bullets}
                  size={s.large ? 'lg' : 'sm'}
                  tone={s.large ? 'gold-border' : 'light'}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {data.audienceSection && <FeatureSplit data={data.audienceSection} />}

      {data.process && (
        <section className="bg-surface-container-low" aria-labelledby="process-heading">
          <div className="container-page py-16 md:py-28">
            <Reveal>
              <SectionHeading
                eyebrow={data.process.eyebrow}
                title={<span id="process-heading">{data.process.title}</span>}
                intro={data.process.intro}
              />
            </Reveal>
            <Reveal>
              <div className="mt-14">
                <ProcessSteps steps={data.process.steps} />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {data.whyUsSection && <FeatureSplit data={data.whyUsSection} />}

      {data.faqs && data.faqs.length > 0 && (
        <section className="bg-surface" aria-labelledby="faq-heading">
          <div className="container-page py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Frequently Asked"
                title={<span id="faq-heading">Clear answers, in plain English.</span>}
                intro="Have a more specific question? Send it through our contact form — the principal answers personally."
              />
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={data.faqs} />
            </div>
          </div>
        </section>
      )}

      <CtaBanner title={data.cta.title} description={data.cta.description} />
    </>
  )
}
