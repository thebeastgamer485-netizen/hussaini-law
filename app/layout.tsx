import type { Metadata } from 'next'
import { Domine, Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageChrome } from '@/components/ui/PageChrome'

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
  icons: { icon: '/favicon.ico', apple: '/logo.png' },
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
    latitude: -33.8687,
    longitude: 150.9549,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Sydney' },
    { '@type': 'City', name: 'Fairfield' },
    { '@type': 'AdministrativeArea', name: 'New South Wales' },
  ],
  knowsLanguage: ['en', 'fa', 'ps', 'ar'],
  employee: {
    '@type': 'Attorney',
    name: 'Sayed Rahmatullah Hussainizada',
    jobTitle: 'Principal Solicitor',
    knowsLanguage: ['en', 'fa', 'ps', 'ar'],
    memberOf: { '@type': 'Organization', name: 'Law Society of New South Wales' },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal services',
    itemListElement: [
      'Criminal Law',
      'Immigration Law',
      'Family Law',
      'Conveyancing',
      'Commercial Law',
      'Civil Litigation',
    ].map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })),
  },
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
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
