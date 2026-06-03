/**
 * Embedded Sanity Studio mounted at /studio.
 * This file is a server component so it can re-export `metadata` and
 * `viewport`. The actual <NextStudio /> render happens in the adjacent
 * client component (Studio.tsx).
 */
import { Studio } from './Studio'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <Studio />
}
