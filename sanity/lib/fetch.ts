import { client, isSanityConfigured } from './client'
import { practiceAreaQuery, principalQuery } from './queries'
import type { PracticeAreaContent } from '@/lib/content'
import type { Principal } from '@/components/sections/PrincipalProfile'

export async function getPracticeArea(slug: string): Promise<PracticeAreaContent | null> {
  if (!isSanityConfigured) return null
  try {
    const data = await client.fetch<PracticeAreaContent | null>(
      practiceAreaQuery,
      { slug },
      { next: { revalidate: 300, tags: [`practiceArea:${slug}`] } },
    )
    return data ?? null
  } catch (err) {
    console.warn('[sanity] practice area fetch failed, using fallback:', err)
    return null
  }
}

export async function getPrincipal(): Promise<Principal | null> {
  if (!isSanityConfigured) return null
  try {
    const data = await client.fetch<Principal | null>(
      principalQuery,
      {},
      { next: { revalidate: 600, tags: ['teamMember:principal'] } },
    )
    return data ?? null
  } catch (err) {
    console.warn('[sanity] principal fetch failed, using fallback:', err)
    return null
  }
}
