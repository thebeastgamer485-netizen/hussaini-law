import Link from 'next/link'
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold disabled:opacity-50 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-gold text-brand-navy hover:bg-brand-gold/90 hover:-translate-y-0.5 shadow-sm hover:shadow-md',
  secondary:
    'border-2 border-white/40 text-white hover:bg-white/10 hover:border-white',
  ghost:
    'text-on-surface hover:text-primary',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-label-lg',
  lg: 'px-7 py-4 text-base',
}

export type ButtonProps = {
  variant?: Variant
  size?: Size
  href?: string
  external?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'button'>, 'children'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', href, external, icon, iconPosition = 'right', className = '', children, ...rest },
  ref,
) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined text-lg">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined text-lg">{icon}</span>
      )}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button ref={ref} className={classes} {...rest}>
      {content}
    </button>
  )
})
