'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.setTimeout(() => node.classList.add('is-visible'), delay)
            obs.unobserve(node)
          }
        })
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [delay])

  const base =
    direction === 'left' ? 'reveal-left' :
    direction === 'right' ? 'reveal-right' :
    direction === 'scale' ? 'reveal-scale' :
    'reveal'

  return (
    <div ref={ref} className={`${base} ${className}`}>
      {children}
    </div>
  )
}
