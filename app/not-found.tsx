import { Button } from '@/components/ui/Button'
import { practiceAreaLinks, FIRM } from '@/lib/navigation'

export default function NotFound() {
  return (
    <section className="relative bg-primary text-white pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 texture-overlay opacity-40" aria-hidden="true" />
      <div className="container-page relative z-10 text-center">
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-brand-gold mb-4">
          404 — Page Not Found
        </p>
        <h1 className="font-headline-xl text-headline-xl mb-6">
          This page has moved or doesn&apos;t exist.
        </h1>
        <p className="font-body-lg text-white/70 max-w-xl mx-auto mb-10">
          The page you&apos;re looking for may have been renamed or removed. Try one of the links
          below, or call us directly on{' '}
          <a href={`tel:${FIRM.phoneTel}`} className="text-brand-gold hover:underline">
            {FIRM.phone}
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {practiceAreaLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-brand-gold transition-colors font-label-lg link-underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
