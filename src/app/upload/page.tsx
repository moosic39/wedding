import React from 'react'
import GalleryContainer from '@/components/ui-components/GalleryContainer'
import Uploader from '@/components/Uploader'
import { auth } from '@/lib/auth'
import { getUserMetadata } from '@/lib/getMetadata'
import { capitalizeSnakeCase } from '@/helpers/stringParser'

const Upload = async () => {
  const session = await auth()

  const userId = capitalizeSnakeCase(session?.user?.name!) ?? 'Anonymous'

  const photos = await getUserMetadata(userId)

  return (
    <div>
      <Uploader userName={userId} />
      <GalleryContainer photos={photos} />
    </div>
  )
}

export default Upload
