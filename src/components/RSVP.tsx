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
import { useForm } from 'react-hook-form'
import { Alert, Container, Title } from './ui-components/atom'
import { ArrowPathIcon } from '@heroicons/react/24/solid'

const RSVP = () => {
  const [isValid, setIsValid] = useState<boolean>()
  const [message, setMessage] = useState<string>()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid: formIsValid, isSubmitting },
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
  }

  const isPlusOne = watch('plusOne')
  const isDietaryRestriction = watch('isDietaryRestriction')

  return (
    <Container id='rsvp' title='Vous êtes invités' className='w-full gap-4'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center'
      >
        <div className='w-full'>
          <Typography variant='small' placeholder={''}>
            <span className=' text-red-500'>*</span> champs requis
          </Typography>
        </div>
        <div className='my-4 md:flex w-full gap-4'>
          <div className='mb-4 md:mb-0 md:w-full'>
            <Input
              type='text'
              color='cyan'
              className=''
              label='Prénom'
              crossOrigin={undefined}
              {...register('firstName', { required: true })}
              required
            />
          </div>
          <Input
            type='text'
            color='cyan'
            className=''
            label='Nom'
            crossOrigin={undefined}
            {...register('lastName', { required: true })}
            required
          />
        </div>
        <Input
          type='email'
          color='cyan'
          className=''
          label='Email'
          crossOrigin={undefined}
          {...register('email', { required: true })}
          required
        />
        <div className='w-full flex justify-between lg:justify-normal'>
          <Radio
            color='cyan'
            label='Je serai présent'
            value='present'
            id='present'
            defaultChecked={false}
            crossOrigin={undefined}
            {...register('presence', { required: true })}
          />
          <Radio
            color='cyan'
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
            color='cyan'
            label='Je serai accompagné(e)'
            id='plusOne'
            defaultChecked={false}
            className=''
            crossOrigin={undefined}
            {...register('plusOne')}
          />
        </div>

        {isPlusOne && (
          <div className='my-4 md:flex w-full gap-4'>
            <div className='mb-4 md:mb-0 md:w-full'>
              <Input
                type='text'
                color='cyan'
                className=''
                label="Prénom de l'invité(e)"
                crossOrigin={undefined}
                {...register('plusOneFirstName')}
              />
            </div>

            <Input
              type='text'
              color='cyan'
              className=''
              label="Nom de l'invité(e)"
              crossOrigin={undefined}
              {...register('plusOneLastName')}
            />
          </div>
        )}
        <div className='mb-4 w-full'>
          <Checkbox
            color='cyan'
            label='Restrictions alimentaires'
            id='isDietaryRestriction'
            defaultChecked={false}
            crossOrigin={undefined}
            {...register('isDietaryRestriction')}
          />
          {isDietaryRestriction && (
            <Input
              type='text'
              color='cyan'
              className=''
              label='Restrictions alimentaires'
              crossOrigin={undefined}
              {...register('dietaryRestriction')}
            />
          )}
        </div>

        <Textarea
          color='cyan'
          className='mb-4'
          label='Message'
          {...register('message')}
        />
        <div className='w-full flex justify-end'>
          <Button
            color='cyan'
            type='submit'
            placeholder=''
            className='lg:w-1/3 md:w-1/2 w-full h-14 rounded-2xl'
            onSubmit={(e) => {
              e.preventDefault()
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className=' flex justify-center'>
                <ArrowPathIcon width={29} className='animate-spin' />
              </div>
            ) : (
              <Typography className='text-lg font-bold' placeholder={undefined}>
                Envoyer
              </Typography>
            )}
          </Button>
          <Alert
            message={message}
            variant={isValid ? 'success' : 'error'}
            open={!!message}
            onClose={() => setMessage('')}
            timeout={4000}
          />
        </div>
      </form>
    </Container>
  )
}

export default RSVP
