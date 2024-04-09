import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { s3Config } from './fileUploader'

const client = new S3Client({ ...s3Config })
const command = new GetObjectCommand(getObjectParams)
const url = await getSignedUrl(client, command)
