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

export const HOME_IMAGES = { hero: IMG.homeHero, principal: IMG.principal }
export const CONTACT_IMAGES = { map: IMG.fairfieldMap }
export const PRACTICE_IMAGES = {
  criminalHero: IMG.criminalHero,
  criminalPortrait: IMG.criminalPortrait,
  immigrationHero: IMG.immigrationHero,
  immigrationAudience: IMG.immigrationAudience,
  immigrationWhy: IMG.immigrationWhy,
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
    metaTitle: 'Criminal Lawyers Fairfield & Sydney',
    metaDescription:
      'Court representation across NSW for traffic, assault, drug, fraud, AVO and appellate criminal matters. Bilingual defence in English and Dari.',
    eyebrow: 'Practice Area: Criminal Law',
    title: 'Criminal Defence & Court Representation',
    description:
      'Protecting your rights and delivering expert legal advocacy when it matters most. We stand by you through every stage of the legal process.',
    heroImage: IMG.criminalHero,
    servicesEyebrow: 'Specialised Legal Defence',
    servicesTitle: 'Specialised Legal Defence',
    servicesIntro:
      'Our expertise spans the full spectrum of criminal law. We provide strategic defence for cases of all complexities.',
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
          'Robust defence against common assault, GBH, and other person-to-person charges.',
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
          'Defence against white-collar crime, financial fraud, and embezzlement allegations.',
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
            'Building a bespoke defence strategy focused on your specific circumstances and intended outcomes.',
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
          'You have the right to silence under NSW law, and in almost all cases you should exercise it until you have spoken to a lawyer. Apart from giving your name and address, you are not obliged to answer police questions, and anything you say can be used as evidence against you. A poorly handled police interview is one of the most common ways people damage an otherwise defensible case. If police ask you to attend a station or take part in a recorded ERISP interview, contact us first — we will advise you on what to say, whether to participate at all, and can attend with you to protect your rights. We appear in matters at Fairfield Local Court, Parramatta District Court and the Downing Centre, and give this advice in English and Dari.',
      },
      {
        question: "Can I get bail if I've been charged with a serious offence?",
        answer:
          "Yes, bail is often achievable even for serious charges, but eligibility depends on the offence, your background, and the risks the court must weigh. Under the Bail Act 2013 (NSW) the court considers whether you are an 'unacceptable risk' of failing to appear, committing further offences, interfering with witnesses or endangering the community, and certain serious offences carry a 'show cause' requirement you must overcome first. A well-prepared application — addressing stable accommodation, employment, sureties and proposed conditions such as reporting or curfews — dramatically improves your prospects. We prepare detailed bail applications for the Local, District and Supreme Courts, and can act urgently when police bail has been refused and you are due in court the next morning. Advice is available in English and Dari.",
      },
      {
        question: 'How long does a criminal case usually take to resolve?',
        answer:
          'Timelines vary widely depending on the court and the complexity of the matter. A guilty plea to a minor traffic or summary offence in the Local Court may be finalised within one to three months, while a defended hearing takes longer, and an indictable matter committed to the District or Supreme Court can run for twelve months or more through committal, arraignment and trial. Adjournments, the service of the brief of evidence, expert reports and negotiations with the prosecution all affect the schedule. At your first consultation we map out the likely stages and a realistic timeframe for your specific charges, so you can plan around court dates and any bail conditions. We keep you informed at every step and explain each stage in English or Dari.',
      },
    ],
    cta: {
      title: 'Secure Your Future with Expert Defence',
      description:
        "Don't face the criminal justice system alone. Our experienced advocates are ready to protect your interests and fight for the best possible outcome.",
    },
  },

  'immigration-law': {
    slug: 'immigration-law',
    metaTitle: 'Immigration Lawyers Fairfield & Sydney',
    metaDescription:
      'Fairfield & Sydney migration lawyers for partner, family, skilled & business visas and refusal reviews. Bilingual in English and Dari.',
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
          title: 'Qualified Immigration Lawyers',
          body: 'Your matter is handled by admitted NSW solicitors regulated under the Legal Profession Uniform Law, giving you the full protection and privilege of working with qualified lawyers.',
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
          title: 'Consultation',
          description: 'Deep analysis of your current status and desired migration outcome.',
        },
        {
          title: 'Strategy',
          description:
            'Developing a tailored roadmap to navigate complex legislative hurdles.',
        },
        {
          title: 'Processing',
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
          'Partner visa processing times depend on whether you apply onshore (subclasses 820/801) or offshore (subclasses 309/100), your country of origin, and how complete your application is when lodged. As a guide, the Department of Home Affairs currently finalises most partner visas within roughly 12 to 24 months, though strong, well-evidenced applications are often decided faster. The key is proving a genuine and continuing relationship through financial, social, household and commitment evidence that meets the legal criteria. We prepare partner visa applications end to end — assembling evidence, drafting statements, and responding to requests for further information — and we do this in English and Dari so nothing is lost in translation. If you hold a bridging visa during processing, we also advise on your work and travel rights.',
      },
      {
        question: 'Can I apply for a visa while my current one is expiring?',
        answer:
          'Yes. If you lodge a valid application for a substantive visa while you are lawfully in Australia, you will generally be granted a Bridging Visa A (BVA), which lets you remain in the country lawfully while your application is decided. The BVA usually comes into effect when your current visa expires, and its conditions — such as work or study rights — depend on the visa you applied for. If you need to travel overseas during processing you may need a Bridging Visa B before you leave. Timing is critical: applying before your current visa expires protects your status, while letting it lapse can leave you unlawful and limit your options. We track these deadlines for our clients and advise on bridging arrangements in English and Dari.',
      },
      {
        question: 'What happens if my visa is refused?',
        answer:
          'If your visa is refused you often have a right to seek a merits review — most commonly at the Administrative Review Tribunal (ART), which replaced the Administrative Appeals Tribunal in October 2024 — and strict deadlines apply, sometimes as little as 21 days from notification. The tribunal looks at your case afresh and can overturn the original decision, but missing the deadline usually ends your review rights permanently. Depending on the refusal, options may include tribunal review, addressing the specific grounds in a fresh application, or in limited cases judicial review in the Federal Circuit and Family Court. Acting quickly is essential. Contact us the moment you receive a refusal so we can confirm your deadline, obtain the decision record, and advise the strongest path forward — in English or Dari.',
      },
    ],
    cta: {
      title: 'Begin Your Australian Journey',
      description:
        'Connect with our specialised immigration lawyers for a confidential and thorough assessment of your visa options.',
    },
  },

  conveyancing: {
    slug: 'conveyancing',
    metaTitle: 'Conveyancing Solicitors Fairfield & Sydney',
    metaDescription:
      'Fairfield & Sydney property solicitors for purchase, sale, off-the-plan, title transfers & strata title. Bilingual in English and Dari.',
    eyebrow: 'Property Law Specialists',
    title: 'Seamless Property Transactions & Expert Advice.',
    description:
      'Hussaini Law Group provides distinguished legal counsel for your most significant assets. From first-time buyers to portfolio investors, we ensure your property transition is handled with meticulous precision.',
    heroImage: IMG.conveyancingHero,
    servicesEyebrow: 'Specialised Property Services',
    servicesTitle: 'Specialised Property Services',
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
          'Specialised advice on by-laws, levies, and management statement compliance.',
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
          'Both a licensed conveyancer and a property solicitor can handle the transfer of title, but a solicitor is a qualified lawyer who can also advise on the broader legal issues a transaction can raise — tax and stamp duty implications, contract disputes, trusts and company purchases, estate planning, and problems with easements, covenants or title defects. If something goes wrong or a dispute arises, a solicitor can act for you without referring the matter on. For most buyers and sellers in NSW the cost difference is modest, while the protection is significant. Hussaini Law Group provides full legal oversight on every conveyancing matter — residential, off-the-plan, strata and commercial — so you receive complete advice from contract to settlement, available in English and Dari.',
      },
      {
        question: 'When should I involve a lawyer in my property purchase?',
        answer:
          'Ideally before you sign anything. In NSW the contract for sale is prepared by the vendor, and once you sign and exchange you are legally bound, often with only a short cooling-off period (and none at auction). A pre-signing contract review is the single most valuable step you can take: we check the title, zoning, easements and covenants, special conditions, disclosure documents, and the deposit and settlement terms, and we negotiate changes before you commit. This is where undisclosed problems and unfavourable clauses are caught — afterwards your options are far more limited. Send us the contract as soon as you are seriously interested in a property and we will review it promptly, explaining anything unclear in English or Dari.',
      },
      {
        question: 'How long does a standard settlement take?',
        answer:
          'Most standard residential settlements in NSW occur 42 days (six weeks) after exchange of contracts, though 30, 60 or 90-day periods are also common and the timeframe is negotiable between buyer and seller. The settlement period gives you time to arrange finance, complete inspections and searches, pay stamp duty, and have your lender ready to disburse funds. Off-the-plan purchases settle when the development is registered, which can be months or years away. Delays usually stem from finance approval or unresolved contract conditions, so we coordinate closely with your lender, the other side and the PEXA platform to keep settlement on track and avoid penalty interest. We manage the entire timeline for you and keep you updated in English or Dari.',
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
    metaTitle: 'Commercial Lawyers Fairfield & Sydney',
    metaDescription:
      'Fairfield & Sydney commercial lawyers for structuring, contracts, sale of business, disputes & debt recovery. Bilingual in English and Dari.',
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
          'Strategic optimisation of entity frameworks to ensure tax efficiency, operational fluidity, and robust liability protection for emerging and established enterprises.',
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
          'Meticulous due diligence and transaction management for mergers, acquisitions, and asset transfers to maximise value and minimise risk.',
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
          title: 'Decades of Specialisation',
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
    faqs: [
      {
        question: 'Do I need a lawyer to start a business in NSW?',
        answer:
          'You are not legally required to use a lawyer to start a business, but getting your structure and contracts right at the outset prevents far costlier problems later. Early legal advice helps you choose the right structure (sole trader, partnership, company or trust), register correctly, protect your business name and intellectual property, and put enforceable agreements in place with co-founders, suppliers and customers. Decisions you make now affect your tax position, your personal liability, and your ability to raise capital or sell the business later. We advise founders and established enterprises across Fairfield and Greater Sydney on structuring, shareholder and partnership agreements, leases and contracts, and we explain the commercial and legal trade-offs in plain language — available in English and Dari.',
      },
      {
        question: 'What should a commercial contract include to protect my business?',
        answer:
          'A well-drafted commercial contract clearly defines the parties, the scope of the goods or services, the price and payment terms, and the timeframe for performance. Beyond the basics, the clauses that protect you most are the ones dealing with what happens when things go wrong: termination rights, dispute resolution, limitation of liability, warranties and indemnities, confidentiality, and ownership of intellectual property. Vague or generic "template" contracts are a leading cause of business disputes because they leave key risks unaddressed. We draft and review commercial agreements — supply, services, shareholder, partnership and sale-of-business contracts — to make sure your interests are protected and the document is enforceable under Australian law. We can prepare and explain your contracts in English and Dari.',
      },
      {
        question: 'How can I recover money a customer or client owes my business?',
        answer:
          'Recovering money owed to your business usually starts with a formal letter of demand setting out the debt and a deadline to pay, which often resolves the matter without court. If the debtor still does not pay, the next steps depend on the amount: smaller claims proceed through the NSW Local Court, larger debts go to the District or Supreme Court, and for company debtors a statutory demand under the Corporations Act can be a powerful tool. Acting promptly matters, because debts become harder to recover over time and limitation periods apply. We manage the whole process — demands, proceedings and enforcement of judgments — in a commercial, cost-effective way, and keep you informed in English and Dari.',
      },
      {
        question: 'Which business structure is right for me — sole trader, company or trust?',
        answer:
          'The right structure depends on your goals, your risk profile and your tax position. Operating as a sole trader is simple and inexpensive but exposes your personal assets to business liabilities. A company provides limited liability and credibility but carries reporting obligations and running costs. A trust can offer asset protection and tax flexibility, and many businesses use a combination — for example, a company acting as trustee of a trading trust. The structure you choose affects your liability, tax, ability to bring in investors, and how easily you can sell or restructure later. We assess your circumstances, recommend a structure that fits, and set it up correctly with the right agreements — with advice available in English and Dari.',
      },
    ],
    cta: {
      title: 'Ready to Secure Your Business Future?',
      description:
        'Connect with our senior partners today for a comprehensive evaluation of your commercial legal requirements.',
    },
  },

  'civil-litigation': {
    slug: 'civil-litigation',
    metaTitle: 'Civil Litigation Lawyers Fairfield & Sydney',
    metaDescription:
      'Fairfield & Sydney civil litigation lawyers for debt recovery, contract disputes, NCAT applications & mediation. Bilingual in English and Dari.',
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
          'Alternative dispute resolution strategies designed to achieve favourable outcomes without the protracted costs of a courtroom trial.',
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
    faqs: [
      {
        question: 'What is NCAT and what kinds of disputes does it handle?',
        answer:
          'NCAT — the NSW Civil and Administrative Tribunal — resolves a wide range of everyday disputes more quickly and informally than the courts. Its jurisdiction includes residential and retail tenancy disputes, consumer and trader claims, building and home-renovation disputes, strata and community-scheme matters, guardianship, and the review of certain government decisions. Proceedings are designed to be accessible, and in many matters parties represent themselves, though complex or high-value cases benefit from legal representation (which sometimes requires the tribunal’s leave). Strict time limits and procedural rules still apply. We advise clients on whether NCAT or a court is the right forum, prepare the evidence and submissions that win cases, and appear on your behalf — with support in English and Dari.',
      },
      {
        question: 'How long do I have to start a civil claim in NSW?',
        answer:
          'In NSW most civil claims are governed by the Limitation Act 1969, and the deadline to start proceedings depends on the type of claim. As a general guide, claims for breach of contract and many debt and negligence claims must be commenced within six years of the cause of action arising, while personal injury and certain other claims have shorter or different periods. Once the limitation period expires you usually lose the right to sue altogether, regardless of the merits, so identifying the correct deadline early is critical. Some periods can be paused or extended in limited circumstances. We assess your claim, confirm the applicable limitation period, and act promptly to protect your rights — explaining your options in English and Dari.',
      },
      {
        question: 'Do I have to go to court to recover a debt?',
        answer:
          'No — most debts are recovered without a contested court hearing. The process typically begins with a letter of demand, and many debtors pay or negotiate once they receive formal notice that proceedings will follow. If payment is not made, you can file a claim in the appropriate NSW court, and if the debtor does not respond you may obtain default judgment without a hearing. Even after judgment, enforcement options such as garnishee orders, writs and examination notices help you actually collect the money. Court is the backstop, not the starting point. We pursue debt recovery commercially — pressing for payment quickly while keeping costs proportionate to the debt — and we keep you informed in English and Dari.',
      },
      {
        question: 'What can I do if someone breaches a contract with me?',
        answer:
          'If someone breaches a contract with you, your first step is to confirm the agreement’s terms and document the breach and any loss it caused. Common remedies include damages to compensate your loss, specific performance compelling the other party to do what they promised, or termination of the contract where the breach is serious enough. The strength of your position depends on the wording of the contract, the available evidence, and whether you have taken reasonable steps to limit your loss. Strict limitation periods also apply. We assess your contract and prospects, pursue a commercial resolution through negotiation where possible, and litigate firmly when necessary — across the NSW courts and NCAT, with advice available in English and Dari.',
      },
    ],
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
    "His approach combines meticulous legal precision with a deep understanding of the cultural nuances that impact his clients' lives. Having successfully represented thousands of clients, he is recognised for his advocacy and strategic legal counsel.",
  ],
  imageSrc: IMG.principal,
  credentials: [
    'Law Society of NSW Member',
    'Supreme Court of NSW',
    "7 Years' Experience",
    'Dari & English Speaking',
  ],
}
