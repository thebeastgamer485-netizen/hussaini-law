import { SectionHeading } from '@/components/ui/SectionHeading'

const FEATURES = [
  {
    icon: 'translate',
    title: 'Bilingual Proficiency',
    body: 'Professional services in English, Dari, Farsi, and Arabic, ensuring precision in every legal detail.',
  },
  {
    icon: 'balance',
    title: 'Justice Without Borders',
    body: 'We advocate for those who often feel unheard, navigating the complexities of the legal system with cultural insight.',
  },
]

export function WhyUsSection() {
  return (
    <section className="bg-brand-navy text-white relative overflow-hidden" aria-labelledby="why-heading">
      <div className="orb bg-primary-container w-[500px] h-[500px] -top-40 -left-32" aria-hidden="true" />
      <div className="orb bg-brand-gold/15 w-[400px] h-[400px] bottom-0 right-0" aria-hidden="true" />
      <div className="absolute inset-0 texture-overlay opacity-40" aria-hidden="true" />

      <div className="container-page py-section-gap py-20 md:py-28 relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            tone="dark"
            eyebrow="The Pillars of Our Practice"
            title={
              <>
                Why Communities
                <span className="block text-brand-gold">Choose Hussaini Law</span>
              </>
            }
          />
          <div className="mt-12 space-y-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary border border-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">{f.icon}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white">{f.title}</h3>
                  <p className="text-white/70 mt-1">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex">
          <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 my-auto w-full">
            <span
              className="material-symbols-outlined text-brand-gold text-5xl mb-6 block"
              aria-hidden="true"
            >
              format_quote
            </span>
            <blockquote className="font-heading text-2xl md:text-3xl text-white leading-snug italic">
              Justice is not a privilege for the few, but a right for every community. We stand at the bridge of
              cultural understanding and legal excellence.
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-brand-gold" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold">
                Our Founding Philosophy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
