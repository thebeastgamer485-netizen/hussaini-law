import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { BLUR_DATA_URL } from '@/lib/images'
import { ARTICLES } from '@/lib/articles'

const SITE = 'https://hussainilaw.com.au'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Legal insights and updates from Hussaini Law Group — practical guidance on immigration, criminal, property and commercial law in New South Wales, in English and Dari.',
  alternates: { canonical: '/articles' },
}

export const revalidate = 300

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ArticlesIndexPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE}/articles` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="relative bg-brand-navy text-white pt-32 md:pt-36 pb-16 md:pb-20 overflow-hidden">
        <div className="orb bg-primary-container w-[500px] h-[500px] -top-32 -right-40" aria-hidden="true" />
        <div className="orb bg-brand-gold/20 w-[320px] h-[320px] -bottom-32 -left-32" aria-hidden="true" />
        <div className="absolute inset-0 texture-overlay opacity-40" aria-hidden="true" />

        <div className="container-page relative">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/60">
              <li className="flex items-center gap-2">
                <Link href="/" className="hover:text-brand-gold">Home</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
              </li>
              <li className="text-brand-gold">Articles</li>
            </ol>
          </nav>
          <div className="text-label-sm uppercase tracking-[0.2em] text-brand-gold mb-4">Legal Insights</div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1] font-bold text-white max-w-3xl">
            Articles
          </h1>
          <p className="mt-6 text-body-lg text-white/80 max-w-2xl">
            Practical, plain-language guidance on immigration, criminal, property and commercial law —
            written by our own solicitors for the communities we serve in Fairfield and Greater Sydney.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="container-page">
          {ARTICLES.length === 0 ? (
            <p className="text-on-surface-variant text-center py-20">
              New articles are on the way — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ARTICLES.map((article, i) => (
                <Reveal key={article.slug} delay={i * 60}>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="group block h-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.heroImage}
                        alt={article.heroImageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-sm">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h2 className="font-heading text-headline-md text-on-surface group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-body-md text-on-surface-variant line-clamp-3">{article.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-brand-gold font-semibold text-label-lg link-underline w-fit mt-1">
                        Read Article
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
