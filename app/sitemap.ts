import type { MetadataRoute } from 'next'
import { PRACTICE_AREAS } from '@/lib/content'
import { ARTICLES } from '@/lib/articles'

const SITE = 'https://hussainilaw.com.au'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${SITE}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    ...Object.keys(PRACTICE_AREAS).map((slug) => ({
      url: `${SITE}/practice-areas/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${SITE}/articles`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    ...ARTICLES.map((a) => ({
      url: `${SITE}/articles/${a.slug}`,
      lastModified: new Date(a.updatedAt || a.publishedAt),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    ...['privacy-policy', 'terms-of-service', 'disclaimer'].map((slug) => ({
      url: `${SITE}/${slug}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ]
}
