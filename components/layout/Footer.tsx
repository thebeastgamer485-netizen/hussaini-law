'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { practiceAreaLinks, FIRM } from '@/lib/navigation'
import { LogoCards } from '@/components/ui/AccreditationLogos'

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

          {(FIRM.social.facebook || FIRM.social.instagram || FIRM.social.tiktok) && (
          <div className="flex items-center gap-3 mt-6">
            {FIRM.social.facebook && (
            <a
              href={FIRM.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Hussaini Law Group on Facebook"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-on-primary/70 hover:text-brand-navy hover:bg-brand-gold hover:border-brand-gold transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
              </svg>
            </a>
            )}
            {FIRM.social.instagram && (
            <a
              href={FIRM.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Hussaini Law Group on Instagram"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-on-primary/70 hover:text-brand-navy hover:bg-brand-gold hover:border-brand-gold transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            )}
            {FIRM.social.tiktok && (
            <a
              href={FIRM.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Hussaini Law Group on TikTok"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-on-primary/70 hover:text-brand-navy hover:bg-brand-gold hover:border-brand-gold transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M16.5 2h-3v13.2a2.4 2.4 0 1 1-2.1-2.38V9.7a5.5 5.5 0 1 0 5.1 5.48V8.4a6.4 6.4 0 0 0 3.9 1.32V6.66a3.6 3.6 0 0 1-3.8-3.46V2Z" />
              </svg>
            </a>
            )}
          </div>
          )}
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
        <div className="container-page py-10 flex flex-col items-center gap-6">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-brand-gold/80">
            Members &amp; Accreditations
          </p>
          <LogoCards />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-on-primary/40">
          <p>© 2026 Hussaini Law Group. Liability limited by a scheme approved under Professional Standards Legislation.</p>
          <p>Languages spoken: English · Dari</p>
        </div>
      </div>
    </footer>
  )
}
