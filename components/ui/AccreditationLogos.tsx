type Accreditation = { src: string; alt: string; heightClass: string }

// Real, verified logos. To add the Law Society Professional Standards Scheme
// logo, drop the file into /public/images/logos and uncomment the entry below.
export const ACCREDITATIONS: Accreditation[] = [
  {
    src: '/images/logos/law-society-nsw.svg',
    alt: 'Member — Law Society of New South Wales',
    heightClass: 'h-7 md:h-8',
  },
  {
    src: '/images/logos/pexa.png',
    alt: 'PEXA — Property Exchange Australia',
    heightClass: 'h-6 md:h-7',
  },
  {
    src: '/images/logos/professional-standards-scheme.svg',
    alt: 'The Law Society of NSW Professional Standards Scheme',
    heightClass: 'h-11 md:h-14',
  },
]

/** Row of accreditation logos, each on a white card so they read on any background. */
export function LogoCards() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {ACCREDITATIONS.map((logo) => (
        <li
          key={logo.src}
          className="flex items-center justify-center rounded-lg bg-white px-6 py-4 shadow-sm ring-1 ring-black/5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={logo.alt}
            className={`${logo.heightClass} w-auto object-contain`}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  )
}

/** Full-width section for the home page (light background), shown below the hero. */
export function AccreditationStrip() {
  return (
    <section
      className="bg-surface-container-low border-y border-outline-variant/60"
      aria-label="Memberships and accreditations"
    >
      <div className="container-page py-12">
        <p className="text-center font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/70 mb-8">
          Members &amp; Accreditations
        </p>
        <LogoCards />
      </div>
    </section>
  )
}
