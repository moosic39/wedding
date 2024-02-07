import React, { ReactNode, FC } from 'react'

interface ContainerProps {
  id: string
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`w-4/5 center container mx-auto flex flex-col px-4 py-10 ${className}`}
    >
      {children}
    </section>
  )
}

export default Container
