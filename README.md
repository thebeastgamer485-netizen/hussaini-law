# Hussaini Law Group — hussainilaw.com.au

Production Next.js 14 marketing site with embedded Sanity Studio.

## Stack

- **Next.js 14** (App Router, React Server Components, server actions)
- **Tailwind CSS 3** with Material Design 3 design tokens
- **Sanity v3** CMS, embedded at `/studio`
- **Resend** for contact form email delivery (optional — degrades gracefully)
- Fonts: `Domine` (headings) + `Manrope` (body) via `next/font`
- Icons: Google Material Symbols Outlined

## First-time setup

> This project was scaffolded without Node installed on the build machine. Install dependencies before first run.

```bash
# 1. Install Node 18+ from https://nodejs.org if needed
# 2. From the project root:
npm install

# 3. Copy env template and fill it in (see "Environment" below)
cp .env.local.example .env.local

# 4. Start the dev server
npm run dev
# → http://localhost:3000
# → http://localhost:3000/studio  (Sanity Studio)
```

## Replacing the placeholder assets

The build expects two kinds of assets in `public/`:

| Path                              | Purpose                  | Current state                |
| --------------------------------- | ------------------------ | ---------------------------- |
| `public/logo.svg`                 | Header / footer logo     | SVG placeholder shipped      |
| `public/images/hero-principal.svg`| Home hero portrait       | SVG placeholder              |
| `public/images/principal.svg`     | Principal profile photo  | SVG placeholder              |
| `public/images/hero-subpage.svg`  | All sub-page heroes      | SVG placeholder              |

To drop in the real PNG logo the client provided as `unnamed.png`:

```bash
# Either:
mv unnamed.png public/logo.png

# Then search-and-replace /logo.svg → /logo.png in:
#   components/layout/Navbar.tsx
#   components/layout/Footer.tsx
#   app/layout.tsx
#
# Or simply overwrite public/logo.svg with your PNG renamed to logo.svg
# (the <Image> tag is format-agnostic when the extension matches the file).
```

## Environment

Copy `.env.local.example` to `.env.local`, then fill in:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=    # from sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

RESEND_API_KEY=                   # optional — without it, contact form logs and succeeds
CONTACT_TO_EMAIL=info@hussainilaw.com.au
CONTACT_FROM_EMAIL=website@hussainilaw.com.au
```

When the Sanity env vars are missing or empty, every page falls back to the
static content in `lib/content.ts` — the site still renders.

## Sanity setup

1. `npx sanity@latest login`
2. `npx sanity@latest init --bare` (or use an existing project), copy the
   project ID into `.env.local`.
3. Visit `/studio` locally to authenticate and create content. Schemas live in
   `sanity/schemas/`.
4. To deploy a hosted Studio: `npx sanity@latest deploy`.

## Project structure

```
app/
├── layout.tsx                       Root layout, fonts, JSON-LD
├── page.tsx                         Home
├── practice-areas/<slug>/page.tsx   6 practice area pages (template-driven)
├── contact/page.tsx                 Contact + server action
├── studio/[[...index]]/             Embedded Sanity Studio
├── sitemap.ts / robots.ts
└── globals.css

components/
├── layout/                          Navbar, Footer
├── ui/                              Button, BentoCard, FaqAccordion, ProcessSteps,
│                                    SectionHeading, TrustBar, CtaBanner, Reveal
└── sections/                        HeroHome, HeroSubpage, PrincipalProfile,
                                     PracticeAreasGrid, WhyUsSection,
                                     PracticeAreaTemplate, ContactForm

lib/
├── content.ts                       Static fallback content for all 6 practice areas
├── navigation.ts                    Nav links and firm constants
└── actions.ts                       Contact form server action (Resend)

sanity/
├── env.ts                           Env var helpers
├── lib/{client,fetch,queries,image}.ts
└── schemas/{practiceArea,faq,teamMember,siteSettings,testimonial,
            processStep,subService}.ts

sanity.config.ts                     Studio config
```

## Deploying to Vercel

1. Push to a Git repo and import on Vercel.
2. Add the env vars from `.env.local` to the Vercel project.
3. Deploy. Vercel auto-detects Next.js. ISR revalidates pages every 5 minutes;
   trigger immediate refresh from Sanity via webhook → `revalidateTag`.

## Scripts

- `npm run dev` — Next.js dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — Next/ESLint
- `npm run typecheck` — TypeScript check (no emit)

---

© 2025 Hussaini Law Group. Liability limited by a scheme approved under Professional Standards Legislation.
