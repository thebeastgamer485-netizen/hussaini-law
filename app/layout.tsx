import type { Metadata } from 'next'
import { Domine, Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageChrome } from '@/components/ui/PageChrome'
import { PageTransition } from '@/components/ui/PageTransition'

const domine = Domine({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-domine',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const SITE_URL = 'https://hussainilaw.com.au'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hussaini Law Group — Multicultural Legal Excellence in Sydney',
    template: '%s | Hussaini Law Group',
  },
  description:
    'Hussaini Law Group is a Fairfield-based multicultural law firm offering bilingual representation in criminal, immigration, family, conveyancing, commercial and civil litigation matters.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE_URL,
    siteName: 'Hussaini Law Group',
    title: 'Hussaini Law Group — Multicultural Legal Excellence',
    description:
      'Bilingual legal representation across criminal, immigration, family, commercial and property law. Fairfield, Sydney.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Hussaini Law Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussaini Law Group',
    description: 'Multicultural legal excellence in Sydney.',
  },
  icons: { apple: '/logo.png' },
}

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE_URL}/#legalservice`,
  name: 'Hussaini Law Group',
  url: SITE_URL,
  telephone: '+61 2 8764 7885',
  email: 'info@hussainilaw.com.au',
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7/37 Spencer Street',
    addressLocality: 'Fairfield',
    addressRegion: 'NSW',
    postalCode: '2165',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.8728,
    longitude: 150.9554,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:30',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Sydney' },
    { '@type': 'AdministrativeArea', name: 'New South Wales' },
    { '@type': 'AdministrativeArea', name: 'Greater Western Sydney' },
    ...[
      'Fairfield',
      'Cabramatta',
      'Canley Vale',
      'Smithfield',
      'Wetherill Park',
      'Bossley Park',
      'Bonnyrigg',
      'Villawood',
      'Liverpool',
      'Bankstown',
      'Parramatta',
      'Auburn',
      'Merrylands',
    ].map((name) => ({ '@type': 'Place', name })),
  ],
  knowsAbout: [
    'Criminal Law',
    'Immigration Law',
    'Conveyancing',
    'Commercial Law',
    'Civil Litigation',
    'Bilingual legal representation in Dari and English',
  ],
  knowsLanguage: ['en', 'fa'],
  employee: {
    '@type': 'Attorney',
    '@id': `${SITE_URL}/#principal`,
    name: 'Sayed Rahmatullah Hussainizada',
    jobTitle: 'Principal Solicitor',
    url: SITE_URL,
    knowsLanguage: ['en', 'fa'],
    worksFor: { '@id': `${SITE_URL}/#legalservice` },
    memberOf: { '@type': 'Organization', name: 'Law Society of New South Wales' },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        recognizedBy: { '@type': 'Organization', name: 'Law Society of New South Wales' },
      },
    ],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal services',
    itemListElement: [
      'Criminal Law',
      'Immigration Law',
      'Conveyancing',
      'Commercial Law',
      'Civil Litigation',
    ].map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })),
  },
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Hussaini Law Group',
  url: SITE_URL,
  inLanguage: 'en-AU',
  publisher: { '@id': `${SITE_URL}/#legalservice` },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${domine.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
        <Script
          id="ld-legal-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="font-body bg-surface text-on-surface antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-brand-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-sm"
        >
          Skip to content
        </a>
        <PageChrome />
        <Navbar />
        <PageTransition>
          <main id="main">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
