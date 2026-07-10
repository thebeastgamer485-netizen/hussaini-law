type IconProps = {
  name: string
  /** 'navy' for light surfaces (navy glyph, gold linework); 'gold' for dark navy surfaces. */
  variant?: 'navy' | 'gold'
  className?: string
}

/**
 * Duotone icon: a solid base glyph with a finer linework overlay in the accent
 * colour. Works with any Material Symbols name and needs no chip behind it.
 */
export function Icon({ name, variant = 'navy', className = 'text-5xl' }: IconProps) {
  const base = variant === 'navy' ? '#004873' : '#C89B3C'
  const line = variant === 'navy' ? '#C89B3C' : '#00020e'
  return (
    <span className={`icon-duo ${className}`} aria-hidden="true">
      <span className="material-symbols-outlined icon-duo-base" style={{ color: base }}>
        {name}
      </span>
      <span className="material-symbols-outlined icon-duo-line" style={{ color: line }}>
        {name}
      </span>
    </span>
  )
}
