'use client'
import React, { useState } from 'react'

import { Button, Input } from '@material-tailwind/react'
import serverAction from '@/backend/onSubmitAction'
import Title from './ui-components/atom/Title'
import { useRouter } from 'next/navigation'

const RSVP = () => {
  const routeur = useRouter()
  const [isValid, setIsValid] = useState<boolean>()
  const [message, setMessage] = useState<string>()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
    const { message, status } = await serverAction(formData)
    if (status === 'error') {
      setIsValid(false)
      setMessage(message)
    }
    if (status === 'success') {
      setIsValid(true)
      setMessage(message)
    }
    routeur.push('/#rsvp')
  }

  return (
    <section className='container mx-auto flex flex-col items-center px-4 py-10'>
      <form onSubmit={onSubmit} className='flex flex-col items-center'>
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
          color='blue'
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
