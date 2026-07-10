'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { GOOGLE_REVIEWS } from '@/lib/content'

const AUTO_ADVANCE_MS = 6000

export function ReviewsCarousel() {
  const { rating, count, url, items } = GOOGLE_REVIEWS
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback(
    (i: number) => setIndex(((i % items.length) + items.length) % items.length),
    [items.length]
  )

  // Auto-advance; pauses on hover/focus and respects reduced-motion.
  useEffect(() => {
    if (paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [paused, items.length])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) > 40) goTo(delta < 0 ? index + 1 : index - 1)
  }

  return (
    <section
      className="bg-surface-container-low border-y border-outline-variant/40"
      aria-labelledby="reviews-heading"
    >
      <div className="container-page py-16 md:py-24">
        <div className="text-center mb-10 md:mb-12">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-brand-gold font-semibold mb-3">
            Client Testimonials
          </p>
          <h2 id="reviews-heading" className="font-heading text-headline-lg text-primary mb-4">
            What Our Clients Say
          </h2>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="flex" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((s) => (
                <span
                  key={s}
                  className="material-symbols-outlined text-brand-gold text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </span>
            <span>
              <strong className="text-on-surface">{rating}</strong> from {count} Google reviews
            </span>
          </a>
        </div>

        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Client reviews"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="overflow-hidden">
            <ul
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((r, i) => (
                <li
                  key={r.name}
                  className="w-full shrink-0 px-1"
                  aria-hidden={i !== index}
                >
                  <figure className="max-w-3xl mx-auto text-center px-2 md:px-8">
                    <span
                      className="material-symbols-outlined text-brand-gold text-5xl block mb-4"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      aria-hidden="true"
                    >
                      format_quote
                    </span>
                    <blockquote className="font-heading text-xl md:text-2xl leading-relaxed text-on-surface">
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6">
                      <span className="block font-semibold text-primary">{r.name}</span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-on-surface-variant mt-1">
                        Google Review
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-outline-variant text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                arrow_back
              </span>
            </button>

            <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose review">
              {items.map((r, i) => (
                <button
                  key={r.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Review ${i + 1} of ${items.length}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-7 bg-brand-gold' : 'w-2.5 bg-outline-variant hover:bg-brand-gold/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-outline-variant text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
