'use client'
import React from 'react'
import Title from './atoms/Title'
import { Button, Input } from '@material-tailwind/react'
import serverAction from '@/backend/onSubmitAction'

const RSVP = () => {
  const isValid = undefined
  const formData = {
    lastName: undefined,
    firstName: undefined,
    email: undefined,
    phone: undefined,
    people: undefined,
    message: undefined,
  }

  return (
    <section className='container mx-auto flex flex-col items-center px-4 py-10'>
      <form action={serverAction} className='flex flex-col items-center'>
        <Title title='Vous êtes invité' />
        <Input
          type='text'
          color='indigo'
          className='mb-4 w-80'
          label='Nom'
          value={formData.lastName}
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='teal'
          className='mb-4 w-80'
          label='Prénom'
          value={formData.firstName}
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='deep-purple'
          className='mb-4 w-80'
          label='Email'
          value={formData.email}
          crossOrigin={isValid ? 'anonymous' : 'use-credentials'}
        />
        <Input
          type='text'
          color='light-blue'
          className='mb-4 w-80'
          label='Téléphone'
          value={formData.phone}
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='blue'
          className='mb-4 w-80'
          label='Nombre de personnes'
          value={formData.people}
          crossOrigin={undefined}
        />
        <Input
          type='text'
          color='blue'
          className='mb-4 w-80'
          label='Message'
          value={formData.message}
          crossOrigin={isValid ? 'anonymous' : 'use-credentials'}
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
