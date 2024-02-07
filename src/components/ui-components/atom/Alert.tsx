'use client'
import { Alert } from '@material-tailwind/react'
import { FC, useEffect } from 'react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'

interface AlertCustomStylesProps {
  message?: string
  onOpen?: () => void
  className?: string
  variant?: 'success' | 'warning' | 'error' | 'info'
  timeout?: number
  open: boolean
  onClose: () => void
}

const AlertCustomAnimation: FC<AlertCustomStylesProps> = ({
  message,
  onOpen,
  className,
  variant = 'info',
  timeout = 3000,
  open,
  onClose,
}) => {
  const variantMap = {
    success: {
      color: 'border-[#2ec946] bg-[#2ec946]/20 text-[#2ec946]',
      icon: <CheckCircleIcon width={24} />,
      message: '☑️ Success ☑️',
    },
    warning: {
      color: 'border-[#f59e0b] bg-[#f59e0b]/20 text-[#f59e0b]',
      icon: <ExclamationCircleIcon width={24} />,
      message: '⁉️ Warning ⁉️',
    },
    error: {
      color: 'border-[#f44336] bg-[#f44336]/20 text-[#f44336]',
      icon: <XCircleIcon width={24} />,
      message: '⚠️ Error ⚠️',
    },
    info: {
      color: 'border-[#2d9cdb] bg-[#2d9cdb]/20 text-[#2d9cdb]',
      icon: <InformationCircleIcon width={24} />,
      message: 'ℹ Info ℹ',
    },
  }

  useEffect(() => {
    if (open) {
      if (onOpen) {
        onOpen()
      }
      setTimeout(onClose, timeout)
    }
  }, [open, timeout, onOpen, onClose])

  return (
    <div className='fixed top-20 z-50 right-0 w-4/5 md:w-3/5 lg:w-2/5'>
      <Alert
        open={open}
        icon={variantMap[variant].icon}
        className={`top-5 z-50 rounded-none border-l-4 font-medium ${variantMap[variant].color} ${className}`}
        animate={{
          mount: { x: 0 },
          unmount: { x: 50 },
        }}
      >
        {message ?? variantMap[variant].message}
      </Alert>
    </div>
  )
}

export default AlertCustomAnimation
