'use client'
import { useState } from 'react'
import Image from 'next/image'
import { storeData } from '@/lib/storeMetadata'
import { Alert } from './ui-components/atom'
import { uploadImage } from '@/lib/fileUploader'
import { getPreSignedImage } from '@/lib/fileGetSignedUrl'
import { Bucket, s3Config } from '@/constant/s3Config'

const Uploader = ({ userName }: { userName: string }) => {
  const [file, setFile] = useState<string>()
  const [open, setOpen] = useState<boolean>(false)

  const handleChange = async (e: any) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))

    const formData = new FormData()
    const file = e.target.files[0] as File

    formData.append('file', file)
    formData.append('folderName', userName)
    await uploadImage(formData)
    console.log('file', file)

    formData.append('fileName', file.name.replace(/\s/g, '_'))
    formData.append('fileType', file.type)
    formData.append('fileSize', file.size.toString())
    formData.append('userId', userName)

    const presignedUrl = await getPreSignedImage(formData)
    console.log('presignedUrl', presignedUrl)
    formData.append('src', presignedUrl)
    await storeData(
      formData,
      presignedUrl,
      `https://${Bucket}.s3.${
        s3Config.region
      }.amazonaws.com/${file.name.replace(/\s/g, '_')}`,
    )
  }

  return (
    <div className='App'>
      <h2>Add Image:</h2>
      <form>
        <input
          type='file'
          accept='image/png, image/jpeg'
          onChange={handleChange}
        />
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
