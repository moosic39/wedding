'use client'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react'

export const SimpleRegistrationForm = () => {
  return (
    <section className='container mx-auto flex flex-col items-center px-4 py-10'>
      <Card
        color='transparent'
        shadow={true}
        placeholder={''}
        className={'p-12'}
      >
        <Typography variant='h4' color='cyan' placeholder={''}>
          Sign Up
        </Typography>
        <Typography color='gray' className='mt-1 font-normal' placeholder={''}>
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
          <div className='mb-1 flex flex-col gap-6'>
            <Typography
              variant='h6'
              color='blue-gray'
              className='-mb-3'
              placeholder={''}
            >
              Your Name
            </Typography>
            <Input
              size='lg'
              label=''
              color='cyan'
              placeholder='Bruce Wayne'
              className=' !border-t-blue-gray-200 focus:!border-t-cyan-500'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              crossOrigin={''}
            />
            <Typography
              variant='h6'
              color='blue-gray'
              className='-mb-3'
              placeholder={''}
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
            />
            <Typography
              variant='h6'
              color='blue-gray'
              className='-mb-3'
              placeholder={''}
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
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant='small'
                color='gray'
                className='flex items-center font-normal'
                placeholder={''}
              >
                I agree the
                <a
                  href='#'
                  className='font-medium transition-colors hover:text-cyan'
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            color='cyan'
            containerProps={{ className: '-ml-2.5' }}
            crossOrigin={''}
          />
          <Button className='mt-6' fullWidth color='cyan' placeholder={''}>
            sign up
          </Button>
          <Typography
            color='cyan'
            className='mt-4 text-center font-normal'
            placeholder={''}
          >
            Already have an account?{' '}
            <a href='#' className='font-medium text-cyan-500 underline'>
              Log In
            </a>
          </Typography>
        </form>
      </Card>
    </section>
  )
}
