# SEO Audit Report — Hussaini Law Group

**Site:** https://hussaini-law.vercel.app (production: https://hussainilaw.com.au)
**Audit date:** 2026-06-19
**Business type:** Local Service — Brick-and-mortar law firm (Fairfield, Sydney NSW)
**Pages audited:** 8 (Home, Contact, 6 practice areas)

---

## Executive Summary

### SEO Health Score: 58 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 22% | 75 | 16.5 |
| Content Quality | 23% | 50 | 11.5 |
| On-Page SEO | 20% | 45 | 9.0 |
| Schema / Structured Data | 10% | 50 | 5.0 |
| Performance (CWV) | 10% | 80 | 8.0 |
| AI Search Readiness | 10% | 54 | 5.4 |
| Images | 5% | 60 | 3.0 |
| **Total** | **100%** | | **58.4** |

### Sub-Audit Scores

| Specialist Area | Score |
|-----------------|-------|
| Local SEO | 38 / 100 |
| Search Experience (SXO) | 38 / 100 |
| Schema Markup | 50 / 100 |
| AI Search Readiness (GEO) | 54 / 100 |

### Top 5 Critical Issues

1. **Zero geographic keywords in any H1 tag** — every H1 is brand-tone copy; no page surfaces "Fairfield", "Sydney", or "Western Sydney" in its primary heading
2. **Duplicate schema entity conflict** — `LocalBusiness` in contact page conflicts with `LegalService` in layout (different @id, contradictory Saturday hours)
3. **Page-type mismatch for local queries** — competitors rank with `/criminal-lawyers-fairfield/` URLs; this site uses generic `/practice-areas/criminal-law`
4. **FAQ answers are 24–47 words** — AI citation target is 134–167 words; every FAQ answer falls below threshold
5. **No Google Business Profile optimization signals** — no reviews, no aggregateRating schema, no Maps embed, no review solicitation

### Top 5 Quick Wins

1. Add "Fairfield" and "Sydney" to all meta titles (1 hour, all pages)
2. Remove duplicate `LocalBusiness` schema from contact page (10 minutes)
3. Add `BreadcrumbList` schema to commercial-law and civil-litigation pages (20 minutes)
4. Fix geo coordinates from Sydney CBD to actual Fairfield location (5 minutes)
5. Replace placeholder mobile number `0451 234 567` with real number (5 minutes)

---

## Technical SEO — 75/100

### What Works

- **Security headers: A+ grade** — CSP, HSTS (with preload), X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy all present
- **Server-side rendering** — all pages are SSG with ISR (revalidate=300), excellent for crawlability
- **Font optimization** — Domine + Manrope preloaded as woff2 with `display: swap`
- **HTML fundamentals** — `lang="en"`, `charset="utf-8"`, proper viewport meta
- **robots.txt** — correctly blocks `/studio`, allows everything else, references sitemap
- **Sitemap** — all 8 pages listed with appropriate priorities
- **Skip-to-content link** — accessibility-compliant keyboard navigation

### Findings

| # | Severity | Finding |
|---|----------|---------|
| T1 | Medium | **favicon.ico returns 404** — `<link rel="icon" href="/favicon.ico">` in HTML points to a non-existent file. Dynamic route at `/icon` works (200 OK) but isn't referenced by the link tag. Fix: remove `icons: { icon: '/favicon.ico' }` from layout.tsx metadata to let the dynamic route auto-generate the link tag |
| T2 | Medium | **Sitemap domain mismatch** — sitemap uses `hussainilaw.com.au` URLs but the site is currently live at `hussaini-law.vercel.app`. Until the custom domain is pointed, Google sees a sitemap referencing URLs it can't reach |
| T3 | Low | **All sitemap lastmod dates are identical** — `new Date()` generates the current timestamp at build time, not per-page modification dates. This reduces the value of lastmod for crawl prioritization |
| T4 | Low | **No Permissions-Policy header** — while not critical, it's the one security header missing from an otherwise complete set |
| T5 | Info | **Material Symbols font loaded via external CSS** — `fonts.googleapis.com` CSS @import is render-blocking; consider self-hosting or using `next/font` |

---

## Content Quality — 50/100

### What Works

- **Strong E-E-A-T foundation** — principal solicitor named with credentials (Law Society NSW, Accredited Specialist), bio section on home page, languages listed
- **Unique meta titles per page** — all include "Sydney" and "Hussaini Law Group"
- **Unique meta descriptions** — appropriate length, include relevant keywords
- **FAQ content on 4/6 pages** — criminal, immigration, family, conveyancing (3 FAQs each)
- **Process steps on all practice pages** — structured 3-4 step process sections
- **llms.txt present** — AI crawler guide with firm info, practice areas, citation guidance

### Findings

| # | Severity | Finding |
|---|----------|---------|
| C1 | Critical | **FAQ answers are critically short** — all 12 FAQ answers are 24–47 words. AI citation threshold is 134–167 words. No answer on the site functions as a self-contained, extractable passage |
| C2 | High | **No blog or informational content** — zero long-form guides, no dated content, no articles. Competitors have 2,500–3,200 word service pages plus blog content |
| C3 | High | **Commercial Law and Civil Litigation pages have no FAQs** — both are sub-800 words with no FAQ sections, no FAQ schema, no BreadcrumbList schema |
| C4 | High | **Content depth deficit** — practice area pages are 600–1,400 words vs. competitor average of 2,500+ words |
| C5 | Medium | **No About page or Team page** — the principal's profile is embedded in the home page but has no dedicated page for E-E-A-T depth |
| C6 | Medium | **No testimonials page** — one testimonial exists (Dr. Alexander V. on conveyancing page) but no aggregated social proof |
| C7 | Medium | **Missing People Also Ask alignment** — none of the FAQ questions match Google's PAA boxes for target queries (e.g., "How much does a criminal lawyer cost in NSW?") |
| C8 | Low | **Bilingual content opportunity missed** — firm serves Dari/Pashto/Arabic communities but has zero native-script body content, only decorative name renders |

---

## On-Page SEO — 45/100

### What Works

- **Unique H1 per page** — no duplicate H1 tags across the site
- **Logical heading hierarchy** — H1 → H2 → H3 structure maintained
- **Meta titles include "Sydney"** — good for broad geographic targeting
- **Internal navigation is comprehensive** — all 8 pages linked in navbar and footer
- **CTA buttons on every page** — "Book Case Review", phone number links

### Findings

| # | Severity | Finding |
|---|----------|---------|
| O1 | Critical | **Zero H1 tags contain geographic keywords** — every H1 is brand-tone: "Advocacy for Every Community", "Criminal Defense & Court Representation", "Family Law Excellence". No page uses "Fairfield", "Sydney", or "Western Sydney" in H1 |
| O2 | High | **"Fairfield" absent from 7/8 meta titles** — only the contact page includes "Fairfield". Practice area titles use "Sydney" but not the firm's actual suburb, the highest-value local keyword |
| O3 | High | **No location-service landing pages** — competitors rank with URLs like `/criminal-lawyers-fairfield/`. This site's generic `/practice-areas/criminal-law` path does not signal geographic intent to Google |
| O4 | High | **No court name references in key pages** — Criminal page doesn't mention Fairfield Local Court or Parramatta District Court. Family page doesn't mention Federal Circuit and Family Court. Immigration page doesn't name Department of Home Affairs |
| O5 | Medium | **Bilingual capability buried in footer** — the firm's strongest competitive differentiator (Dari/Pashto/Arabic) appears only in footer text and a hero badge, never in any H1, H2, or meta description |
| O6 | Medium | **No cross-linking between related practice areas** — criminal doesn't link to civil litigation, immigration doesn't link to family law |
| O7 | Low | **No breadcrumb navigation rendered in UI** — BreadcrumbList schema exists but users see no visual breadcrumbs |

---

## Schema / Structured Data — 50/100

### What Works

- **LegalService entity is comprehensive** — name, address, phone, email, geo, opening hours, areaServed, knowsLanguage, employee, hasOfferCatalog
- **BreadcrumbList on 4/6 practice pages** — correct structure with absolute URLs
- **FAQPage on 4 pages** — valid structure (Google retired FAQPage rich results May 7, 2026, but retain for AI value)

### Findings

| # | Severity | Finding |
|---|----------|---------|
| S1 | Critical | **Duplicate entity conflict** — `LocalBusiness` in contact/page.tsx (`@id: /#localbusiness`) conflicts with `LegalService` in layout.tsx (`@id: /#legalservice`). Different @id values, contradictory Saturday hours. Google sees two distinct businesses |
| S2 | High | **BreadcrumbList missing on 2 pages** — commercial-law and civil-litigation have zero JSON-LD |
| S3 | High | **Geo coordinates are wrong** — `-33.8687, 150.9549` places the pin near Sydney CBD, not Fairfield. Correct: approximately `-33.8728, 150.9554` |
| S4 | High | **Saturday hours contradiction** — schema says 10:00–14:00, `FIRM.hoursSaturday` displays "By appointment" |
| S5 | High | **No Service schema on any practice area page** — hasOfferCatalog lists services as plain strings with no URL linkage |
| S6 | Medium | **No WebSite schema** — missing Sitelinks Search Box eligibility |
| S7 | Medium | **Attorney entity is an anonymous stub** — no @id, url, sameAs, or hasCredential on the principal |
| S8 | Medium | **No Review or AggregateRating** — despite testimonial on conveyancing page. No star-rating eligibility |
| S9 | Low | **areaServed type mismatch** — Fairfield uses `@type: "City"` but is a suburb |

---

## Performance — 80/100

### What Works

- **Static site generation** — all pages pre-rendered at build time with ISR
- **Vercel edge deployment** — Sydney PoP, sub-100ms TTFB for Australian users
- **Next.js Image optimization** — all images use `next/image` with lazy loading, blur placeholders, and responsive `sizes`
- **Font preloading** — woff2 subsets with `display: swap`, no FOIT
- **Small JS bundle** — 88KB shared, practice area pages ~1KB each
- **Sanity Studio code-split** — 1.57MB bundle only loads at `/studio`

### Findings

| # | Severity | Finding |
|---|----------|---------|
| P1 | Medium | **Material Symbols font loaded via external CSS** — render-blocking request to `fonts.googleapis.com`. Consider self-hosting or subsetting only used icons |
| P2 | Low | **Images hosted on external CDN (Google AIDA)** — 15+ images load from `lh3.googleusercontent.com`, adding DNS resolution and connection overhead. Self-hosting via Sanity CDN or `/public` would reduce LCP |
| P3 | Info | **No `fetchPriority="high"` on hero images** — only the home page hero and logo use `priority`; practice area hero images load without priority hints |

---

## AI Search Readiness — 54/100

### What Works

- **llms.txt exists** — firm overview, practice areas, key pages, citation guidance
- **All AI crawlers permitted** — GPTBot, ClaudeBot, PerplexityBot all have full access
- **Server-rendered HTML** — AI crawlers that don't execute JS still get full content
- **FAQ markup** — retained for AI extraction value despite Google retiring the rich result

### Findings

| # | Severity | Finding |
|---|----------|---------|
| A1 | Critical | **FAQ answers below AI citation threshold** — all 12 answers are 24–47 words vs. target 134–167 words. This is the single largest scoring gap |
| A2 | High | **FAQ accordion hides content from non-JS crawlers** — `FaqAccordion` is a client component using `aria-hidden="true"` on collapsed answers. Perplexity and lightweight scrapers only see answer #1 per page |
| A3 | High | **No long-form content** — zero passages on the site at 800+ words. No guides, articles, or explainers |
| A4 | Medium | **llms.txt is incomplete** — missing RSL 1.0 license block, FAQ block, MARN registration number, founding year, structured contact fields |
| A5 | Medium | **No sameAs links** — Attorney schema has no LinkedIn, Law Society profile, or MARN registry URL for entity resolution |
| A6 | Medium | **No bilingual body content** — Dari/Arabic queries are zero-competition opportunity but the site has no native-script text |
| A7 | Low | **No YouTube channel or Wikipedia entity** — highest-correlation AI citation signals are absent |

---

## Images — 60/100

### What Works

- **Alt text on all images** — descriptive, not keyword-stuffed
- **Lazy loading with blur placeholders** — `BLUR_DATA_URL` used on below-fold images
- **Responsive sizes attribute** — proper breakpoint-based sizing
- **Next.js automatic optimization** — format conversion, resizing

### Findings

| # | Severity | Finding |
|---|----------|---------|
| I1 | High | **All images are AI-generated stock** — hosted on Google AIDA CDN. E-E-A-T rewards real photos of real people and places. No real office, lawyer, or consultation photos exist |
| I2 | Medium | **No OG images per practice area page** — all pages share the root dynamic OG image. Per-page OG images improve social sharing CTR |
| I3 | Low | **No WebP/AVIF source in `public/`** — hero images served via external CDN bypass Next.js format optimization |

---

## Local SEO — 38/100

### What Works

- **NAP consistency** — name, address, phone identical across all on-site sources
- **LegalService schema with address and geo** — feeds Google Business Profile
- **Opening hours in schema** — weekday + Saturday
- **knowsLanguage in schema** — en, fa, ps, ar

### Findings

| # | Severity | Finding |
|---|----------|---------|
| L1 | Critical | **No geographic keywords in any H1** — "Fairfield", "Western Sydney", "Sydney" absent from all primary headings |
| L2 | Critical | **No AggregateRating schema** — zero review/rating markup despite one testimonial displayed |
| L3 | High | **No Google Maps embed** — static image with hyperlink only; no iframe embed |
| L4 | High | **No suburb-level content** — zero mentions of Cabramatta, Bankstown, Liverpool, Parramatta, Auburn, Merrylands anywhere on site |
| L5 | High | **areaServed too narrow** — only Sydney, Fairfield, NSW. Missing Western Sydney corridor suburbs |
| L6 | Medium | **Placeholder mobile number** — `0451 234 567` in FIRM constants renders on contact page |
| L7 | Medium | **No review solicitation mechanism** — no "leave a review" CTA anywhere |
| L8 | Medium | **No local court references in key pages** — Fairfield Local Court, Parramatta District Court, Downing Centre not mentioned |

---

## Search Experience (SXO) — 38/100

### What Works

- **Language selector in contact form** — excellent for multilingual clients
- **Phone number clickable** — `tel:` links present
- **CTAs on every page** — at least one call-to-action per section
- **Root LegalService schema** — solid entity foundation

### Findings

| # | Severity | Finding |
|---|----------|---------|
| X1 | Critical | **Page-type mismatch** — competitors rank with location-service pages (e.g., `/criminal-lawyers-fairfield/`); this site uses generic hub pages. Google cannot infer geographic intent from `/practice-areas/criminal-law` |
| X2 | Critical | **Bilingual competitive advantage invisible** — no competitor in Fairfield markets Dari/Pashto service. This firm has the differentiator but doesn't surface it in any heading or meta description |
| X3 | High | **No price signals on conveyancing** — competitors lead with "From $898 inc GST" in their H1. Zero pricing information on this site |
| X4 | High | **CTAs are too passive for crisis queries** — "Book Case Evaluation" doesn't match the urgency of someone arrested tonight needing bail support |
| X5 | High | **AI-generated stock images** — E-E-A-T rewards real photography. All current images are from Google AIDA CDN |
| X6 | Medium | **No embedded contact form on practice pages** — users must navigate to `/contact`, adding friction |
| X7 | Medium | **No after-hours messaging** — competitors advertise "24/7 bail support"; this site has no urgency signals |

---

## Specialist Findings Files

- [Schema audit](findings/schema.md) — complete validation, JSON-LD recommendations
- [Local SEO audit](findings/local.md) — NAP analysis, GBP signals, suburb coverage
- [AI search readiness audit](findings/geo.md) — llms.txt analysis, citability scoring, platform-specific scores
- [Search experience audit](findings/sxo.md) — SERP backwards analysis, persona scoring, user stories
