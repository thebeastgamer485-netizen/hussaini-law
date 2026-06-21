'use client'

import { useState } from 'react'

export type FaqItem = { question: string; answer: string }

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="divide-y divide-outline-variant border-t border-b border-outline-variant">
      {items.map((item, i) => {
        const isOpen = openIdx === i
        const panelId = `faq-panel-${i}`
        const buttonId = `faq-button-${i}`
        return (
          <div key={i}>
            <h3>
              <button
                id={buttonId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left py-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
              >
                <span className="font-heading text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  {item.question}
                </span>
                <span
                  className={`material-symbols-outlined text-brand-gold text-3xl shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  add
                </span>
              </button>
            </h3>
            {/* Answer text is always present in the DOM (no aria-hidden / display:none)
                so AI crawlers and lightweight fetchers can read every answer even
                when visually collapsed. Collapse is purely CSS via grid-template-rows. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                opacity: isOpen ? 1 : 0,
                transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div className="pb-6">
                  <p className="text-body-lg text-on-surface-variant max-w-3xl">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
