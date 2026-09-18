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
  {
    slug: 'character-test-what-a-single-conviction-can-trigger',
    title: 'The Character Test: What a Single Conviction Can Trigger',
    excerpt:
      "A matter that felt minor in the Local Court can still cost you your visa. Here's how the 12-month threshold in Section 501 actually works — and why the sentence a court imposes matters more than the time you spend in custody.",
    metaDescription:
      'How Section 501 of the Migration Act works in NSW: the 12-month substantial criminal record threshold, mandatory cancellation, the 28-day revocation window and the 9-day Administrative Review Tribunal deadline.',
    category: 'Immigration Law',
    heroImage: PRACTICE_IMAGES.criminalHero,
    heroImageAlt: 'A quiet law library lined with tall bookshelves around a central reading table',
    publishedAt: '2026-09-18',
    readTime: '10 min read',
    intro: [
      "People who come to see us about character matters often have the same reaction when they open the envelope. The criminal case was finalised months ago. The sentence was served, or is being served in the community. Life had moved on. Then a letter arrives from the Department of Home Affairs saying their visa has been cancelled, or is being considered for cancellation, on character grounds.",
      "The provision behind those letters is Section 501 of the Migration Act 1958, and it reaches further than most people expect. It applies to permanent residents as well as temporary visa holders, and it can be triggered by a single sentence. This article sets out how the test actually works in New South Wales, where the deadlines sit, and what can still be done once a notice arrives — and we work through these matters with clients in English or Dari.",
    ],
    sections: [
      {
        heading: 'The Character Test Turns on a Single Number',
        paragraphs: [
          "A person does not pass the character test if they have what the Act calls a 'substantial criminal record'. That phrase is defined in Section 501(7), and for most people the line they cross is a sentence of 12 months or more.",
          'A substantial criminal record covers any of the following:',
        ],
        bullets: [
          'A sentence of death, or a sentence of imprisonment for life',
          'A sentence of a term of imprisonment of 12 months or more',
          'Two or more terms of imprisonment totalling 12 months or more',
          'An acquittal on the grounds of unsoundness of mind or insanity, where the person was then detained in a facility or institution',
          'A finding by a court that the person was not fit to plead, where the person was then detained in a facility or institution',
        ],
        subsections: [
          {
            heading: '',
            paragraphs: [
              "A criminal record is not the only way to fail. The character test also has limbs dealing with association with people or groups involved in criminal conduct, risk of certain future conduct, sexually based offences involving a child, an adverse ASIO security assessment, and certain Interpol notices. A person only has to fail one ground to fail the character test as a whole — so there is no balancing exercise at this first stage. Your circumstances are weighed later, when the decision-maker considers what to do about it.",
            ],
          },
        ],
      },
      {
        heading: 'It Is the Sentence Imposed, Not the Time You Serve',
        paragraphs: [
          'This is the point that catches people most often. The test looks at the sentence a court imposed, not at how long anyone actually spent behind bars. Two consequences follow, and both surprise clients regularly.',
          "First, where terms are ordered to be served concurrently, the whole of each term is counted when working out the total. Someone sentenced to two eight-month terms to be served concurrently would realistically be released after eight months — but for the character test, the total is sixteen months, and they have a substantial criminal record.",
          "Second, a sentence does not have to be served in gaol to count. In New South Wales, a court making an intensive correction order must first impose a sentence of imprisonment and then direct that it be served by intensive correction in the community, under Section 7 of the Crimes (Sentencing Procedure) Act 1999. An ICO is capped at two years for a single offence and three years where an aggregate sentence is imposed. That means a twelve-month ICO still appears on the record as a twelve-month sentence of imprisonment, even though the person never entered a custodial institution.",
          "So 'I never went to gaol' is not an answer to the character test. As the next sections explain, though, it does change which power the Department can use.",
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=1200&q=80',
          alt: 'Two people seated at a desk reviewing printed documents together, one writing notes in a notebook',
          caption:
            'What the court recorded on the sentence matters more than how long anyone spent in custody — the paperwork is worth checking carefully.',
        },
      },
      {
        heading: 'Aggregate Sentences: Pearson, and the Law That Reversed It',
        paragraphs: [
          "NSW courts frequently deal with several offences at once by imposing a single aggregate sentence rather than a separate sentence for each charge. For a period, that made a real difference to migration outcomes.",
          "In Pearson v Minister for Home Affairs [2022] FCAFC 203, handed down on 22 December 2022, the Full Federal Court held that an aggregate sentence was not a sentence to 'a term of imprisonment of 12 months or more' for the purposes of Section 501(7)(c), and so could not support mandatory cancellation.",
          "Parliament moved quickly. The Migration Amendment (Aggregate Sentences) Act 2023 commenced on 17 February 2023 and confirmed that a single sentence imposed for two or more offences is treated no differently from a sentence imposed for one offence. It applied retrospectively, validating cancellation and refusal decisions that Pearson had called into question. The Department also restored certain review and revocation rights to people affected by that judgment.",
          "The practical position today is straightforward: an aggregate sentence of 12 months or more counts. We mention the case only because it still comes up in conversation, and it is no longer a defence.",
        ],
      },
      {
        heading: 'Two Very Different Cancellation Powers',
        paragraphs: [
          'Failing the character test does not automatically end the matter. What happens next depends on which power the Department is using, and the difference is significant.',
        ],
        subsections: [
          {
            heading: 'Discretionary refusal or cancellation — Sections 501(1) and 501(2)',
            paragraphs: [
              "A visa may be refused where the applicant does not satisfy the decision-maker that they pass the character test, and a visa may be cancelled where the decision-maker reasonably suspects the person does not pass it and the person does not satisfy them otherwise. The word that matters here is 'may'. There is a genuine discretion, and your circumstances are weighed before any decision is made.",
            ],
          },
          {
            heading: 'Mandatory cancellation — Section 501(3A)',
            paragraphs: [
              "Cancellation is compulsory, with no discretion at that point, where two things are both true: the person fails the character test because of a substantial criminal record based on a sentence of death, life imprisonment or a term of 12 months or more (or because of a sexually based offence involving a child), and the person is serving a sentence of imprisonment on a full-time basis in a custodial institution.",
              "That second requirement is where community-based sentences fall outside the mandatory power. Serving a sentence 'on a full-time basis' does not include periodic detention or home or residential detention. So a twelve-month intensive correction order can cause a person to fail the character test and expose them to a discretionary decision, without triggering mandatory cancellation. It is a meaningful distinction, and it is worth getting it identified correctly at the outset.",
            ],
          },
        ],
      },
      {
        heading: 'After a Cancellation: 28 Days, and What Direction 110 Weighs',
        paragraphs: [
          "Mandatory cancellation usually arrives without any advance warning while a person is in custody. Once it happens, the person is notified and invited to make representations asking for the cancellation to be revoked under Section 501CA. The period prescribed for those representations is 28 days.",
          "Under Section 501CA(4), the decision can be revoked if the decision-maker is satisfied that the person passes the character test, or that there is another reason why the original decision should be revoked. In most cases the character test is plainly failed, so the real work goes into that second limb.",
          "In deciding it, the decision-maker must apply Ministerial Direction 110, which commenced on 21 June 2024 and revoked the earlier Direction 99. It sets out five primary considerations:",
        ],
        bullets: [
          'Protection of the Australian community from criminal or other serious conduct',
          'Whether the conduct engaged in constituted family violence',
          'The strength, nature and duration of ties to Australia',
          'The best interests of minor children in Australia',
          'Expectations of the Australian community',
        ],
        subsections: [
          {
            heading: 'Two things worth knowing about Direction 110',
            paragraphs: [
              "The Direction states that protection of the Australian community is generally to be given greater weight than the other primary considerations, and that primary considerations generally outweigh the other considerations — which include the legal consequences of the decision, the extent of any impediments the person would face if removed, and any impact on Australian business interests.",
              "The family violence consideration is also broader than many people assume. The definition in Direction 110 extends well beyond physical assault to behaviour such as stalking, repeated derogatory taunts, unreasonably denying a family member financial autonomy, and preventing someone from keeping connections with their family, friends or culture. The Direction also treats 'serious conduct' as capable of including behaviour that is not a criminal offence at all. Representations need to engage with that framework directly rather than simply asserting that someone is a good person.",
            ],
          },
        ],
      },
      {
        heading: 'Nine Days to the Tribunal — and No Extensions',
        paragraphs: [
          "If a delegate refuses to revoke the cancellation, or makes a discretionary refusal or cancellation decision, merits review goes to the Administrative Review Tribunal, which replaced the AAT in October 2024.",
          "These are expedited reviews, and the time limit is unforgiving. An application must be lodged within nine days after the day you received the decision and the accompanying documents from the Department. The Tribunal has no power to extend that period. Where the ninth day falls on a weekend or public holiday, the application is due the next working day. The Tribunal must then make its decision within 12 weeks of the day you were notified of the original decision.",
          'A few practical points that make a real difference at this stage:',
        ],
        bullets: [
          'The standard application fee is currently $1,195, reduced to $100 if you are in prison or immigration detention, hold certain concession cards, have been granted legal aid, or the Tribunal accepts that the full fee would cause financial hardship',
          "Written statements from you and each of your witnesses, plus any documents you want the Member to consider, must reach the Minister's representative at least two business days before the hearing — otherwise the Member cannot take that evidence into account",
          'The Tribunal arranges and pays for an interpreter if you need one, so give them notice of the language you speak',
          'The Member hearing your case must apply Direction 110, so your evidence should be built around its considerations',
        ],
        subsections: [
          {
            heading: '',
            paragraphs: [
              "One caveat: the expedited process above applies to decisions made by a delegate of the Minister. Where the Minister has made the decision personally, the review pathway is different. That is something to confirm the moment a notice arrives rather than assume either way.",
            ],
          },
        ],
      },
      {
        heading: 'Where We Can Help',
        paragraphs: [
          "The most valuable time to get migration advice is before sentencing, not after it. Where a matter is still before the court, the difference between a sentence of eleven months and one of twelve can decide whether someone keeps their visa — and that is a conversation worth having while it can still affect the outcome. Where a notice has already arrived, the deadlines become the priority. We can:",
        ],
        bullets: [
          'Read the actual sentencing record — what was imposed, whether terms were concurrent, and whether an aggregate sentence is involved',
          'Identify which power is in play: a discretionary decision under Section 501(1) or 501(2), or mandatory cancellation under Section 501(3A)',
          'Prepare revocation representations under Section 501CA built around the considerations in Direction 110',
          'Lodge and run an Administrative Review Tribunal application within the nine-day window',
          'Work alongside the criminal side of your matter so sentencing decisions are made with the migration consequences in view',
        ],
      },
    ],
    closing: [
      "Character cancellations are hard cases, but they are not hopeless ones. Revocation under Section 501CA and merits review at the Tribunal are genuine pathways, and people do keep their visas through them. What sinks most matters is not the strength of the case — it is a missed date, because 28 days and nine days pass very quickly when someone is in custody and trying to organise evidence from the inside.",
      "If you have been charged, are waiting to be sentenced, or have already received a notice about your visa, bring us the paperwork as early as you can. We will tell you honestly where you stand and what the realistic options are, in English or Dari.",
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
