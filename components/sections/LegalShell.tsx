import type { ReactNode } from 'react'

export function LegalShell({
  title,
  intro,
  lastUpdated,
  children,
}: {
  title: string
  intro?: string
  lastUpdated: string
  children: ReactNode
}) {
  return (
    <>
      <section className="relative bg-primary text-white pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-40" aria-hidden="true" />
        <div className="orb bg-primary-container w-[420px] h-[420px] -top-20 -left-32" aria-hidden="true" />
        <div className="orb bg-brand-gold/20 w-[320px] h-[320px] bottom-0 right-0" aria-hidden="true" />
        <div className="container-page relative max-w-3xl">
          <div className="text-label-sm uppercase tracking-[0.2em] text-brand-gold mb-4">Legal</div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">{title}</h1>
          {intro && <p className="mt-6 text-body-lg text-white/85 max-w-2xl">{intro}</p>}
          <p className="mt-6 text-sm text-white/60">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page py-16 md:py-24 max-w-3xl legal-prose">{children}</div>
      </section>
    </>
  )
}
