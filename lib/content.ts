import type { FaqItem } from '@/components/ui/FaqAccordion'
import type { ProcessStep } from '@/components/ui/ProcessSteps'
import type { FeatureSplitData } from '@/components/sections/FeatureSplit'
import type { SpotlightData } from '@/components/ui/Spotlight'

export type SubService = {
  icon: string
  title: string
  description: string
  large?: boolean
  bullets?: string[]
}

export type PracticeAreaContent = {
  slug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  description: string
  heroImage: string
  servicesEyebrow: string
  servicesTitle: string
  servicesIntro: string
  /** Optional bordered quote/testimonial rendered under the services intro. */
  spotlight?: SpotlightData
  services: SubService[]
  /** "Who We Advocate For" style block — rendered after services, before process. */
  audienceSection?: FeatureSplitData
  process?: { eyebrow: string; title: string; intro: string; steps: ProcessStep[] }
  /** "Why Choose Us" style block — rendered after process, before FAQ. */
  whyUsSection?: FeatureSplitData
  faqs?: FaqItem[]
  cta: { title: string; description: string }
}

// Stitch CDN images — preserved verbatim from the design mockups.
const IMG = {
  criminalHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC93ExUYfBMc4axw2g95xuyntWlVhFYBHdulN59qu1nodWBkln-M7YYVnfVKLS2IDzSIdoT5O_DYRoBTaFSu7VwJnXFtmcE9lFCRWBLZg8dtu6VYMw-qj1AWrpbcNKdCMmQSodPjlSSLTcS4nNkxZM09EAy4z1ZSVvruG6iDD9oa9z-yvvB4arwNkYKtNofO2uj8n22z27DnwfRLfC0pfQOJnPei8Bv2Rmh7nju2zz8I0-velf1Xf6HYGbCuWSVSAL3hivQME8xsWs',
  immigrationHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAV38Se0agrIQSA4gF1cKiYOW1JeXbuX0OpQYu4xcsXYbZUqf7Z66CypBVU7boRSeQzv8nmpSu3XqPKpTXJymDXMfG5Sb946EoN_1hpWpmFoyfyKZUOcoxioHGG-jfmX-0aVRfsf7t6HovPrB-Bz8doCHkfSaiZY7w-pYfjuWu7MxQMnAhRxRwy8oqyo2GU-DGnPiueNGDTOG9przHFTc6y8XUmAypMieK5Z_vm5u5myYYiXy6QSxvYHHzATTntS8K87fympF1FqU8',
  familyHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAGk-JCXaFGtpjaXbCqwGff5gEVww1Fbl4tMsHmsT1VFbFf6PsAEc5Whki87FHgQf_yGrfvFZ3m-q1g7qDftpEyuIjgQ2R6OdLtdgKMF_W5tziMooH8QKPJYITC7TvNExCXoejstIPveTe9_7bGsXqhPflVy7KlnBGeea6Nbd73IcU3npvwUAlFnUzAhxrQzTPFBoVhrzdLhPwbHxIUq9qkfYvboN7r9HydkGodILMjOnCWKW9Wk5-kX4JgLuUieRukYmw80HQqVKE',
  conveyancingHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC9yDwho8tMQ5Q7i5ImKb6UXHAcwopXukAGYPXhj24YKrFxoW065brXfxRRjirx3pearNHrZGjZGxFXSBWMTime_-UGHG4gKYExdHKGORhpfv_ty6dU4Vhu_InRYg1pF88BIc2UbuTW7UmVP8RfDpPg1-gvQeu3f6x2kYFJcjSortfr9A7JtKUfzKMJsLRpNovQBYJEnuCBEGC5_gy1Kj3uNq8E1_FnWrWjHd681vp2GKeXEyWOULMJkVf1wAIqihw7yCwM0CG1Kbk',
  commercialHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCtYrRP326wa77jiLBYWQp2-SMZMto6Bep_paQPrbh08C-sWT9RnnVvVGRZoNzIo5u4qwj2fQDMXkOLtwItJJhC7GAAs02E5qvklpklOPp20aKfekR5BchxP430yVJmT7NA60LmwLC8RHhysJWXKs4VOwMjQk22MGjxsw8vgr2isQHWHZyMV16CwGUY98BYPQktViBv8T3hmpK3RqafcAcypeamyWA4YD1gYR-uy0PGiMFT_SoUosu7yusR8sINwBC4xyGdGR02WqA',
  civilHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCok8M1cTTk3H6JARN0KOeHiLxSsTEJKGg2jnyV4T3kRZhex0GJQ5UKc5xUyBfSntw0X5i29yZvbneHZ7nXLQkl95BJGc5srgw0LP_l1nkhrgTUfdD71XIX_Qb5AZKUNEg5nJriox7wHO6OoTJHe6TLbe9RYYPQ96JyyMOmiqAvZl5ilWyp1RmR7rolkcuNuYFyMdIYQ_AQ_VtvVjj4uQcft_VvM19du6OEZT-J0T-5Pmb6tJ4JHS2SY7Z2WAPu6Pn5sziTmQPzHQM',
  principal:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBBOQtrMwwpZnaMcu729MuX6E3qrtD_J0lzXHCMpN8eS7PBVTwo8dkqyw2J2TMXq31l0iKQGYyAhnum_DbF7CbNvlEYk1hFMmNrcNr0vNgqdLAFWUlFMyOH8KGK8OSax2qVbnms21T5XoHYU4XwCukFldyt5iAVz0oNPm5ruohFqLBo9_HPCYl16VQNmWIVCaSd7QoxT9E3zFhnBhVX3Qxd7s9qhNt612TsqbwvzJPLH_re90IyqTHEvotjMXzI7pY2AnsBGEitLK0',
  homeHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBVUFDZLA93SDC-VAdpUdyOG1hqPFDtEWEb5HSazWEaA0gz_50Qq5oDkMcfdulksTo8u9a42pBC8uyK8cduBRsOpwRaTqvzwIShvI9ScvVUe9pEvQ_RUi1myP-Hjkw0drwVqnrKSmLjY-OsfSEpXRzmboT_iXePTSHtCjrFMmDWKijF1huUVLEUuKXmBYLcRAC5WseKKw1l1Vt12lltdzzl5ptuARyU-4v95dmhBiLSkyb0vzTGMYzUqaaS2ZRR8QhP8-cfeh_rLxU',
  fairfieldMap:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD3cRTVyox-UyEIdqRbz8LrrgVZ299P4-rpe7rq_lyHdyraPcL9DZTnUvxX6smSqOh3odo5NhID5XhLnfaxSc3c_aSQjPksA69As4VvBOX9daIYJcluOfwOKzmqQmrP3yg2GWUup7IpjhuC-uk34uUjsV-uPb44IxsAB776t6l488uYPDN5OEQT1aV7iMsBRDU1-pTLiSnIb5EKqBmY5JqCFr05Rv6h-oCASGgAxmdvpZvFtxz1pjxeosiXb5B2PE8RVhfqVWedXJo',
  immigrationAudience:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuADFG83e4I3Nn1_6LEWofMhARVkhlLnaSwS97D4ETxpALAtw8SOLFgatuqGwzuRKnfyjzcdYDFai3J-bQS5RQXfLrShxWpfwVHP2g3ZgKPpQdFgXqri2SPMQI7kd3AYqJuUYKs1JHc4waN5sSEfBYgpVWTKOKXd_Au5lBvzZNM5D3-AKV2AvkoZrTuLRcXaTXnnY2PWijBVnKnwbmJjWxDnkpiuyuBt-TS9rZLLPuCPXaDTzUNT2V5zVcejCw8YuBbWExGNfEEYR_o',
  immigrationWhy:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCHvgc0MC-ybx5b9Y3nagaKKP1380metmN_xRHr_4H4sVSc9V0Ox19K2URU1NC7xaOWsHJ1NFWoW8fEDULiYbtb4IA5Q9lOAMWMAdKByEQihCDBEjGYdkyV52pLnjI9g2CbY44W8ci7M7-pJLNC362z82cH7X1eQhP1qU4djxZ-xqngmAbNRgenHWJwb-5kNwU7-lLwCeWnSMB8pyoSnIgz3Xp_MzqMN_zjR0-Wn9SvNien1OqY6LMJdsyv_CVzXsW1zqNFO4beOKU',
  commercialWhy:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBHJRRS31q-zRHNmCTjOimxV2rYA3W4lwJY29QPjMtP_uZkCc7KeLTYrolfFbmf5-oNHR-bpR6tQxEec-ObfTtzAlgJva5gkR2Fq5gTCeqCKFMBalrBiOFr63_V-2gtsfydzt5ZG5871Wk7ShQaq8IQVepE3IB-LVqdPc1MPTC76N0IDscGnwuh-ckvalxhVxWG7PNEald3FgLIrIeocuSvwSIuh2dGJYz1AGvfg5o2gwwoiJKot6KzD2YiHO_pXw-3GHYBszQgqfM',
  criminalPortrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD3OtmuR-3GUSIZQ664VieIHqaqwThsLDWFt2TC9_l4sPs_V7FYIjtkDwFIVANeF8S20zqE14ZOuLFGQdn8R0sf7DZr-oP-pkuw_4Hj_KgQHD5SHTgqqSwkAgmKy4XB6BR6xy50QHR9zaxs_spBfGSIT7FAZ84jxqhZdb5cHfEfUy1TRCASVgH1VjItubBuIeZUyr6X74VGbaYESbnhtj79GrQCiJOEVZMDdfWps-yZkgllhTcl1APKQP3bdsch5FnGSOFIZKsrzRQ',
  conveyancingProcess:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC3T-jvhmW_nUwVgY7R27IV9K4w3IfR3JKjKpKVRTvvWxgTdL4faXvcuYRVEuG1ViEPro3ur_OgRgOkMvNi8X4yUnH4lfWfv-n3MXAMC9N0rFguQ9zeW7KFPUic14FlhjOISLXSz1sQfzVxrn3GS0Zw8Ta_XwYaV6omR5QEBBNcD-JjueLchW0XhfZPZz3avBumTcdgH7bkIQp47Dwi_q1QRL1-aPuSygJyWCb4dH3pvrTiw1ANSPFVduXOSZKy3AJacnAs1gVsFYI',
  civilProcess:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCUlNLEFf_MF-Bd78eHb1b5dnYcZgezYfpPKV4zX1Y3FRZBj7VCUbatexfsmYubckWIUHqguAIChh6c-3z93-t8-HjKgSwxzDaoi3Krhb0rzQlTUJ2L_VUNUa-7r3OscnW_GZDA0cEHW6jA8YHH2PsqFNZQ8QFae4oBCHzxI3Q7y6T6F0myVnmcErsDx9qnhL218iHDKnk0d59evjmmGuwABm2cfi5QsIFZfFKU-Ebwf3AcpFvExIQBhbH6aRknuThq7loqGd112Pg',
}

export const HOME_IMAGES = { hero: IMG.homeHero }
export const CONTACT_IMAGES = { map: IMG.fairfieldMap }
export const PRACTICE_IMAGES = {
  criminalHero: IMG.criminalHero,
  criminalPortrait: IMG.criminalPortrait,
  immigrationHero: IMG.immigrationHero,
  immigrationAudience: IMG.immigrationAudience,
  immigrationWhy: IMG.immigrationWhy,
  familyHero: IMG.familyHero,
  conveyancingHero: IMG.conveyancingHero,
  conveyancingProcess: IMG.conveyancingProcess,
  commercialHero: IMG.commercialHero,
  commercialWhy: IMG.commercialWhy,
  civilHero: IMG.civilHero,
  civilProcess: IMG.civilProcess,
}

export const PRACTICE_AREAS: Record<string, PracticeAreaContent> = {
  'criminal-law': {
    slug: 'criminal-law',
    metaTitle: 'Criminal Law',
    metaDescription:
      'Court representation across NSW for traffic, assault, drug, fraud, AVO and appellate criminal matters. Bilingual defence in English, Dari, Pashto and Arabic.',
    eyebrow: 'Practice Area: Criminal Law',
    title: 'Criminal Defense & Court Representation',
    description:
      'Protecting your rights and delivering expert legal advocacy when it matters most. We stand by you through every stage of the legal process.',
    heroImage: IMG.criminalHero,
    servicesEyebrow: 'Specialized Legal Defense',
    servicesTitle: 'Specialized Legal Defense',
    servicesIntro:
      'Our expertise spans the full spectrum of criminal law. We provide strategic defense for cases of all complexities.',
    services: [
      {
        icon: 'cases',
        title: 'Court Representation',
        description:
          'Professional advocacy in all NSW courts, from the Local Court to the Supreme Court and beyond. We prepare every case as if it were going to trial.',
        large: true,
        bullets: [
          'Bail Applications & Variations',
          'Sentencing Hearings',
          'Jury Trials & Defended Hearings',
        ],
      },
      {
        icon: 'directions_car',
        title: 'Traffic Offences',
        description:
          'Protecting your license and livelihood from drink driving and other major traffic charges.',
      },
      {
        icon: 'sports_kabaddi',
        title: 'Assault',
        description:
          'Robust defense against common assault, GBH, and other person-to-person charges.',
      },
      {
        icon: 'medication',
        title: 'Drug Offences',
        description:
          'Handling possession, supply, and manufacture charges with meticulous strategy.',
      },
      {
        icon: 'payments',
        title: 'Fraud',
        description:
          'Defense against white-collar crime, financial fraud, and embezzlement allegations.',
      },
      {
        icon: 'history',
        title: 'Appeals',
        description: 'Challenging convictions and severity of sentences in higher jurisdictions.',
      },
      {
        icon: 'home_pin',
        title: 'Domestic Violence',
        description: 'Navigating ADVOs and related charges with sensitivity and firm legal footing.',
      },
    ],
    process: {
      eyebrow: 'The Methodology',
      title: 'Our Rigorous Advocacy Process',
      intro:
        'How we prepare, protect, and prevail for our clients in the criminal justice system.',
      steps: [
        {
          title: 'Case Analysis',
          description:
            'A meticulous review of police evidence, witness statements, and legal precedents to identify critical weaknesses.',
        },
        {
          title: 'Strategy Development',
          description:
            'Building a bespoke defense strategy focused on your specific circumstances and intended outcomes.',
        },
        {
          title: 'Strong Advocacy',
          description:
            'Relentless representation in court, using deep procedural knowledge to fight for your rights.',
        },
      ],
    },
    faqs: [
      {
        question: 'What should I do if the police want to interview me?',
        answer:
          'You have the right to silence. We strongly advise contacting a lawyer before providing any formal statements. Anything you say can and will be used against you in court. Our advocates can be present during interviews to ensure your rights are protected.',
      },
      {
        question: "Can I get bail if I've been charged with a serious offence?",
        answer:
          "Bail eligibility depends on several factors including the nature of the offence, your criminal history, and the likelihood of appearing in court. In NSW, some offences have a 'show cause' requirement. We specialize in complex bail applications to secure your release while awaiting trial.",
      },
      {
        question: 'How long does a criminal case usually take to resolve?',
        answer:
          'Timelines vary significantly. A simple traffic matter might be resolved in a few months, whereas a complex Supreme Court jury trial can take over a year. We provide realistic timelines during your initial consultation based on the specifics of your case.',
      },
    ],
    cta: {
      title: 'Secure Your Future with Expert Defense',
      description:
        "Don't face the criminal justice system alone. Our experienced advocates are ready to protect your interests and fight for the best possible outcome.",
    },
  },

  'immigration-law': {
    slug: 'immigration-law',
    metaTitle: 'Immigration Law',
    metaDescription:
      'Sydney migration lawyers for partner, family, skilled, business and AAT-review visa matters. Bilingual service in English, Dari, Pashto and Arabic.',
    eyebrow: 'Specialised Legal Services',
    title: 'Immigration Law',
    description:
      'Navigating the complexities of global mobility with precision, heritage, and unwavering advocacy for your future in Australia.',
    heroImage: IMG.immigrationHero,
    servicesEyebrow: 'Strategic Pathways',
    servicesTitle: 'Strategic Pathways to Your Aspiration',
    servicesIntro:
      'At Hussaini Law Group, we understand that migration is more than a legal process; it is a life-defining transition. Our Sydney-based team provides elite advisory services for high-stakes immigration matters, ensuring every detail of your application is meticulously crafted.',
    spotlight: {
      quote:
        'Precision in documentation is the bridge between uncertainty and a successful migration outcome.',
    },
    services: [
      {
        icon: 'family_history',
        title: 'Partner & Family',
        description:
          'Securing visas for spouses, de facto partners, and family members with a focus on genuine relationship evidentiary standards.',
        large: true,
        bullets: ['Spouse / Partner Visas', 'Parent & Child Visas'],
      },
      {
        icon: 'work',
        title: 'Skilled Migration',
        description:
          'Expert navigation of points-based systems and employer-sponsored streams for professionals and trade specialists.',
        bullets: ['Subclass 189 / 190 / 491', 'Employer Sponsorship (482 / 186)'],
      },
      {
        icon: 'account_balance',
        title: 'Business & Investor',
        description:
          'High-level advisory for high-net-worth individuals seeking significant investment or business innovation visas.',
        bullets: ['Significant Investor (188C)', 'Business Innovation (188A)'],
      },
      {
        icon: 'gavel',
        title: 'Appeals & Merits Review',
        description:
          'Representation at the Administrative Appeals Tribunal (AAT) for visa cancellations or refusals.',
        bullets: ['AAT Review Representation', 'Judicial Review Liaison'],
      },
    ],
    audienceSection: {
      eyebrow: 'Our Clients',
      title: 'Who We Advocate For',
      image: IMG.immigrationAudience,
      imageAlt: 'A diverse professional group in a modern boardroom',
      imagePosition: 'left',
      tone: 'dark',
      badge: { value: '20+ Years', label: 'Combined Expertise' },
      items: [
        {
          icon: 'corporate_fare',
          title: 'Multinational Corporations',
          body: 'Ensuring seamless talent transfer and regulatory compliance for international workforces.',
        },
        {
          icon: 'person_pin',
          title: 'Private Clients',
          body: 'Bespoke migration strategies for high-net-worth individuals and their families.',
        },
        {
          icon: 'school',
          title: 'Specialist Talent',
          body: 'Researchers, athletes, and artists seeking distinguished talent visas.',
        },
      ],
    },
    whyUsSection: {
      eyebrow: 'The Hussaini Difference',
      title: 'Why Global Citizens Choose Hussaini Law',
      image: IMG.immigrationWhy,
      imageAlt: 'A luxury law firm lobby with city views',
      imagePosition: 'right',
      tone: 'light',
      cardStyle: true,
      items: [
        {
          icon: 'verified_user',
          title: 'MARA Accredited Excellence',
          body: 'Our practitioners are fully accredited and strictly adhere to the MARA Code of Conduct for Migration Agents.',
        },
        {
          icon: 'balance',
          title: 'Heritage of Advocacy',
          body: 'We bring the weight of a multi-disciplinary firm to your case, looking beyond migration to your commercial or family law needs.',
        },
        {
          icon: 'location_on',
          title: 'Sydney Expertise, Global Reach',
          body: 'Deep local knowledge of Australian immigration policy with a sophisticated understanding of international jurisdictions.',
        },
      ],
    },
    process: {
      eyebrow: 'Our methodology',
      title: 'Our Methodical Process',
      intro:
        'A clear path through complex legislation — diagnosis to citizenship.',
      steps: [
        {
          title: 'Diagnosis',
          description: 'Deep analysis of your current status and desired migration outcome.',
        },
        {
          title: 'Strategy',
          description:
            'Developing a tailored roadmap to navigate complex legislative hurdles.',
        },
        {
          title: 'Execution',
          description:
            'Rigorous documentation and submission with precision-led oversight.',
        },
        {
          title: 'Support',
          description: 'Continuous advocacy until your visa or citizenship is finalised.',
        },
      ],
    },
    faqs: [
      {
        question: 'What is the processing time for a Partner Visa?',
        answer:
          'Processing times vary depending on whether the application is made onshore or offshore. Currently, most Partner Visas are processed within 12 to 24 months.',
      },
      {
        question: 'Can I apply for a visa while my current one is expiring?',
        answer:
          'Yes, if you apply for a substantive visa while in Australia, you may be eligible for a Bridging Visa (BVA) to remain lawfully during processing.',
      },
      {
        question: 'What happens if my visa is refused?',
        answer:
          'If your visa is refused, you may have the right to apply for a merits review at the Administrative Appeals Tribunal (AAT). Strict time limits apply — contact us immediately to preserve your review rights.',
      },
    ],
    cta: {
      title: 'Begin Your Australian Journey',
      description:
        'Connect with our specialized immigration lawyers for a confidential and thorough assessment of your visa options.',
    },
  },

  'family-law': {
    slug: 'family-law',
    metaTitle: 'Family Law',
    metaDescription:
      'Sensitive family law representation for divorce, property settlement, parenting orders, child support, AVOs and de facto matters across NSW.',
    eyebrow: 'Family Law Excellence',
    title: 'Compassionate Advocacy for Family Matters.',
    description:
      'Navigating the complexities of domestic relationships with the sensitivity and expertise your family deserves. We protect your future through unwavering dedication.',
    heroImage: IMG.familyHero,
    servicesEyebrow: 'Our Family Law Expertise',
    servicesTitle: 'Our Family Law Expertise',
    servicesIntro:
      'Whether the path forward is mediation, consent orders or contested proceedings, we will guide you through with cultural sensitivity and procedural rigour.',
    services: [
      {
        icon: 'gavel',
        title: 'Divorce & Separation',
        description:
          'Strategic advice for complex marriage dissolutions, ensuring your rights and assets are protected through every stage.',
      },
      {
        icon: 'real_estate_agent',
        title: 'Property Settlement',
        description:
          'Meticulous handling of asset division, including business interests, real estate, and superannuation portfolios.',
      },
      {
        icon: 'family_restroom',
        title: 'Parenting Orders',
        description:
          'Prioritizing the best interests of children through sensitive negotiation and firm representation in custody matters.',
      },
      {
        icon: 'child_care',
        title: 'Child Support',
        description:
          "Navigating financial obligations to ensure fair and sustainable outcomes for the children's well-being.",
      },
      {
        icon: 'security',
        title: 'Intervention Orders',
        description:
          'Immediate legal protection and advocacy for domestic violence matters and personal safety intervention orders.',
      },
      {
        icon: 'diversity_3',
        title: 'De Facto Relationships',
        description:
          'Expert guidance on the legal standing and rights of partners in unregistered domestic relationships.',
      },
    ],
    process: {
      eyebrow: 'Our Workflow',
      title: 'A Measured Approach to Resolution',
      intro:
        'We follow a structured, empathetic process to ensure no detail is overlooked while minimizing the emotional strain on your family.',
      steps: [
        {
          title: 'Consultation',
          description:
            'A private session to understand your unique circumstances and define clear legal objectives.',
        },
        {
          title: 'Strategy',
          description:
            'Developing a tailored roadmap, prioritizing mediation where possible to reduce conflict.',
        },
        {
          title: 'Representation',
          description:
            'Rigorous advocacy in negotiations or court proceedings to secure the optimal outcome.',
        },
        {
          title: 'Finalization',
          description:
            'Executing all legal documents and ensuring compliance with orders for a clean transition.',
        },
      ],
    },
    faqs: [
      {
        question: 'How long does a typical divorce process take?',
        answer:
          'In Australia, you must be separated for 12 months before applying for divorce. Once applied, the hearing is typically set 2–3 months later. However, property settlement and parenting matters can be handled concurrently with the separation period.',
      },
      {
        question: 'Do we have to go to court for property settlement?',
        answer:
          'Not necessarily. Most property settlements are resolved through mediation and formalised via Consent Orders. Court is a last resort if parties cannot reach a mutual agreement through our guided negotiation process.',
      },
      {
        question: 'How are child support payments calculated?',
        answer:
          "Child support is primarily calculated by Services Australia (Child Support) based on both parents' incomes, the number of children, and the percentage of care each parent provides. We can assist in drafting Private Child Support Agreements.",
      },
    ],
    cta: {
      title: 'Begin Your Path to Resolution',
      description:
        'Our Family Law specialists are ready to provide the clarity and support you need. Book a confidential consultation today to discuss your circumstances.',
    },
  },

  conveyancing: {
    slug: 'conveyancing',
    metaTitle: 'Conveyancing & Property Law',
    metaDescription:
      'Sydney property solicitors handling residential purchase and sale, off-the-plan, title transfers, refinancing and strata-title matters end-to-end through PEXA settlement.',
    eyebrow: 'Property Law Specialists',
    title: 'Seamless Property Transactions & Expert Advice.',
    description:
      'Hussaini Law Group provides distinguished legal counsel for your most significant assets. From first-time buyers to portfolio investors, we ensure your property transition is handled with meticulous precision.',
    heroImage: IMG.conveyancingHero,
    servicesEyebrow: 'Specialized Property Services',
    servicesTitle: 'Specialized Property Services',
    servicesIntro:
      'Comprehensive legal support tailored to the Australian property market, ensuring compliance, security, and peace of mind.',
    spotlight: {
      stars: 5,
      quote:
        "The most precise and reliable conveyancing team we've ever worked with. Every detail was meticulously managed.",
      author: 'Dr. Alexander V., Property Developer',
    },
    services: [
      {
        icon: 'home',
        title: 'Residential Purchase & Sale',
        description:
          "Whether you're entering the market or liquidating an asset, our expert solicitors manage the entire contract-to-settlement lifecycle with absolute rigor.",
        large: true,
        bullets: [
          'Contract Review & Drafting',
          'Auction Representation',
          'Due Diligence & Searches',
          'Stamp Duty Calculations',
        ],
      },
      {
        icon: 'apartment',
        title: 'Off-the-Plan',
        description:
          'Mitigating risks in complex pre-construction contracts. We protect your interests against sunset clauses and building variations.',
      },
      {
        icon: 'sync_alt',
        title: 'Title Transfers',
        description:
          'Streamlined transfers for family settlements, gifting, or corporate restructuring.',
      },
      {
        icon: 'account_balance',
        title: 'Refinancing',
        description:
          'Liaising with financial institutions to secure your mortgage discharge and new registration.',
      },
      {
        icon: 'layers',
        title: 'Strata Title',
        description:
          'Specialized advice on by-laws, levies, and management statement compliance.',
      },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'A predictable path to settlement.',
      intro:
        'We believe in clarity at every milestone. Our three-step framework ensures your transaction is transparent, legally sound, and completed on schedule.',
      steps: [
        {
          title: 'Initial Review & Engagement',
          description:
            'We begin with a comprehensive review of the Contract of Sale and Section 32 Statement. Our team identifies potential "red flag" clauses and provides a plain-English explanation of your obligations and rights before you commit.',
        },
        {
          title: 'Pre-Settlement Management',
          description:
            'During the cooling-off and preparation period, we manage all mandatory searches, liaise with your financier, calculate adjustments for rates and taxes, and ensure PEXA (electronic settlement) readiness.',
        },
        {
          title: 'Electronic Settlement & Post-Completion',
          description:
            'We facilitate the secure exchange of funds and title through PEXA. Post-settlement, we lodge all necessary documentation with the Land Registry and notify relevant authorities of the change in ownership.',
        },
      ],
    },
    faqs: [
      {
        question: 'What is the difference between a conveyancer and a property solicitor?',
        answer:
          'While both can handle the transfer of title, property solicitors are qualified lawyers who can provide broader legal advice on complex issues like tax implications, property disputes, and estate planning related to your purchase. Hussaini Law Group provides this comprehensive legal oversight for every transaction.',
      },
      {
        question: 'When should I involve a lawyer in my property purchase?',
        answer:
          'Ideally, before you sign anything. A pre-signing contract review is the most critical step in protecting yourself from unfavorable conditions, undisclosed easements, or restrictive covenants that could affect your future enjoyment or resale value.',
      },
      {
        question: 'How long does a standard settlement take?',
        answer:
          'Most standard residential settlements in Australia occur 30, 60, or 90 days after the exchange of contracts. However, these timeframes can be negotiated to suit the needs of both the vendor and the purchaser. We help manage these negotiations to align with your moving or financing schedule.',
      },
    ],
    cta: {
      title: 'Speak with a property solicitor today.',
      description:
        'A pre-signing contract review is the single most cost-effective step you can take. Book a confidential consultation before you commit.',
    },
  },

  'commercial-law': {
    slug: 'commercial-law',
    metaTitle: 'Commercial & Corporate Law',
    metaDescription:
      'Sydney commercial lawyers for business structuring, complex contracts, shareholder agreements, sale of business, dispute resolution and debt recovery.',
    eyebrow: 'Commercial & Corporate Law',
    title: 'Strategic Legal Solutions for Your Business.',
    description:
      'Navigating the complexities of the corporate landscape requires more than just legal advice — it requires a strategic partnership built on precision and institutional excellence.',
    heroImage: IMG.commercialHero,
    servicesEyebrow: 'Core Corporate Expertise',
    servicesTitle: 'Core Corporate Expertise',
    servicesIntro:
      'Practical commercial advice — and the contracts to back it — for founders, family businesses and established SMEs.',
    services: [
      {
        icon: 'business_center',
        title: 'Business Structuring',
        description:
          'Strategic optimization of entity frameworks to ensure tax efficiency, operational fluidity, and robust liability protection for emerging and established enterprises.',
      },
      {
        icon: 'contract_edit',
        title: 'Complex Contracts',
        description:
          'Drafting and negotiating bulletproof commercial agreements that safeguard your interests while facilitating seamless cross-border and domestic transactions.',
      },
      {
        icon: 'groups',
        title: 'Shareholder Agreements',
        description:
          'Defining clear governance structures and dispute resolution mechanisms to align stakeholder interests and ensure long-term corporate stability.',
      },
      {
        icon: 'shopping_cart_checkout',
        title: 'Business Sale & Purchase',
        description:
          'Meticulous due diligence and transaction management for mergers, acquisitions, and asset transfers to maximize value and minimize risk.',
      },
      {
        icon: 'gavel',
        title: 'Dispute Resolution',
        description:
          'Aggressive advocacy and strategic mediation to resolve high-stakes commercial conflicts with a focus on protecting your corporate reputation and bottom line.',
      },
      {
        icon: 'account_balance_wallet',
        title: 'Debt Recovery',
        description:
          'Persistent and professional recovery strategies designed to restore cash flow through sophisticated legal channels and negotiation tactics.',
      },
    ],
    whyUsSection: {
      eyebrow: 'The Hussaini Advantage',
      title: 'Unwavering Excellence in Corporate Advocacy.',
      image: IMG.commercialWhy,
      imageAlt: 'A distinguished senior partner in a mahogany-paneled law library',
      imagePosition: 'left',
      tone: 'light',
      items: [
        {
          icon: 'verified',
          title: 'Decades of Specialization',
          body: 'Deep-rooted experience in navigating the regulatory hurdles of global and local trade.',
        },
        {
          icon: 'shield_with_heart',
          title: 'Integrity-First Approach',
          body: 'A commitment to the highest ethical standards, ensuring your reputation remains untarnished.',
        },
        {
          icon: 'psychology',
          title: 'Strategic Foresight',
          body: "We don't just solve problems; we anticipate them through rigorous risk assessment models.",
        },
      ],
    },
    cta: {
      title: 'Ready to Secure Your Business Future?',
      description:
        'Connect with our senior partners today for a comprehensive evaluation of your commercial legal requirements.',
    },
  },

  'civil-litigation': {
    slug: 'civil-litigation',
    metaTitle: 'Civil Litigation & Debt Recovery',
    metaDescription:
      'Sydney civil litigation solicitors for debt recovery, contract disputes, consumer claims, NCAT applications and mediation across NSW.',
    eyebrow: 'Civil Litigation Experts',
    title: 'Rigorous Advocacy in Civil Disputes',
    description:
      'Navigating the complexities of the Australian legal system with unwavering precision. From high-stakes debt recovery to complex contract litigation, we protect your interests with scholarly authority.',
    heroImage: IMG.civilHero,
    servicesEyebrow: 'Specialised Legal Focus',
    servicesTitle: 'Specialised Legal Focus',
    servicesIntro:
      'Local Court, District Court, Supreme Court and NCAT — we appear where the dispute requires.',
    services: [
      {
        icon: 'account_balance_wallet',
        title: 'Debt Recovery',
        description:
          'Persistent and strategic recovery of outstanding debts for corporations and individuals, leveraging statutory demands and court actions.',
      },
      {
        icon: 'gavel',
        title: 'Contract Disputes',
        description:
          'Expert interpretation and enforcement of contractual obligations, resolving breaches with clinical precision and commercial foresight.',
      },
      {
        icon: 'person_search',
        title: 'Consumer Claims',
        description:
          'Protecting consumer rights against unfair trade practices and misleading conduct under the Australian Consumer Law framework.',
      },
      {
        icon: 'balance',
        title: 'NCAT Applications',
        description:
          'Representation in the NSW Civil and Administrative Tribunal for tenancy, building disputes, and general division matters. We ensure your case is presented with technical excellence.',
        large: true,
      },
      {
        icon: 'handshake',
        title: 'Mediation',
        description:
          'Alternative dispute resolution strategies designed to achieve favorable outcomes without the protracted costs of a courtroom trial.',
      },
    ],
    process: {
      eyebrow: 'Our litigation method',
      title: 'Our Litigation Process',
      intro: 'Pragmatic, not performative — we treat litigation as a structured craft.',
      steps: [
        {
          title: 'Merit Assessment',
          description:
            'A forensic review of the facts and legal precedents to determine the viability and strength of your civil claim.',
        },
        {
          title: 'Strategic Filing',
          description:
            'Precise preparation and filing of Pleadings and Statements of Claim in the relevant jurisdiction, from Local to Supreme Court.',
        },
        {
          title: 'Aggressive Advocacy',
          description:
            'Unwavering representation during discovery, interlocutory hearings, and the final hearing to secure your rights.',
        },
      ],
    },
    cta: {
      title: 'Resolve Your Dispute Today',
      description:
        'Time is often of the essence in civil litigation. Secure your legal position with a confidential consultation with our lead counsel.',
    },
  },
}

export const TEAM_PRINCIPAL = {
  name: 'Sayed Rahmatullah Hussainizada',
  title: 'Principal Solicitor',
  bio: [
    'With a profound commitment to social justice and legal excellence, Sayed Rahmatullah Hussainizada founded Hussaini Law Group to bridge the gap between complex legal structures and the diverse communities of Sydney.',
    "His approach combines meticulous legal precision with a deep understanding of the cultural nuances that impact his clients' lives. Having successfully represented thousands of clients, he is recognized for his advocacy and strategic legal counsel.",
  ],
  imageSrc: IMG.principal,
  credentials: [
    'Law Society of NSW Member',
    'Accredited Specialist',
    'Supreme Court of NSW',
    'Migration Agent (MARN registered)',
  ],
}
