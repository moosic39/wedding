import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Email from 'next-auth/providers/nodemailer'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'
import NextAuth, { NextAuthConfig } from 'next-auth'
import { Provider } from '@auth/core/providers'

const providers: Provider[] = [
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
  GitHub,
]

const authOptions: NextAuthConfig = {
  providers,
  adapter: PrismaAdapter(prisma),
  // pages: {
  //   signIn: '/signin',
  // },
  theme: {
    colorScheme: 'dark',
    brandColor: '#0096a7',
    logo: '/logos/wedding_logo_v1_rounded.png',
  },
}

export const providerMap = providers.map((provider) => {
  if (typeof provider === 'function') {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
