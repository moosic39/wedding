import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { Bucket, s3Config } from '@/constant/s3Config'

const getObjectParams: GetObjectCommand = {
  Bucket,
  Key: 'example.jpg',
}
const client = new S3Client({ ...s3Config })
const command = new GetObjectCommand(getObjectParams)
const url = getSignedUrl(client, command)
