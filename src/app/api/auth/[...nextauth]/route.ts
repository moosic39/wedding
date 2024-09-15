import { auth, GET as AuthGET, POST as AuthPOST } from '@/lib/auth'
import { instagramFetchInterceptor } from '@/lib/instagram-fetch.interceptor'

import { type NextRequest, NextResponse } from 'next/server'

const originalFetch = fetch

export async function POST(req: NextRequest) {
  return await AuthPOST(req)
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url)

  if (url.pathname === '/api/auth/callback/instagram') {
    const session = await auth()
    if (!session?.user) {
      /* Prevent user creation for instagram access token */
      const signInUrl = new URL('/?modal=sign-in', req.url)
      return NextResponse.redirect(signInUrl)
    }

    /* Intercept the fetch request to patch access_token request to be oauth compliant */
    global.fetch = instagramFetchInterceptor(originalFetch)
    const response = await AuthGET(req)
    global.fetch = originalFetch
    return response
  }

  return await AuthGET(req)
}
