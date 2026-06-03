'use client'

import { useState } from 'react'

export type FaqItem = { question: string; answer: string }

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

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
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'pb-6 opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-body-lg text-on-surface-variant max-w-3xl">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
