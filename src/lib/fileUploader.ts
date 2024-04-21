'use server'

import { Bucket, s3Config } from '@/constant/s3Config'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const s3 = new S3Client({
  ...s3Config,
})

export const uploadImage = async (formData: FormData) => {
  const file = formData.get('file') as File
  const folderName = formData.get('folderName') as string

  const command = new PutObjectCommand({
    Bucket,
    Key: `${folderName}/${file.name.replace(/\s/g, '_')}`,
    Body: Buffer.from(await file.arrayBuffer()),
  })
  try {
    // const res = await s3.uploadFile(Buffer.from(await file.arrayBuffer()))
    return await s3.send(command)
  } catch (e) {
    console.error(e)
    // return 'Image Upload failed'
  }
}
