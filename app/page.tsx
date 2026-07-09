import { HeroHome } from '@/components/sections/HeroHome'
import { AccreditationStrip } from '@/components/ui/AccreditationLogos'
import { PrincipalProfile } from '@/components/sections/PrincipalProfile'
import { PracticeAreasGrid } from '@/components/sections/PracticeAreasGrid'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { Reveal } from '@/components/ui/Reveal'
import { getPrincipal } from '@/sanity/lib/fetch'
import { TEAM_PRINCIPAL } from '@/lib/content'

export const revalidate = 300

export default async function HomePage() {
  const principal = (await getPrincipal()) ?? TEAM_PRINCIPAL

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
        <CtaBanner />
      </Reveal>
    </>
  )
}
