import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TEAM_PRINCIPAL } from '@/lib/content'
import { BLUR_DATA_URL_LIGHT } from '@/lib/images'

export type Principal = {
  name: string
  title: string
  bio: string[]
  imageSrc: string
  credentials: string[]
}

const DEFAULT_PRINCIPAL: Principal = TEAM_PRINCIPAL

export function PrincipalProfile({ principal = DEFAULT_PRINCIPAL }: { principal?: Principal }) {
  return (
    <section id="principal" className="bg-surface" aria-labelledby="principal-heading">
      <div className="container-page py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-outline-variant/40">
            <Image
              src={principal.imageSrc}
              alt={`Portrait of ${principal.name}, ${principal.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL_LIGHT}
              className="object-cover img-grayscale-hover"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {principal.credentials.map((c) => (
              <div
                key={c}
                className="bg-surface-container-lowest border border-outline-variant rounded-sm px-4 py-3 text-xs font-semibold text-on-surface-variant flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-brand-gold text-base">verified</span>
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <SectionHeading
            eyebrow="Leadership & Expertise"
            title={
              <>
                <span id="principal-heading">{principal.name}</span>
                <span className="block text-tertiary mt-2 text-2xl md:text-3xl font-heading">
                  {principal.title}
                </span>
              </>
            }
          />
          <div className="mt-8 space-y-5 text-body-lg text-on-surface-variant max-w-2xl">
            {principal.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" icon="event_available" iconPosition="left">
              Request a Consultation
            </Button>
            <Button href="#practice-areas" variant="ghost">
              See practice areas →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
