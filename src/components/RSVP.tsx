'use client'
import React, { useState } from 'react'

import {
  Button,
  Checkbox,
  Input,
  Radio,
  Textarea,
  Typography,
} from '@material-tailwind/react'
import serverAction from '@/backend/onSubmitAction'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Container, Title } from './ui-components/atom'

const RSVP = () => {
  const router = useRouter()
  const [isValid, setIsValid] = useState<boolean>()
  const [message, setMessage] = useState<string>()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid: formIsValid },
  } = useForm()

  const onSubmit = async () => {
    const formData = new FormData()
    formData.append('lastName', watch('lastName'))
    formData.append('firstName', watch('firstName'))
    formData.append('email', watch('email'))
    formData.append('presence', watch('presence'))
    formData.append('plusOneLastName', watch('plusOneLastName'))
    formData.append('plusOneFirstName', watch('plusOneFirstName'))
    formData.append('dietaryRestriction', watch('dietaryRestriction'))
    formData.append('message', watch('message'))

    const { message, status } = await serverAction(formData)
    if (status === 'error') {
      setIsValid(false)
      setMessage(message)
    }
    if (status === 'success') {
      setIsValid(true)
      setMessage(message)
    }
    router.push('/#rsvp')
  }

  const isPlusOne = watch('plusOne')
  const isDietaryRestriction = watch('isDietaryRestriction')

  return (
    <section
      className='container mx-auto flex flex-col items-center px-4 py-10'
      id='rsvp'
    >
      <Title title='Vous êtes invités' />
      <Container className='w-full gap-4'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col items-center'
        >
          <div className='w-full'>
            <Typography variant='small' placeholder={''}>
              <span className=' text-red-500'>*</span> champs requis
            </Typography>
          </div>

          <div className='my-4 flex w-full gap-4'>
            <Input
              type='text'
              color='teal'
              className=''
              label='Prénom'
              crossOrigin={undefined}
              {...register('firstName', { required: true })}
              required
            />
            <Input
              type='text'
              color='teal'
              className=''
              label='Nom'
              crossOrigin={undefined}
              {...register('lastName', { required: true })}
              required
            />
          </div>
          <Input
            type='email'
            color='teal'
            className=''
            label='Email'
            crossOrigin={undefined}
            {...register('email', { required: true })}
            required
          />
          <div className='w-full flex end-4'>
            <Radio
              color='teal'
              label='Je serai présent'
              value='present'
              id='present'
              defaultChecked={false}
              crossOrigin={undefined}
              {...register('presence', { required: true })}
            />
            <Radio
              color='teal'
              label='Je serai absent'
              value='absent'
              id='absent'
              defaultChecked={true}
              crossOrigin={undefined}
              {...register('presence', { required: true })}
            />
          </div>
          <div className='w-full'>
            <Checkbox
              color='teal'
              label='Je serai accompagné(e)'
              id='plusOne'
              defaultChecked={false}
              className=''
              crossOrigin={undefined}
              {...register('plusOne')}
            />
          </div>

          {isPlusOne && (
            <div className='my-4 flex w-full gap-4'>
              <Input
                type='text'
                color='teal'
                className=''
                label="Prénom de l'invité(e)"
                crossOrigin={undefined}
                {...register('plusOneFirstName')}
              />
              <Input
                type='text'
                color='teal'
                className=''
                label="Nom de l'invité(e)"
                crossOrigin={undefined}
                {...register('plusOneLastName')}
              />
            </div>
          )}
          <div className='mb-4 w-full'>
            <Checkbox
              color='teal'
              label='Resctictions alimentaires'
              id='isDietaryRestriction'
              defaultChecked={false}
              crossOrigin={undefined}
              {...register('isDietaryRestriction')}
            />
            {isDietaryRestriction && (
              <Input
                type='text'
                color='teal'
                className=''
                label='Restrictions alimentaires'
                crossOrigin={undefined}
                {...register('dietaryRestriction')}
              />
            )}
          </div>

          <Textarea
            color='teal'
            className=''
            label='Message'
            {...register('message')}
          />
          <Button
            color='teal'
            type='submit'
            placeholder=''
            className='m-4 w-1/4'
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            Submit
          </Button>
          {message && (
            <div className='mt-4'>
              <p
                className={`text-center text-lg ${
                  isValid ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {message}
              </p>
            </div>
          )}
        </form>
      </Container>
    </section>
  )
}

export default RSVP
