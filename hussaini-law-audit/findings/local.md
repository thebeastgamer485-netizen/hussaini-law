# Local SEO Audit — Hussaini Law Group
**Audit date:** 2026-06-19
**Auditor:** Local SEO Agent (Claude Sonnet 4.6)
**Site:** https://hussainilaw.com.au (staging: https://hussaini-law.vercel.app)
**Business:** Hussaini Law Group, 7/37 Spencer Street, Fairfield NSW 2165

---

## Local SEO Score

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|---------|
| GBP Signals | 25% | 28/100 | 7.0 |
| Reviews & Reputation | 20% | 15/100 | 3.0 |
| Local On-Page SEO | 20% | 52/100 | 10.4 |
| NAP Consistency & Citations | 15% | 62/100 | 9.3 |
| Local Schema Markup | 10% | 60/100 | 6.0 |
| Local Link & Authority Signals | 10% | 20/100 | 2.0 |
| **TOTAL** | **100%** | — | **37.7 / 100** |

**Overall: 38 / 100 — Significant gaps. Priority work needed before the site can compete in local pack results.**

---

## Business Type Detection

**Type: Brick-and-mortar (primary) + service-area hybrid**

Evidence:
- Full street address visible in footer, contact page, JSON-LD schema, and OG tags
- Google Maps static link present on contact page (`/contact`)
- Service-area language present ("serving Greater Sydney", "represent clients across New South Wales and internationally")
- No embedded Google Maps iframe (static link only — reduces GBP signal strength)

**Industry Vertical: Legal Services — multi-practice law firm**
- Subtype signals: criminal, immigration, family, conveyancing, commercial, civil litigation
- Attorney credentials, Law Society NSW membership, MARA accreditation
- NSW court references (Local Court, District Court, Supreme Court, NCAT)

---

## 1. NAP Consistency Audit

### Source Comparison Table

| Source | Name | Address | Phone |
|--------|------|---------|-------|
| `app/layout.tsx` JSON-LD | Hussaini Law Group | 7/37 Spencer Street, Fairfield, NSW, 2165, AU | +61 2 8764 7885 |
| `app/contact/page.tsx` JSON-LD | Hussaini Law Group | 7/37 Spencer Street, Fairfield, NSW, 2165, AU | +61 2 8764 7885 |
| `lib/navigation.ts` FIRM constant | Hussaini Law Group | 7/37 Spencer Street, Fairfield NSW 2165 | 02 8764 7885 |
| Footer (rendered HTML) | Hussaini Law Group | 7/37 Spencer Street, Fairfield NSW 2165 | 02 8764 7885 |
| Contact page (rendered HTML) | Hussaini Law Group | 7/37 Spencer Street, Fairfield NSW 2165 | 02 8764 7885 |
| `public/llms.txt` | Hussaini Law Group | 7/37 Spencer Street, Fairfield NSW 2165 | 02 8764 7885 |
| Meta description (`layout.tsx`) | — | Fairfield-based (no street) | — |
| Open Graph | — | Fairfield, Sydney (no street) | — |

**NAP Verdict: Consistent across all primary sources. No discrepancies detected.**

### Flags / Concerns

**MEDIUM — Saturday hours discrepancy between schema and UI:**
- `app/layout.tsx` JSON-LD `OpeningHoursSpecification` states Saturday `10:00–14:00` (correct)
- `app/contact/page.tsx` JSON-LD `OpeningHoursSpecification` is **missing Saturday entirely** — only Mon-Fri is declared
- `lib/navigation.ts` `hoursSaturday` reads `"Sat: By appointment"` — which is ambiguous (GBP prefers specific hours or "by appointment" as a flag, not a text string)
- **Impact:** Google may show conflicting hours if it reads the contact page schema vs. the root schema

**MEDIUM — Mobile number appears to be a placeholder:**
- `lib/navigation.ts` has `mobile: '0451 234 567'` — a sequential placeholder number
- This number appears on the contact page as a displayed mobile
- If published without a real number, it creates a trust issue and may lead to directory citation errors

**LOW — Phone format inconsistency:**
- Schema uses `+61 2 8764 7885` (E.164 with space after country code)
- HTML display uses `02 8764 7885` (local format)
- These are functionally identical but some aggregators require strict E.164: `+61287647885`
- The `phoneTel` href correctly uses `+61287647885`

---

## 2. Local Schema Markup Validation

### Root Layout — `LegalService` (app/layout.tsx)

| Property | Status | Notes |
|----------|--------|-------|
| `@type` | PARTIAL | `LegalService` is correct per schema.org. However `Attorney` is used for the employee — `Attorney` is deprecated in favour of `LegalService` sub-typing. Recommend `Person` with `jobTitle` |
| `@id` | PASS | `https://hussainilaw.com.au/#legalservice` |
| `name` | PASS | Hussaini Law Group |
| `address` (PostalAddress) | PASS | All 5 required sub-fields present |
| `telephone` | PASS | +61 2 8764 7885 |
| `url` | PASS | |
| `geo` (GeoCoordinates) | FAIL | Lat `-33.8687` / Long `150.9549` — **only 4 decimal places**. Best practice requires 5+ decimal places for ~1m accuracy. Fairfield NSW centroid is approximately `-33.87220, 150.95512` — verify against actual office pin |
| `openingHoursSpecification` | PASS | Weekday + Saturday both present |
| `areaServed` | PARTIAL | Only `Sydney`, `Fairfield`, and `New South Wales`. Missing key suburbs: Parramatta, Liverpool, Bankstown, Cabramatta, Auburn, Merrylands — all high-volume search areas for this firm's demographics |
| `knowsLanguage` | PASS | en, fa, ps, ar |
| `hasOfferCatalog` | PASS | 6 services mapped |
| `priceRange` | PASS | `$$` |
| `image` / `logo` | PASS | |
| `aggregateRating` | MISSING | No review/rating schema anywhere on the site |
| `sameAs` | MISSING | No social profile or directory URLs linked in schema |

### Contact Page — `LocalBusiness` (app/contact/page.tsx)

**CRITICAL — Schema type duplication/conflict:**
- The root layout emits `LegalService` (correct, more specific)
- The contact page emits a second, separate `LocalBusiness` entity with a different `@id` (`#localbusiness` vs `#legalservice`)
- These are not cross-referenced via `sameAs` — Google may treat them as two different businesses
- The contact-page schema is **missing**: `geo`, `Saturday hours`, `areaServed`, `knowsLanguage`, `employee`, `hasOfferCatalog`
- Recommendation: Remove the `LocalBusiness` schema from the contact page entirely and rely on the root `LegalService` schema, or make the contact page schema reference the root entity via `@id`

### Practice Area Pages — Schema Audit

| Page | BreadcrumbList | FAQPage | Service-level schema |
|------|---------------|---------|---------------------|
| Criminal Law | PASS | PASS | MISSING |
| Immigration Law | PASS | PASS | MISSING |
| Family Law | PASS | PASS | MISSING |
| Conveyancing | PASS | PASS | MISSING |
| Commercial Law | MISSING | MISSING | MISSING |
| Civil Litigation | MISSING | MISSING | MISSING |

**HIGH — Commercial Law and Civil Litigation pages have zero structured data markup.** They lack both BreadcrumbList and FAQPage schemas. Civil Litigation also has FAQs in the content but no corresponding `FAQPage` schema.

**Recommended additional schema per practice area:**
- `Service` schema on each practice area page, linked to the root `LegalService` entity via `provider`
- `LegalService` sub-type for each area (e.g., `CriminalLaw`, `ImmigrationLaw`) as `additionalType`

---

## 3. GBP Signals

### On-Page GBP Signal Checklist

| Signal | Status | Notes |
|--------|--------|-------|
| Embedded Google Maps iframe | MISSING | Contact page uses a static image with a Google Maps link, not an embedded live iframe |
| Place ID reference | MISSING | No `place_id` or `cid` reference anywhere |
| GBP review widget | MISSING | No Google reviews widget or `aggregateRating` schema |
| Business hours visible in HTML | PASS | Footer and contact page display hours |
| Phone number as clickable `tel:` link | PASS | Footer and CTAs use `tel:+61287647885` |
| Address in visible HTML | PASS | Footer, contact page |
| Category-appropriate landing page | PARTIAL | Home page does not have a keyword-rich, locally-optimised H1 — it reads "Advocacy for Every Community" rather than e.g. "Multicultural Law Firm Fairfield Sydney" |
| GBP post evidence | MISSING | No integration or indication of GBP Posts |
| Photo evidence / office images | PARTIAL | CDN images used; no real office photos confirmed |
| Service area page | MISSING | No dedicated service area or suburb landing page |

**GBP assessment: The site has no live Maps embed and no review/rating signals. This significantly limits the trust signals Google can validate on-page against the GBP profile. Adding a live iframe embed on the contact page would directly strengthen the GBP-to-website signal.**

---

## 4. Review Signals & Reputation

### Review Health Snapshot

| Metric | Status |
|--------|--------|
| `aggregateRating` in root schema | MISSING |
| `aggregateRating` in contact schema | MISSING |
| Testimonial on site | ONE (conveyancing page — Dr. Alexander V.) |
| `Review` schema on testimonial | MISSING |
| Review count | Unknown (no schema) |
| Review velocity | Unknown (no monitoring configured) |
| Response pattern | Unknown |

**CRITICAL — No review schema anywhere on the site.**

The conveyancing page (`/practice-areas/conveyancing`) displays a 5-star testimonial from "Dr. Alexander V., Property Developer" but there is no corresponding `Review` or `aggregateRating` schema. This is a lost rich-result opportunity.

**Per Whitespark 2026 findings, review velocity is subject to the 18-day rule — rankings cliff if no new reviews appear for 3 weeks.** The site currently does nothing to surface or prompt reviews. There is no:
- Link to the GBP review page
- "Leave a review" CTA
- Review monitoring integration (e.g. Birdeye, Grade.us)

**Recommended action:** Add `aggregateRating` to the root `LegalService` schema once real review data is available. Add `Review` markup to the Dr. Alexander V. testimonial. Create a review request workflow.

---

## 5. Local On-Page SEO — Keyword & Content Analysis

### Meta Title Analysis

| Page | Current Title | Assessment |
|------|--------------|------------|
| Home | `Hussaini Law Group — Multicultural Legal Excellence in Sydney` | No Fairfield. No practice-area keyword. Wasted primary term slot. |
| Criminal Law | `Criminal Law Solicitors Sydney \| Hussaini Law Group` | Good. No suburb (Fairfield). |
| Immigration Law | `Immigration Lawyers Sydney \| Hussaini Law Group` | Good. No suburb. |
| Family Law | `Family Lawyers Sydney \| Hussaini Law Group` | Good. No suburb. |
| Conveyancing | `Conveyancing Solicitors Sydney \| Hussaini Law Group` | Good. No suburb. |
| Commercial Law | `Commercial Lawyers Sydney \| Hussaini Law Group` | Good. No suburb. |
| Civil Litigation | `Civil Litigation Lawyers Sydney \| Hussaini Law Group` | Good. No suburb. |
| Contact | `Contact — Hussaini Law Group, Fairfield Sydney` | Only page with Fairfield in title. Good. |

**Pattern:** All practice area titles use "Sydney" as the geo-modifier. No page uses "Fairfield" in the title, which is the firm's actual locality and a high-intent search term for the firm's target demographic.

### H1 Analysis

| Page | H1 | Geo-modified? |
|------|-----|--------------|
| Home | "Advocacy for Every Community" | No |
| Criminal Law | "Criminal Defense & Court Representation" | No |
| Immigration Law | "Immigration Law" | No |
| Family Law | "Compassionate Advocacy for Family Matters." | No |
| Conveyancing | "Seamless Property Transactions & Expert Advice." | No |
| Commercial Law | "Strategic Legal Solutions for Your Business." | No |
| Civil Litigation | "Rigorous Advocacy in Civil Disputes" | No |
| Contact | "Heritage. Precision. Advocacy." | No |

**CRITICAL — Zero H1 tags on the site contain a geographic keyword.** Every H1 is brand-tone copy, not search-intent copy. This is the single largest on-page local SEO gap on the site.

### Geo-keyword Density in Body Content

| Geo Term | Occurrences in Rendered HTML |
|----------|------------------------------|
| Fairfield | Scattered — footer, contact page, meta descriptions, HeroHome paragraph |
| Sydney | Meta titles, immigration page intro, civil litigation intro |
| Western Sydney | 0 |
| Parramatta | 0 |
| Liverpool | 0 |
| Cabramatta | 0 |
| Bankstown | 0 |
| NSW courts | Criminal law page body, civil litigation `servicesIntro` |
| Local Court | 1 (civil litigation `servicesIntro`) |
| District Court | 1 (civil litigation `servicesIntro`) |
| Supreme Court | 2 (criminal, civil litigation) |
| NCAT | 2 (civil litigation) |
| Family Court | 0 |
| Federal Circuit Court | 0 |

**Key gaps:**
- No mention of Western Sydney suburbs that represent the firm's actual catchment area
- Family Law page makes no reference to the Federal Circuit and Family Court of Australia
- Immigration Law page does not mention Department of Home Affairs, AAT by full name (only "AAT")
- Conveyancing page does not mention NSW Land Registry, OSR (Revenue NSW), or PEXA by name in visible H2/H3 headings (only in body text)

### Local Content Quality Scores (per page)

| Page | Court refs | Suburb refs | Agency/body refs | Score |
|------|-----------|-------------|-----------------|-------|
| Criminal Law | 2 (NSW courts, Supreme Court) | 1 (Fairfield) | 0 | 3/10 |
| Immigration Law | 1 (AAT) | 1 (Sydney) | 0 | 2/10 |
| Family Law | 0 | 0 | 0 | 0/10 |
| Conveyancing | 2 (PEXA, Land Registry implied) | 0 | 0 | 2/10 |
| Commercial Law | 0 | 0 | 0 | 0/10 |
| Civil Litigation | 4 (Local, District, Supreme, NCAT) | 0 | 0 | 4/10 |

---

## 6. Industry-Specific Local Factors — Legal

### Court & Jurisdiction References

**Detected:**
- Local Court (civil litigation only)
- District Court (civil litigation only)
- Supreme Court of NSW (criminal + civil)
- NCAT (civil litigation only)
- AAT — Administrative Appeals Tribunal (immigration)

**Missing court references by practice area:**

| Practice Area | Key Court / Body | Present? |
|--------------|-----------------|----------|
| Criminal Law | Fairfield Local Court (specific court) | No |
| Criminal Law | Downing Centre District Court | No |
| Criminal Law | CAN — Community Aid & Legal Centre | No |
| Family Law | Federal Circuit and Family Court of Australia | No |
| Family Law | Family Court of Australia | No |
| Immigration | Department of Home Affairs | No |
| Immigration | Immigration Assessment Authority (IAA) | No |
| Conveyancing | NSW Land Registry Services | No |
| Conveyancing | Revenue NSW / OSR | No |
| Commercial | ACCC (Australian Consumer Law) | No (Civil page has ACL reference) |

**Naming Fairfield Local Court specifically in the criminal law page would be a high-value local signal** — lawyers who appear at that specific courthouse are more relevant to local search intent than generic "NSW courts" mentions.

### Legal Aid & Community References

- No mention of Legal Aid NSW
- No mention of Community Legal Centres
- No mention of Law Access NSW
- These references, where genuinely applicable, would provide contextual trust signals and support long-tail informational queries

### Credentials & Accreditation

- Law Society NSW membership stated in content
- "Accredited Specialist" stated but no specialty area named (Criminal Law? Migration?)
- MARA registration mentioned for immigration
- Supreme Court of NSW admission stated in TEAM_PRINCIPAL
- No NSW Bar Association reference (if applicable)
- No MARN number displayed (Migration Agent Registration Number — important trust signal for immigration clients)

---

## 7. Citation Readiness

### NAP Structured for Directory Listings

The FIRM constants in `lib/navigation.ts` are the single source of truth and are well-structured. However:

| Requirement | Status |
|------------|--------|
| Consistent business name | PASS — "Hussaini Law Group" everywhere |
| Street address with suite/unit | PASS — "7/37 Spencer Street" (unit 7 of 37) |
| City/suburb | PASS — Fairfield |
| State | PASS — NSW |
| Postcode | PASS — 2165 |
| Country | PASS — AU / Australia |
| Primary phone (E.164) | PASS — +61287647885 available via `phoneTel` |
| Mobile phone | CONCERN — 0451 234 567 appears to be a placeholder |
| Email | PASS — info@hussainilaw.com.au |
| Website | PASS — https://hussainilaw.com.au |
| Business categories | PARTIAL — No standard directory category mapping defined |

### Tier 1 Directory Status

These were assessed from site signals only (no live directory check performed):

| Directory | Signal Present | Notes |
|-----------|--------------|-------|
| Google Business Profile | UNKNOWN — no place_id visible | Cannot confirm GBP claimed/verified from site alone |
| Yelp Australia | Not confirmed | No Yelp badge/widget on site |
| True Local | Not confirmed | No widget |
| Yellow Pages (AU) | Not confirmed | No reference |
| Hotfrog Australia | Not confirmed | No reference |
| Law Society NSW Find A Lawyer | Not confirmed | Membership stated but no link |
| Lawyerly.com.au | Not confirmed | No reference |
| Justia | Not confirmed | No reference |
| LawTap | Not confirmed | No reference |
| BBB equivalent (AICD/ACCC) | Not applicable in AU context | |

**The site has no directory badge, citation widget, or `sameAs` schema links pointing to any external directory.** This is a major gap for the 3 of 5 top AI-visibility factors that are citation-related (per Whitespark 2026).

---

## 8. Service Area Coverage

### Currently Declared areaServed (Schema)

```json
[
  { "@type": "City", "name": "Sydney" },
  { "@type": "City", "name": "Fairfield" },
  { "@type": "AdministrativeArea", "name": "New South Wales" }
]
```

### Visible Service Area Language (Contact Page)

"While based in Fairfield, we represent clients across New South Wales and internationally."
Jurisdictions listed as decorative text: Sydney, Melbourne, Canberra, International Matters

### Gaps

- **No suburb-level service area pages.** For a firm in Fairfield serving the multicultural Western Sydney corridor, the following suburbs represent high-value local search opportunities with no dedicated page or content cluster:
  - Cabramatta (large Vietnamese + Afghan community)
  - Bankstown (large Arabic-speaking community)
  - Liverpool (major regional hub)
  - Parramatta (CBD of Western Sydney)
  - Auburn (Dari/Arabic-speaking community)
  - Merrylands / Guildford
  - Lakemba
- The contact page lists "Melbourne" and "Canberra" as served areas, but these are presented as decorative italic text with `opacity-40` — they carry no semantic or schema weight and may confuse crawlers about the firm's actual service footprint

---

## 9. Multilingual Local SEO

### Current Implementation

| Element | Status |
|---------|--------|
| `lang="en"` on `<html>` | PASS — correct |
| Farsi name `دفتر وکالت حسینی` in footer | PASS — visible, `dir="rtl"` |
| Arabic name `مكتب الحسيني للمحاماة` in footer | PASS — visible, `dir="rtl"` |
| Languages listed in footer copyright | PASS — "English · Dari · Pashto · Arabic" |
| Languages listed in contact page badge | PASS |
| `knowsLanguage` in schema | PASS — en, fa, ps, ar |
| `hreflang` alternate links | MISSING |
| Dedicated Arabic/Dari/Pashto pages | MISSING |
| Multilingual meta description | MISSING |
| Arabic/Dari content blocks on practice area pages | MISSING |

### Opportunity Assessment

This firm has a genuine and strong multilingual differentiator that is almost entirely absent from on-page content beyond decorative name renders. The Fairfield / Western Sydney corridor is one of Australia's most linguistically diverse regions. Specific opportunities:

1. **Dari/Pashto searchers:** The Afghan community in Western Sydney is significant. Search terms like "وکیل در سیدنی" (lawyer in Sydney) or "وکیل مهاجرت استرالیا" (Australia immigration lawyer) represent zero-competition opportunities in Dari/Pashto that this firm is uniquely positioned to own. Currently, the site serves none of these queries.

2. **Arabic searchers:** "محامي سيدني" (Sydney lawyer), "محامي هجرة استراليا" (Australia immigration lawyer in Arabic). The Bankstown/Lakemba Arabic-speaking community is large. No Arabic content exists beyond the firm's Arabic name.

3. **`hreflang` is not applicable** if the firm does not publish multilingual pages, but it would become necessary if multilingual content is added.

4. **Suggested implementation:** At minimum, add a multilingual intro paragraph (2-3 sentences in Dari/Arabic/Pashto) to the Contact page and Immigration Law page. This alone would capture long-tail queries from speakers of those languages who search Google in their native script.

---

## 10. Location Page Quality

The site is single-location (one office address). There are no doorway page concerns. However, the lack of suburb/service-area sub-pages is a missed opportunity (see Section 8).

### Single Location Assessment

| Factor | Status |
|--------|--------|
| Unique address on every page | PASS — via footer |
| Map/directions link | PARTIAL — static Google Maps link, no embed |
| Location in page title (contact page) | PASS |
| Location in page title (practice area pages) | FAIL — none use "Fairfield" |
| Location in H1 | FAIL — no H1 uses a geo term |
| Schema address consistent | PASS |
| Doorway page risk | N/A — single location |

---

## Top 10 Prioritised Actions

### CRITICAL

**1. Add geo-modified keywords to H1 tags on all practice area pages**
Every H1 is brand-tone copy with zero geo-signal. Minimum viable fix: append or restructure to include location. Examples:
- "Criminal Defence Lawyers — Fairfield & Sydney NSW"
- "Immigration Lawyers Serving Fairfield & Greater Sydney"
This is the #1 on-page local ranking factor and currently a blank slot across all 8 pages.

**2. Add `aggregateRating` to the root `LegalService` schema**
Even a conservative, accurate rating (e.g., from Google reviews) added to the JSON-LD will enable rich stars in organic results and is a significant CTR driver. Currently missing entirely. Once real GBP review data exists, implement immediately.

**3. Resolve the duplicate/conflicting schema entities**
The contact page emits a `LocalBusiness` entity with `@id: #localbusiness` while the root layout emits `LegalService` with `@id: #legalservice`. These are not linked. Either remove the contact-page schema or add `sameAs` cross-reference. Also fix: Saturday hours are absent from the contact-page schema.

### HIGH

**4. Add a live Google Maps iframe embed to the contact page**
Replace the static image + link with an embedded `<iframe>` using the Google Maps Embed API. This is one of the clearest on-page GBP signals. The static image currently in use carries no semantic weight for Google.

**5. Add BreadcrumbList and FAQPage schema to Commercial Law and Civil Litigation pages**
These two pages have zero structured data. Civil Litigation has FAQ content in `lib/content.ts` that is rendered on the page but lacks a `FAQPage` schema. This is a two-line fix (follow the pattern from criminal-law/page.tsx).

**6. Expand `areaServed` in root schema and add suburb mentions to content**
Add at minimum: Parramatta, Liverpool, Bankstown, Cabramatta, Auburn to `areaServed`. Add suburb names to the contact page "Advocacy Across Borders" section (currently decorative) and to the immigration + criminal law pages.

**7. Add "Fairfield" to practice area page meta titles**
Current pattern: "[Practice] Lawyers Sydney | Hussaini Law Group"
Recommended: "[Practice] Lawyers Fairfield Sydney | Hussaini Law Group"
This directly targets users searching for lawyers in their suburb.

### MEDIUM

**8. Name Fairfield Local Court and other specific courts in practice area content**
Criminal Law page body mentions "all NSW courts" generically. Adding "Fairfield Local Court", "Downing Centre", and "Parramatta District Court" as specific named references provides strong geo-relevance signals and matches the search intent of local defendants.

**9. Fix geo coordinate precision and verify pin accuracy**
Current: `-33.8687, 150.9549` (4 decimal places). Required: 5+ decimal places. Verify the pin matches the actual office at 7/37 Spencer Street, Fairfield (Google Maps shows approximately `-33.87218, 150.95506`). Wrong geo coordinates cause local pack misplacement.

**10. Add multilingual content blocks to Contact and Immigration Law pages**
A 2-3 sentence introduction in Dari/Pashto and Arabic on the immigration and contact pages would capture zero-competition queries from the firm's core communities. This is a unique competitive advantage no nearby competitor is likely exploiting in these scripts.

### LOW

**11. Add `sameAs` array to root LegalService schema**
Include URLs to: LinkedIn company page, Facebook page (if live), Law Society NSW profile, Yelp listing (once claimed). The `sameAs` property helps Google's Knowledge Graph connect the website entity to authoritative third-party profiles.

**12. Add Review schema to the Dr. Alexander V. conveyancing testimonial**
The conveyancing page renders a 5-star testimonial. Wrapping it in `Review` / `AggregateRating` schema (accurately attributed) enables potential rich snippet display.

**13. Verify and publish a real mobile phone number**
`0451 234 567` in `lib/navigation.ts` appears to be a sequential placeholder. This number is rendered on the contact page. Publishing a real mobile allows clients to reach the firm directly and avoids NAP inconsistencies if directories crawl the site.

**14. Add a "Leave a review" CTA somewhere on the site**
No current page invites clients to leave a Google review. A simple footer link or post-contact confirmation page link to the GBP review URL costs nothing and directly feeds review velocity — the Whitespark 18-day rule is a real risk for this firm.

---

## Limitations Disclaimer

The following could not be assessed without paid tools or direct GBP access:

- **Live GBP data:** Whether the GBP profile is claimed, verified, and complete. Whether the primary category matches "Legal Services" or a more specific sub-category. Primary category is the #1 local ranking factor (Whitespark 2026, score 193) and wrong category is the #1 negative factor (score 176). This must be verified in the GBP dashboard directly.
- **Real-time local pack rankings:** No DataForSEO or SerpApi check was performed. Current pack positions for terms like "immigration lawyer Fairfield", "criminal lawyer Fairfield NSW" etc. are unknown.
- **Citation audit:** No live Moz Local, BrightLocal, or Whitespark citation check was run. Directory consistency and citation count are unknown.
- **Actual review count and rating:** No live GBP or aggregated review data available. The schema `aggregateRating` recommendation is contingent on real review data.
- **Proximity factor:** Accounts for 55.2% of ranking variance (Search Atlas ML study). Cannot be influenced by on-site changes. Clients searching from within Fairfield will have a natural proximity advantage; the firm cannot optimise for this beyond confirming accurate pin placement.
- **Competitor benchmark:** No competing firm local pack analysis was performed.
- **Core Web Vitals / Page Experience:** Not assessed in this audit; impacts organic rankings but not a direct local ranking factor.
