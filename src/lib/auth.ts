import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Email from 'next-auth/providers/nodemailer'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/prisma'
import NextAuth from 'next-auth'

const authOptions = {
  providers: [
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
  ],
  adapter: PrismaAdapter(prisma),
}

export const { auth, handlers } = NextAuth(authOptions)
