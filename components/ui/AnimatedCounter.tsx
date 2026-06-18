'use client'

import { useEffect, useRef, useState } from 'react'

export function AnimatedCounter({
  target,
  suffix = '',
  duration = 1800,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const elapsed = now - start
          const t = Math.min(elapsed / duration, 1)
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
          setCount(Math.round(eased * target))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
