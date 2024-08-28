'use server'

import { Bucket, s3Config } from '@/constant/s3Config'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { sanitizeString } from './fileUploader'

const s3 = new S3Client({
  ...s3Config,
})

export const getPreSignedImage = async (
  formData: FormData,
): Promise<string> => {
  const fileName = formData.get('fileName') as string
  const folderName = formData.get('folderName') as string
  const getCommand = new GetObjectCommand({
    Bucket,
    Key: `${sanitizeString(folderName)}/${sanitizeString(fileName)}`,
  })
  try {
    return await getSignedUrl(s3, getCommand, { expiresIn: 3600 * 24 * 7 })
  } catch (e) {
    console.error(e)
    return 'Error: Image Upload failed'
  }
}
