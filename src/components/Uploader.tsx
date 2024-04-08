'use client'
import { useState } from 'react'
import Image from 'next/image'
import { UploadImage } from '@/lib/fileUploader'

const Uploader = ({ sessionName }: { sessionName: string }) => {
  const [file, setFile] = useState<string>()

  const handleChange = async (e: any) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))

    const formData = new FormData()
    const file = e.target.files[0]
    formData.append('file', file as File)
    formData.append('folderName', sessionName)
    const data = await UploadImage(formData)
    console.log(data)
    return data
  }

  return (
    <div className='App'>
      <h2>Add Image:</h2>
      <input type='file' onChange={handleChange} />
      {file && <Image src={file} alt={'name'} width={100} height={100} />}
    </div>
  )
}

export default Uploader
