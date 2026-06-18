'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState, type ReactNode } from 'react'

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 50)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      className={`page-transition ${isAnimating ? '' : 'page-visible'}`}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </div>
  )
}
