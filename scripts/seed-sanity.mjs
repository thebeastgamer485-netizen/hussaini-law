#!/usr/bin/env node
/**
 * Seed script — pushes all site content into Sanity.
 *
 * Usage:
 *   1. Create a write token at https://www.sanity.io/manage/project/ljtxphva/api#tokens
 *      (select "Editor" permissions)
 *   2. Run:
 *      SANITY_API_WRITE_TOKEN=sk... node scripts/seed-sanity.mjs
 *
 * The script is idempotent — uses createOrReplace with deterministic IDs,
 * so running it again just overwrites with the same data.
 */

import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ljtxphva'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!token) {
  console.error(`
╔══════════════════════════════════════════════════════════════════╗
║  SANITY_API_WRITE_TOKEN is required.                            ║
║                                                                  ║
║  1. Go to: https://www.sanity.io/manage/project/${projectId}/api#tokens  ║
║  2. Click "Add API token"                                        ║
║  3. Name: "Seed script", Permissions: "Editor"                   ║
║  4. Copy the token and run:                                      ║
║                                                                  ║
║  SANITY_API_WRITE_TOKEN=skXXX node scripts/seed-sanity.mjs       ║
╚══════════════════════════════════════════════════════════════════╝
`)
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// ─── Helpers ────────────────────────────────────────────────────
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 64)
}

function makeKey() {
  return Math.random().toString(36).slice(2, 10)
}

async function uploadImageFromUrl(url, filename) {
  try {
    console.log(`  ↳ uploading image: ${filename}...`)
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buffer = Buffer.from(await res.arrayBuffer())
    const asset = await client.assets.upload('image', buffer, { filename })
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  } catch (err) {
    console.warn(`  ⚠ Image upload failed for ${filename}: ${err.message} — skipping`)
    return undefined
  }
}

// ─── Content Data ───────────────────────────────────────────────

// All FAQs keyed by topic → array
const ALL_FAQS = {
  'Criminal Law': [
    { question: 'What should I do if the police want to interview me?', answer: 'You have the right to silence. We strongly advise contacting a lawyer before providing any formal statements. Anything you say can and will be used against you in court. Our advocates can be present during interviews to ensure your rights are protected.' },
    { question: "Can I get bail if I've been charged with a serious offence?", answer: "Bail eligibility depends on several factors including the nature of the offence, your criminal history, and the likelihood of appearing in court. In NSW, some offences have a 'show cause' requirement. We specialize in complex bail applications to secure your release while awaiting trial." },
    { question: 'How long does a criminal case usually take to resolve?', answer: 'Timelines vary significantly. A simple traffic matter might be resolved in a few months, whereas a complex Supreme Court jury trial can take over a year. We provide realistic timelines during your initial consultation based on the specifics of your case.' },
  ],
  'Immigration Law': [
    { question: 'What is the processing time for a Partner Visa?', answer: 'Processing times vary depending on whether the application is made onshore or offshore. Currently, most Partner Visas are processed within 12 to 24 months.' },
    { question: 'Can I apply for a visa while my current one is expiring?', answer: 'Yes, if you apply for a substantive visa while in Australia, you may be eligible for a Bridging Visa (BVA) to remain lawfully during processing.' },
    { question: 'What happens if my visa is refused?', answer: 'If your visa is refused, you may have the right to apply for a merits review at the Administrative Appeals Tribunal (AAT). Strict time limits apply — contact us immediately to preserve your review rights.' },
  ],
  'Family Law': [
    { question: 'How long does a typical divorce process take?', answer: 'In Australia, you must be separated for 12 months before applying for divorce. Once applied, the hearing is typically set 2–3 months later. However, property settlement and parenting matters can be handled concurrently with the separation period.' },
    { question: 'Do we have to go to court for property settlement?', answer: 'Not necessarily. Most property settlements are resolved through mediation and formalised via Consent Orders. Court is a last resort if parties cannot reach a mutual agreement through our guided negotiation process.' },
    { question: 'How are child support payments calculated?', answer: "Child support is primarily calculated by Services Australia (Child Support) based on both parents' incomes, the number of children, and the percentage of care each parent provides. We can assist in drafting Private Child Support Agreements." },
  ],
  'Conveyancing': [
    { question: 'What is the difference between a conveyancer and a property solicitor?', answer: 'While both can handle the transfer of title, property solicitors are qualified lawyers who can provide broader legal advice on complex issues like tax implications, property disputes, and estate planning related to your purchase. Hussaini Law Group provides this comprehensive legal oversight for every transaction.' },
    { question: 'When should I involve a lawyer in my property purchase?', answer: 'Ideally, before you sign anything. A pre-signing contract review is the most critical step in protecting yourself from unfavorable conditions, undisclosed easements, or restrictive covenants that could affect your future enjoyment or resale value.' },
    { question: 'How long does a standard settlement take?', answer: 'Most standard residential settlements in Australia occur 30, 60, or 90 days after the exchange of contracts. However, these timeframes can be negotiated to suit the needs of both the vendor and the purchaser. We help manage these negotiations to align with your moving or financing schedule.' },
  ],
}

const PRACTICE_AREAS = [
  {
    slug: 'criminal-law',
    metaTitle: 'Criminal Law',
    metaDescription: 'Court representation across NSW for traffic, assault, drug, fraud, AVO and appellate criminal matters. Bilingual defence in English, Dari, Pashto and Arabic.',
    eyebrow: 'Practice Area: Criminal Law',
    title: 'Criminal Defense & Court Representation',
    description: 'Protecting your rights and delivering expert legal advocacy when it matters most. We stand by you through every stage of the legal process.',
    servicesEyebrow: 'Specialized Legal Defense',
    servicesTitle: 'Specialized Legal Defense',
    servicesIntro: 'Our expertise spans the full spectrum of criminal law. We provide strategic defense for cases of all complexities.',
    services: [
      { icon: 'cases', title: 'Court Representation', description: 'Professional advocacy in all NSW courts, from the Local Court to the Supreme Court and beyond. We prepare every case as if it were going to trial.', large: true },
      { icon: 'directions_car', title: 'Traffic Offences', description: 'Protecting your license and livelihood from drink driving and other major traffic charges.' },
      { icon: 'sports_kabaddi', title: 'Assault', description: 'Robust defense against common assault, GBH, and other person-to-person charges.' },
      { icon: 'medication', title: 'Drug Offences', description: 'Handling possession, supply, and manufacture charges with meticulous strategy.' },
      { icon: 'payments', title: 'Fraud', description: 'Defense against white-collar crime, financial fraud, and embezzlement allegations.' },
      { icon: 'history', title: 'Appeals', description: 'Challenging convictions and severity of sentences in higher jurisdictions.' },
      { icon: 'home_pin', title: 'Domestic Violence', description: 'Navigating ADVOs and related charges with sensitivity and firm legal footing.' },
    ],
    process: {
      eyebrow: 'The Methodology',
      title: 'Our Rigorous Advocacy Process',
      intro: 'How we prepare, protect, and prevail for our clients in the criminal justice system.',
      steps: [
        { title: 'Case Analysis', description: 'A meticulous review of police evidence, witness statements, and legal precedents to identify critical weaknesses.' },
        { title: 'Strategy Development', description: 'Building a bespoke defense strategy focused on your specific circumstances and intended outcomes.' },
        { title: 'Strong Advocacy', description: 'Relentless representation in court, using deep procedural knowledge to fight for your rights.' },
      ],
    },
    faqTopic: 'Criminal Law',
    cta: { title: 'Secure Your Future with Expert Defense', description: "Don't face the criminal justice system alone. Our experienced advocates are ready to protect your interests and fight for the best possible outcome." },
  },
  {
    slug: 'immigration-law',
    metaTitle: 'Immigration Law',
    metaDescription: 'Sydney migration lawyers for partner, family, skilled, business and AAT-review visa matters. Bilingual service in English, Dari, Pashto and Arabic.',
    eyebrow: 'Specialised Legal Services',
    title: 'Immigration Law',
    description: 'Navigating the complexities of global mobility with precision, heritage, and unwavering advocacy for your future in Australia.',
    servicesEyebrow: 'Strategic Pathways',
    servicesTitle: 'Strategic Pathways to Your Aspiration',
    servicesIntro: 'At Hussaini Law Group, we understand that migration is more than a legal process; it is a life-defining transition. Our Sydney-based team provides elite advisory services for high-stakes immigration matters, ensuring every detail of your application is meticulously crafted.',
    services: [
      { icon: 'family_history', title: 'Partner & Family', description: 'Securing visas for spouses, de facto partners, and family members with a focus on genuine relationship evidentiary standards.', large: true },
      { icon: 'work', title: 'Skilled Migration', description: 'Expert navigation of points-based systems and employer-sponsored streams for professionals and trade specialists.' },
      { icon: 'account_balance', title: 'Business & Investor', description: 'High-level advisory for high-net-worth individuals seeking significant investment or business innovation visas.' },
      { icon: 'gavel', title: 'Appeals & Merits Review', description: 'Representation at the Administrative Appeals Tribunal (AAT) for visa cancellations or refusals.' },
    ],
    process: {
      eyebrow: 'Our methodology',
      title: 'Our Methodical Process',
      intro: 'A clear path through complex legislation — diagnosis to citizenship.',
      steps: [
        { title: 'Diagnosis', description: 'Deep analysis of your current status and desired migration outcome.' },
        { title: 'Strategy', description: 'Developing a tailored roadmap to navigate complex legislative hurdles.' },
        { title: 'Execution', description: 'Rigorous documentation and submission with precision-led oversight.' },
        { title: 'Support', description: 'Continuous advocacy until your visa or citizenship is finalised.' },
      ],
    },
    faqTopic: 'Immigration Law',
    cta: { title: 'Begin Your Australian Journey', description: 'Connect with our specialized immigration lawyers for a confidential and thorough assessment of your visa options.' },
  },
  {
    slug: 'family-law',
    metaTitle: 'Family Law',
    metaDescription: 'Sensitive family law representation for divorce, property settlement, parenting orders, child support, AVOs and de facto matters across NSW.',
    eyebrow: 'Family Law Excellence',
    title: 'Compassionate Advocacy for Family Matters.',
    description: 'Navigating the complexities of domestic relationships with the sensitivity and expertise your family deserves. We protect your future through unwavering dedication.',
    servicesEyebrow: 'Our Family Law Expertise',
    servicesTitle: 'Our Family Law Expertise',
    servicesIntro: 'Whether the path forward is mediation, consent orders or contested proceedings, we will guide you through with cultural sensitivity and procedural rigour.',
    services: [
      { icon: 'gavel', title: 'Divorce & Separation', description: 'Strategic advice for complex marriage dissolutions, ensuring your rights and assets are protected through every stage.' },
      { icon: 'real_estate_agent', title: 'Property Settlement', description: 'Meticulous handling of asset division, including business interests, real estate, and superannuation portfolios.' },
      { icon: 'family_restroom', title: 'Parenting Orders', description: 'Prioritizing the best interests of children through sensitive negotiation and firm representation in custody matters.' },
      { icon: 'child_care', title: 'Child Support', description: "Navigating financial obligations to ensure fair and sustainable outcomes for the children's well-being." },
      { icon: 'security', title: 'Intervention Orders', description: 'Immediate legal protection and advocacy for domestic violence matters and personal safety intervention orders.' },
      { icon: 'diversity_3', title: 'De Facto Relationships', description: 'Expert guidance on the legal standing and rights of partners in unregistered domestic relationships.' },
    ],
    process: {
      eyebrow: 'Our Workflow',
      title: 'A Measured Approach to Resolution',
      intro: 'We follow a structured, empathetic process to ensure no detail is overlooked while minimizing the emotional strain on your family.',
      steps: [
        { title: 'Consultation', description: 'A private session to understand your unique circumstances and define clear legal objectives.' },
        { title: 'Strategy', description: 'Developing a tailored roadmap, prioritizing mediation where possible to reduce conflict.' },
        { title: 'Representation', description: 'Rigorous advocacy in negotiations or court proceedings to secure the optimal outcome.' },
        { title: 'Finalization', description: 'Executing all legal documents and ensuring compliance with orders for a clean transition.' },
      ],
    },
    faqTopic: 'Family Law',
    cta: { title: 'Begin Your Path to Resolution', description: 'Our Family Law specialists are ready to provide the clarity and support you need. Book a confidential consultation today to discuss your circumstances.' },
  },
  {
    slug: 'conveyancing',
    metaTitle: 'Conveyancing & Property Law',
    metaDescription: 'Sydney property solicitors handling residential purchase and sale, off-the-plan, title transfers, refinancing and strata-title matters end-to-end through PEXA settlement.',
    eyebrow: 'Property Law Specialists',
    title: 'Seamless Property Transactions & Expert Advice.',
    description: 'Hussaini Law Group provides distinguished legal counsel for your most significant assets. From first-time buyers to portfolio investors, we ensure your property transition is handled with meticulous precision.',
    servicesEyebrow: 'Specialized Property Services',
    servicesTitle: 'Specialized Property Services',
    servicesIntro: 'Comprehensive legal support tailored to the Australian property market, ensuring compliance, security, and peace of mind.',
    services: [
      { icon: 'home', title: 'Residential Purchase & Sale', description: "Whether you're entering the market or liquidating an asset, our expert solicitors manage the entire contract-to-settlement lifecycle with absolute rigor.", large: true },
      { icon: 'apartment', title: 'Off-the-Plan', description: 'Mitigating risks in complex pre-construction contracts. We protect your interests against sunset clauses and building variations.' },
      { icon: 'sync_alt', title: 'Title Transfers', description: 'Streamlined transfers for family settlements, gifting, or corporate restructuring.' },
      { icon: 'account_balance', title: 'Refinancing', description: 'Liaising with financial institutions to secure your mortgage discharge and new registration.' },
      { icon: 'layers', title: 'Strata Title', description: 'Specialized advice on by-laws, levies, and management statement compliance.' },
    ],
    process: {
      eyebrow: 'Our Process',
      title: 'A predictable path to settlement.',
      intro: 'We believe in clarity at every milestone. Our three-step framework ensures your transaction is transparent, legally sound, and completed on schedule.',
      steps: [
        { title: 'Initial Review & Engagement', description: 'We begin with a comprehensive review of the Contract of Sale and Section 32 Statement. Our team identifies potential "red flag" clauses and provides a plain-English explanation of your obligations and rights before you commit.' },
        { title: 'Pre-Settlement Management', description: 'During the cooling-off and preparation period, we manage all mandatory searches, liaise with your financier, calculate adjustments for rates and taxes, and ensure PEXA (electronic settlement) readiness.' },
        { title: 'Electronic Settlement & Post-Completion', description: 'We facilitate the secure exchange of funds and title through PEXA. Post-settlement, we lodge all necessary documentation with the Land Registry and notify relevant authorities of the change in ownership.' },
      ],
    },
    faqTopic: 'Conveyancing',
    cta: { title: 'Speak with a property solicitor today.', description: 'A pre-signing contract review is the single most cost-effective step you can take. Book a confidential consultation before you commit.' },
  },
  {
    slug: 'commercial-law',
    metaTitle: 'Commercial & Corporate Law',
    metaDescription: 'Sydney commercial lawyers for business structuring, complex contracts, shareholder agreements, sale of business, dispute resolution and debt recovery.',
    eyebrow: 'Commercial & Corporate Law',
    title: 'Strategic Legal Solutions for Your Business.',
    description: 'Navigating the complexities of the corporate landscape requires more than just legal advice — it requires a strategic partnership built on precision and institutional excellence.',
    servicesEyebrow: 'Core Corporate Expertise',
    servicesTitle: 'Core Corporate Expertise',
    servicesIntro: 'Practical commercial advice — and the contracts to back it — for founders, family businesses and established SMEs.',
    services: [
      { icon: 'business_center', title: 'Business Structuring', description: 'Strategic optimization of entity frameworks to ensure tax efficiency, operational fluidity, and robust liability protection for emerging and established enterprises.' },
      { icon: 'contract_edit', title: 'Complex Contracts', description: 'Drafting and negotiating bulletproof commercial agreements that safeguard your interests while facilitating seamless cross-border and domestic transactions.' },
      { icon: 'groups', title: 'Shareholder Agreements', description: 'Defining clear governance structures and dispute resolution mechanisms to align stakeholder interests and ensure long-term corporate stability.' },
      { icon: 'shopping_cart_checkout', title: 'Business Sale & Purchase', description: 'Meticulous due diligence and transaction management for mergers, acquisitions, and asset transfers to maximize value and minimize risk.' },
      { icon: 'gavel', title: 'Dispute Resolution', description: 'Aggressive advocacy and strategic mediation to resolve high-stakes commercial conflicts with a focus on protecting your corporate reputation and bottom line.' },
      { icon: 'account_balance_wallet', title: 'Debt Recovery', description: 'Persistent and professional recovery strategies designed to restore cash flow through sophisticated legal channels and negotiation tactics.' },
    ],
    faqTopic: null,
    cta: { title: 'Ready to Secure Your Business Future?', description: 'Connect with our senior partners today for a comprehensive evaluation of your commercial legal requirements.' },
  },
  {
    slug: 'civil-litigation',
    metaTitle: 'Civil Litigation & Debt Recovery',
    metaDescription: 'Sydney civil litigation solicitors for debt recovery, contract disputes, consumer claims, NCAT applications and mediation across NSW.',
    eyebrow: 'Civil Litigation Experts',
    title: 'Rigorous Advocacy in Civil Disputes',
    description: 'Navigating the complexities of the Australian legal system with unwavering precision. From high-stakes debt recovery to complex contract litigation, we protect your interests with scholarly authority.',
    servicesEyebrow: 'Specialised Legal Focus',
    servicesTitle: 'Specialised Legal Focus',
    servicesIntro: 'Local Court, District Court, Supreme Court and NCAT — we appear where the dispute requires.',
    services: [
      { icon: 'account_balance_wallet', title: 'Debt Recovery', description: 'Persistent and strategic recovery of outstanding debts for corporations and individuals, leveraging statutory demands and court actions.' },
      { icon: 'gavel', title: 'Contract Disputes', description: 'Expert interpretation and enforcement of contractual obligations, resolving breaches with clinical precision and commercial foresight.' },
      { icon: 'person_search', title: 'Consumer Claims', description: 'Protecting consumer rights against unfair trade practices and misleading conduct under the Australian Consumer Law framework.' },
      { icon: 'balance', title: 'NCAT Applications', description: 'Representation in the NSW Civil and Administrative Tribunal for tenancy, building disputes, and general division matters. We ensure your case is presented with technical excellence.', large: true },
      { icon: 'handshake', title: 'Mediation', description: 'Alternative dispute resolution strategies designed to achieve favorable outcomes without the protracted costs of a courtroom trial.' },
    ],
    process: {
      eyebrow: 'Our litigation method',
      title: 'Our Litigation Process',
      intro: 'Pragmatic, not performative — we treat litigation as a structured craft.',
      steps: [
        { title: 'Merit Assessment', description: 'A forensic review of the facts and legal precedents to determine the viability and strength of your civil claim.' },
        { title: 'Strategic Filing', description: 'Precise preparation and filing of Pleadings and Statements of Claim in the relevant jurisdiction, from Local to Supreme Court.' },
        { title: 'Aggressive Advocacy', description: 'Unwavering representation during discovery, interlocutory hearings, and the final hearing to secure your rights.' },
      ],
    },
    faqTopic: null,
    cta: { title: 'Resolve Your Dispute Today', description: 'Time is often of the essence in civil litigation. Secure your legal position with a confidential consultation with our lead counsel.' },
  },
]

// ─── SEED EXECUTION ─────────────────────────────────────────────
async function seed() {
  console.log(`\n🌱 Seeding Sanity project "${projectId}" / dataset "${dataset}"\n`)

  // ── 1. Site Settings ──────────────────────────────────────────
  console.log('1/5  Site Settings...')
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    phone: '02 8764 7885',
    mobile: '0451 234 567',
    email: 'info@hussainilaw.com.au',
    address: '7/37 Spencer Street, Fairfield NSW 2165',
    hoursWeekday: 'Mon – Fri: 9:00am – 5:30pm',
    hoursSaturday: 'Sat: By appointment',
    social: {
      facebook: 'https://facebook.com/hussainilawgroup',
      instagram: 'https://instagram.com/hussainilawgroup',
      linkedin: 'https://linkedin.com/company/hussaini-law-group',
    },
  })
  console.log('  ✓ Site settings created\n')

  // ── 2. Team Member ────────────────────────────────────────────
  console.log('2/5  Team Member (Principal)...')
  await client.createOrReplace({
    _id: 'teamMember-principal',
    _type: 'teamMember',
    name: 'Sayed Rahmatullah Hussainizada',
    title: 'Principal Solicitor',
    isPrincipal: true,
    bio: [
      'With a profound commitment to social justice and legal excellence, Sayed Rahmatullah Hussainizada founded Hussaini Law Group to bridge the gap between complex legal structures and the diverse communities of Sydney.',
      "His approach combines meticulous legal precision with a deep understanding of the cultural nuances that impact his clients' lives. Having successfully represented thousands of clients, he is recognized for his advocacy and strategic legal counsel.",
    ],
    credentials: [
      'Law Society of NSW Member',
      'Accredited Specialist',
      'Supreme Court of NSW',
      'Migration Agent (MARN registered)',
    ],
    languages: ['English', 'Dari', 'Pashto', 'Arabic'],
    order: 1,
  })
  console.log('  ✓ Sayed Rahmatullah Hussainizada created\n')

  // ── 3. FAQs ───────────────────────────────────────────────────
  console.log('3/5  FAQ documents...')
  const faqIdMap = {} // topic → array of { _type: 'reference', _ref, _key }

  for (const [topic, faqs] of Object.entries(ALL_FAQS)) {
    faqIdMap[topic] = []
    for (const faq of faqs) {
      const id = `faq-${slugify(faq.question).slice(0, 48)}`
      await client.createOrReplace({
        _id: id,
        _type: 'faq',
        question: faq.question,
        answer: faq.answer,
        topic,
      })
      faqIdMap[topic].push({ _type: 'reference', _ref: id, _key: makeKey() })
      console.log(`  ✓ FAQ: "${faq.question.slice(0, 50)}..."`)
    }
  }
  console.log()

  // ── 4. Testimonials ───────────────────────────────────────────
  console.log('4/5  Testimonials...')
  await client.createOrReplace({
    _id: 'testimonial-alexander-v',
    _type: 'testimonial',
    quote: "The most precise and reliable conveyancing team we've ever worked with. Every detail was meticulously managed.",
    author: 'Dr. Alexander V.',
    role: 'Property Developer',
    featured: true,
  })
  console.log('  ✓ Dr. Alexander V. testimonial\n')

  // ── 5. Practice Areas ─────────────────────────────────────────
  console.log('5/5  Practice Areas...')

  for (const pa of PRACTICE_AREAS) {
    const id = `practiceArea-${pa.slug}`
    const faqRefs = pa.faqTopic && faqIdMap[pa.faqTopic] ? faqIdMap[pa.faqTopic] : undefined

    const doc = {
      _id: id,
      _type: 'practiceArea',
      slug: { _type: 'slug', current: pa.slug },
      metaTitle: pa.metaTitle,
      metaDescription: pa.metaDescription,
      eyebrow: pa.eyebrow,
      title: pa.title,
      description: pa.description,
      servicesEyebrow: pa.servicesEyebrow,
      servicesTitle: pa.servicesTitle,
      servicesIntro: pa.servicesIntro,
      services: pa.services.map((s) => ({
        _type: 'subService',
        _key: makeKey(),
        icon: s.icon,
        title: s.title,
        description: s.description,
        large: s.large || false,
      })),
      cta: {
        title: pa.cta.title,
        description: pa.cta.description,
      },
    }

    if (pa.process) {
      doc.process = {
        eyebrow: pa.process.eyebrow,
        title: pa.process.title,
        intro: pa.process.intro,
        steps: pa.process.steps.map((s) => ({
          _type: 'processStep',
          _key: makeKey(),
          title: s.title,
          description: s.description,
        })),
      }
    }

    if (faqRefs) {
      doc.faqs = faqRefs
    }

    await client.createOrReplace(doc)
    console.log(`  ✓ ${pa.title}`)
  }

  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║  ✅  Seed complete!                                              ║
║                                                                  ║
║  Created:                                                        ║
║    • 1 site settings document                                    ║
║    • 1 team member (principal)                                   ║
║    • ${String(Object.values(ALL_FAQS).flat().length).padEnd(2)} FAQ documents                                            ║
║    • 1 testimonial                                               ║
║    • ${String(PRACTICE_AREAS.length).padEnd(2)} practice area documents                                ║
║                                                                  ║
║  Visit http://localhost:3000/studio to see them in the Studio.   ║
╚══════════════════════════════════════════════════════════════════╝
`)
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
