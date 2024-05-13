'use client' // Error components must be Client Components

import { ShieldExclamationIcon } from '@heroicons/react/24/solid'
import Button from '@material-tailwind/react/components/Button'
import Typography from '@material-tailwind/react/components/Typography'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='h-screen mx-auto grid place-items-center text-center px-8'>
      <div>
        <ShieldExclamationIcon className='mx-auto w-16 h-16 text-red-500' />
        <Typography
          variant='h1'
          color='blue-gray'
          className='mt-10 !text-3xl !leading-snug md:!text-4xl'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {error.name + ' ' + error.cause} <br /> It looks like something went
          wrong.
        </Typography>
        <Typography
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {error.message}
        </Typography>
        <Button
          color='gray'
          className='w-full px-4 md:w-[8rem]'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onClick={() => {
            reset()
            window.location.href = '/'
          }}
        >
          back home
        </Button>
      </div>
    </div>
  )
}
