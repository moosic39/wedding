'use client'

import { uploadMultipleFilesToS3 } from '@/lib/fileUploader'

import { useState } from 'react'
import { Alert } from './ui-components/atom'
import Image from 'next/image'

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
      <input
        type='file'
        multiple
        onChange={handleFileChange}
        accept='image/*'
        disabled={uploading}
        placeholder='Upload multiple files'
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
      </div>

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
