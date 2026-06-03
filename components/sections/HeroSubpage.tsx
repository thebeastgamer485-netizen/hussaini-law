import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

type Props = {
  eyebrow: string
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  breadcrumb?: { label: string; href?: string }[]
}

export function HeroSubpage({
  eyebrow,
  title,
  description,
  imageSrc = '/images/hero-subpage.svg',
  imageAlt = '',
  breadcrumb,
}: Props) {
  return (
    <section className="relative bg-brand-navy text-white pt-32 md:pt-36 pb-16 md:pb-20 overflow-hidden">
      <div className="orb bg-primary-container w-[500px] h-[500px] -top-32 -right-40" aria-hidden="true" />
      <div className="orb bg-brand-gold/20 w-[320px] h-[320px] -bottom-32 -left-32" aria-hidden="true" />
      <div className="absolute inset-0 texture-overlay opacity-40" aria-hidden="true" />

      <div className="container-page relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                {breadcrumb.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {c.href ? (
                      <Link href={c.href} className="hover:text-brand-gold">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-brand-gold">{c.label}</span>
                    )}
                    {i < breadcrumb.length - 1 && (
                      <span className="material-symbols-outlined text-xs">chevron_right</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="text-label-sm uppercase tracking-[0.2em] text-brand-gold mb-4">{eyebrow}</div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1] font-bold text-white">
            {title}
          </h1>
          <p className="mt-6 text-body-lg text-white/80 max-w-2xl">{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" icon="arrow_forward">
              Book Consultation
            </Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] lg:aspect-[5/6] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
