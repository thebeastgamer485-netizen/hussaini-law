'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { primaryNav, practiceAreaLinks, FIRM } from '@/lib/navigation'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Sanity Studio owns the full viewport.
  if (pathname?.startsWith('/studio')) return null

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-primary/95 backdrop-blur-md border-b border-outline-variant/20">
      <div className="container-page h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group min-w-0" aria-label="Hussaini Law Group home">
          <div className="relative h-11 w-11 md:h-12 md:w-12 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-white/25 shadow-sm">
            <Image src="/logo.png" alt="" fill sizes="48px" className="object-contain p-0.5" priority />
          </div>
          <span className="font-headline-md text-lg sm:text-headline-md font-semibold text-secondary-fixed truncate">
            Hussaini Law Group
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          <Link
            href="/"
            className={`font-label-lg text-label-lg pb-1 transition-colors ${
              isActive('/')
                ? 'text-secondary-fixed border-b-2 border-secondary-fixed'
                : 'text-on-primary/80 hover:text-secondary-fixed'
            }`}
          >
            Home
          </Link>

          <div className="relative group">
            <button
              className={`font-label-lg text-label-lg pb-1 inline-flex items-center gap-1 transition-colors ${
                pathname?.startsWith('/practice-areas')
                  ? 'text-secondary-fixed border-b-2 border-secondary-fixed'
                  : 'text-on-primary/80 hover:text-secondary-fixed'
              }`}
              aria-haspopup="true"
            >
              Practice Areas
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all">
              <div className="w-72 bg-white rounded-xl shadow-2xl overflow-hidden border border-outline-variant">
                {practiceAreaLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-5 py-3 text-on-surface hover:bg-surface-container hover:text-primary text-label-lg border-b border-outline-variant/40 last:border-0"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className={`font-label-lg text-label-lg pb-1 transition-colors ${
              isActive('/contact')
                ? 'text-secondary-fixed border-b-2 border-secondary-fixed'
                : 'text-on-primary/80 hover:text-secondary-fixed'
            }`}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded font-label-lg text-label-lg hover:brightness-110 transition-all active:scale-95"
          >
            Schedule Consultation
          </Link>
        </nav>

        <button
          className="lg:hidden text-on-primary p-2"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="material-symbols-outlined text-3xl">{open ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile slide-out */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-primary transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <nav className="container-page py-8 flex flex-col gap-2" aria-label="Mobile">
          {primaryNav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-on-primary text-headline-md py-3 border-b border-white/10"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2">
            <div className="text-secondary-fixed font-label-sm uppercase tracking-widest py-3">
              Practice Areas
            </div>
            {practiceAreaLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-on-primary/90 py-2.5 text-body-lg"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-brand-gold text-white px-6 py-4 rounded font-semibold"
          >
            Schedule Consultation
          </Link>
          <a
            href={`tel:${FIRM.phoneTel}`}
            className="mt-3 inline-flex items-center justify-center gap-2 border border-white/30 text-on-primary px-6 py-4 rounded font-semibold"
          >
            <span className="material-symbols-outlined">call</span>
            {FIRM.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
