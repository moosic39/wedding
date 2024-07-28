'use client'

import { Typography } from '@material-tailwind/react'

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/JenniferMickael_ENG_5.jpg')] bg-cover bg-center bg-no-repeat">
      <div className='absolute inset-0 h-full w-full bg-gray-900/60' />
      <div className='grid min-h-screen px-8'>
        <div className='container relative z-10 my-auto mx-auto grid place-items-center text-center'>
          <Typography
            variant='h2'
            className='mb-2 text-white text-2xl md:text-3xl lg:text-4xl'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Le Mariage de
          </Typography>
          <Typography
            variant='h1'
            className='lg:max-w-3xl font-clicker text-6xl md:text-7xl lg:text-8xl mb-2 text-cyan-400'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Jennifer &amp; Mickaël
          </Typography>
          <Typography
            variant='h3'
            className='mt-1 mb-12 w-full md:max-w-full text-xl md:text-2xl lg:text-3xl text-white'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            ﹣ 21 Septembre 2024 ﹣
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Hero
