import { SimpleRegistrationForm } from '@/components/SimpleRegistrationForm'
import {
  LoginButton,
  LogoutButton,
} from '@/components/ui-components/AuthButton'
import { auth } from '@/lib/auth'
import Image from 'next/image'
import React from 'react'

const Signup = async () => {
  const session = await auth()
  return (
    <div>
      {session ? (
        <>
          {session.user?.image && (
            <Image
              width={128}
              height={128}
              className='rounded-full w-12 h-12'
              src={session.user?.image ?? ''}
              alt={session.user?.name ?? ''}
            />
          )}
          <p>Signed in as {session.user?.name}</p>
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
      <SimpleRegistrationForm />
    </div>
  )
}

export default Signup
