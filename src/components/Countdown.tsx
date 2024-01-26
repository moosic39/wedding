'use client'
import { Typography } from '@material-tailwind/react'
import Title from './atoms/Title'

const Countdown = () => {
  return (
    <section className='container mx-auto flex flex-col items-center px-4 py-10'>
      <Title title='Le jour du Mariage' />
      <Typography
        variant='h3'
        className='text-center'
        color='blue-gray'
        placeholder={undefined}
      >
        XXj XXh XXm XXs
      </Typography>
    </section>
  )
}

export default Countdown
