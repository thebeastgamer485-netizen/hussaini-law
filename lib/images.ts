/**
 * Generates a base64-encoded SVG used as blurDataURL for external images.
 * Next.js can't auto-generate blur placeholders for remote URLs, so we
 * supply a solid navy rectangle that matches the site's dark background.
 */
function shimmerSvg(w: number, h: number) {
  return `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${w}" height="${h}" fill="#00305a"/>
  </svg>`
}

function toBase64(str: string) {
  if (typeof window === 'undefined') {
    return Buffer.from(str).toString('base64')
  }
  return window.btoa(str)
}

export const BLUR_DATA_URL = `data:image/svg+xml;base64,${toBase64(shimmerSvg(800, 600))}`

/** Light version for images on white/surface backgrounds */
export const BLUR_DATA_URL_LIGHT = `data:image/svg+xml;base64,${toBase64(
  `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="600" fill="#e7e8e9"/>
  </svg>`
)}`
