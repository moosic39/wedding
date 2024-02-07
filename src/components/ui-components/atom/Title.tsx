'use client'

import { Typography } from '@material-tailwind/react'
import Image from 'next/image'

const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    <Typography
      variant='h4'
      className={`text-center mb-2 font-clicker text-4xl md:text-5xl lg:text-6xl text-amber-900 dark:text-amber-100 ${className}`}
      placeholder={undefined}
    >
      {title}
    </Typography>
  )
}

export default Title
