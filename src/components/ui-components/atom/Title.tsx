'use client'

import { Typography } from '@material-tailwind/react'
import Image from 'next/image'

const Title = ({ title }: { title: string }) => {
  return (
    <div className={'flex flex-col items-center mb-4 fill-blue-gray-500'}>
      <div className={'mb-4'}>
        <Image
          src='/icons/divider.svg'
          alt='divider'
          width={200}
          height={20}
          className={''}
        />
      </div>

      <Typography
        variant='h4'
        className='text-center mb-2 font-clicker text-4xl md:text-5xl lg:text-6xl text-amber-900'
        placeholder={undefined}
      >
        {title}
      </Typography>
    </div>
  )
}

export default Title
