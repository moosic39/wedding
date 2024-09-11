'use client'

import { providerMap } from '@/lib/auth'
import { Card, Input, Button, Typography } from '@material-tailwind/react'
import { signIn } from 'next-auth/react'

export const SimpleLoginForm = () => {
  return (
    <section className='container mx-auto flex flex-col items-center px-4 py-10'>
      <Card
        color='transparent'
        shadow={true}
        placeholder={''}
        className={'p-12'}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant='h4'
          color='cyan'
          placeholder={''}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Log in
        </Typography>
        <Typography
          color='gray'
          className='mt-1 font-normal'
          placeholder={''}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Nice to meet you again!
        </Typography>
        <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
          <div className='mb-1 flex flex-col gap-6'>
            <Typography
              variant='h6'
              color='blue-gray'
              className='-mb-3'
              placeholder={''}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Your Email
            </Typography>
            <Input
              size='lg'
              placeholder='batman@wayne-enterprise.com'
              color='cyan'
              className=' !border-t-blue-gray-200 focus:!border-t-cyan-500'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              crossOrigin={''}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Typography
              variant='h6'
              color='blue-gray'
              className='-mb-3'
              placeholder={''}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Password
            </Typography>
            <Input
              type='password'
              size='lg'
              color='cyan'
              placeholder='********'
              className=' !border-t-blue-gray-200 focus:!border-t-cyan-500'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              crossOrigin={''}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </div>
          <Button
            className='mt-6'
            fullWidth
            color='cyan'
            placeholder={''}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onClick={() => {
              signIn()
            }}
          >
            Log In
          </Button>
          {/* {Object.values(providerMap).map((provider) => (
            <Button
              key={provider.id}
              className='mt-6'
              fullWidth
              type='submit'
              color='gray'
              placeholder={''}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={async () => {
                await signIn(provider.id)
              }}
            >
              Log In with {provider.name}
            </Button>
          ))} */}
          <Typography
            color='cyan'
            className='mt-4 text-center font-normal'
            placeholder={''}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Don&apos;t have an account yet?&nbsp;
            <a href='/signup' className='font-medium text-cyan-500 underline'>
              Sign up
            </a>
          </Typography>
        </form>
      </Card>
    </section>
  )
}
