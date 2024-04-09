'use client'

import { useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'

const GalleryContainer = ({ photos }: { photos: any }) => {
  const [data, setData] = useState(photos)
  useEffect(() => {
    setData(photos)
  }, [photos])

  return <Gallery photos={data} />
}

export default GalleryContainer
