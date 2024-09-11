'use client'

import { Carousel, Dialog } from '@material-tailwind/react'
import Image from 'next/image'
import { useState } from 'react'
import LibGallery from 'react-photo-gallery'

type Photo = {
  src: string
  width: number
  height: number
}

export const GalleryContainer = ({
  photos,
}: {
  photos: Photo[] | undefined
}) => {
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
  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState('')
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handlePhotoClick = (e: any) => {
    console.log('photo clicked', e.target)
    setOpen(true)
    setSrc(e.target.src)
    setWidth(e.target.width)
    setHeight(e.target.height)
  }

  return (
    <div className='gallery-container'>
      <LibGallery
        margin={8}
        direction='row'
        onClick={handlePhotoClick}
        photos={photos ?? fallbackPhotos}
      />
      <Dialog
        size='xl'
        open={open}
        placeholder={undefined}
        onPointerLeave={() => setOpen(false)}
        onMouseLeave={() => setOpen(false)}
        onPointerOut={() => setOpen(false)}
        onPointerLeaveCapture={() => setOpen(false)}
        handler={function (value: any): void {
          throw new Error('Function not implemented.')
        }}
        onPointerEnterCapture={undefined}
        // className='flex align-middle justify-center'
      >
        <Image
          src={src}
          alt='Uploaded image'
          width={width}
          height={height}
          className=' flex align-middle justify-center object-fill'
        />
      </Dialog>
    </div>
  )
}

export const GalleryWithCarousel = ({
  photos,
}: {
  photos: Photo[] | undefined
}) => {
  console.log('photos', photos)
  return (
    <Carousel
      loop={true}
      autoplay={true}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {photos?.map((photo, index) => (
        <Image
          key={index}
          src={photo.src}
          alt={`Uploaded image ${index + 1}`}
          width={photo.width}
          height={photo.height}
          className='object-cover w-full h-full'
        />
      ))}
    </Carousel>
  )
}

const Gallery = {
  default: GalleryContainer,
  Carousel: GalleryWithCarousel,
}

export default Gallery
