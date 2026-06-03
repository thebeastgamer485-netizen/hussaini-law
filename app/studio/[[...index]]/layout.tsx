// Studio gets its own root-level layout so Sanity's full-bleed UI
// is not constrained by the marketing site's <Navbar> / <Footer>.
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
