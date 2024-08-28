'use server'
import { Photo } from '@prisma/client'
import prisma from './prisma'
import { getImageSize } from 'next/dist/server/image-optimizer'

export const storeData = async (
  formData: FormData,
  presignedUrl: string,
  url: string,
) => {
  const file = formData.get('file') as File
  const { width, height } = await getImageSize(
    Buffer.from(await file.arrayBuffer()),
    file.type as 'jpeg' | 'png',
  )

  const sendingData = {
    src: presignedUrl,
    url: url,
    width: width!.toString() ?? '1',
    height: height!.toString() ?? '1',
    userId: formData.get('userId') as string,
    fileName: formData.get('fileName') as string,
    size: formData.get('fileSize') as string,
    tags: formData.get('tags') as string,
    focal: formData.get('focal') as string,
    camera: formData.get('camera') as string,
    iso: formData.get('iso') as string,
    aperture: formData.get('aperture') as string,
    shutter: formData.get('shutter') as string,
    comments: formData.get('comments') as string,
  }

  const data = {
    src: sendingData.src,
    url: sendingData.url,
    createdAt: new Date().toLocaleString(),
    width: Number(sendingData.width),
    height: Number(sendingData.height),
    userId: sendingData.userId,
    size: Number(sendingData.size),
    fileName: sendingData.fileName,
  } as unknown as Photo

  return await prisma.photo
    .create({ data })
    .catch(async (e: Error) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      console.log('disconnect')
      await prisma.$disconnect()
    })
}
