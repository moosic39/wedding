'use client'
import { useState } from 'react'
import Image from 'next/image'
import { storeData } from '@/lib/storeMetadata'
import { Alert } from './ui-components/atom'
import { uploadImage } from '@/lib/fileUploader'
import { snakeCase } from '@/helpers/stringParser'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const Uploader = ({ sessionName }: { sessionName: string }) => {
  const [file, setFile] = useState<string>()
  const [open, setOpen] = useState<boolean>(false)

  const userName = sessionName.replace(/\s/g, '_')

  const handleChange = async (e: any) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))

    const formData = new FormData()
    const file = e.target.files[0]
    formData.append('file', file as File)
    formData.append('folderName', userName)
    await uploadImage(formData)

    const presignedUrl = await getSignedUrl({
      bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME as string,
      key: `${userName}/${file.name.replace(/\s/g, '_')}`,
    })
    formData.append('presignedUrl', presignedUrl)
    formData.append('fileName', file.name.replace(/\s/g, '_'))
    formData.append('fileType', file.type)
    formData.append('fileSize', file.size.toString())
    formData.append('userId', userName)
    formData.append('url', `${userName}/${file.name.replace(/\s/g, '_')}`)
    formData.append('width', '100')
    formData.append('height', '100')
    await storeData(formData)
  }

  return (
    <div className='App'>
      <h2>Add Image:</h2>
      <form>
        <input type='file' onChange={handleChange} />
      </form>
      {file && <Image src={file} alt={'name'} width={100} height={100} />}

      <Alert
        onClose={() => setOpen(false)}
        open={open}
        message={"Erreur lors de l'envoi de l'image"}
        variant='error'
        timeout={4000}
      />
    </div>
  )
}

export default Uploader
