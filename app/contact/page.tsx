import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactForm } from '@/components/sections/ContactForm'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { FIRM } from '@/lib/navigation'
import { CONTACT_IMAGES } from '@/lib/content'
import { BLUR_DATA_URL } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Contact — Fairfield, Sydney',
  description:
    'Book a confidential consultation with Hussaini Law Group in Fairfield. Bilingual service in English, Dari, Pashto and Arabic. Call 02 8764 7885.',
}

const LANGUAGES = ['English', 'Dari', 'Pashto', 'Arabic']

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-white pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-40" aria-hidden="true" />
        <div className="orb bg-primary-container w-[420px] h-[420px] -top-20 -left-32" aria-hidden="true" />
        <div className="orb bg-brand-gold/25 w-[360px] h-[360px] bottom-0 right-0" aria-hidden="true" />
        <div className="container-page relative max-w-3xl hero-stagger">
          <div className="text-label-sm uppercase tracking-[0.2em] text-brand-gold mb-4">
            Get in Touch
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1] font-bold">
            Heritage. Precision. <span className="text-brand-gold">Advocacy.</span>
          </h1>
          <p className="mt-6 text-body-lg text-white/85 max-w-2xl">
            Dedicated legal experts providing sophisticated advocacy for complex matters. We are here to support your legal journey with clarity and commitment.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 border border-brand-gold/30 rounded-full bg-brand-gold/5">
            <span className="material-symbols-outlined text-brand-gold">translate</span>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold">
              We speak {LANGUAGES.join(', ')}
            </span>
          </div>
        </div>
      </section>

      {/* Form + contact details */}
      <section className="bg-surface" aria-labelledby="contact-heading">
        <div className="container-page py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-10">
              <SectionHeading
                eyebrow="Inquiry Form"
                title={<span id="contact-heading">Tell us about your matter.</span>}
                intro="Please complete every relevant field. The more context we have, the more useful our first reply will be."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="lg:col-span-5 space-y-6">
            <div className="bg-primary text-white rounded-2xl p-7 md:p-9 relative overflow-hidden">
              <div className="absolute inset-0 texture-overlay opacity-30" aria-hidden="true" />
              <h2 className="font-heading text-headline-md text-white relative">Contact details</h2>
              <ul className="mt-6 space-y-5 relative">
                <ContactRow icon="call" label="Office" value={FIRM.phone} href={`tel:${FIRM.phoneTel}`} />
                <ContactRow icon="smartphone" label="Mobile" value={FIRM.mobile} href={`tel:${FIRM.mobileTel}`} />
                <ContactRow icon="mail" label="Email" value={FIRM.email} href={`mailto:${FIRM.email}`} />
                <ContactRow icon="location_on" label="Office" value={FIRM.address} />
                <ContactRow icon="schedule" label="Hours" value={`${FIRM.hoursWeekday} · ${FIRM.hoursSaturday}`} />
              </ul>
            </div>

            <a
              href="https://www.google.com/maps?q=7%2F37+Spencer+Street+Fairfield+NSW+2165"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden border border-outline-variant shadow-sm h-[240px] md:h-[320px]"
              aria-label={`Open ${FIRM.address} in Google Maps`}
            >
              <Image
                src={CONTACT_IMAGES.map}
                alt="Aerial view of Fairfield, Sydney"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <span
                  className="material-symbols-outlined text-5xl text-brand-gold drop-shadow-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden="true"
                >
                  location_on
                </span>
                <div className="bg-primary text-white px-4 py-2 shadow-xl mt-1 text-center border border-brand-gold/50 rounded-sm">
                  <p className="text-sm font-bold">7/37 Spencer Street</p>
                  <p className="text-xs text-white/80">Fairfield NSW 2165</p>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Advocacy Across Borders banner */}
      <Reveal direction="scale">
        <section className="bg-surface-container-lowest border-y border-outline-variant">
          <div className="container-page py-16 md:py-24 text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-headline-lg md:text-headline-xl text-primary">
              Advocacy Across Borders
            </h2>
            <p className="mt-6 text-body-lg text-on-surface-variant">
              While based in Fairfield, we represent clients across New South Wales and internationally. Our multilingual
              capabilities ensure that your voice is heard and your rights are protected, regardless of linguistic
              barriers.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4 opacity-40">
              {['Sydney', 'Melbourne', 'Canberra', 'International Matters'].map((c) => (
                <span key={c} className="font-heading italic text-xl md:text-2xl text-primary">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string
  label: string
  value: string
  href?: string
}) {
  const inner = (
    <div className="flex gap-4">
      <div className="w-11 h-11 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-brand-gold text-xl">{icon}</span>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
        <div className="text-body-md text-white">{value}</div>
      </div>
    </div>
  )
  if (href) {
    return (
      <li>
        <a href={href} className="block hover:opacity-80 transition">
          {inner}
        </a>
      </li>
    )
  }
  return <li>{inner}</li>
}
