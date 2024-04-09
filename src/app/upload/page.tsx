import GalleryContainer from '@/components/ui-components/GalleryContainer'
import Uploader from '@/components/Uploader'
import { auth } from '@/lib/auth'
import React from 'react'
import Gallery from 'react-photo-gallery'

const Upload = async () => {
  const session = await auth()

  const photos = [
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
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      width: 1,
      height: 1,
    },
  ]

  return (
    <div>
      <Uploader sessionName={session?.user?.name ?? 'anonymous'} />
      <GalleryContainer photos={photos} />
    </div>
  )
}

export default Upload
