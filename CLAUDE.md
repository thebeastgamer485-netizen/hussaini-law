# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hussaini Law Group** — Next.js 14 marketing site for a Sydney-based law firm. **Live:** https://hussaini-law.vercel.app  
**Repo:** https://github.com/thebeastgamer485-netizen/hussaini-law

The site has **8 bespoke pages** (Home, Criminal, Immigration, Family, Conveyancing, Commercial, Civil Litigation, Contact) with an embedded Sanity CMS at `/studio`. All pages are **server-rendered**; the site degrades gracefully when Sanity env vars are missing (falls back to static content in `lib/content.ts`).

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| Next.js | 14 | App Router, React Server Components, server actions (contact form) |
| Tailwind CSS | 3 | Styling + Material Design 3 design token utilities |
| Sanity v3 | 3.57+ | Headless CMS, embedded Studio at `/studio` |
| TypeScript | 5 | Type safety across all `.ts` and `.tsx` files |
| Resend | 4 | Email delivery for contact form (optional; degrades gracefully) |

**Fonts:** `Domine` (headlines) + `Manrope` (body) via `next/font`  
**Icons:** Google Material Symbols Outlined (via CSS @import in `app/globals.css`)

## Architecture

### Bespoke Pages (Not Templates)

Each of the **6 practice area pages** is a **standalone, bespoke implementation** that matches its design mockup exactly. This is not a template-driven approach:

- `app/practice-areas/criminal-law/page.tsx` — 4-column bento grid, navy large card, glass medium cards, process section, FAQ, CTA banner
- `app/practice-areas/immigration-law/page.tsx` — intro + bullet layout, dark "Who We Advocate For" section, circle-number process, "Why Choose Us" section, FAQ, CTA
- `app/practice-areas/family-law/page.tsx` — 6-card bento, 4-step progress-line process, FAQ details, CTA
- `app/practice-areas/conveyancing/page.tsx` — dot-pattern hero with testimonial card, large + dark off-the-plan + small bento, sticky-sidebar process with image
- `app/practice-areas/commercial-law/page.tsx` — 6 service cards (one dark navy), "Hussaini Advantage" section with corner accents, dotted CTA pattern
- `app/practice-areas/civil-litigation/page.tsx` — academic-overlay hero, NCAT large dark card, image + circle-number process, grid-pattern CTA

**Why bespoke?** Each mockup had unique layouts that would degrade under a shared template. Per-page builds ensure pixel fidelity.

### Design Tokens (Material Design 3)

**Tailwind extensions** in `tailwind.config.js`:
- **Colors:** primary, primary-container, secondary, surface, outline, inverse, error, brand-gold (#C89B3C), brand-navy (#00020e), deep-navy
- **Typography utilities:** `font-headline-xl`, `font-headline-lg`, `font-body-lg`, `font-label-sm`, etc., with line-height and letter-spacing
- **Spacing utilities:** `section-gap` (100px), `gutter` (24px), `margin-desktop` (64px), `margin-mobile` (16px)

**CSS helper classes** in `app/globals.css`:
- `.container-page` — max-width 1280px, responsive padding
- `.glass-card` — rgba bg + backdrop blur
- `.text-gradient`, `.text-gradient-cta` — linear gradient background-clip
- `.hero-pattern` — radial gradient dot grid
- `.academic-overlay` — linear gradient from navy to transparent (used on Civil hero)
- `.gold-border-glow`, `.bento-card`, `.img-grayscale-hover`, `.link-underline`, `.reveal`, `.orb`, `.texture-overlay` — animations and decorative classes

### Sanity Integration

**21 seeded documents** in production dataset (auto-deployed via script):
- **6 practiceArea** documents (Criminal, Immigration, Family, Conveyancing, Commercial, Civil)
  - Each has: title, description, services (bento-ready), process (3–4 steps), FAQs (cross-referenced), CTA
  - Services use `subService` type with icon, title, description, `large` flag, optional bullet arrays
- **12 faq** documents (Criminal ×3, Immigration ×3, Family ×3, Conveyancing ×3)
  - Each has: question, answer, topic (for grouping)
- **1 teamMember** (Sayed Rahmatullah Hussainizada, principal solicitor)
  - Bio (array of paragraphs), credentials, languages
- **1 siteSettings**
  - phone: `02 8764 7885`, mobile, email, address, hours, social links
- **1 testimonial** (Dr. Alexander V., Property Developer)

**Critical:** Env vars `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION` must be set (see Environment below). If missing, pages use static content from `lib/content.ts` as fallback.

## Commands

```bash
# Development
npm run dev          # Start Next.js dev server on http://localhost:3000
npm run build        # Production build
npm run start        # Run production build
npm run lint         # Next/ESLint
npm run typecheck    # TypeScript check (no emit)

# Sanity (local)
npx sanity login                     # Authenticate CLI
npx sanity dataset import <file> production --replace  # Seed data
```

## Environment

Copy `.env.local.example` → `.env.local`, then fill in:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=ljtxphva
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=sk...          # Developer token with read+write (for /studio)
CONTACT_TO_EMAIL=info@hussainilaw.com.au
CONTACT_FROM_EMAIL=website@hussainilaw.com.au
RESEND_API_KEY=                      # Optional; contact form logs success if missing
```

**Fallback:** If Sanity vars are empty/missing, every page renders static content from `lib/content.ts`.

## Development Workflow

### Adding a practice area page

1. **Add content to Sanity:**
   - Log in to http://localhost:3000/studio
   - Create a new `practiceArea` document with slug, title, services, process, FAQs, CTA

2. **Create bespoke page:**
   - Copy an existing practice area page (e.g., `criminal-law/page.tsx`) as a template
   - **Do NOT** reuse a shared template; each page has a unique layout per its mockup
   - Fetch data from PRACTICE_AREAS in `lib/content.ts` (static) or via Sanity (if env vars set)
   - Rebuild layout to match the design mockup precisely

3. **Verify via server-rendered HTML:**
   - **IMPORTANT:** Do NOT rely on live preview navigation (SPA preview racing/bouncing is flaky)
   - Instead, test the page by fetching its server-rendered HTML:
     ```bash
     curl -s http://localhost:3000/practice-areas/your-slug | grep -c "<h1>"  # Should be 1+
     npm run build && npm run start  # Full production build test
     ```

### Modifying content

1. **Update in Sanity:** Log in to `/studio`, edit practiceArea, FAQ, siteSettings, or teamMember documents
2. **Revalidate (prod):** Pages use ISR (revalidate every 5 minutes). Sanity webhooks trigger immediate revalidation.
3. **Fallback:** Static content in `lib/content.ts` is always up-to-date; Sanity is optional.

### Deploying

**GitHub → Vercel:** Every push to `main` auto-deploys. Environment variables are already set in Vercel (Sanity project ID, dataset, read token, contact emails).

```bash
git add .
git commit -m "Brief description"
git push  # → Vercel deploys automatically
```

## Key Patterns

### Server-rendered verification (not live preview)

The SPA can have race conditions when navigating between pages in the preview panel. Instead:

```bash
# Verify server-rendered HTML
curl -s http://localhost:3000/practice-areas/criminal-law | head -50

# Or: full production build
npm run build && npm run start  # Then visit http://localhost:3000
```

### Bilingual support

Firm name in footer:
- **Farsi (Persian):** دفتر وکالت حسینی
- **Arabic:** مكتب الحسيني للمحاماة
- **English:** Hussaini Law Group

Real contact: **02 8764 7885**, **7/37 Spencer Street, Fairfield NSW 2165**

### Static fallback content

Every page has hard-coded content in `lib/content.ts` (PRACTICE_AREAS object). If Sanity is unreachable or env vars are missing, pages render this static content automatically. This keeps the site live even if the CMS is down.

## File Structure

```
app/
├── page.tsx                               Home (server-rendered)
├── practice-areas/
│   ├── criminal-law/page.tsx              Bespoke layout
│   ├── immigration-law/page.tsx           Bespoke layout
│   ├── family-law/page.tsx                Bespoke layout
│   ├── conveyancing/page.tsx              Bespoke layout
│   ├── commercial-law/page.tsx            Bespoke layout
│   └── civil-litigation/page.tsx          Bespoke layout
├── contact/page.tsx                       Contact form + server action
├── studio/[[...index]]/                   Embedded Sanity Studio
├── layout.tsx                             Root layout, fonts, JSON-LD
├── globals.css                            Design helper classes
├── sitemap.ts
└── robots.ts

components/
├── layout/Navbar.tsx                      Fixed header + mobile hamburger
├── layout/Footer.tsx                      4-column footer, brand-navy bg, real contact
├── sections/HeroHome.tsx, HeroSubpage.tsx
├── ui/Button.tsx, BentoCard.tsx, FaqAccordion.tsx, ProcessSteps.tsx, etc.

lib/
├── content.ts                             Static fallback (PRACTICE_AREAS, TEAM_PRINCIPAL, etc.)
├── navigation.ts                          Nav links, firm constants (FIRM.phone, FIRM.phoneTel)
├── actions.ts                             Contact form server action (Resend)

sanity/
├── schemas/*.ts                           practiceArea, faq, teamMember, siteSettings, etc.
├── lib/client.ts, fetch.ts, queries.ts
└── config.ts

tailwind.config.js                         Material Design 3 tokens + utilities
next.config.js                             Image domains (CDN whitelist)
vercel.json                                Declares Next.js framework for Vercel
```

## Deployment

**Production:** https://hussaini-law.vercel.app  
**GitHub:** https://github.com/thebeastgamer485-netizen/hussaini-law

Vercel auto-builds on every `main` push. ISR revalidates pages every 5 minutes (or on Sanity webhook). All env vars are pre-configured in Vercel settings.

## Contacts & References

**Firm Details:**
- **Phone:** 02 8764 7885
- **Address:** 7/37 Spencer Street, Fairfield NSW 2165
- **Email:** info@hussainilaw.com.au
- **Principal:** Sayed Rahmatullah Hussainizada

**Credentials:** Law Society NSW Member, Accredited Specialist, Migration Agent (MARN registered)  
**Languages:** English, Dari, Pashto, Arabic
