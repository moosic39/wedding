import React from 'react'
import GalleryContainer from '@/components/ui-components/GalleryContainer'
import { auth } from '@/lib/auth'
import { getUserMetadata } from '@/lib/getMetadata'
import { capitalizeSnakeCase } from '@/helpers/stringParser'
import FileUploadComponent from '@/components/Uploaderv2'

const Upload = async () => {
  const session = await auth()

  const getUserId = () => {
    if (!session) return 'Anonymous'

    const user = session.user
    if (user) {
      if (user.name) return capitalizeSnakeCase(user.name)
    }
    return 'Mail_User'
  }

  const userId = getUserId()

  const photos = await getUserMetadata(userId)

  return (
    <div className='p-12'>
      <FileUploadComponent userName={userId} />
      <GalleryContainer photos={photos} />
    </div>
  )
}

export default Upload
