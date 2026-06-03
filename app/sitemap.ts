import type { MetadataRoute } from 'next'
import { PRACTICE_AREAS } from '@/lib/content'

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
  ]
}
