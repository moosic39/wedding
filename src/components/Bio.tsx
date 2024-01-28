import React from 'react'
import Title from './ui-components/atom/Title'

const Bio = () => {
  return (
    <section className='container mx-auto flex flex-col items-center px-4 py-10'>
      <Title title='Bio' />
      <div>Les maries</div>
      <div>Les temoins</div>
    </section>
  )
}

export default Bio
