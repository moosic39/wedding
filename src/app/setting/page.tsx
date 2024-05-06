import { auth } from '@/lib/auth'
import { getUserMetadata } from '@/lib/getMetadata'
import { updateUserMetadata } from '@/lib/updateUser'
import Image from 'next/image'
import React from 'react'

const Setting = async () => {
  const session = await auth()
  if (!session) {
    return <>Not signed in</>
  }

  const data = await getUserMetadata(session?.user?.id!)

  const formData = new FormData()
  formData.append('firstName', 'Mickael')

  // updateUserMetadata(session?.user?.id!, formData)
  return (
    <>
      <div>{session.expires}</div>
      <div>{session?.user?.id}</div>
      <div>{session?.user?.email}</div>
      <div>{data[0].firstName}</div>
      <div>{data[0].lastName}</div>
      <div>{session?.user?.name}</div>
      <Image
        src={session?.user?.image ?? '/logos/wedding_logo_v1_rounded.png'}
        alt='avatar'
        width={100}
        height={100}
        className='rounded-full'
      />
    </>
  )
}

export default Setting
