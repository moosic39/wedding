'use client'

import Gallery from 'react-photo-gallery'

type Photo = {
  src: string
  width: number
  height: number
}

const GalleryContainer = ({ photos }: { photos: Photo[] | undefined }) => {
  const fallbackPhotos = [
    {
      src: 'https://images.unsplash.com/photo-1712023105222-653af4f805b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
      width: 4,
      height: 3,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://wedding-app-jdsmj.s3.eu-west-3.amazonaws.com/Micka%C3%ABl_Jegat/Wedding_logo_crop.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAZLZDJ5NHZVBPKWOC%2F20240421%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240421T112223Z&X-Amz-Expires=3600&X-Amz-Signature=c5a6ec7946a22d5374b726d1bd3a9d923cc238e0038b5148952b02441c7ef5e5&X-Amz-SignedHeaders=host&x-id=GetObject',
      width: 1,
      height: 1,
    },
  ]

  return <Gallery photos={photos ? photos : fallbackPhotos} />
}

export default GalleryContainer
