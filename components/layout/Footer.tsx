'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { practiceAreaLinks, FIRM } from '@/lib/navigation'

export function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/studio')) return null

  return (
    <footer className="bg-brand-navy text-on-primary">
      <div className="container-page py-20 grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative h-10 w-10">
              <Image src="/logo.png" alt="" fill sizes="40px" className="object-contain" />
            </div>
            <span className="font-headline-md text-headline-md text-secondary-fixed">Hussaini Law Group</span>
          </div>
          <p className="text-on-primary/60 font-body-md mb-6">
            Sydney&apos;s boutique law firm dedicated to precision, advocacy, and the diverse communities of Fairfield.
          </p>
          <div className="border border-white/15 rounded px-4 py-3 text-center">
            <div className="font-headline-md text-brand-gold text-lg" dir="rtl">{FIRM.farsiName}</div>
            <div className="font-headline-md text-brand-gold text-lg" dir="rtl">{FIRM.arabicName}</div>
          </div>
        </div>

        {/* Practice areas */}
        <div>
          <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-brand-gold mb-6">
            Practice Areas
          </h4>
          <ul className="space-y-4">
            {practiceAreaLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-on-primary/60 hover:text-on-primary transition-colors font-body-md">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-brand-gold mb-6">Contact</h4>
          <ul className="space-y-4 text-on-primary/60 font-body-md">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-gold text-xl shrink-0">location_on</span>
              <span>{FIRM.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-gold text-xl shrink-0">call</span>
              <a href={`tel:${FIRM.phoneTel}`} className="hover:text-on-primary">{FIRM.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-gold text-xl shrink-0">mail</span>
              <a href={`mailto:${FIRM.email}`} className="hover:text-on-primary break-all">{FIRM.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-gold text-xl shrink-0">schedule</span>
              <span>{FIRM.hoursWeekday}<br />{FIRM.hoursSaturday}</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-brand-gold mb-6">Legal</h4>
          <ul className="space-y-4 mb-8">
            <li><Link href="/privacy-policy" className="text-on-primary/60 hover:text-on-primary transition-colors font-body-md">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="text-on-primary/60 hover:text-on-primary transition-colors font-body-md">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="text-on-primary/60 hover:text-on-primary transition-colors font-body-md">Disclaimer</Link></li>
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-white px-5 py-3 rounded font-label-lg font-semibold hover:brightness-110 transition"
          >
            Book Consultation
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-on-primary/40">
          <p>© 2026 Hussaini Law Group. Liability limited by a scheme approved under Professional Standards Legislation.</p>
          <p>Languages spoken: English · Dari · Pashto · Arabic</p>
        </div>
      </div>
    </footer>
  )
}
