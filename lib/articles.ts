import { PRACTICE_IMAGES } from '@/lib/content'

export type ArticleSection = {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
  subsections?: { heading: string; paragraphs: string[] }[]
  /** Optional in-article stock photo, rendered after this section's paragraphs. */
  image?: { src: string; alt: string; caption?: string }
}

export type Article = {
  slug: string
  title: string
  excerpt: string
  metaDescription: string
  category: string
  heroImage: string
  heroImageAlt: string
  publishedAt: string
  updatedAt?: string
  readTime: string
  intro: string[]
  sections: ArticleSection[]
  closing: string[]
}

// Real, current Australian migration law — verified against the Migration Act 1958
// and the Administrative Review Tribunal (which replaced the AAT in October 2024).
// Written in-house by Hussaini Law Group, not copied from any other firm's content.
// Update this file (or add new entries) whenever new articles are published.
export const ARTICLES: Article[] = [
  {
    slug: 'can-you-apply-for-another-visa-while-your-art-appeal-is-pending',
    title: 'Can You Apply for Another Visa While Your ART Appeal Is Pending?',
    excerpt:
      "If your visa was refused and you've lodged an appeal with the Administrative Review Tribunal, here's what the law actually lets you do in the meantime — and the mistake that can cost you your right to stay in Australia.",
    metaDescription:
      'Had a visa refused and appealed to the ART? Learn what Section 48 of the Migration Act allows, how your Bridging Visa A affects your options, and when withdrawing an appeal is risky.',
    category: 'Immigration Law',
    heroImage: PRACTICE_IMAGES.immigrationHero,
    heroImageAlt: 'Grand courthouse columns at dusk, representing tribunal and court proceedings',
    publishedAt: '2026-09-08',
    readTime: '6 min read',
    intro: [
      "If your visa has been refused and you've lodged an appeal with the Administrative Review Tribunal (ART), a natural next question is whether you can apply for a different visa while that appeal is still on foot. It's one of the most common questions we're asked by clients in Fairfield and across Western Sydney, and the honest answer is: it depends — mostly on a section of the Migration Act that catches a lot of people by surprise.",
      "At Hussaini Law Group, we handle ART appeals and onshore visa applications side by side, in English and Dari, so nothing gets lost between the legal detail and the decision you actually need to make. Here's what the law allows, where the real risk sits, and why this isn't a decision to make without advice.",
    ],
    sections: [
      {
        heading: 'The General Rule: Section 48 of the Migration Act',
        paragraphs: [
          "If you are in Australia and your most recent substantive visa was refused or cancelled, you are almost certainly caught by Section 48 of the Migration Act 1958. This provision blocks you from applying for most other visas while you remain in the country — it's often described as a \"bar\" on further onshore applications, and it applies whether or not you've appealed the original decision.",
          "Section 48 exists to stop repeated visa applications being used to indefinitely extend a stay after a refusal. It doesn't stop you from appealing — that's a separate right — but it does limit what else you can do while that appeal runs its course.",
        ],
      },
      {
        heading: 'Which Visas You Can Still Apply For',
        paragraphs: [
          'Section 48 isn\'t an absolute bar. A specific, limited list of visas remain available even while you\'re subject to it, including:',
        ],
        bullets: [
          'Partner visas (subclasses 820 and 801)',
          'Bridging visas',
          'Protection visas',
          'Child visas (subclass 802)',
          'A small number of other prescribed visas, depending on your specific circumstances',
        ],
      },
      {
        heading: 'Check Your Bridging Visa Conditions First',
        paragraphs: [
          "Once you lodge an ART appeal, you're typically granted a Bridging Visa A (BVA), which keeps you lawfully in Australia while the Tribunal considers your case. It's easy to assume this bridging visa gives you a free hand to sort out your next move — it doesn't.",
        ],
        bullets: [
          "A standard BVA does not let you travel outside Australia and return — leaving without a Bridging Visa B first can mean your BVA (and your appeal rights) simply lapse.",
          "A BVA does not open the door to visas outside the Section 48 exceptions above, regardless of how strong you think your case is for something else.",
        ],
        subsections: [
          {
            heading: '',
            paragraphs: [
              "Before you make any application, we check your actual bridging visa grant notice — not just what you remember being told — because the conditions attached to it determine what happens next.",
            ],
          },
        ],
      },
      {
        heading: 'Two Situations We See Often',
        paragraphs: [
          'Section 48 has real exceptions, and two scenarios come up regularly in our Fairfield office.',
        ],
        subsections: [
          {
            heading: "You've since entered a genuine relationship with an Australian partner",
            paragraphs: [
              "If you become eligible for a partner visa (subclass 820) after your original refusal, you can generally still lodge it onshore, even while your ART appeal continues. The catch is that because you don't hold a substantive visa, you'll usually need to satisfy Schedule 3 criteria — a higher evidentiary bar than someone applying with a valid visa already in hand, requiring you to show compelling reasons why the application should still be accepted.",
            ],
          },
          {
            heading: 'Your circumstances have genuinely changed since arriving',
            paragraphs: [
              "If something has changed — for instance, conditions in your home country now mean you fear serious harm if you return — you may be able to apply for a Protection visa despite Section 48. This exception generally doesn't apply if you've previously had a protection visa application refused or cancelled, so this is very fact-specific and worth checking properly rather than assuming either way.",
            ],
          },
        ],
      },
      {
        heading: 'Should You Withdraw Your ART Appeal?',
        paragraphs: [
          "Some clients ask whether withdrawing their ART appeal would clear the way to apply for a different visa. This is a serious, sometimes irreversible decision, and we'd never recommend making it without legal advice specific to your file.",
          'Withdrawing an appeal can mean:',
        ],
        bullets: [
          'Losing the Bridging Visa A that came with lodging the appeal in the first place',
          "Becoming unlawful in Australia immediately if a new visa isn't granted straight away",
        ],
        subsections: [
          {
            heading: '',
            paragraphs: [
              "Even a short period as an unlawful non-citizen can affect future visa applications, and in some cases trigger an exclusion period before you can apply again. We map out exactly what withdrawing would mean for your situation before you sign anything.",
            ],
          },
        ],
      },
      {
        heading: 'Get Advice Before You Act',
        paragraphs: [
          'Every ART appeal and every visa history is different, and the consequences of applying for the wrong visa — or misreading your own bridging visa conditions — can be serious. At Hussaini Law Group, we:',
        ],
        bullets: [
          'Review your actual bridging visa grant and current ART appeal status',
          'Assess honestly whether you fall within one of the Section 48 exceptions',
          'Explain what withdrawing an appeal would really mean for your file',
          'Manage your onshore visa application and ART appeal together, so the two don\'t work against each other',
        ],
      },
    ],
    closing: [
      "Your options while an ART appeal is pending are genuinely limited, but they're not zero — a partner visa or protection visa may still be open to you depending on your circumstances. Given how much rides on getting this right, it's worth a proper conversation before you apply for anything or make any decision about your existing appeal.",
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
