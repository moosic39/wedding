'use client'

import { Session } from 'next-auth'
import { useState } from 'react'
import { Alert } from './ui-components/atom'
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from '@material-tailwind/react'
import {
  ArrowUpOnSquareIcon,
  DevicePhoneMobileIcon,
  CameraIcon as CameraIconOutline,
} from '@heroicons/react/24/outline'
import { CameraIcon } from '@heroicons/react/24/solid'

import { uploadMultipleFilesToS3 } from '@/lib/fileUploader'
import { parseMail } from '@/helpers/stringParser'

const getUsername = (sessionUser?: Session['user']) => {
  if (!sessionUser) return 'Anonymous'
  return sessionUser?.name
    ? sessionUser.name
    : sessionUser?.email
    ? parseMail(sessionUser.email).username
    : 'Anonymous'
}

const IsLogged = ({ sessionUser }: { sessionUser?: Session['user'] }) => {
  const username = getUsername(sessionUser)
  const [open, setOpen] = useState<boolean>(true)
  const [openUpload, setOpenUpload] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files
    if (files && files.length > 0) {
      try {
        const formDataArray = Array.from(files).map((file) => {
          const formData = new FormData()
          formData.append('file', file)
          formData.append('folderName', username)
          formData.append('fileName', file.name)
          formData.append('fileType', file.type)
          formData.append('fileSize', file.size.toString())
          formData.append('userId', username)
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

        await uploadMultipleFilesToS3(formDataArray)
        setOpenUpload(true)
      } catch (error: any) {
        setErrorMessage(error.message)
        setOpenUpload(true)
        console.error('Error during file upload:', error)
      }
    }
  }

  return (
    <>
      {username !== 'Anonymous' && (
        <Alert
          message={`Bonjour ${username}`}
          variant={'warning'}
          timeout={4000}
          onClose={() => setOpen(false)}
          open={open}
        />
      )}
      {errorMessage ? (
        <Alert
          message={errorMessage}
          variant={'error'}
          timeout={4000}
          onClose={() => setOpenUpload(false)}
          open={openUpload}
        />
      ) : (
        <Alert
          message={'Uploading files, please wait...'}
          variant={'uploadImage'}
          timeout={4000}
          onClose={() => {
            setOpenUpload(false)
          }}
          open={openUpload}
        />
      )}

      <div className='relative w-5/6'>
        <input
          type='file'
          multiple
          onChange={handleFileChange}
          id='multiple-file-upload'
          accept='image/*'
          className='hidden'
        />
        <input
          type='file'
          onChange={handleFileChange}
          id='file-upload-camera-back'
          accept='image/*'
          capture='environment'
          className='hidden'
        />
        <input
          type='file'
          onChange={handleFileChange}
          accept='image/*'
          id='file-upload-camera-front'
          capture='user'
          className='hidden'
        />
        <div className='fixed bottom-4 right-4'>
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton
                size='lg'
                className='rounded-full'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <CameraIcon className='h-5 w-5' />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <SpeedDialAction
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <label
                  htmlFor='multiple-file-upload'
                  className='h-full w-full flex items-center justify-center'
                >
                  <ArrowUpOnSquareIcon className='h-5 w-5' />
                </label>
              </SpeedDialAction>
              <SpeedDialAction
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <label
                  htmlFor='file-upload-camera-back'
                  className='h-full w-full flex items-center justify-center'
                >
                  <CameraIconOutline className='h-5 w-5' />
                </label>
              </SpeedDialAction>
              <SpeedDialAction
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <label
                  htmlFor='file-upload-camera-front'
                  className='h-full w-full flex items-center justify-center'
                >
                  <DevicePhoneMobileIcon className='h-5 w-5' />
                </label>
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    </>
  )
}

export default IsLogged
