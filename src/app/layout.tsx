import './globals.css'
import type { Metadata } from 'next'
import { Clicker_Script, Roboto } from 'next/font/google'
import { Layout, FixedPlugin } from '@/components'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const clicker = Clicker_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-clicker',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Mariage Jennifer & Mickaël DaSilva Jégat',
  description:
    "Jennifer DaSilva et Mickaël Jégat se marient le 21 septembre 2024 à l’église de Notre-Dame de l'Assomption à Verriere.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${roboto.variable} ${clicker.variable}`}>
      <head>
        <link rel='shortcut icon' href='/favicon.png' type='image/png' />
      </head>
      <body>
        <Layout>
          {children}
          {/* <FixedPlugin /> */}
        </Layout>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
          integrity='sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
