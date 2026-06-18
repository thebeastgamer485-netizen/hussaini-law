'use client'

import { useEffect, useState } from 'react'

export function PageChrome() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0)
      setShowTop(scrollTop > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none"
      >
        <div
          className="h-full bg-brand-gold"
          style={{ width: `${progress}%`, transition: 'width 80ms linear' }}
        />
      </div>

      {/* Back-to-top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        aria-hidden={!showTop}
        className={`fixed bottom-8 right-5 z-50 w-11 h-11 rounded-full bg-brand-navy border border-white/20 text-white shadow-lg flex items-center justify-center hover:bg-primary transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined text-xl">arrow_upward</span>
      </button>
    </>
  )
}
