import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { createWriteStream } from 'fs'
import { fileURLToPath } from 'url'

const s3Client = new S3Client({})
const oneMB = 1024 * 1024

export const getObjectRange = ({ bucket, key, start, end }: any) => {
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
    Range: `bytes=${start}-${end}`,
  })

  return s3Client.send(command)
}

export const getRangeAndLength = (contentRange: any) => {
  const [range, length] = contentRange.split('/')
  const [start, end] = range.split('-')
  return {
    start: parseInt(start),
    end: parseInt(end),
    length: parseInt(length),
  }
}

export const isComplete = ({ end, length }: any) => end === length - 1

// When downloading a large file, you might want to break it down into
// smaller pieces. Amazon S3 accepts a Range header to specify the start
// and end of the byte range to be downloaded.
const downloadInChunks = async ({ bucket, key }: any) => {
  const writeStream = createWriteStream(
    fileURLToPath(new URL(`./${key}`, import.meta.url)),
  ).on('error', (err) => console.error(err))

  let rangeAndLength = { start: -1, end: -1, length: -1 }

  while (!isComplete(rangeAndLength)) {
    const { end } = rangeAndLength
    const nextRange = { start: end + 1, end: end + oneMB }

    console.log(`Downloading bytes ${nextRange.start} to ${nextRange.end}`)

    const { ContentRange, Body } = await getObjectRange({
      bucket,
      key,
      ...nextRange,
    })

    Body && writeStream.write(await Body.transformToByteArray())
    rangeAndLength = getRangeAndLength(ContentRange)
  }
}

export const main = async (name: string) => {
  await downloadInChunks({
    bucket: process.env.AWS_BUCKET_NAME as string,
    key: name,
  })
}
