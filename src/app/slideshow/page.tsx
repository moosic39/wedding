'use client'

import { useEffect, useState, useCallback } from 'react'
import { GalleryWithCarousel } from '@/components/ui-components/GalleryContainer'
import { getAllMetadata } from '@/lib/getMetadata'

const INTERVAL = 1000 * 60 * 5 // 5 minutes

// Fisher-Yates Shuffle Algorithm
const shuffleArray = (array: any[]) => {
  // Create a copy of the array to avoid mutating the original
  const shuffledArray = [...array]

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) // Get a random index
    // Swap elements
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  return shuffledArray // Return the shuffled array
}

const SlideShow = () => {
  const [photos, setPhotos] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPhotos = useCallback(async () => {
    setLoading(true)
    setError(null) // Reset error state before fetching
    try {
      const fetchedPhotos = await getAllMetadata()
      const shuffledPhotos = shuffleArray(fetchedPhotos)
      setPhotos(shuffledPhotos)
    } catch (err) {
      setError('Failed to load photos. Please try again later.')
      console.error('Error fetching photos:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPhotos()
    const intervalId = setInterval(fetchPhotos, INTERVAL)

    return () => clearInterval(intervalId)
  }, [fetchPhotos])

  return (
    <div className='h-full w-full bg-blue-gray-900'>
      {loading && <p className=' absolute'>Loading photos...</p>}
      {error && <p className='text-red-500 absolute'>{error}</p>}
      <GalleryWithCarousel photos={photos} />
    </div>
  )
}

export default SlideShow
