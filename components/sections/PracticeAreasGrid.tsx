import { SectionHeading } from '@/components/ui/SectionHeading'
import { BentoCard } from '@/components/ui/BentoCard'

type Card = { icon: string; title: string; description: string; href: string }
type Group = { eyebrow: string; cards: Card[] }

const GROUPS: Group[] = [
  {
    eyebrow: 'Individual Law',
    cards: [
      {
        icon: 'flight_land',
        title: 'Immigration Law',
        description: 'Skilled visas, family reunions, and refugee status navigation.',
        href: '/practice-areas/immigration-law',
      },
    ],
  },
  {
    eyebrow: 'Business & Property',
    cards: [
      {
        icon: 'business_center',
        title: 'Commercial Law',
        description: 'Strategic advice for businesses, contracts, and resolution.',
        href: '/practice-areas/commercial-law',
      },
      {
        icon: 'home_work',
        title: 'Conveyancing',
        description: 'Seamless residential and commercial property transactions.',
        href: '/practice-areas/conveyancing',
      },
    ],
  },
  {
    eyebrow: 'Dispute Resolution',
    cards: [
      {
        icon: 'gavel',
        title: 'Criminal Law',
        description: 'Robust defence strategies in Fairfield and Sydney courts.',
        href: '/practice-areas/criminal-law',
      },
      {
        icon: 'account_balance',
        title: 'Civil Litigation',
        description: 'Effective representation in diverse civil disputes.',
        href: '/practice-areas/civil-litigation',
      },
    ],
  },
]

export function PracticeAreasGrid() {
  return (
    <section id="practice-areas" className="bg-surface-container-low" aria-labelledby="practice-heading">
      <div className="container-page py-16 md:py-28">
        <SectionHeading
          align="center"
          eyebrow="Our Legal Expertise"
          title={<span id="practice-heading">Comprehensive Solutions</span>}
          intro="From migration matters that change a family's future to commercial contracts that build a business, our solicitors bring depth where it counts."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {GROUPS.map((group) => (
            <div key={group.eyebrow} className="flex flex-col gap-6">
              <div className="text-base font-heading font-semibold text-primary border-l-4 border-primary bg-primary/5 pl-4 py-1">
                {group.eyebrow}
              </div>
              {group.cards.map((c) => (
                <BentoCard key={c.title} {...c} ctaLabel="Explore" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
