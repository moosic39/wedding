import React from 'react'
import { GalleryWithCarousel } from '@/components/ui-components/GalleryContainer'

import { getAllMetadata } from '@/lib/getMetadata'
import { random } from 'lodash'

const SlideShow = async () => {
  const photos = await getAllMetadata()
  const shufflePhotos = photos.toSorted(() => random(-1, 1))

  return (
    <div className='h-full w-full bg-blue-gray-900'>
      <GalleryWithCarousel photos={shufflePhotos} />
    </div>
  )
}

export default SlideShow
