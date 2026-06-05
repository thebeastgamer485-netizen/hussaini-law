import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Protect /studio routes with basic auth
  if (request.nextUrl.pathname.startsWith('/studio')) {
    const authHeader = request.headers.get('authorization')
    const username = process.env.STUDIO_USER || 'admin'
    const password = process.env.STUDIO_PASS || ''

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Sanity Studio"',
          'Content-Type': 'text/plain',
        },
      })
    }

    // Decode base64 credentials
    const encoded = authHeader.slice(6)
    const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
    const [providedUsername, providedPassword] = decoded.split(':')

    // Verify credentials
    if (providedUsername !== username || providedPassword !== password) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Sanity Studio"',
          'Content-Type': 'text/plain',
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/studio/:path*'],
}
