import { getSignedUrl, S3RequestPresigner } from '@aws-sdk/s3-request-presigner'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { Bucket, s3Config } from '@/constant/s3Config'

const client = new S3Client({ ...s3Config })
const command = new GetObjectCommand(getObjectParams)
const url = getSignedUrl(client, command)

import { Hash } from '@aws-sdk/hash-node'
const signer = new S3RequestPresigner({
  region: regionProvider,
  credentials: credentialsProvider,
  sha256: Hash.bind(null, 'sha256'), // In Node.js
  //sha256: Sha256 // In browsers
})
const presigned = await signer.presign(request)

// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-s3-request-presigner/
