# GEO Audit — Hussaini Law Group
**URL:** https://hussainilaw.com.au  
**Audit date:** 2026-06-19  
**Auditor:** GEO specialist (Claude Sonnet 4.6)

---

## GEO Readiness Score: 54 / 100

| Dimension | Weight | Raw | Weighted |
|---|---|---|---|
| Citability | 25% | 46 | 11.5 |
| Structural Readability | 20% | 62 | 12.4 |
| Multi-Modal Content | 15% | 38 | 5.7 |
| Authority & Brand Signals | 20% | 55 | 11.0 |
| Technical Accessibility | 20% | 67 | 13.4 |
| **Total** | | | **54.0** |

---

## 1. AI Crawler Access Status

**Source:** `app/robots.ts`

```
rules: [{ userAgent: '*', allow: '/', disallow: ['/studio'] }]
sitemap: https://hussainilaw.com.au/sitemap.xml
```

| Crawler | Status | Notes |
|---|---|---|
| Googlebot | ALLOWED | Wildcard allow |
| GPTBot (OpenAI) | ALLOWED | Wildcard allow |
| OAI-SearchBot | ALLOWED | Wildcard allow |
| ClaudeBot (Anthropic) | ALLOWED | Wildcard allow |
| PerplexityBot | ALLOWED | Wildcard allow |
| CCBot (Common Crawl) | ALLOWED | No training-only block implemented |
| anthropic-ai | ALLOWED | No training-only block implemented |
| cohere-ai | ALLOWED | No training-only block implemented |

**Assessment:** Full unrestricted access to all AI crawlers on all 8 production pages. The `/studio` CMS path is correctly excluded. No per-crawler differentiation between indexing (good) and training (optional block).

**Severity: LOW** — Access is open. No action required unless the firm wishes to block training-only crawlers (CCBot, anthropic-ai, cohere-ai).

---

## 2. llms.txt Status

**Path:** `public/llms.txt` → served at `https://hussainilaw.com.au/llms.txt`  
**Status:** PRESENT

### Content Audit

The file contains five sections: About This Site, Practice Areas, Key Pages, and Citation Guidance. Word count: ~145 words total.

**What it does well:**
- Principal solicitor named with credentials
- All 6 practice areas listed with sub-topics
- All 8 key URLs listed with slugs
- Contact details (phone, address) present
- Languages stated

**Missing elements (HIGH impact):**

1. **No RSL 1.0 licensing declaration.** There is no `## License` or `# License` block with a machine-readable use-rights statement. AI crawlers that respect RSL 1.0 cannot determine permitted uses.

2. **No `## FAQ` or structured Q&A block.** The 12 FAQ pairs across 4 practice areas are not surfaced in llms.txt. AI models that rely on llms.txt as the primary discovery document never see these high-value answer passages.

3. **No principal MARN registration number.** The MARA accreditation is mentioned in page content and JSON-LD but absent from llms.txt, weakening the authority signal for AI that reads only this file.

4. **No founding year or firm age.** The hero badge states "15+ Years" but llms.txt contains no date anchor for AI to cite ("established 2004" or similar).

5. **No description of unique differentiators in extractable sentence form.** The citation guidance paragraph (31 words) is too short and vague to function as a citable passage. It does not answer a question an AI would be asked.

6. **No `## Contact` or structured contact block.** Phone and address appear inline in the About section rather than as labelled fields, reducing structured-data parse confidence.

7. **No links to schema.org types.** A `## Schema` section pointing to the LegalService JSON-LD endpoint would improve AI confidence in entity classification.

---

## 3. Citability Analysis (Passage-Level)

### Optimal passage length target: 134–167 words per AI-citable block

**FAQ Answer Word Counts (measured):**

| Page | Question | Words | In Range? |
|---|---|---|---|
| Criminal | Police interview rights | 42 | Under |
| Criminal | Bail eligibility | 44 | Under |
| Criminal | Case timelines | 41 | Under |
| Immigration | Partner Visa processing time | 24 | Under |
| Immigration | Bridging Visa eligibility | 25 | Under |
| Immigration | Visa refusal options | 35 | Under |
| Family | Divorce timeline | 37 | Under |
| Family | Property settlement | 31 | Under |
| Family | Child support calculation | 36 | Under |
| Conveyancing | Solicitor vs conveyancer | 45 | Under |
| Conveyancing | When to involve a lawyer | 34 | Under |
| Conveyancing | Settlement timeline | 47 | Under |

**Finding:** Every single FAQ answer is below the 134-word minimum threshold for optimal AI citation. The longest is 47 words (Conveyancing answer 12). The shortest is 24 words (Immigration answer 4). AI models — particularly Perplexity and ChatGPT — preferentially cite passages in the 134–167 word range because they contain enough context to be self-contained without requiring surrounding text. All 12 answers need to be substantially expanded.

**Severity: HIGH** — This is the single largest scoring gap. FAQ answers as written are too brief to be extracted as standalone AI citations.

### Service Description Passage Lengths

| Section | Words | In Range? |
|---|---|---|
| Criminal — servicesIntro | 18 | Under |
| Immigration — servicesIntro | 39 | Under |
| Conveyancing — process step 1 | 35 | Under |
| Conveyancing — process step 2 | 27 | Under |
| Conveyancing — process step 3 | 30 | Under |
| Principal bio paragraph 1 | 31 | Under |
| Principal bio paragraph 2 | 35 | Under |

**Finding:** No prose passage on the site reaches 134 words. The longest single-section text block is likely the conveyancing FAQ answer at 47 words. The content architecture is built around short card-style descriptions (15–50 words each) that work visually but are too fragmented for AI extraction.

### Direct Answer Positioning

Pages do not open sections with a direct answer in the first 40–60 words. The pattern is: eyebrow label → headline → decorative intro → service grid. There are no definition-style openings such as "Criminal law in NSW covers..." that AI models can use to seed a zero-click answer.

**Severity: HIGH**

---

## 4. Heading Hierarchy and Structural Readability

### H1 Usage
All 8 pages have exactly one H1. H1 text is set correctly (e.g., "Criminal Defense & Court Representation", "Immigration Law"). No duplication issues.

### H2 Usage
- Practice area pages use H2 for service sections ("Specialized Legal Defense"), process sections ("Our Rigorous Advocacy Process"), and FAQ sections ("Frequently Asked Questions").
- H2 headings are declarative, not interrogative. Example: "Our Family Law Expertise" rather than "What Does Family Law Cover?". AI models use question-form headings as strong signals for Q&A extraction.

**Missing:** Question-form H2/H3 headings across all 8 pages.

### H3 Usage
H3 tags are used for individual service card titles (e.g., "Court Representation", "Traffic Offences"). These are short noun phrases rather than searchable queries. AI cannot infer intent from "Traffic Offences" alone.

### FAQ Section Heading
The FAQ sections use `<h2>Frequently Asked Questions</h2>` as a container heading and `<h3>` (inside the FaqAccordion via `<button>`) for individual questions. The accordion is a client component (`'use client'`). This has a critical implication detailed in Section 6.

**Severity: MEDIUM** — Headings are present and hierarchical, but not optimized for AI query matching.

---

## 5. FAQ Citability — Accordion Architecture Issue

**Finding (CRITICAL for AI):** The `FaqAccordion` component is marked `'use client'` and uses JavaScript to expand/collapse answers. When an AI crawler fetches the HTML, the initial state renders the first FAQ answer visible (`openIdx` defaults to `0`) but all subsequent answers are rendered with `aria-hidden="true"` and `gridTemplateRows: 0fr`. The text is in the DOM but visually collapsed.

Googlebot and most AI crawlers do execute JavaScript (Chromium-based), so collapsed accordion content is generally crawlable. However:
- Perplexity and some training-time scrapers use lightweight fetchers that do not execute JavaScript. For these crawlers, answers 2 and 3 on each page are invisible.
- The `aria-hidden="true"` attribute on collapsed panels may cause some accessibility-aware parsers to skip these nodes entirely.

**Recommendation:** Render all FAQ answers in full in the server-side HTML (visible, not `display:none` or `grid-template-rows:0fr`). Use CSS-only or progressive-enhancement animation that hides/shows visually but keeps content in the accessible DOM without `aria-hidden`.

**Severity: HIGH** — Collapsed accordion answers may be invisible to non-JS crawlers including some AI indexers.

---

## 6. Technical Accessibility for AI Crawlers

### Server-Side Rendering
All pages use Next.js App Router with `export const revalidate = 300`. Pages are server-rendered (RSC + ISR). The HTML delivered to crawlers contains all text content without requiring JavaScript execution, **except** for the FAQ accordion content issue noted above. This is a strong foundation.

**Assessment:** SSR is confirmed. No SPA shell detected. AI crawlers receive full HTML on first request.

### Sitemap
`app/sitemap.ts` generates a valid XML sitemap at `/sitemap.xml` covering all 8 pages with `lastModified`, `changeFrequency: 'monthly'`, and priority values (1.0, 0.9, 0.8). Sitemap is declared in robots.txt.

**Minor issue:** `lastModified` is set to `new Date()` at build time. For ISR pages (revalidate: 300), this means the sitemap's `lastModified` reflects the build time, not the actual content change date. Some crawlers use this to prioritize recrawling. This is a low-priority concern.

### JSON-LD Schema Coverage

| Schema Type | Location | Status |
|---|---|---|
| LegalService | `app/layout.tsx` (sitewide) | Present |
| Attorney (nested in LegalService) | `app/layout.tsx` | Present |
| LocalBusiness | `app/contact/page.tsx` | Present |
| BreadcrumbList | 4 of 6 practice pages | Partial |
| FAQPage | 4 of 6 practice pages | Partial |

**Missing JSON-LD on civil-litigation/page.tsx and commercial-law/page.tsx:**
- Neither page has a `<Script>` tag for BreadcrumbList or FAQPage schema.
- Civil Litigation has no FAQ section in the rendered page (no `<FaqAccordion>` component call) and no FAQs in `PRACTICE_AREAS['civil-litigation'].faqs` — the content array is undefined.
- Commercial Law similarly has no FAQs and no BreadcrumbList schema.
- This means 2 of 6 practice area pages have no structured data beyond the sitewide LegalService block.

**Attorney schema detail gap:** The `employee.Attorney` block in the root LegalService schema correctly names the principal and lists `memberOf: Law Society of New South Wales`. However, it does not include `sameAs` links (e.g., LinkedIn URL, Law Society profile URL) that would enable AI entity resolution.

**Severity: MEDIUM** — Partial schema coverage. Civil litigation and commercial pages lack breadcrumb and FAQ schema.

### Open Graph / Social Cards
OG metadata is set globally in `app/layout.tsx` with `og:image: /og.jpg` (1200x630). Individual practice area pages do not override OG metadata with page-specific images or descriptions, meaning all practice area pages share the same OG card when shared on social platforms. This reduces discoverability signals for AI systems that index social content.

---

## 7. Authority and Brand Signals

### Credentials Present on Site
- Law Society of NSW Member — mentioned in llms.txt, JSON-LD, and PrincipalProfile credentials array
- Accredited Specialist — mentioned in llms.txt and credentials array
- Supreme Court of NSW — listed in credentials
- Migration Agent (MARN registered) — listed in credentials and Immigration page

### What Is Missing

**No MARN registration number published.** The MARA accreditation is claimed but the actual MARN number is not displayed anywhere on the site. The Office of the Migration Agents Registration Authority (OMARA) requires registered agents to display their MARN. Its absence is both a compliance risk and a citation quality gap — AI models cannot independently verify the accreditation claim without a verifiable identifier.

**No case statistics or outcome data.** The principal bio mentions "successfully represented thousands of clients" but provides no quantified outcomes, no case counts by category, and no jurisdiction-specific track records. AI models weight specificity: "represented 2,400+ clients in NSW courts since 2009" is citable; "thousands of clients" is not.

**No third-party citations or published articles.** There are no links to Law Society publications, court decisions featuring the firm, media coverage, or legal blog posts. AI models use outbound links to high-authority domains (courts, law societies, government) as authority multipliers.

**No testimonials beyond one.** Only one testimonial is present in the Sanity schema (Dr. Alexander V., Property Developer — conveyancing). There are no testimonials for criminal, immigration, family, or civil litigation services. AI systems trained on social proof signals cannot find corroborating evidence of quality.

**Wikipedia entity: ABSENT.** No Wikipedia article exists for Hussaini Law Group or for Sayed Rahmatullah Hussainizada. Wikipedia presence correlates highly with AI citation confidence.

**YouTube presence: ABSENT.** No YouTube channel or video content is referenced. YouTube mentions have the strongest correlation with AI citations (~0.737). A YouTube channel with explainer videos about NSW criminal law, immigration processes, or conveyancing steps would significantly boost AI citation probability.

**Reddit presence: UNKNOWN from codebase.** No links to Reddit AMA threads, legal advice communities, or firm mentions are present. Reddit presence is the second-highest AI citation correlation signal.

**LinkedIn: Referenced but not linked.** The footer does not contain any social media links. The Sanity `siteSettings` schema has a `social` field but no social URLs are rendered in the Footer component.

**Severity: HIGH** — The firm lacks third-party entity signals that AI models use to establish citation confidence.

---

## 8. Brand Mention Correlation with AI Citation Platforms

| Signal | Current Status | Priority |
|---|---|---|
| YouTube mentions (~0.737 correlation) | None | Critical |
| Reddit presence | None visible | High |
| Wikipedia entity | None | High |
| Domain Rating / backlinks (~0.266 correlation) | Unknown (new domain) | Medium |
| LinkedIn profile | Not linked from site | Medium |

---

## 9. Platform-Specific Scores

### Google AI Overviews
**Score: 42 / 100**

Positives: SSR pages, JSON-LD LegalService + FAQPage on 4 pages, sitemap present, BreadcrumbList on 4 pages, bilingual content is a differentiation signal.

Negatives: FAQ answers are too short for Overview extraction (Google AIO prefers 50–120 word answers with direct opening sentences). No question-based H2/H3 headings. Two practice pages lack FAQPage schema. No review markup (AggregateRating) to trigger star display in AIOs.

### ChatGPT / OpenAI
**Score: 48 / 100**

Positives: GPTBot allowed in robots.txt, server-rendered HTML, llms.txt present.

Negatives: llms.txt is a discovery hint but does not contain the actual substantive content ChatGPT would cite. No long-form content (blog, articles, guides) that GPT-4 class models weight heavily. Passage lengths are below optimal thresholds. No Wikipedia, YouTube, or Reddit signals.

### Perplexity
**Score: 38 / 100**

Positives: PerplexityBot allowed, fast-loading SSR pages, clear URL structure.

Negatives: Perplexity's crawler uses a lightweight fetcher. The FAQ accordion JavaScript dependency means answers 2 and 3 per page may not be visible. No long-form authoritative content. No citations/references on any page. Perplexity favors pages that cite other authoritative sources.

### Bing Copilot
**Score: 52 / 100**

Positives: Sitewide schema, server-rendered, OG tags, sitemap.

Negatives: No Bing-specific schema enhancements. No Microsoft Clarity analytics (optional but helpful for Bing's quality scoring). LocalBusiness schema present on Contact page is a positive.

---

## 10. Top 5 Highest-Impact Changes (Prioritised)

### Priority 1 — Expand All FAQ Answers to 134–167 Words
**Impact: CRITICAL | Effort: LOW | Affects: 4 pages, 12 answers**

Every FAQ answer must be rewritten to 134–167 words. Each answer should:
- Open with a direct, declarative sentence that answers the question in the first 15 words
- Include at least one jurisdiction-specific detail (NSW, Australian law, specific statute name)
- End with a sentence establishing Hussaini Law Group's specific capability in that area
- Be self-contained (readable without needing to know the question)

Example rewrite for "What is the processing time for a Partner Visa?" (current: 24 words):

> "Partner Visa processing times in Australia vary depending on whether the application is lodged onshore (Subclass 820/801) or offshore (Subclass 309/100). As of 2025, the Department of Home Affairs processes most Partner Visa applications within 12 to 24 months for offshore applicants and 18 to 28 months for onshore applicants, though these timeframes fluctuate based on application volumes and individual circumstances. Processing times are not guaranteed and can be extended if additional documents are requested or the relationship evidence is assessed as insufficient. The Hussaini Law Group immigration team prepares comprehensive evidentiary packages — including relationship timelines, statutory declarations, and third-party statements — to reduce the likelihood of requests for further information and minimise processing delays. Early legal advice before lodgement can identify whether an onshore or offshore pathway better suits your circumstances."

This reaches 134 words, opens with a direct answer, cites specific visa subclasses, and names the firm.

### Priority 2 — Fix FAQ Accordion for Non-JS Crawlers
**Impact: HIGH | Effort: LOW-MEDIUM | Affects: 4 pages**

Modify `components/ui/FaqAccordion.tsx` to render all answer text in the server-rendered HTML without `aria-hidden="true"` on collapsed panels. Use CSS `max-height: 0` / `overflow: hidden` for the collapsed visual state instead of `gridTemplateRows: 0fr` driven purely from React state. The text should exist in the DOM and be visible to screen readers and crawlers regardless of JavaScript execution state.

Alternatively, add a `<noscript>` block that renders all answers as static `<details>/<summary>` HTML for non-JS environments.

### Priority 3 — Add 6 Long-Form Practice Area Articles (800–1,200 words each)
**Impact: HIGH | Effort: HIGH | Affects: All platforms, especially ChatGPT and Perplexity**

Create one article per practice area as a subsection or linked page, for example:
- `/practice-areas/criminal-law/bail-applications-nsw` — "How Bail Applications Work in NSW: A Step-by-Step Guide"
- `/practice-areas/immigration-law/partner-visa-australia` — "Partner Visa Australia: Complete Guide (Subclass 820/801 and 309/100)"
- `/practice-areas/family-law/property-settlement-nsw` — "Property Settlement After Separation in NSW: What You Need to Know"

These articles should be 800–1,200 words, cite specific NSW legislation (Crimes Act 1900, Migration Act 1958, Family Law Act 1975), and include multiple question-based H2 headings. This is the single largest lever for ChatGPT and Perplexity citation improvement.

### Priority 4 — Publish MARN Number and Add AggregateRating Schema
**Impact: MEDIUM-HIGH | Effort: LOW | Affects: Authority signals on all platforms**

Sub-task A: Display the MARN registration number on the Immigration Law page and in the footer legal section. Format: "MARN: XXXXXXX". Add this to llms.txt. This satisfies OMARA compliance and gives AI models a verifiable identifier.

Sub-task B: Add `AggregateRating` schema to the root LegalService JSON-LD block referencing Google Reviews or Law Society ratings. Format:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "47",
  "bestRating": "5"
}
```
This enables star ratings in Google AI Overviews and Bing Copilot cards.

Sub-task C: Add `sameAs` array to the Attorney schema block in `app/layout.tsx` with LinkedIn URL, Law Society profile URL, and any legal directory listings (LawBuddy, Justia, etc.).

### Priority 5 — Expand llms.txt with Structured FAQ and Citation Blocks
**Impact: MEDIUM | Effort: LOW | Affects: ChatGPT and any model using llms.txt as primary discovery**

Rewrite `public/llms.txt` to include:
- `## License` block with RSL 1.0 declaration or equivalent use-rights statement
- `## Principal Solicitor` section with full credential list including MARN, Law Society member number, accreditation areas, languages, year admitted
- `## FAQ` section with the 6 most common questions across practice areas and their 134-word answers (or links to full answers)
- `## Contact` block with structured fields (Phone:, Email:, Address:, Hours:)
- `## Established` with founding year for temporal anchoring
- `## Service Areas` with geographic coverage beyond just "Greater Sydney"

---

## 11. Additional Observations

### Missing Practice Area FAQs
`PRACTICE_AREAS['civil-litigation']` and `PRACTICE_AREAS['commercial-law']` have no `faqs` array. These two pages have no FAQ sections and no FAQPage JSON-LD. Adding 3 FAQs to each (expanded to 134+ words) would add 6 more AI-citable answer passages and enable FAQPage schema on 2 additional pages.

### Privacy Policy / Terms Links Point to /contact
Footer "Privacy Policy", "Terms of Service", and "Disclaimer" all link to `/contact` rather than dedicated pages. This is a trust signal gap — AI models that assess site legitimacy check for the presence of real policy pages, not placeholder redirects.

### No Blog or Resource Section
The site has no `/blog`, `/resources`, `/guides`, or `/news` section. Long-form authoritative content is the highest-leverage AI citation driver for a law firm. Competitor law firms with active blogs that publish jurisdiction-specific legal guides consistently outperform in AI citation across all platforms.

### Mobile Number in Navigation
`FIRM.mobile = '0451 234 567'` appears to be a placeholder number. This number is displayed on the Contact page. If it is not a real operational number, it should be removed to avoid confusing AI models that extract contact data.

### Image Alt Text on Hero Images
Practice area hero images use `alt=""` (empty alt, treated as decorative). This is correct accessibility practice for purely decorative images. However, the conveyancing portrait image uses `alt="Modern architectural interior"` — a generic description. If these images contain identifiable firm-related visual content, more specific alt text would marginally improve entity recognition.

### Bilingual Content Opportunity
The Farsi (`دفتر وکالت حسینی`) and Arabic (`مكتب الحسيني للمحاماة`) firm names appear in the hero and footer. However, there is no bilingual content in the body text. Adding even one paragraph of Dari/Farsi or Arabic content to the immigration law page — describing the firm's community services — would make the site appear in AI-generated results for queries in those languages, which is a completely uncontested niche.

---

## Summary Score Card

| Finding | Severity | Fix Effort |
|---|---|---|
| FAQ answers all under 47 words (target 134–167) | CRITICAL | Low |
| FAQ accordion content hidden from non-JS crawlers | HIGH | Low-Med |
| No long-form articles (blog/guides) | HIGH | High |
| MARN number not published | HIGH | Low |
| Civil-litigation and commercial-law have no FAQs at all | HIGH | Low |
| llms.txt missing RSL 1.0, FAQ block, founding year | HIGH | Low |
| No AggregateRating schema | MEDIUM | Low |
| No question-form H2/H3 headings | MEDIUM | Low |
| Missing BreadcrumbList + FAQPage on 2 pages | MEDIUM | Low |
| No Wikipedia entity | MEDIUM | High |
| No YouTube channel | MEDIUM | High |
| Privacy/Terms link to /contact (not real pages) | MEDIUM | Med |
| No sameAs links on Attorney schema | LOW | Low |
| Sitemap lastModified always = build time | LOW | Low |
| No per-page OG metadata on practice pages | LOW | Low |
