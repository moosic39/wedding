import React from 'react'
import { GalleryWithCarousel } from '@/components/ui-components/GalleryContainer'

import { getAllMetadata } from '@/lib/getMetadata'
import { random } from 'lodash'

const SlideShow = async () => {
  const photos = await getAllMetadata()
  photos.sort(() => random(-1, 1))

  return (
    <div className='h-full w-full bg-blue-gray-900'>
      <GalleryWithCarousel photos={photos} />
    </div>
  )
}

export default SlideShow
