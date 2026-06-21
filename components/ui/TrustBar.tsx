type Badge = { icon: string; label: string; sub?: string }

const DEFAULT_BADGES: Badge[] = [
  { icon: 'verified', label: 'Law Society of NSW', sub: 'Registered Solicitors' },
  { icon: 'diversity_3', label: 'Multicultural Excellence', sub: 'Award Recognised' },
  { icon: 'workspace_premium', label: '7 Years Experience', sub: 'Trusted Advocacy' },
  { icon: 'gavel', label: 'Court Appointed', sub: 'Local & Federal' },
]

export function TrustBar({ badges = DEFAULT_BADGES, tone = 'light' }: { badges?: Badge[]; tone?: 'light' | 'dark' }) {
  const isDark = tone === 'dark'
  return (
    <section
      className={`${isDark ? 'bg-brand-navy text-white/80' : 'bg-surface-container-low text-on-surface-variant'} border-y ${isDark ? 'border-white/10' : 'border-outline-variant/60'}`}
      aria-label="Accreditations and recognitions"
    >
      <div className="container-page py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center text-center gap-2 img-grayscale-hover"
              style={{ filter: 'grayscale(60%)' }}
            >
              <span className={`material-symbols-outlined text-4xl ${isDark ? 'text-brand-gold' : 'text-primary'}`}>
                {b.icon}
              </span>
              <div className="font-heading text-sm md:text-base font-semibold">{b.label}</div>
              {b.sub && (
                <div className="text-xs uppercase tracking-widest opacity-70">{b.sub}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
