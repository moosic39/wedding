'use client'
import React, { FormEvent, ForwardRefExoticComponent } from 'react'
import Title from './atoms/Title'
import { Button, Input, InputProps } from '@material-tailwind/react'

const RSVP = () => {
  const inputProps: ForwardRefExoticComponent<InputProps> = {
    type: 'text',
    variant: 'outlined',
    crossOrigin: 'anonymous',
  }
  const isValid = undefined
  const onSubmit = (e) => {
    e.preventDefault
    console.log('submit')
  }

  return (
    <section className='container mx-auto flex flex-col items-center px-4 py-10'>
      <form onSubmit={onSubmit} className='flex flex-col items-center'>
        <Title title='Vous êtes invité' />

        <Input
          label='Name'
          color={'black' || (isValid ? 'green' : 'red')}
          {...inputProps}
        />
        <Input label='Password' {...inputProps} />
        <Button color='blue' type='submit' onClick={onSubmit}>
          Submit
        </Button>
      </form>
    </section>
  )
}

export default RSVP
