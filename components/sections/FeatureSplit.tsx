import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { BLUR_DATA_URL, BLUR_DATA_URL_LIGHT } from '@/lib/images'

export type FeatureItem = { icon: string; title: string; body: string }

export type FeatureSplitData = {
  eyebrow?: string
  title: string
  intro?: string
  image: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  tone?: 'light' | 'dark'
  items: FeatureItem[]
  badge?: { value: string; label: string }
  /** Style features as bordered cards (light tone) vs. plain icon rows. */
  cardStyle?: boolean
}

export function FeatureSplit({ data }: { data: FeatureSplitData }) {
  const isDark = data.tone === 'dark'
  const imageLeft = data.imagePosition === 'left'

  const sectionBg = isDark ? 'bg-brand-navy text-white' : 'bg-surface-container'
  const headingTone = isDark ? 'dark' : 'light'

  const imageBlock = (
    <div className="relative">
      <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-brand-gold/40 pointer-events-none hidden md:block" aria-hidden="true" />
      <div className="relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={data.image}
          alt={data.imageAlt ?? ''}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          placeholder="blur"
          blurDataURL={isDark ? BLUR_DATA_URL : BLUR_DATA_URL_LIGHT}
          className={`object-cover ${isDark ? 'grayscale hover:grayscale-0 transition-all duration-700' : ''}`}
        />
      </div>
      {data.badge && (
        <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-navy p-6 md:p-8 rounded-xl shadow-xl hidden lg:block">
          <div className="font-heading text-2xl md:text-3xl font-bold leading-none">{data.badge.value}</div>
          <div className="text-xs uppercase tracking-widest mt-1 font-semibold">{data.badge.label}</div>
        </div>
      )}
    </div>
  )

  const textBlock = (
    <div>
      <SectionHeading tone={headingTone} eyebrow={data.eyebrow} title={data.title} intro={data.intro} />
      <ul className="mt-10 space-y-5">
        {data.items.map((item) => (
          <li
            key={item.title}
            className={
              data.cardStyle
                ? 'flex gap-4 p-5 bg-surface-container-lowest border border-outline-variant/60 rounded-lg'
                : 'flex gap-4'
            }
          >
            {isDark ? (
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary border border-white/20 text-white flex items-center justify-center">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
            ) : (
              <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                <Icon name={item.icon} className="text-4xl" />
              </div>
            )}
            <div>
              <h3 className={`font-heading text-lg ${isDark ? 'text-white' : 'text-primary'}`}>{item.title}</h3>
              <p className={`mt-1 text-body-md ${isDark ? 'text-white/70' : 'text-on-surface-variant'}`}>
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section className={`${sectionBg} relative overflow-hidden`}>
      {isDark && (
        <>
          <div className="orb bg-primary-container w-[480px] h-[480px] -top-32 -right-40" aria-hidden="true" />
          <div className="absolute inset-0 texture-overlay opacity-30" aria-hidden="true" />
        </>
      )}
      <div className="container-page py-16 md:py-28 relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {imageLeft ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">{textBlock}</div>
            <div className="order-1 lg:order-2">{imageBlock}</div>
          </>
        )}
      </div>
    </section>
  )
}
