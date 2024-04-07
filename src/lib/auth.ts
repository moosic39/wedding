import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'
import NextAuth from 'next-auth'

const authOptions = {
  providers: [GitHub, Google],
  adapter: PrismaAdapter(prisma),
}

export const { auth, handlers } = NextAuth(authOptions)
