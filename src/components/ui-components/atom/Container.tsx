import React, { ReactNode, FC } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={`w-4/5 center ${className}`}>{children}</div>
}

export default Container
