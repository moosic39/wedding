import React from 'react'
import { Container } from './ui-components/atom'

const Location = () => {
  return (
    <Container id={'location'} title={'Localisation'}>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='flex w-full h-96'>
          <div className='w-1/2'>Cérémonie</div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26163.629389125283!2d2.267342227325112!3d48.753701896626374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e679d9e5b3097d%3A0x4a73cc10bf3d53ae!2s%C3%89glise%20Notre-Dame-de-l&#39;Assomption!5e0!3m2!1sfr!2sfr!4v1707783623093!5m2!1sfr!2sfr'
            width='50%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            title="Eglise Notre-Dame-de-l'Assomption"
          ></iframe>
        </div>
        <div className='flex w-full h-96'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.966927159619!2d2.1092286999999996!3d48.4571641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5cb7e54515f41%3A0xce4bbe1bc5b4e46!2sGRANGES%20DU%20CHESNAY%20SCI!5e0!3m2!1sfr!2sfr!4v1707783370687!5m2!1sfr!2sfr'
            width='50%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            title='Les granges du chesnay'
          ></iframe>{' '}
          <div className='w-1/2'>Récéption</div>
        </div>
      </div>
    </Container>
  )
}

export default Location
