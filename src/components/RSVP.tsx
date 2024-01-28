'use client'
import React from 'react'

import { Button, Input } from '@material-tailwind/react'
import serverAction from '@/backend/onSubmitAction'
import Title from './ui-components/atom/Title'

const RSVP = () => {
  const isValid = undefined

  return (
    <section className='container mx-auto flex flex-col items-center px-4 py-10'>
      <form action={serverAction} className='flex flex-col items-center'>
        <Title title='Vous êtes invité' />
        <Input
          type='text'
          color='indigo'
          className='mb-4 w-80'
          label='Nom'
          name='lastName'
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='teal'
          className='mb-4 w-80'
          label='Prénom'
          name='firstName'
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='deep-purple'
          className='mb-4 w-80'
          label='Email'
          name='email'
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='blue'
          className='mb-4 w-80'
          label='Présence'
          name='presence'
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='blue'
          className='mb-4 w-80'
          label='Invité'
          name='plusOne'
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='indigo'
          className='mb-4 w-80'
          label='Nom de la personne invitée'
          name='plusOneLastName'
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='teal'
          className='mb-4 w-80'
          label='Prénom de la personne invitée'
          name='plusOneFirstName'
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='blue'
          className='mb-4 w-80'
          label='Restrictions alimentaires'
          name='dietaryRestriction'
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='blue'
          className='mb-4 w-80'
          label='Message'
          name='message'
          crossOrigin={undefined}
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
      </form>
    </section>
  )
}

export default RSVP
