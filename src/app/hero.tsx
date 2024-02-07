'use client'

import { IconButton, Button, Typography } from '@material-tailwind/react'
import { PlayIcon } from '@heroicons/react/24/solid'

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/wedding-hero.jpg')] bg-cover bg-no-repeat">
      <div className='absolute inset-0 h-full w-full bg-gray-900/60' />
      <div className='grid min-h-screen px-8'>
        <div className='container relative z-10 my-auto mx-auto grid place-items-center text-center'>
          <Typography
            variant='h2'
            color='cyan'
            className='mb-2 text-white text-2xl md:text-3xl lg:text-4xl'
            placeholder={undefined}
          >
            Le Mariage de
          </Typography>
          <Typography
            variant='h1'
            className='lg:max-w-3xl font-clicker text-6xl md:text-7xl lg:text-8xl mb-2 text-cyan-400'
            placeholder={undefined}
          >
            Jennifer &amp; Mickaël
          </Typography>
          <Typography
            variant='h3'
            className='mt-1 mb-12 w-full md:max-w-full text-xl md:text-2xl lg:text-3xl text-white'
            placeholder={undefined}
          >
            21.09.2024
          </Typography>
          {/* <div className='flex items-center gap-4'>
            <Button variant='gradient' color='white' placeholder={undefined}>
              Get started
            </Button>
            <IconButton
              className='rounded-full bg-white p-6'
              placeholder={undefined}
            >
              <PlayIcon className='h-4 w-4 text-gray-900' />
            </IconButton>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
