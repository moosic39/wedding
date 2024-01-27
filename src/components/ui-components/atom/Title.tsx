'use client'

import { Typography } from '@material-tailwind/react'

const Title = ({ title }: { title: string }) => {
  return (
    <Typography
      variant='h4'
      className='text-center mb-2'
      color='orange'
      placeholder={undefined}
    >
      {title}
    </Typography>
  )
}

export default Title
