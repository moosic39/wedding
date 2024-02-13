// components
import { Navbar, Footer } from '@/components'

// sections
import Hero from './hero'
import Countdown from '@/components/Countdown'
import Bio from '@/components/Bio'
import RSVP from '@/components/RSVP'
import Location from '@/components/Location'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bio />
      <Location />
      <Countdown />
      <RSVP />
      <Footer />
    </>
  )
}
