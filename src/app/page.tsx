// components
import { Navbar, Footer } from '@/components'

// sections
import Hero from './hero'
import SponsoredBy from './sponsored-by'
import AboutEvent from './about-event'
import OurStats from './our-stats'
import EventContent from './event-content'
import Faq from './faq'
import Countdown from '@/components/Countdown'
import EventPlace from '@/components/EventPlace'
import Bio from '@/components/Bio'
import RSVP from '@/components/RSVP'
import { Sign } from 'crypto'
import { Signika } from 'next/font/google'
import Signin from '@/components/Signin'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <SponsoredBy /> */}
      <Countdown />
      {/* <AboutEvent /> */}
      <EventPlace />
      <Bio />
      {/* <Signin /> */}
      <RSVP />
      {/* <OurStats /> */}
      {/* <EventContent /> */}
      {/* <Faq /> */}
      <Footer />
    </>
  )
}
