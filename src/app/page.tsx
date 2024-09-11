// components
import { Navbar, Footer } from '@/components'

// sections
import Hero from './hero'
import Countdown from '@/components/Countdown'
import Bio from '@/components/Bio'
import RSVP from '@/components/RSVP'
import Location from '@/components/Location'
import { auth } from '@/lib/auth'
import Menu from '@/components/Menu'
import { isProd } from '@/constant/env'

export default async function Home() {
  const session = await auth()

  return (
    <>
      <Navbar session={session} />
      <Hero />
      <Bio />
      <Location />
      <Countdown />
      {!isProd && <RSVP />}
      <Menu />
      <Footer />
    </>
  )
}
