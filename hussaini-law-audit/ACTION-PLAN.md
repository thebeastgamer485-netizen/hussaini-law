# SEO Action Plan — Hussaini Law Group

**Current score:** 58 / 100
**Target score:** 80+ / 100
**Site:** https://hussaini-law.vercel.app

---

## Phase 1: Critical Fixes (Week 1) — Target: +12 points

### 1.1 Remove duplicate LocalBusiness schema from contact page
**Effort:** 10 minutes | **Impact:** Critical (Schema)

Delete the `localBusinessJsonLd` constant and `<Script id="ld-local-business">` from `app/contact/page.tsx`. The `LegalService` from `layout.tsx` already renders on the contact page and is the correct, more specific entity.

**Files:** `app/contact/page.tsx` (lines 19–52)

---

### 1.2 Fix geo coordinates
**Effort:** 5 minutes | **Impact:** High (Local)

Change coordinates in `app/layout.tsx` from `-33.8687, 150.9549` (Sydney CBD) to `-33.87280, 150.95540` (7/37 Spencer Street, Fairfield).

**Files:** `app/layout.tsx` (lines 74–75)

---

### 1.3 Resolve Saturday hours contradiction
**Effort:** 10 minutes | **Impact:** High (Schema + Local)

Either:
- Update `FIRM.hoursSaturday` in `lib/navigation.ts` to match schema ("Sat: 10:00am – 2:00pm")
- OR remove Saturday `OpeningHoursSpecification` from `app/layout.tsx` if truly by-appointment only

**Files:** `lib/navigation.ts`, `app/layout.tsx`

---

### 1.4 Replace placeholder mobile number
**Effort:** 5 minutes | **Impact:** Medium (Trust)

Replace `mobile: '0451 234 567'` with the firm's real mobile number in `lib/navigation.ts`.

**Files:** `lib/navigation.ts` (line 23)

---

### 1.5 Fix favicon reference
**Effort:** 5 minutes | **Impact:** Medium (Technical)

Remove `icons: { icon: '/favicon.ico', apple: '/logo.png' }` from the `metadata` export in `app/layout.tsx`. The dynamic `app/icon.tsx` route will auto-generate the correct `<link rel="icon">` tag. Keep the apple-touch-icon as `icons: { apple: '/logo.png' }`.

**Files:** `app/layout.tsx` (line 49)

---

### 1.6 Add BreadcrumbList to commercial-law and civil-litigation
**Effort:** 20 minutes | **Impact:** High (Schema)

Add `import Script from 'next/script'`, `breadcrumbLd` constant, and `<Script>` injection to both pages. Follow the exact pattern used in `criminal-law/page.tsx`.

**Files:** `app/practice-areas/commercial-law/page.tsx`, `app/practice-areas/civil-litigation/page.tsx`

---

### 1.7 Add geographic keywords to H1 tags
**Effort:** 30 minutes | **Impact:** Critical (On-Page + Local)

Update H1 on every practice area page to include "Fairfield" or "Sydney":

| Page | Current H1 | Recommended H1 |
|------|-----------|----------------|
| Home | "Advocacy for Every Community" | Keep (brand page) |
| Criminal | "Criminal Defense & Court Representation" | "Criminal Lawyers Fairfield & Greater Sydney" |
| Immigration | "Immigration Law" | "Immigration Lawyers Fairfield — Bilingual Service" |
| Family | "Compassionate Advocacy for Family Matters." | "Family Lawyers Fairfield & Western Sydney" |
| Conveyancing | "Seamless Property Transactions..." | "Conveyancing Solicitors Fairfield Sydney" |
| Commercial | Current H1 | "Commercial Lawyers Fairfield & Sydney" |
| Civil | Current H1 | "Civil Litigation Lawyers Fairfield Sydney" |

**Files:** All 6 practice area page files

---

### 1.8 Add "Fairfield" to meta titles
**Effort:** 15 minutes | **Impact:** High (On-Page)

Update `metaTitle` in `lib/content.ts` for all 6 practice areas:

| Current | Recommended |
|---------|-------------|
| "Criminal Law Solicitors Sydney" | "Criminal Law Solicitors Fairfield Sydney" |
| "Immigration Lawyers Sydney" | "Immigration Lawyers Fairfield Sydney" |
| "Family Lawyers Sydney" | "Family Lawyers Fairfield & Western Sydney" |
| "Conveyancing Solicitors Sydney" | "Conveyancing Solicitors Fairfield Sydney" |
| "Commercial Lawyers Sydney" | "Commercial Lawyers Fairfield Sydney" |
| "Civil Litigation Lawyers Sydney" | "Civil Litigation Lawyers Fairfield Sydney" |

**Files:** `lib/content.ts`

---

## Phase 2: High-Impact Improvements (Weeks 2–3) — Target: +10 points

### 2.1 Expand all 12 FAQ answers to 134–167 words
**Effort:** 2–3 hours | **Impact:** Critical (AI + Content)

Each FAQ answer must:
- Open with a direct declarative sentence answering the question in the first 15 words
- Include at least one NSW/Australian statute or regulation reference
- Close with a sentence naming the firm's specific capability
- Target 134–167 words total

**Files:** `lib/content.ts` (all FAQ arrays)

---

### 2.2 Add FAQs to commercial-law and civil-litigation pages
**Effort:** 1 hour | **Impact:** High (Content + Schema)

Add 5+ FAQs per page, aligned with People Also Ask queries:
- Commercial: "What is a shareholders agreement?", "When do I need a commercial lawyer?", "How much does a commercial lawyer cost?"
- Civil: "What matters does NCAT handle?", "How long do I have to file a claim in NSW?", "What is the difference between mediation and litigation?"

Add FAQPage JSON-LD to both pages.

**Files:** `lib/content.ts`, `app/practice-areas/commercial-law/page.tsx`, `app/practice-areas/civil-litigation/page.tsx`

---

### 2.3 Add Service schema to all 6 practice area pages
**Effort:** 1 hour | **Impact:** High (Schema)

Each page gets a `Service` JSON-LD block with `@id`, `name`, `serviceType`, `description`, `url`, `provider` (referencing `/#legalservice`), and `areaServed`.

Update `hasOfferCatalog` in `layout.tsx` to reference Service @ids instead of plain strings.

**Files:** All 6 practice area pages, `app/layout.tsx`

---

### 2.4 Surface bilingual capability in headings and meta descriptions
**Effort:** 30 minutes | **Impact:** High (On-Page + SXO)

Add "Bilingual legal service in English, Dari, Pashto and Arabic" as an H2 or subheading below the hero on every practice area page. Include at least one language name in every meta description.

**Files:** All 6 practice area pages, `lib/content.ts`

---

### 2.5 Add local court references
**Effort:** 30 minutes | **Impact:** Medium (Local + Content)

- Criminal: Fairfield Local Court, Parramatta District Court, Downing Centre
- Family: Federal Circuit and Family Court of Australia (Parramatta)
- Civil: NCAT (Sydney), Local Court (Fairfield)
- Immigration: Department of Home Affairs, Administrative Appeals Tribunal

**Files:** `lib/content.ts` (service descriptions)

---

### 2.6 Fix FAQ accordion for non-JS crawlers
**Effort:** 30 minutes | **Impact:** High (AI)

Replace `aria-hidden="true"` + `gridTemplateRows: 0fr` with CSS-only `max-height: 0; overflow: hidden` for collapsed state. All answer text must remain in accessible DOM regardless of JS execution.

**Files:** `components/ui/FaqAccordion.tsx`

---

### 2.7 Add WebSite schema to layout.tsx
**Effort:** 15 minutes | **Impact:** Medium (Schema)

Add a `WebSite` entity with `@id: /#website` alongside the existing LegalService block.

**Files:** `app/layout.tsx`

---

### 2.8 Expand Attorney entity in schema
**Effort:** 15 minutes | **Impact:** Medium (Schema)

Add `@id`, `url`, `hasCredential`, and `sameAs` (LinkedIn, Law Society profile) to the Attorney stub in layout.tsx.

**Files:** `app/layout.tsx`

---

## Phase 3: Content & Authority (Month 2) — Target: +8 points

### 3.1 Create location-service landing pages
**Effort:** 2–3 days | **Impact:** Critical (SXO + Local)

New pages:
- `/criminal-lawyers-fairfield` (1,500–2,500 words)
- `/conveyancing-fairfield` (1,500+ words)
- `/family-lawyers-western-sydney` (1,500+ words)
- `/immigration-lawyer-fairfield` (1,500+ words)
- `/dari-speaking-lawyer-sydney` (bilingual content)

Each includes: suburb + service H1, relevant court name with address, 7–10 location-specific FAQs, link to existing practice area page.

---

### 3.2 Commission real photography
**Effort:** 1 day (photography session) | **Impact:** High (E-E-A-T + SXO)

Replace AI-generated stock images with real photos: external office, reception, principal at desk, consultation room, staged client interaction. Professional headshot of Sayed Rahmatullah Hussainizada.

---

### 3.3 Expand llms.txt
**Effort:** 30 minutes | **Impact:** Medium (AI)

Add: RSL 1.0 license block, FAQ block with 6 key Q&As at expanded word counts, MARN registration number, founding year, structured contact fields, `## Principal Solicitor` section with full credential list.

---

### 3.4 Add Review schema to conveyancing page
**Effort:** 15 minutes | **Impact:** Medium (Schema + Local)

Add `Review` JSON-LD for Dr. Alexander V. testimonial. When multiple reviews exist, add `AggregateRating` to the root `LegalService`.

---

### 3.5 Create long-form practice area guides
**Effort:** 1 week | **Impact:** High (Content + AI)

One 800–1,200 word guide per practice area:
- "How Bail Applications Work in NSW"
- "Partner Visa Australia Guide (Subclass 820/801)"
- "Property Settlement After Separation in NSW"
- "Buying Property in NSW — Settlement Process"
- "Business Structure Options in Australia"
- "NCAT Disputes — Complete NSW Guide"

---

## Phase 4: Monitoring & Iteration (Ongoing) — Target: +4 points

### 4.1 Google Business Profile optimization
- Verify/claim GBP listing
- Set primary category to "Legal Service"
- Complete service area with Western Sydney suburbs
- Upload 15+ real photos
- Implement review acquisition workflow (target 20/month)

### 4.2 Directory citations
- Submit to LawConnect, HG.org, Yellow Pages, True Local
- Ensure NAP consistency across all listings

### 4.3 Content freshness
- Publish 2 blog posts per month targeting PAA queries
- Update FAQ answers seasonally with current statute references

### 4.4 Monitor AI search visibility
- Track firm mentions in Google AI Overviews for target queries
- Monitor ChatGPT and Perplexity responses for "lawyer Fairfield" queries
- Update llms.txt quarterly

---

## Score Projection

| Phase | Timeframe | Estimated Score |
|-------|-----------|----------------|
| Current | — | 58 |
| Phase 1 | Week 1 | 70 |
| Phase 2 | Weeks 2–3 | 78 |
| Phase 3 | Month 2 | 85 |
| Phase 4 | Ongoing | 90+ |
