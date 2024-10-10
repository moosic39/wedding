// components
import { Navbar, Footer } from '@/components'

// sections
import Hero from './hero'
import Countdown from '@/components/Countdown'
import Bio from '@/components/Bio'
import Location from '@/components/Location'
import { auth } from '@/lib/auth'
import Menu from '@/components/Menu'
import IsLogged from '@/components/IsLoged'
import RSVP from '@/components/RSVP'

export default async function Home() {
  const session = await auth()
  const isVisible = Date.now() < new Date(1726920000000).getTime()

  return (
    <>
      <Navbar session={session} />
      <Hero />
      <Bio />
      <Location />
      {!isVisible && <Countdown />}
      {!isVisible && <RSVP />}
      <IsLogged sessionUser={session?.user} />
      <Menu />
      <Footer />
    </>
  )
}
