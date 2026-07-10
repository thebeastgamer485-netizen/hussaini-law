import { GOOGLE_REVIEWS } from '@/lib/content'

export type Review = { name: string; quote: string; avatar?: string }
export type ReviewsData = {
  rating: number
  count: number
  url: string
  items: Review[]
  /** 'live' when fetched from the Places API, 'static' when using the built-in fallback. */
  source: 'live' | 'static'
}

const PLACE_QUERY = 'Hussaini Law Group Pty Ltd, 7/37 Spencer St, Fairfield NSW 2165'
// Refresh from Google every 6 hours; new reviews appear automatically.
const REVALIDATE_SECONDS = 21600
// Only surface positive reviews on the marketing page.
const MIN_RATING = 4
const MIN_QUOTE_LENGTH = 30

const STATIC_FALLBACK: ReviewsData = { ...GOOGLE_REVIEWS, source: 'static' }

/**
 * Fetch the firm's latest Google reviews via the Places API (New).
 * Auto-updates as new reviews are posted (ISR-cached, 6-hourly).
 * Degrades gracefully to the curated static set in lib/content.ts when the
 * API key is missing or any request fails — same pattern as the Sanity fallback.
 */
export async function getGoogleReviews(): Promise<ReviewsData> {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) return STATIC_FALLBACK

  try {
    // 1. Resolve the place id (cached; effectively a one-off call).
    const searchRes = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'places.id',
      },
      body: JSON.stringify({ textQuery: PLACE_QUERY }),
      next: { revalidate: REVALIDATE_SECONDS },
    })
    if (!searchRes.ok) throw new Error(`Place search failed: ${searchRes.status}`)
    const placeId: string | undefined = (await searchRes.json())?.places?.[0]?.id
    if (!placeId) throw new Error('Place not found')

    // 2. Fetch rating + newest reviews.
    const detailsRes = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,reviews,googleMapsUri`,
      {
        headers: { 'X-Goog-Api-Key': key },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    )
    if (!detailsRes.ok) throw new Error(`Place details failed: ${detailsRes.status}`)
    const data = await detailsRes.json()

    const items: Review[] = (data.reviews ?? [])
      .filter(
        (r: any) =>
          (r.rating ?? 0) >= MIN_RATING && (r.text?.text ?? '').trim().length >= MIN_QUOTE_LENGTH
      )
      .map((r: any) => ({
        name: r.authorAttribution?.displayName ?? 'Google user',
        quote: r.text.text.trim(),
        avatar: r.authorAttribution?.photoUri,
      }))

    // The API returns at most 5 reviews; if filtering leaves too few, prefer
    // the richer curated set.
    if (items.length < 3) return STATIC_FALLBACK

    return {
      rating: data.rating ?? GOOGLE_REVIEWS.rating,
      count: data.userRatingCount ?? GOOGLE_REVIEWS.count,
      url: data.googleMapsUri ?? GOOGLE_REVIEWS.url,
      items,
      source: 'live',
    }
  } catch (err) {
    console.error('[reviews] Falling back to static reviews:', err instanceof Error ? err.message : err)
    return STATIC_FALLBACK
  }
}
