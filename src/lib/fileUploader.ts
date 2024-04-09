'use server'

import { PutObjectCommand, S3Client, S3ClientConfig } from '@aws-sdk/client-s3'

const Bucket = process.env.AWS_BUCKET_NAME as string
const region = process.env.AWS_REGION as string
const accessKeyId = process.env.AWS_ACCESS_ID as string
const secretAccessKey = process.env.AWS_SECRET_ID as string

export const s3Config: S3ClientConfig = {
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  region,
}

export const uploadImage = async (formData: FormData) => {
  try {
    const file = formData.get('file') as File
    const folderName = formData.get('folderName') as string
    const s3 = new S3Client({
      ...s3Config,
    })

    const command = new PutObjectCommand({
      Bucket,
      Key: `${folderName}/${file.name}`,
      Body: Buffer.from(await file.arrayBuffer()),
    })
    // const res = await s3.uploadFile(Buffer.from(await file.arrayBuffer()))
    const res = await s3.send(command)
    return res
  } catch (e) {
    return 'Image Upload failed'
  }
}
