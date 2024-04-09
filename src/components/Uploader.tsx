'use client'
import { useState } from 'react'
import Image from 'next/image'
import { uploadImage, UploadImage } from '@/lib/fileUploader'
import { set } from 'react-hook-form'

const Uploader = ({ sessionName }: { sessionName: string }) => {
  const [file, setFile] = useState<string>()

  const formData = new FormData()

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

      <form>
        <input type='file' multiple />
        <button
          type='submit'
          onClick={() => {
            uploadImage(formData)
          }}
        >
          Submit
        </button>
      </form>
      {file && <Image src={file} alt={'name'} width={100} height={100} />}
    </div>
  )
}

export default Uploader
