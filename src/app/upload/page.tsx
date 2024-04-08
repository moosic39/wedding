import Uploader from '@/components/Uploader'
import { auth } from '@/lib/auth'
import React from 'react'

const Upload = async () => {
  const session = await auth()
  // return <ImageUploader />
  return (
    <div>
      <Uploader sessionName={session?.user?.name ?? 'anonymous'} />
    </div>
  )
}

export default Upload
