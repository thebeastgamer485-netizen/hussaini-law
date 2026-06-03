export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined || v === '') {
    // Soft-fail in dev / CI when Sanity isn't yet configured — fetch helpers
    // return null and pages fall back to static content.
    if (typeof window === 'undefined') {
      console.warn(`[sanity] ${errorMessage}`)
    }
    return 'placeholder' as unknown as T
  }
  return v
}
