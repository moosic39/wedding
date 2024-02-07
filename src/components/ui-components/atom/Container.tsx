import Image from 'next/image'
import React, { ReactNode, FC } from 'react'
import Title from './Title'

interface ContainerProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({
  id,
  title,
  children,
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`w-4/5 center container mx-auto flex flex-col px-4 py-10 ${className}`}
    >
      <div className={'mb-4 w-full flex justify-center'}>
        <Image
          src='/icons/divider.svg'
          alt='divider'
          width={200}
          height={200}
        />
      </div>
      <Title title={title} />
      {children}
    </section>
  )
}

export default Container
