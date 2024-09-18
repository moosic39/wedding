'use server'

import { Bucket, s3Config } from '@/constant/s3Config'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getPreSignedImage } from './fileGetSignedUrl'
import { storeData } from './storeMetadata'

export const sanitizeString = (fileName: string) => {
  return fileName
    .replace(/\s/g, '_')
    .normalize('NFD') // Normalize to decompose accents
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-zA-Z0-9_]/g, '') // Remove special characters
}

const s3 = new S3Client({
  ...s3Config,
})

const uploadFileToS3 = async (formData: FormData) => {
  const file = formData.get('file') as File
  const folderName = formData.get('folderName') as string

  const uploadParams = {
    Bucket,
    Key: `${sanitizeString(folderName)}/${sanitizeString(file.name)}`,
    Body: Buffer.from(await file.arrayBuffer()),
    ContentType: file.type, // Set the correct content type
  }

  try {
    const data = await s3.send(new PutObjectCommand(uploadParams))
    console.log('Upload response data:', data)

    const presignedUrl = await getPreSignedImage(formData)

    await storeData(
      formData,
      presignedUrl,
      `https://${Bucket}.s3.${s3Config.region}.amazonaws.com/${uploadParams.Key}`,
    )

    return {
      url: `https://${Bucket}.s3.${s3Config.region}.amazonaws.com/${uploadParams.Key}`,
      presignedUrl,
      eTag: data.ETag,
    }
  } catch (err) {
    console.error('Error uploading file to S3:', err)
    throw err
  }
}

export const uploadMultipleFilesToS3 = async (formData: FormData[]) => {
  const uploadPromises = formData.map((formData) => {
    return uploadFileToS3(formData)
  })

  try {
    const results = await Promise.all(uploadPromises)
    console.log('All files uploaded successfully:', results)
    return results // Array of objects with S3 URLs and optionally ETags
  } catch (err) {
    console.error('Error uploading multiple files to S3:', err)
    throw err
  }
}
