'use server'

import _ from 'lodash'

import { Bucket, s3Config } from '@/constant/s3Config'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getPreSignedImage } from './fileGetSignedUrl'
import { storeData } from './storeMetadata'

export const sanitizeString = (fileName: string) => {
  const withoutSpace = _.replace(fileName, /\s/g, '_')
  const withoutAccent = _.replace(withoutSpace, 'à', 'a')
  const withoutAccent2 = _.replace(withoutAccent, 'â', 'a')
  const withoutAccent3 = _.replace(withoutAccent2, 'ä', 'a')
  const withoutAccent4 = _.replace(withoutAccent3, 'é', 'e')
  const withoutAccent5 = _.replace(withoutAccent4, 'è', 'e')
  const withoutAccent6 = _.replace(withoutAccent5, 'ê', 'e')
  const withoutAccent7 = _.replace(withoutAccent6, 'ë', 'e')
  const withoutAccent8 = _.replace(withoutAccent7, 'î', 'i')
  const withoutAccent9 = _.replace(withoutAccent8, 'ï', 'i')
  const withoutAccent10 = _.replace(withoutAccent9, 'ô', 'o')
  const withoutAccent11 = _.replace(withoutAccent10, 'ö', 'o')
  const withoutAccent12 = _.replace(withoutAccent11, 'ù', 'u')
  const withoutAccent13 = _.replace(withoutAccent12, 'û', 'u')
  const withoutAccent14 = _.replace(withoutAccent13, 'ü', 'u')
  const withoutAccent15 = _.replace(withoutAccent14, 'ç', 'c')
  const withoutAccent16 = _.replace(withoutAccent15, 'œ', 'oe')
  const withoutAccent17 = _.replace(withoutAccent16, 'æ', 'ae')
  const withoutAccent18 = _.replace(withoutAccent17, 'À', 'A')
  const withoutAccent19 = _.replace(withoutAccent18, 'Â', 'A')
  const withoutAccent20 = _.replace(withoutAccent19, 'Ä', 'A')
  const withoutAccent21 = _.replace(withoutAccent20, 'É', 'E')
  const withoutAccent22 = _.replace(withoutAccent21, 'È', 'E')
  const withoutAccent23 = _.replace(withoutAccent22, 'Ê', 'E')
  const withoutAccent24 = _.replace(withoutAccent23, 'Ë', 'E')
  const withoutAccent25 = _.replace(withoutAccent24, 'Î', 'I')
  const withoutAccent26 = _.replace(withoutAccent25, 'Ï', 'I')
  const withoutAccent27 = _.replace(withoutAccent26, 'Ô', 'O')
  const withoutAccent28 = _.replace(withoutAccent27, 'Ö', 'O')
  const withoutAccent29 = _.replace(withoutAccent28, 'Ù', 'U')
  const withoutAccent30 = _.replace(withoutAccent29, 'Û', 'U')
  const withoutAccent31 = _.replace(withoutAccent30, 'Ü', 'U')
  const withoutAccent32 = _.replace(withoutAccent31, 'Ç', 'C')
  const withoutAccent33 = _.replace(withoutAccent32, 'Œ', 'OE')
  const withoutAccent34 = _.replace(withoutAccent33, 'Æ', 'AE')
  return withoutAccent34
}

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

const uploadFileToS3 = async (formData: FormData) => {
  const file = formData.get('file') as File
  const folderName = formData.get('folderName') as string

  const uploadParams = {
    Bucket,
    Key: `${sanitizeString(folderName)}/${sanitizeString(file.name)}`,
    Body: Buffer.from(await file.arrayBuffer()),
    ContentType: 'image/*',
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
