import { Provider } from '@auth/core/providers'
import Credentials from '@auth/core/providers/credentials'
import Facebook from '@auth/core/providers/facebook'
import GitHub from '@auth/core/providers/github'
import Google from '@auth/core/providers/google'
import Instagram from '@auth/core/providers/instagram'
import Email from '@auth/core/providers/nodemailer'
import Twitter from '@auth/core/providers/twitter'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'
import NextAuth, { NextAuthConfig } from 'next-auth'

export const InstagramAuthProvider: Provider = Instagram({
  clientId: process.env.AUTH_INSTAGRAM_ID,
  clientSecret: process.env.AUTH_INSTAGRAM_SECRET,
  authorization:
    'https://api.instagram.com/oauth/authorize?scope=user_profile,user_media',
  /**
   * https://github.com/nextauthjs/next-auth/issues/8868
   * Profile is not set for instagram as it cannot be used to authenticate a user,
   * only for fetching media and user info.
   */
})

const providers: Provider[] = [
  // Credentials({
  //   credentials: {
  //     username: { label: 'Username' },
  //     password: { label: 'Password', type: 'password' },
  //   },
  //   async authorize({ request }) {
  //     const response = await fetch(request)
  //     if (!response.ok) return null
  //     return (await response.json()) ?? null
  //   },
  // }),
  Email({
    server: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    from: process.env.EMAIL_FROM,
  }),
  Google,
  Facebook,
  InstagramAuthProvider,
  GitHub,
  Twitter,
]

const authOptions: NextAuthConfig = {
  providers,
  adapter: PrismaAdapter(prisma),
  // pages: {
  //   signIn: '/signin',
  //   newUser: '/signup',
  // },
  theme: {
    colorScheme: 'dark',
    brandColor: '#0096a7',
    logo: '/logos/wedding_logo_v1_rounded.png',
  },
  logger: {
    error(code, ...message) {
      console.error(code, message)
    },
  },
  trustHost: true,
  debug: true,
}

export const providerMap = providers.map((provider) => {
  if (typeof provider === 'function') {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authOptions)
