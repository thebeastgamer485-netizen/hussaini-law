import { HeroHome } from '@/components/sections/HeroHome'
import { AccreditationStrip } from '@/components/ui/AccreditationLogos'
import { PrincipalProfile } from '@/components/sections/PrincipalProfile'
import { PracticeAreasGrid } from '@/components/sections/PracticeAreasGrid'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { ReviewsCarousel } from '@/components/sections/ReviewsCarousel'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { Reveal } from '@/components/ui/Reveal'
import { getPrincipal } from '@/sanity/lib/fetch'
import { getGoogleReviews } from '@/lib/reviews'
import { TEAM_PRINCIPAL } from '@/lib/content'

export const revalidate = 300

export default async function HomePage() {
  // Credentials are maintained in code (lib/content.ts), not the CMS, so the
  // accreditation badges stay accurate even when the Sanity copy is out of date.
  const sanityPrincipal = await getPrincipal()
  const principal = sanityPrincipal
    ? { ...sanityPrincipal, credentials: TEAM_PRINCIPAL.credentials }
    : TEAM_PRINCIPAL
  // Live Google reviews (auto-refreshing); falls back to the curated static set.
  const reviews = await getGoogleReviews()

  return (
    <>
      <HeroHome />
      <AccreditationStrip />
      <Reveal>
        <PrincipalProfile principal={principal} />
      </Reveal>
      <Reveal>
        <PracticeAreasGrid />
      </Reveal>
      <Reveal>
        <WhyUsSection />
      </Reveal>
      <Reveal>
        <ReviewsCarousel data={reviews} />
      </Reveal>
      <Reveal>
        <CtaBanner />
      </Reveal>
    </>
  )
}
