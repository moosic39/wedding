import GitHub from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'
import NextAuth from 'next-auth'

const authOptions = {
  providers: [GitHub],
  adapter: PrismaAdapter(prisma),
}

export const { auth, handlers } = NextAuth(authOptions)
