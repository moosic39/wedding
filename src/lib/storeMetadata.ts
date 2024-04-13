'use server'
import { Photo } from '@prisma/client'
import prisma from './prisma'

export const storeData = async (sendingData: any) => {
  // const url = formData.get('url') as string
  // const width = formData.get('width') as string
  // const height = formData.get('height') as string
  // const userId = formData.get('userId') as string
  // const size = formData.get('size') as string
  // const tags = formData.get('tags') as string
  // const focal = formData.get('focal') as string
  // const camera = formData.get('camera') as string
  // const iso = formData.get('iso') as string
  // const aperture = formData.get('aperture') as string
  // const shutter = formData.get('shutter') as string
  // const comments = formData.get('comments') as string

  const data = {
    url: sendingData.url,
    createdAt: new Date().toLocaleString(),
    width: sendingData.width,
    height: sendingData.height,
    userId: sendingData.userId,
    // size,
    // tags: tags.split(','),
    // focal,
    // camera,
    // iso,
    // aperture,
    // shutter,
    // comments: comments.split(','),
  } as unknown as Photo

  try {
    await prisma.photo
      .create({ data })
      .catch(async (e: Error) => {
        console.error(e)
        process.exit(1)
      })
      .finally(async () => {
        console.log('disconnect')
        await prisma.$disconnect()
      })
    return { message: 'Photo téléchargée', status: 'success' }
  } catch (e) {
    return { message: 'Photo non téléchargée', status: 'error' }
  }
}
