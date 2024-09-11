'use client'

import { uploadMultipleFilesToS3 } from '@/lib/fileUploader'

import { useState } from 'react'
import { Alert } from './ui-components/atom'
import Image from 'next/image'
import { Button, Progress } from '@material-tailwind/react'

const FileUploadComponent = ({ userName }: { userName: string }) => {
  const [uploading, setUploading] = useState(false)
  const [uploadResults, setUploadResults] = useState<string[]>([])
  const [open, setOpen] = useState<boolean>(false)

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setUploading(true)
      try {
        const formDataArray = Array.from(files).map((file) => {
          const formData = new FormData()
          formData.append('file', file)
          formData.append('folderName', userName)
          formData.append('fileName', file.name)
          formData.append('fileType', file.type)
          formData.append('fileSize', file.size.toString())
          formData.append('userId', userName)
          formData.append('src', '') // Placeholder for the S3 presigned URL
          formData.append('url', '') // Placeholder for the S3 URL
          formData.append('width', '0') // Placeholder for the image width
          formData.append('height', '0') // Placeholder for the image height
          formData.append('tags', '') // Placeholder for the image tags
          formData.append('focal', '') // Placeholder for the image focal length
          formData.append('camera', '') // Placeholder for the image camera
          formData.append('iso', '') // Placeholder for the image ISO
          formData.append('aperture', '') // Placeholder for the image aperture
          formData.append('shutter', '') // Placeholder for the image shutter speed
          formData.append('comments', '') // Placeholder for the image comments
          formData.append('createdAt', new Date().toLocaleString())
          return formData
        })

        const results = await uploadMultipleFilesToS3(formDataArray)
        const presignedUrl = results.map((result) => result.presignedUrl)

        setUploadResults(presignedUrl) // Save the results to display
        console.log('Upload results:', results)
      } catch (error) {
        setOpen(true)
        console.error('Error during file upload:', error)
      } finally {
        setUploading(false)
      }
    }
  }

  return (
    <div>
      <div className='flex flex-col items-center p-5 border-2 border-dashed border-cyan-700 rounded-lg w-full max-w-md mx-auto cursor-pointer text-center'>
        <InputButton
          uploading={uploading}
          label='Upload Photos'
          id='multiple-file-upload'
          handleFileChange={handleFileChange}
          inputProps={{ multiple: true }}
        />
        <InputButton
          uploading={uploading}
          label='Capture from Back Camera'
          id='file-upload-camera-back'
          handleFileChange={handleFileChange}
          inputProps={{ capture: 'environment' }}
        />
        <InputButton
          uploading={uploading}
          label='Capture from Front Camera'
          id='file-upload-camera-front'
          handleFileChange={handleFileChange}
          inputProps={{ capture: 'user' }}
        />

        {uploadResults.length > 0 && (
          <div className={'mt-5 text-left w-full'}>
            <h4>Selected Files:</h4>
            {uploadResults.map((file, index) => (
              <Image
                key={index}
                src={file}
                alt={`Uploaded image ${index + 1}`}
                fill={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* <input
        type='file'
        multiple
        onChange={handleFileChange}
        accept='image/*'
        disabled={uploading}
      />
      <input
        type='file'
        onChange={handleFileChange}
        accept='image/*'
        disabled={uploading}
        capture='environment'
        placeholder='Capture from camera (back)'
      />
      <input
        type='file'
        onChange={handleFileChange}
        accept='image/*'
        disabled={uploading}
        capture='user'
        placeholder='Capture from camera (front)'
      />
      {uploading && <p>Uploading files, please wait...</p>}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {uploadResults.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`Uploaded image ${index + 1}`}
            width={100}
            height={100}
          />
        ))}
      </div> */}

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

export default FileUploadComponent

const InputButton = ({
  uploading,
  label,
  id,
  handleFileChange,
  inputProps,
}: {
  uploading: boolean
  label: string
  id: string
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
}) => {
  return (
    <Button
      placeholder={undefined}
      loading={uploading}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className='lg:w-1/2 md:w-1/2 w-full h-14 bg-cyan-700 rounded-2xl'
    >
      <input
        type='file'
        onChange={handleFileChange}
        accept='image/*'
        id={id}
        {...inputProps}
        className='hidden'
      />
      <label className={' text-white p-2.5 rounded-md mt-2.5'} htmlFor={id}>
        {!uploading ? label : 'Uploading files, please wait...'}
      </label>
    </Button>
  )
}
