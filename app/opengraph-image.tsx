import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hussaini Law Group — Multicultural Legal Excellence in Sydney'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#00020e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        {/* Gold accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#C89B3C', display: 'flex' }} />

        {/* Firm name */}
        <div style={{ color: '#C89B3C', fontSize: 20, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24, display: 'flex' }}>
          Hussaini Law Group · Fairfield, Sydney NSW
        </div>

        {/* Headline */}
        <div style={{ color: '#ffffff', fontSize: 64, fontWeight: 700, lineHeight: 1.1, marginBottom: 32, display: 'flex', flexDirection: 'column' }}>
          Multicultural Legal<br />Excellence
        </div>

        {/* Tagline */}
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 28, marginBottom: 48, display: 'flex' }}>
          Criminal · Immigration · Family · Commercial · Property
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ color: '#C89B3C', fontSize: 18, display: 'flex' }}>02 8764 7885</div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 18, display: 'flex' }}>·</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, display: 'flex' }}>hussainilaw.com.au</div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 18, display: 'flex' }}>·</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, display: 'flex' }}>English · Dari</div>
        </div>

        {/* Gold bottom bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: '#C89B3C', display: 'flex' }} />
      </div>
    ),
    { ...size },
  )
}
