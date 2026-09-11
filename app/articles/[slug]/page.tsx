import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/ui/Reveal'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { BLUR_DATA_URL } from '@/lib/images'
import { ARTICLES, getArticleBySlug } from '@/lib/articles'
import { FIRM } from '@/lib/navigation'

const SITE = 'https://hussainilaw.com.au'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  const url = `${SITE}/articles/${article.slug}`
  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.metaDescription,
      publishedTime: article.publishedAt,
    },
  }
}

export const revalidate = 300

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const url = `${SITE}/articles/${article.slug}`

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE}/articles` },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.metaDescription,
    image: article.heroImage,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    inLanguage: 'en-AU',
    author: { '@type': 'Organization', name: 'Hussaini Law Group', url: SITE },
    publisher: { '@id': `${SITE}/#legalservice` },
    mainEntityOfPage: url,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      {/* Hero: full-bleed image with title overlaid, matching the reference's featured-image style */}
      <section className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/20" />
        <div className="container-page relative pb-10 md:pb-14 text-white">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <Link href="/" className="hover:text-brand-gold">Home</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/articles" className="hover:text-brand-gold">Articles</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
              </li>
              <li className="text-brand-gold">{article.category}</li>
            </ol>
          </nav>
          <span className="inline-block bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-sm mb-4">
            {article.category}
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-[48px] lg:leading-[1.15] font-bold max-w-4xl">
            {article.title}
          </h1>
          <div className="mt-5 flex items-center gap-3 text-sm text-white/70">
            <span>By Hussaini Law Group</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-surface">
        <div className="container-page max-w-3xl mx-auto">
          <Reveal>
            <div className="space-y-5 text-body-lg text-on-surface-variant">
              {article.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 space-y-12">
            {article.sections.map((section, si) => (
              <Reveal key={si} delay={si * 40}>
                <section>
                  {section.heading && (
                    <h2 className="font-heading text-headline-md md:text-headline-lg text-primary mb-5">
                      {si + 1}. {section.heading}
                    </h2>
                  )}
                  <div className="space-y-4 text-body-lg text-on-surface-variant">
                    {section.paragraphs?.map((p, pi) => (
                      <p key={pi}>{p}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-4 space-y-3">
                      {section.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <span
                            className="material-symbols-outlined text-brand-gold text-xl shrink-0 mt-0.5"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                            aria-hidden="true"
                          >
                            check_circle
                          </span>
                          <span className="text-body-lg text-on-surface-variant">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.subsections?.map((sub, subi) => (
                    <div key={subi} className={sub.heading ? 'mt-6 pl-5 border-l-2 border-brand-gold/40' : 'mt-4'}>
                      {sub.heading && (
                        <h3 className="font-heading text-xl font-semibold text-on-surface mb-2">{sub.heading}</h3>
                      )}
                      <div className="space-y-3 text-body-lg text-on-surface-variant">
                        {sub.paragraphs.map((p, pi) => (
                          <p key={pi}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 space-y-4 text-body-lg text-on-surface-variant">
              {article.closing.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <p className="mt-8 flex items-start gap-2.5 text-sm text-on-surface-variant border-t border-outline-variant pt-6">
              <span className="material-symbols-outlined text-brand-gold text-lg shrink-0" aria-hidden="true">
                info
              </span>
              <span>
                This article is general information about the law in New South Wales, not legal advice, and
                reading it does not create a solicitor&ndash;client relationship. Every matter turns on its
                own facts &mdash; please{' '}
                <Link href="/contact" className="text-primary link-underline">contact us</Link> or call{' '}
                <a href={`tel:${FIRM.phoneTel}`} className="text-primary link-underline">{FIRM.phone}</a>{' '}
                for advice about your specific circumstances.
              </span>
            </p>
          </Reveal>
        </div>
      </article>

      <Reveal>
        <CtaBanner
          eyebrow="Talk to Someone Who Knows Your Case"
          title="Get Advice Before You Decide"
          description="Book a confidential consultation and we'll assess your appeal, your bridging visa conditions, and your real options — in English or Dari."
        />
      </Reveal>
    </>
  )
}
