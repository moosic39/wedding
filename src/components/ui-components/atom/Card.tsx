'use client'
import Typography from '@material-tailwind/react/components/Typography'
import Image from 'next/image'
import React from 'react'

type Card = {
  src: string
  title: string
  desc: string
  className?: string
}

const Card = ({ src, title, desc, className }: Card) => {
  return (
    <div
      className={`text-center h-48 mt-16 bg-gradient-to-t from-cyan-700 rounded-md p-4 m-4 w-full shadow-2xl  ${className}`}
    >
      <Image
        src={src}
        width={128}
        height={128}
        className='mx-auto mb-4 rounded-full shadow-md relative -top-16'
        alt='Avatar'
      />
      <Typography
        placeholder={''}
        className='mb-2 text-blue-gray-800 text-2xl md:text-3xl lg:text-4xl font-clicker font-extrabold leading-tight relative -top-16'
      >
        {title}
      </Typography>
      <div className='text-white font-bold text-xs md:text-sm lg:text-lg relative -top-16 dark:text-neutral-400'>
        {desc}
      </div>
    </div>
  )
}

export default Card
