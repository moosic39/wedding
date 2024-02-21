'use client'
import Link from 'next/link'
import { Container } from './ui-components/atom'
import { Typography } from '@material-tailwind/react'
import Image from 'next/image'

const Location = () => {
  return (
    <Container id={'location'} title={'Localisation'}>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='flex w-full lg:h-1/2'>
          <div className='my-4 flex w-full gap-4 flex-col md:flex-row bg-cyan-800 bg-opacity-60 rounded-3xl shadow-2xl'>
            <div className='md:w-1/2 h-fit'>
              <div className={'flex flex-col text-center p-4'}>
                <Typography
                  variant='h1'
                  placeholder={''}
                  className='w-full lg:h-1/2 font-clicker'
                >
                  Cérémonie
                </Typography>
                <Typography
                  variant='h3'
                  placeholder={''}
                  className='w-full lg:h-1/2 text-bold text-white'
                >
                  15h00
                </Typography>
                <Typography
                  variant='h3'
                  placeholder={''}
                  className='w-full lg:h-1/2 font-clicker'
                >
                  {"Église Notre-Dame-de-l'Assomption"}
                </Typography>
                <Typography
                  variant='h6'
                  placeholder={''}
                  className='w-full lg:h-1/2'
                >
                  {"Rue de l'Église, 91370 Verrières-le-Buisson, France"}
                </Typography>
                {/* <Link href='#' passHref={true}>
                  Voir la carte
                </Link>
                <Link href={'#'}>Add to calendar</Link> */}
              </div>
            </div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26163.629389125283!2d2.267342227325112!3d48.753701896626374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e679d9e5b3097d%3A0x4a73cc10bf3d53ae!2s%C3%89glise%20Notre-Dame-de-l&#39;Assomption!5e0!3m2!1sfr!2sfr!4v1707783623093!5m2!1sfr!2sfr'
              allowFullScreen={true}
              className='rounded-3xl md:h-full md:w-1/2'
              loading='lazy'
              title="Eglise Notre-Dame-de-l'Assomption"
            ></iframe>
          </div>
        </div>
        <div className='flex w-full lg:h-1/2'>
          <div className='my-4 md:flex w-full gap-4'>
            <div className='my-4 flex w-full gap-4 flex-col-reverse md:flex-row bg-cyan-800 bg-opacity-60 rounded-3xl shadow-2xl '>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.966927159619!2d2.1092286999999996!3d48.4571641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5cb7e54515f41%3A0xce4bbe1bc5b4e46!2sGRANGES%20DU%20CHESNAY%20SCI!5e0!3m2!1sfr!2sfr!4v1707783370687!5m2!1sfr!2sfr'
                allowFullScreen={true}
                loading='lazy'
                title='Les granges du chesnay'
                className='rounded-3xl md:h-full md:w-1/2'
              ></iframe>
              <div className='md:w-1/2 h-fit'>
                <div className={'flex flex-col text-center p-4'}>
                  <Typography
                    variant='h1'
                    placeholder={''}
                    className='w-full lg:h-1/2 font-clicker'
                  >
                    Récéption
                  </Typography>
                  <Typography
                    variant='h3'
                    placeholder={''}
                    className='w-full lg:h-1/2 text-bold text-white'
                  >
                    18h00
                  </Typography>
                  <Typography
                    variant='h3'
                    placeholder={''}
                    className='w-full lg:h-1/2 font-clicker'
                  >
                    {'Les granges du Chesnay'}
                  </Typography>
                  <Typography
                    variant='h6'
                    placeholder={''}
                    className='w-full lg:h-1/2'
                  >
                    {'2 Sentier des Mésanges, 91150 Étampes, France'}
                  </Typography>
                  {/* <Link href='#' passHref={true}>
                    Voir la carte
                  </Link>
                  <Link href={'#'}>Add to calendar</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Location
