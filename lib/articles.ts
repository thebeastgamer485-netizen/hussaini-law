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
  {
    slug: 'advo-without-a-conviction-how-it-can-affect-a-pending-visa-application',
    title: 'An ADVO Without a Conviction: How It Can Still Affect a Pending Visa Application',
    excerpt:
      "An apprehended domestic violence order is a civil order, not a criminal conviction. That does not stop the Department of Home Affairs from reading it. Here's how an ADVO can reach a visa application that is still being decided — and what to do about it.",
    metaDescription:
      'How an NSW Apprehended Domestic Violence Order can affect a pending visa application even without a conviction: the duty to notify under Section 104 of the Migration Act, the character test in Section 501(6), Direction 110 on family violence, and the changes coming under Direction 123 from 31 October 2026.',
    category: 'Criminal Law',
    heroImage: PRACTICE_IMAGES.criminalHero,
    heroImageAlt: 'A quiet law library with tall bookshelves on either side of a long central reading table',
    publishedAt: '2026-10-09',
    readTime: '13 min read',
    intro: [
      "Most people who sit down with us about an Apprehended Domestic Violence Order have already been told, correctly, that it is not a criminal conviction. What they have not usually been told is that the Department of Home Affairs does not need a conviction to take an interest in it. If you have a visa application waiting to be decided, an ADVO can become part of that decision from the day the order is served — even where no charge was ever laid, or the charges were later withdrawn.",
      "This article explains how an ADVO works in New South Wales, what you are required to tell the Department while your application is pending, and the specific parts of the Migration Act 1958 and the current Ministerial Direction that let an order without a conviction be weighed against you. We work through these matters for clients across Fairfield and Western Sydney in English or Dari, and the criminal and migration sides of the problem are best handled together.",
    ],
    sections: [
      {
        heading: 'An ADVO Is Not a Conviction — But It Is Not Nothing',
        paragraphs: [
          "Apprehended violence orders in NSW are made under the Crimes (Domestic and Personal Violence) Act 2007. An Apprehended Domestic Violence Order covers people in a domestic relationship — current or former partners, relatives, and people who live or have lived in the same household — while an Apprehended Personal Violence Order deals with everyone else.",
          "Under Section 16 of that Act, the Local Court can make a final ADVO where it is satisfied, on the balance of probabilities, that the protected person has reasonable grounds to fear, and in fact fears, a domestic violence offence, intimidation or stalking by the defendant. That is a civil standard of proof, not the criminal standard, and the Local Court itself confirms that an AVO does not give the defendant a criminal record. Unless the court sets a different period, a final ADVO against an adult now lasts two years by default under Section 79A.",
          "Three things keep the order from being a minor matter. First, most ADVOs begin as a provisional order that police can obtain at short notice, which then becomes an interim order at the first court date — so the order is in force long before anyone has tested the allegations. Second, knowingly contravening any condition of the order is a criminal offence under Section 14, carrying a maximum of two years' imprisonment, a fine of 50 penalty units, or both. Third, and the focus of this article, the order and the allegations that led to it are information the Department of Home Affairs can lawfully ask for and act on.",
        ],
      },
      {
        heading: "Consent Without Admissions: What It Settles and What It Doesn't",
        paragraphs: [
          "A large share of ADVOs in the Local Court are finalised by consent. Section 78 of the Act allows the court to make the order with the agreement of both parties whether or not the defendant admits any of the particulars in the application, and without the court having to be satisfied of the grounds in Section 16. In practice this is what 'consent without admissions' means: you accept the order, the court makes no finding that anything happened, and the matter is usually over in a single appearance.",
          "For a defendant with no migration issue, consenting is often a sensible way to avoid a contested hearing. For a visa applicant, the calculation is different. Consenting without admissions does not erase the police application, the facts sheet or the protected person's statement, and it still produces a court order for the personal protection of another person — which is exactly what the Department's character questions ask about. The absence of an admission helps, and we rely on it, but it does not make the order invisible.",
          "The same is true where charges were laid alongside the ADVO and later withdrawn. A withdrawn assault or intimidation charge leaves no conviction, but if a final order was made by consent, the order is still on the record and still has to be disclosed.",
        ],
      },
      {
        heading: 'You Must Tell the Department — Even While the Application Is Pending',
        paragraphs: [
          "The Department's character declarations ask whether you have ever been the subject of a domestic or family violence order made by a court, tribunal or similar authority for the personal protection of another person — the wording appears in Home Affairs' own guidance on evidence of character. If an order is made after you have lodged, the answer you gave on the form is no longer correct, and the Migration Act deals with that directly.",
          "Section 104 of the Migration Act 1958 requires an applicant who is in Australia to tell the Department, in writing, of any change in circumstances that affects an answer in the application, at any time before the visa is granted. The Department provides Form 1022 for this purpose, and a copy of the order should go with it. This obligation is not optional and it does not wait for the ADVO proceedings to finish — a provisional or interim order is still an order of the kind the question describes.",
          "Not updating the Department is where applicants turn a manageable problem into a serious one. Public Interest Criterion 4020 allows a visa to be refused where false or misleading information in a material particular has been given in connection with the application, and a refusal on that basis ordinarily brings a three-year exclusion from most further visa applications. Section 109 separately allows a visa to be cancelled where the Department later finds the answers it relied on were incorrect. A declared ADVO can be explained; an undeclared one looks like concealment, and the Department will usually learn of it through police checks in any event.",
        ],
        image: {
          src: 'https://images.unsplash.com/photo-1758519289022-5f9dea0d8cdc?auto=format&fit=crop&w=1200&q=80',
          alt: 'Two men in business attire seated at a table, leaning over a printed document together, one holding a pen and a laptop open beside them',
          caption:
            'Declaring the order and explaining it properly is almost always better than hoping it goes unnoticed — the police check will usually surface it anyway.',
        },
      },
      {
        heading: 'How the Department Can Use an Order That Never Became a Conviction',
        paragraphs: [
          "The character test in Section 501(6) of the Migration Act is best known for the 'substantial criminal record' limb, which needs a sentence of 12 months or more. An ADVO on its own gets nowhere near that. Two other limbs, however, are written so that no conviction is required at all.",
        ],
        subsections: [
          {
            heading: 'Past and present general conduct — Section 501(6)(c)',
            paragraphs: [
              "A person does not pass the character test if, having regard to their past and present criminal conduct or their past and present general conduct, they are not of good character. The Department's own guidance in Ministerial Direction 110 describes the general conduct limb as allowing a broader view of character where convictions may not have been recorded, or where the conduct was not a criminal offence at all. The allegations underlying an ADVO sit squarely in that territory. The courts have said the test is about enduring moral qualities rather than reputation, and that recent good conduct must be given due weight — so an isolated incident is rarely enough by itself, but a pattern is a different matter.",
            ],
          },
          {
            heading: 'Risk of harassing, intimidating or stalking — Section 501(6)(d)(ii)',
            paragraphs: [
              "A person also fails the character test if, were they allowed to enter or remain in Australia, there is a risk they would harass, molest, intimidate or stalk another person here. Direction 110 states the ground is engaged where there is more than a minimal or remote chance of that conduct, and it expressly lists 'conduct that could be construed as harassment or intimidation' as relevant whether or not it breaches the terms of an apprehended or domestic violence order. Because the test looks forward, the decision-maker is interested in what the ADVO application alleges, what has happened since, and whether the order has been complied with.",
            ],
          },
          {
            heading: 'Cancellation of a temporary visa — Section 116(1)(e)',
            paragraphs: [
              "If you hold a temporary visa while your application is pending — including a bridging visa — there is a further power that does not go through the character test at all. Section 116(1)(e) allows the Minister to cancel a visa where satisfied that the holder's presence in Australia is or may be, or would or might be, a risk to the health, safety or good order of the Australian community or a segment of it. The threshold language is deliberately wide. A cancellation under this section is normally preceded by a notice of intention to consider cancellation, and the response to that notice is the moment to put your side properly.",
            ],
          },
        ],
      },
      {
        heading: 'Direction 110 on Family Violence — and the Change Coming on 31 October 2026',
        paragraphs: [
          "Where the Department does move to refuse or cancel a visa under Section 501, the decision-maker — and the Administrative Review Tribunal on any review — must apply Ministerial Direction 110, which commenced on 21 June 2024. Whether the conduct constituted family violence is one of its five primary considerations, and the Direction is explicit that this consideration applies not only where there has been a conviction or a finding of guilt, but also where there is information or evidence from independent and authoritative sources indicating the person has been involved in perpetrating family violence, provided the person has been given procedural fairness. A police ADVO application, supported by a statement and a court order, is the kind of material that description is aimed at.",
          "Two further points in Direction 110 matter for anyone with an order. Acts of family violence are listed among the types of conduct the Government and community view very seriously 'regardless of whether there is a conviction for an offence or a sentence imposed'. And the definition of family violence is deliberately broad: it covers violent, threatening or other behaviour that coerces or controls a family member or causes them to be fearful, with examples including repeated derogatory taunts, unreasonably denying a family member financial autonomy, and preventing them from keeping connections with family, friends or culture. The Direction also warns that the inherent nature of family violence is so serious that even strong countervailing considerations may not be enough to prevent refusal or cancellation.",
          "That framework is about to be replaced. Ministerial Direction 123 was signed on 18 September 2026 and commences on 31 October 2026, revoking Direction 110. On what has been published so far, it reduces the primary considerations to four — protection of the Australian community, whether the conduct constituted domestic or family violence, the expectations of the Australian community, and the best interests of minor children including child victims — and moves the strength and duration of a person's ties to Australia down to an 'other' consideration. The definition of domestic and family violence is reported to be broader again, extending to conduct such as stalking, image-based abuse and breaches of protection orders. Practitioners expect it to apply to any decision made on or after 31 October, regardless of when the application was lodged. The direction of travel is clear: an ADVO is going to carry more weight in character decisions from the end of this month, not less.",
        ],
      },
      {
        heading: 'Where Charges Sit Alongside the Order',
        paragraphs: [
          "Many ADVOs arrive together with a charge — common assault, intimidation, or damaging property — and the way the criminal matter resolves shapes everything that follows. Direction 110 notes that a person who does not already fail the character test, and who is facing charges in an Australian court that have not been finalised, would not generally be considered under Section 501 until those charges are determined. In other words, the Department usually waits for the Local Court. That makes the criminal result the single most important variable, and it is why we want to be involved before a plea is entered, not after.",
          "A conviction changes the analysis in two ways. It gives the Department proven conduct rather than allegations, and if the sentence reaches 12 months — including an intensive correction order served in the community — it becomes a substantial criminal record under Section 501(7). The same applies to a conviction for breaching the ADVO itself. A text message, a visit, or a message passed through a relative can each be a contravention under Section 14, and a breach conviction is both a fresh offence and strong evidence on the forward-looking risk limb of the character test.",
        ],
        subsections: [
          {
            heading: 'A common Western Sydney scenario',
            paragraphs: [
              "A man in Fairfield holding a bridging visa, with a partner visa application lodged, is served with a provisional ADVO after police attend an argument at home. No charge is laid. At the first mention the order becomes interim, and on advice he consents to a final order without admissions to bring the matter to an end. His migration position is now this: he must notify the Department in writing under Section 104 and provide the order; the Department may write asking him to comment on the allegations; and the material in the police application can be weighed under Section 501(6)(c) and (d) and, if the Department takes the view that it amounts to family violence, under the primary consideration in the Direction. Handled well — prompt disclosure, a clear account of what happened, evidence of compliance with the order, and where appropriate evidence of counselling or support — these matters are frequently resolved with the visa granted. Handled badly, the same facts can end the application.",
            ],
          },
        ],
      },
      {
        heading: 'Practical Steps If You Hold an Order and Have a Pending Application',
        paragraphs: [
          'The order in which things are done matters. Our usual advice is:',
        ],
        bullets: [
          'Read every condition on the order and comply with all of them from the moment you are served — contact through messages, social media or a third party is still contact',
          'Get criminal and migration advice before you decide whether to consent, contest the order, or enter a plea on any accompanying charge',
          'Notify the Department in writing under Section 104 using Form 1022, attach the order, and keep proof of lodgement',
          'Start collecting independent material now: evidence that the order has been complied with, any counselling or support you have engaged with, and character references from people who know the circumstances',
          'If a notice of intention to consider cancellation or a natural justice letter arrives, treat the response deadline as fixed — these letters are the chance to be heard, and they are not extended lightly',
          'If a refusal or cancellation decision is made, check the review period immediately; character decisions reviewed by the Administrative Review Tribunal run on very short timeframes',
        ],
      },
      {
        heading: 'Where We Can Help',
        paragraphs: [
          "ADVO matters and visa applications are usually treated as two separate problems handled by two separate people, and the gaps between them are where clients get hurt. Our principal solicitor, Sayed Rahmatullah Hussainizada, appears in ADVO and related criminal proceedings in the Local Court and handles the migration consequences in the same file. That means advice on consent or a plea is given with the Migration Act in view, the Section 104 notification is done properly and on time, and any response to the Department is built around the considerations the decision-maker is actually required to apply. We can also act on review before the Administrative Review Tribunal if a decision goes against you.",
        ],
      },
    ],
    closing: [
      "An ADVO without a conviction is not the end of a visa application, but it is not something to leave sitting quietly in the hope nobody asks. The Migration Act requires you to disclose it, and the character framework gives the Department several ways to take it into account. With Direction 123 commencing on 31 October 2026, the weight given to family violence allegations in these decisions is only going to increase.",
      "If you have been served with an order, or you have an order and an application in the system at the same time, bring the paperwork to us early. We will tell you plainly what it means for your visa and what needs to happen next, in English or Dari.",
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
