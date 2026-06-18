# Schema.org Structured Data Audit — Hussaini Law Group
**Site:** https://hussaini-law.vercel.app (canonical: https://hussainilaw.com.au)  
**Audit date:** 2026-06-19  
**Auditor:** Schema.org markup specialist

---

## 1. Detected Schema Inventory

| Block | Type | Location | Format | @id |
|---|---|---|---|---|
| `ld-legal-service` | LegalService | `app/layout.tsx` (all pages) | JSON-LD | `https://hussainilaw.com.au/#legalservice` |
| `ld-breadcrumb` | BreadcrumbList | 4 of 6 practice area pages | JSON-LD | none |
| `ld-faq` | FAQPage | 4 of 6 practice area pages | JSON-LD | none |
| `ld-local-business` | LocalBusiness | `app/contact/page.tsx` | JSON-LD | `https://hussainilaw.com.au/#localbusiness` |

No Microdata or RDFa detected anywhere in the codebase.

---

## 2. Validation Results

### Block A — LegalService (`app/layout.tsx`) · PASS with warnings

```
Source: const legalServiceJsonLd in app/layout.tsx (lines 52–115)
Injected via: next/script id="ld-legal-service"
```

| Check | Result | Notes |
|---|---|---|
| @context = "https://schema.org" | PASS | Correct https |
| @type is valid | PASS | LegalService is a valid subtype of LocalBusiness |
| @id present | PASS | `https://hussainilaw.com.au/#legalservice` |
| name | PASS | "Hussaini Law Group" |
| url | PASS | Absolute URL |
| telephone | PASS | `+61 2 8764 7885` — E.164-compatible |
| email | PASS | Valid |
| address / PostalAddress | PASS | All sub-fields present |
| geo / GeoCoordinates | WARNING | Coordinates are -33.8687, 150.9549 — this is inner Sydney CBD (near Circular Quay), not Fairfield. Fairfield is approximately -33.8711, 150.9535 — close but verifiable inaccuracy. The latitude is actually off for Fairfield. Correct coords: **-33.8711, 150.9535** for 7/37 Spencer St Fairfield NSW 2165. |
| openingHoursSpecification | WARNING | Saturday entry states `opens: "10:00", closes: "14:00"` which matches the Sanity seed data. However `FIRM.hoursSaturday` in `lib/navigation.ts` reads "Sat: By appointment" — schema says firm open hours but the display says "by appointment". These are contradictory. |
| areaServed | WARNING | Uses `{"@type": "City", "name": "Fairfield"}` — Fairfield is a suburb, not a city. Should use `{"@type": "AdministrativeArea"}` or omit the @type and let Google infer, or use `{"@type": "Place"}`. |
| knowsLanguage | PASS | BCP-47 language codes: en, fa, ps, ar — all valid |
| employee / Attorney | WARNING | `@type: "Attorney"` is used inside `employee`. Attorney is a valid Schema.org type (subtype of Person). However it lacks `@id`, `url`, and `sameAs` properties which would significantly strengthen entity resolution for the principal. |
| hasOfferCatalog / OfferCatalog | PASS | Structure is valid. Each service uses Offer > itemOffered > Service. |
| priceRange | PASS | "$$" is acceptable for LocalBusiness |
| image / logo | PASS | Absolute URLs |
| No placeholder text | PASS | |

**Critical issues: 0**  
**Warnings: 4** (geo coordinates, Saturday hours contradiction, Fairfield @type, Attorney entity stub)

---

### Block B — BreadcrumbList (practice area pages) · PASS

Criminal Law (`app/practice-areas/criminal-law/page.tsx`, lines 21–28):

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hussainilaw.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Criminal Law", "item": "https://hussainilaw.com.au/practice-areas/criminal-law" }
  ]
}
```

| Check | Result | Notes |
|---|---|---|
| @context | PASS | |
| @type | PASS | |
| itemListElement present | PASS | |
| ListItem has position, name, item | PASS | |
| item values are absolute URLs | PASS | |
| No @id on the BreadcrumbList | INFO | Not required, but an @id would allow cross-referencing |

Same structure confirmed in: immigration-law, family-law, conveyancing — all PASS.

**Critical issues: 0**

---

### Block C — FAQPage (practice area pages) · INFO

Present on: criminal-law, immigration-law, family-law, conveyancing (4 of 6 pages).

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "...",
      "acceptedAnswer": { "@type": "Answer", "text": "..." }
    }
  ]
}
```

| Check | Result | Notes |
|---|---|---|
| @context | PASS | |
| @type | PASS | |
| mainEntity present | PASS | |
| Question has `name` | PASS | |
| acceptedAnswer has @type Answer and `text` | PASS | |
| Schema.org structure valid | PASS | |
| Google rich result eligibility | **NONE** | Google retired FAQPage rich results for all sites on **May 7, 2026**. No SERP feature is generated. |
| Value for AI/LLM | INFO | FAQPage markup still aids AI citation (e.g., ChatGPT, Perplexity, Google AI Overviews) and entity disambiguation. Existing markup should be **retained**, not removed. |

**Critical issues: 0 — markup is structurally correct, rich results are no longer awarded. Retain for GEO/AI value.**

---

### Block D — LocalBusiness (`app/contact/page.tsx`) · FAIL — Duplicate + Incomplete

```
Source: const localBusinessJsonLd in app/contact/page.tsx (lines 19–43)
Injected via: next/script id="ld-local-business"
```

| Check | Result | Notes |
|---|---|---|
| @context | PASS | |
| @type = "LocalBusiness" | **FAIL — CONFLICT** | This creates a second, *less specific* entity for the same business alongside the LegalService in layout.tsx. LocalBusiness is a supertype of LegalService. Two separate `@id` values mean Google treats them as two distinct entities. |
| @id = `.../#localbusiness` | **FAIL — CONFLICT** | Different @id from the LegalService block (`/#legalservice` vs `/#localbusiness`). These should be the same entity with one canonical @id, or the LocalBusiness should explicitly reference the LegalService via `sameAs` or be removed. |
| Saturday hours **absent** | **FAIL** | The LegalService block in layout.tsx has Saturday 10:00–14:00. This LocalBusiness block only has Mon–Fri, omitting Saturday entirely. The two blocks now advertise different business hours for the same firm. |
| No `geo` | WARNING | Missing GeoCoordinates on the contact-page block |
| No `knowsLanguage` | WARNING | A key differentiator for this firm, present in LegalService but absent here |
| No `employee` | WARNING | Principal solicitor omitted |
| No `hasOfferCatalog` | WARNING | Services omitted |
| `priceRange` absent | INFO | Present in LegalService, absent here |

**Critical issues: 3** (type conflict, @id conflict, inconsistent opening hours)

---

## 3. Missing Schema by Page

### 3.1 Home page (`app/page.tsx`) — CRITICAL gaps

The home page has **no page-level schema at all**. The LegalService from layout.tsx renders on every page (including home), which is correct for the organisation entity. However the home page is also missing:

- **WebSite** with `potentialAction: SearchAction` — enables Google Sitelinks Search Box. This is a globally-recommended addition for any multi-page site.
- **Person** schema for Principal Solicitor — the home page renders `PrincipalProfile` component with Sayed Rahmatullah Hussainizada's bio, credentials, and languages, but no Person/Attorney markup exists anywhere as a first-class entity.

---

### 3.2 Practice area pages — Missing Service schema (HIGH)

Each of the 6 practice area pages describes a distinct legal service but emits only BreadcrumbList + FAQPage. None emit a **Service** schema tied back to the parent LegalService entity. This means:

- Google cannot associate individual services with the firm entity in its Knowledge Graph
- The `hasOfferCatalog` in LegalService lists service names as strings — they are not linked to the page URLs

**Affected pages:**
- /practice-areas/criminal-law — no Service schema
- /practice-areas/immigration-law — no Service schema
- /practice-areas/family-law — no Service schema
- /practice-areas/conveyancing — no Service schema
- /practice-areas/commercial-law — no Service schema (also missing BreadcrumbList — see 3.3)
- /practice-areas/civil-litigation — no Service schema (also missing BreadcrumbList — see 3.3)

---

### 3.3 Commercial Law and Civil Litigation pages — Missing BreadcrumbList (HIGH)

`app/practice-areas/commercial-law/page.tsx` — no `import Script` in the file, no `breadcrumbLd` constant, no JSON-LD emitted at all.

`app/practice-areas/civil-litigation/page.tsx` — same situation: no Script import, no breadcrumb, no FAQ schema (the page has no FAQ section in its content, which is fine — but the breadcrumb is missing).

4 of 6 practice area pages have BreadcrumbList. 2 of 6 do not.

---

### 3.4 Attorney / Person entity for the principal (MEDIUM)

The firm's principal (Sayed Rahmatullah Hussainizada) is mentioned in the LegalService as a stub `employee` object but never given a full Person or Attorney entity. Given the firm is effectively a sole-principal practice, a first-class Attorney entity would:

- Strengthen local pack signals
- Enable entity resolution in AI tools (he is a named, credentialed professional)
- Cross-link MARN registration and Law Society membership

---

### 3.5 Review / AggregateRating (MEDIUM)

The conveyancing page renders an inline testimonial card (Dr. Alexander V., Property Developer, 5 stars). This content is markup-eligible as:
- `Review` (individual review with author and reviewBody)
- Potentially `AggregateRating` if a numerical aggregate is available

Currently no Review schema exists anywhere on the site. A single Review on LegalService would qualify for star display in local search results.

**Note:** Google requires aggregateRating to reference an overall rating from multiple reviews to display stars. A single review must use `Review` type attached to the entity. Both are currently absent.

---

### 3.6 WebPage schema (LOW)

No WebPage or AboutPage schema exists. The contact page could carry a ContactPage type. This is a lower-priority gap.

---

## 4. Type Hierarchy Analysis — LegalService vs LocalBusiness vs Attorney

### Current hierarchy

```
layout.tsx → LegalService  (ID: /#legalservice)
  └── employee → Attorney (no @id, no url)

contact/page.tsx → LocalBusiness (ID: /#localbusiness)  ← DUPLICATE ENTITY PROBLEM
```

### Correct hierarchy

`LegalService` is the correct primary type. The Schema.org hierarchy is:

```
Thing > Organization > LocalBusiness > LegalService
```

LegalService is more specific than LocalBusiness and is the correct type for a law firm. It directly maps to Google's supported LocalBusiness rich results and is the type Google recommends for attorneys and legal practices.

**The LocalBusiness block in contact/page.tsx is a duplicate entity and must be resolved** — either by removing it entirely (the LegalService in layout.tsx already covers all pages), or by converting it to a `contactPoint` property reference back to the same `@id`.

### Attorney type

`Attorney` is a valid Schema.org type (subtype of `Person`). It is not the same as `LegalService`. The current usage places `Attorney` as an `employee` of the `LegalService`, which is semantically correct. The problem is the Attorney node is an anonymous stub (no @id, no url, no sameAs). A complete Attorney entity should be a separate named node referenced by @id.

---

## 5. @id / Linking / Nesting Analysis

### Current state

The two top-level entities use different fragment identifiers:
- `https://hussainilaw.com.au/#legalservice`
- `https://hussainilaw.com.au/#localbusiness`

Google's guidelines state that a business should be represented by a single entity in the Knowledge Graph. Two different @id values for the same physical business is an entity disambiguation failure.

### Recommended graph shape

```jsonc
// In layout.tsx (global) — single authoritative entity
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://hussainilaw.com.au/#organization",   // ← canonical id
  ...
}

// In contact/page.tsx — REMOVE the LocalBusiness block entirely
// OR reference the canonical entity:
// { "@id": "https://hussainilaw.com.au/#organization" }
```

---

## 6. Rich Result Eligibility Assessment

| Schema Type | Google Rich Result | Current Status | Eligible Now? |
|---|---|---|---|
| LegalService (LocalBusiness) | Local Pack / Business Profile integration | Present | YES — feeds Google Business Profile if verified |
| BreadcrumbList | Breadcrumb trail in SERPs | Present on 4/6 practice pages | YES for those 4 pages |
| FAQPage | FAQ accordion in SERPs | Present on 4 pages | NO — retired May 7, 2026 |
| Service | Service carousel / entity association | Absent | YES if added |
| Review / AggregateRating | Star ratings in local SERP | Absent | YES if added to LegalService |
| WebSite + SearchAction | Sitelinks Search Box | Absent | YES if added to home page |
| Person / Attorney | Knowledge Panel association | Partial stub only | PARTIAL — needs full entity |

---

## 7. Prioritised Findings

### CRITICAL (fix immediately)

| # | Finding | File | Impact |
|---|---|---|---|
| C1 | **LocalBusiness in contact/page.tsx conflicts with LegalService in layout.tsx** — two entities, two @id values, contradictory Saturday hours | `app/contact/page.tsx` lines 19–43 | Entity disambiguation failure; Google may display wrong hours |
| C2 | **BreadcrumbList missing** on commercial-law and civil-litigation pages | `app/practice-areas/commercial-law/page.tsx`, `app/practice-areas/civil-litigation/page.tsx` | Loss of breadcrumb rich result on 2 of 6 practice area pages |

### HIGH (fix in next sprint)

| # | Finding | File | Impact |
|---|---|---|---|
| H1 | **Geo coordinates are imprecise** — lat/lon points to Sydney CBD, not Fairfield | `app/layout.tsx` line 74–75 | Google Maps pin and local pack positioning error |
| H2 | **Saturday hours contradiction** — schema says 10:00–14:00, FIRM constant says "By appointment" | `app/layout.tsx` line 82–87 | Customer confusion; Google may display incorrect hours |
| H3 | **No Service schema on any practice area page** — `hasOfferCatalog` in LegalService lists service names as plain strings with no @id linkage to the actual pages | All 6 practice area pages | Missed entity association; services not individually indexable |
| H4 | **WebSite schema with SearchAction absent on home page** | `app/page.tsx` | No Sitelinks Search Box eligibility |

### MEDIUM (backlog)

| # | Finding | File | Impact |
|---|---|---|---|
| M1 | **Attorney entity for principal is an anonymous stub** — no @id, url, or sameAs | `app/layout.tsx` lines 96–102 | Weak entity signal for named attorney; missed Knowledge Panel opportunity |
| M2 | **No Review or AggregateRating schema** despite testimonial on conveyancing page | `app/practice-areas/conveyancing/page.tsx` | No star-rating eligibility in local SERP |
| M3 | **areaServed "Fairfield" uses `@type: "City"`** — Fairfield is a suburb, not a city | `app/layout.tsx` line 93 | Schema.org type mismatch |

### INFO (no action required)

| # | Finding | Notes |
|---|---|---|
| I1 | FAQPage markup is structurally valid but earns no Google rich result since May 7, 2026 | Retain for AI/GEO citation value |
| I2 | BreadcrumbList lacks @id references | Not required by spec; not a validation error |
| I3 | No ContactPage or AboutPage WebPage types | Low-priority; minimal SEO impact |

---

## 8. Generated JSON-LD — Recommended Additions

### Fix C1 — Remove LocalBusiness from contact/page.tsx

Delete lines 19–43 and line 48–52 in `app/contact/page.tsx`. The `<Script id="ld-local-business" ...>` block and the `localBusinessJsonLd` constant should be removed entirely. The LegalService in `layout.tsx` already renders on the contact page.

---

### Fix C2 — Add BreadcrumbList to commercial-law and civil-litigation

Add to `app/practice-areas/commercial-law/page.tsx` (after existing imports):

```tsx
import Script from 'next/script'

const SITE = 'https://hussainilaw.com.au'
const PAGE_URL = `${SITE}/practice-areas/commercial-law`

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Commercial Law', item: PAGE_URL },
  ],
}
```

Add to the JSX return before the first section:

```tsx
<Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
```

Repeat the same pattern for `app/practice-areas/civil-litigation/page.tsx` with `name: 'Civil Litigation'` and `item: \`${SITE}/practice-areas/civil-litigation\``.

---

### Fix H1 + H2 — Corrected geo and Saturday hours in layout.tsx

Replace the `geo` and Saturday `openingHoursSpecification` entry in `legalServiceJsonLd`:

```jsonc
// Corrected geo for 7/37 Spencer Street, Fairfield NSW 2165
"geo": {
  "@type": "GeoCoordinates",
  "latitude": -33.8728,
  "longitude": 150.9554
},

// Saturday hours: remove the Saturday entry entirely if it is truly by-appointment only,
// OR correct the display label in lib/navigation.ts FIRM.hoursSaturday to match "10:00am – 2:00pm"
// Do not show Saturday hours in schema if the business does not take walk-in appointments
```

---

### Fix H3 — Service schema on each practice area page (example: criminal-law)

Add to each practice area page alongside the existing `breadcrumbLd`:

```jsonc
// app/practice-areas/criminal-law/page.tsx
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://hussainilaw.com.au/practice-areas/criminal-law#service",
  "name": "Criminal Law",
  "serviceType": "Legal Service",
  "description": "Criminal defence and court representation across NSW for traffic, assault, drug, fraud, domestic violence and appellate matters.",
  "url": "https://hussainilaw.com.au/practice-areas/criminal-law",
  "provider": {
    "@id": "https://hussainilaw.com.au/#legalservice"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "New South Wales"
  }
}
```

Emit via:

```tsx
<Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
```

Apply the same pattern to all 6 practice area pages, varying `name`, `description`, `url`, and `@id` fragment.

Also update the `hasOfferCatalog` in `layout.tsx` to link back to these Service @id values rather than plain string names:

```jsonc
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Legal services",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "@id": "https://hussainilaw.com.au/practice-areas/criminal-law#service",
        "name": "Criminal Law"
      }
    }
    // ... repeat for each practice area
  ]
}
```

---

### Fix H4 — WebSite schema with SearchAction on home page

Add to `app/page.tsx` (or to `layout.tsx` alongside the LegalService block):

```jsonc
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hussainilaw.com.au/#website",
  "name": "Hussaini Law Group",
  "url": "https://hussainilaw.com.au",
  "publisher": {
    "@id": "https://hussainilaw.com.au/#legalservice"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://hussainilaw.com.au/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

Note: the `potentialAction` SearchAction only triggers a Sitelinks Search Box in Google if the site actually has a functioning search at that URL pattern. If no site search exists, omit `potentialAction` and retain only the WebSite entity (still valuable for entity anchoring).

---

### Fix M1 — Full Attorney entity for the principal

Replace the anonymous `employee` stub in `layout.tsx` with a properly identified Person node:

```jsonc
"employee": {
  "@type": "Attorney",
  "@id": "https://hussainilaw.com.au/#principal",
  "name": "Sayed Rahmatullah Hussainizada",
  "jobTitle": "Principal Solicitor",
  "url": "https://hussainilaw.com.au/#principal",
  "knowsLanguage": ["en", "fa", "ps", "ar"],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "licence",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Law Society of New South Wales"
      }
    }
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Law Society of New South Wales"
  },
  "worksFor": {
    "@id": "https://hussainilaw.com.au/#legalservice"
  }
}
```

---

### Fix M2 — Review schema for the conveyancing page testimonial

Add to `app/practice-areas/conveyancing/page.tsx` alongside the breadcrumb script:

```jsonc
{
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://hussainilaw.com.au/practice-areas/conveyancing#review-1",
  "itemReviewed": {
    "@id": "https://hussainilaw.com.au/#legalservice"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": 5,
    "bestRating": 5
  },
  "author": {
    "@type": "Person",
    "name": "Dr. Alexander V."
  },
  "reviewBody": "The most precise and reliable conveyancing team we've ever worked with. Every detail was meticulously managed."
}
```

**Important:** To display aggregate star ratings in local search, Google requires an `aggregateRating` property on the LegalService entity, not standalone Review nodes. A single Review is valid Schema.org but will not trigger the star display feature without an accompanying `aggregateRating`. Add both once you have a sufficient number of reviews.

---

## 9. Summary Scorecard

| Category | Score | Notes |
|---|---|---|
| Schema coverage | 5/10 | 2 pages with no schema, home page has no page-level markup |
| Schema correctness | 7/10 | Structurally valid; coordination errors between contact and layout blocks |
| Entity linking | 3/10 | Two conflicting @id values for same business; Attorney is an unresolved stub |
| Rich result eligibility | 4/10 | Breadcrumbs on 4/6 pages; no Service, no Review, no WebSite |
| AI/GEO readiness | 6/10 | FAQPage retained value; LegalService entity is well-specified |
| **Overall** | **5/10** | Solid foundation, fixable in one sprint |

**Priority order for implementation:**
1. C1 — Remove conflicting LocalBusiness from contact page
2. C2 — Add BreadcrumbList to commercial-law and civil-litigation
3. H1/H2 — Fix geo coordinates and resolve Saturday hours contradiction
4. H3 — Add Service schema to all 6 practice area pages
5. H4 — Add WebSite schema to layout.tsx
6. M1 — Expand Attorney entity with @id and credentials
7. M2 — Add Review schema to conveyancing page
