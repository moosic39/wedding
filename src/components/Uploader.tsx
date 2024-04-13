'use client'
import { useState } from 'react'
import Image from 'next/image'
import { uploadImage } from '@/lib/fileUploader'
import { Alert } from './ui-components/atom'
import { storeData } from '@/lib/storeMetadata'

const Uploader = ({ sessionName }: { sessionName: string }) => {
  const [file, setFile] = useState<string>()
  const [message, setMessage] = useState<string>()
  const [isValid, setIsValid] = useState<boolean>(false)

  const handleChange = async (e: any) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))

    const formData = new FormData()
    const file = e.target.files[0]
    formData.append('file', file as File)
    formData.append('folderName', sessionName)
    await uploadImage(formData)
    const data = {
      url: `${process.env.NEXT_PUBLIC_S3_URL}/${sessionName}/${file.name}`,
      width: file.size,
      height: file.type,
      userId: sessionName || 'anonymous',
    }
    console.log(data)
    const response = await storeData(data)
    setMessage(response.message)
    setIsValid(response.status === 'error')
    return response
  }

  return (
    <div className='App'>
      <h2>Add Image:</h2>
      <form>
        <input type='file' onChange={handleChange} />
      </form>
      {file && <Image src={file} alt={'name'} width={100} height={100} />}
      <Alert
        message={message}
        variant={isValid ? 'success' : 'error'}
        open={!!message}
        onClose={() => setMessage('')}
        timeout={4000}
      />
    </div>
  )
}

export default Uploader
