import { S3ClientConfig } from '@aws-sdk/client-s3'

export const Bucket = process.env.AWS_BUCKET_NAME as string
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
