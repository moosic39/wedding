'use client'

import { Card, Typography } from '@material-tailwind/react'
import React from 'react'

const EventPlace = () => {
  return (
    <section className='container mx-auto flex flex-col items-center px-4 py-10'>
      <Typography
        variant='h6'
        className='text-center mb-2'
        color='orange'
        placeholder={undefined}
      >
        Emplacement
      </Typography>
      <Typography
        variant='h3'
        className='text-center'
        color='blue-gray'
        placeholder={undefined}
      >
        Why Attend?
      </Typography>
      <Typography
        variant='lead'
        className='mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500'
        placeholder={undefined}
      >
        Welcome to the AI Conference 2023, where the future unfolds! Whether
        you&apos;re a seasoned AI professional, a curious newcomer, or a
        business leader looking to harness the power of AI, this conference is
        designed to inspire, educate, and connect.
      </Typography>
      <div className='mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <Card
          className=' border-black border px-2'
          color='amber'
          shadow={false}
          placeholder={undefined}
        >
          <Typography
            variant='h1'
            className='font-bold'
            color='blue-gray'
            placeholder={undefined}
          >
            Cérémonie
          </Typography>
          <Typography
            variant='h6'
            color='blue-gray'
            className='mt-1 font-medium'
            placeholder={undefined}
          >
            21.09.2024
          </Typography>
        </Card>
        <Card color='amber' shadow={false} placeholder={undefined}>
          <Typography
            variant='h1'
            className='font-bold'
            color='blue-gray'
            placeholder={undefined}
          >
            Récéption
          </Typography>
          <Typography
            variant='h6'
            color='blue-gray'
            className='mt-1 font-medium'
            placeholder={undefined}
          >
            21.09.2024
          </Typography>
        </Card>
      </div>
    </section>
  )
}

export default EventPlace
