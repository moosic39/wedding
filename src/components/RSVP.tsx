'use client'
import React, { useState } from 'react'

import { Button, Checkbox, Input, Radio } from '@material-tailwind/react'
import serverAction from '@/backend/onSubmitAction'
import Title from './ui-components/atom/Title'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center'
      >
        <Title title='Vous êtes invité' />
        <Input
          type='text'
          color='indigo'
          className='mb-4 w-80'
          label='Nom'
          crossOrigin={undefined}
          {...register('lastName', { required: true })}
          required
        />
        <Input
          type='text'
          color='teal'
          className='mb-4 w-80'
          label='Prénom'
          crossOrigin={undefined}
          {...register('firstName', { required: true })}
          required
        />
        <Input
          type='text'
          color='blue'
          className='mb-4 w-80'
          label='Email'
          crossOrigin={undefined}
          {...register('email', { required: true })}
          required
        />
        <label>
          <Radio
            color='blue'
            label='Je serai présent'
            value='present'
            id='present'
            defaultChecked={false}
            crossOrigin={undefined}
            {...register('presence', { required: true })}
          />
          <Radio
            color='blue'
            label='Je serai absent'
            value='absent'
            id='absent'
            defaultChecked={true}
            crossOrigin={undefined}
            {...register('presence', { required: true })}
          />
        </label>
        <Checkbox
          color='blue'
          label='Je serai accompagné(e)'
          id='plusOne'
          defaultChecked={false}
          crossOrigin={undefined}
          {...register('plusOne')}
        />
        {isPlusOne && (
          <>
            <Input
              type='text'
              color='indigo'
              className='mb-4 w-80'
              label='Nom de la personne invitée'
              crossOrigin={undefined}
              {...register('plusOneLastName')}
            />
            <Input
              type='text'
              color='teal'
              className='mb-4 w-80'
              label='Prénom de la personne invitée'
              crossOrigin={undefined}
              {...register('plusOneFirstName')}
            />
          </>
        )}
        <Checkbox
          color='blue'
          label='Resctictions alimentaires'
          id='isDietaryRestriction'
          defaultChecked={false}
          crossOrigin={undefined}
          {...register('isDietaryRestriction')}
        />

        {isDietaryRestriction && (
          <Input
            type='text'
            color='blue'
            className='mb-4 w-80'
            label='Restrictions alimentaires'
            crossOrigin={undefined}
            {...register('dietaryRestriction')}
          />
        )}

        <Input
          type='text'
          color='blue'
          className='mb-4 w-80'
          label='Message'
          crossOrigin={undefined}
          {...register('message')}
        />

        <Button
          color='blue'
          type='submit'
          placeholder=''
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
    </section>
  )
}

export default RSVP
