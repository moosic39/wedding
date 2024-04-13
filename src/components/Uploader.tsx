'use client'
import { useState } from 'react'
import Image from 'next/image'
import { UploadImage } from '@/lib/fileUploader'
import { storeData } from '@/lib/storeMetadata'
import { Alert } from './ui-components/atom'

const Uploader = ({ sessionName }: { sessionName: string }) => {
  const [file, setFile] = useState<string>()
  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>()

  const handleChange = async (e: any) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))

    const formData = new FormData()
    const file = e.target.files[0]
    formData.append('file', file as File)
    formData.append('folderName', sessionName)
    await UploadImage(formData)
    formData.append('fileName', file.name)
    formData.append('fileType', file.type)
    formData.append('fileSize', file.size.toString())
    formData.append('userId', sessionName)
    formData.append('url', `${sessionName}/${file.name}`)
    formData.append('width', '100')
    formData.append('height', '100')
    const data = await storeData(formData)

    if (data.status === 'error') {
      console.error(data.message)
      setMessage(data.message)
      setOpen(true)
    }
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
        message={message}
        variant='error'
      />
    </div>
  )
}

export default Uploader
