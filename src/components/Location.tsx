'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './ui-components/atom'
import { Button, Typography } from '@material-tailwind/react'

const Location = () => {
  const [isChurchHidden, setIsChurchHidden] = useState(false)
  const [isBanquetHidden, setIsBanquetHidden] = useState(false)
  return (
    <Container
      id={'location'}
      title={'Localisation'}
      className='w-full lg:w-4/5'
    >
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='flex w-full lg:h-1/2'>
          <div className='my-4 flex w-full gap-4 flex-col md:flex-row bg-cyan-700 bg-opacity-50 rounded-3xl shadow-2xl'>
            <div className='md:w-1/2 h-fit'>
              <div
                className={
                  'flex flex-col text-center p-4 text-blue-gray-700 md:gap-4'
                }
              >
                <Typography
                  variant='h1'
                  placeholder={''}
                  className='w-full lg:h-1/2 font-clicker text-deep-orange-900 pb-4'
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Cérémonie
                </Typography>
                <Typography
                  variant='h3'
                  placeholder={''}
                  className='lg:hidden w-full lg:h-1/2 text-bold text-white italic'
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  21.09.2024
                </Typography>
                <Typography
                  variant='h3'
                  placeholder={''}
                  className='hidden lg:inline lg:h-1/2 text-bold text-white italic'
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  21 Septembre 2024
                </Typography>
                <Typography
                  variant='h3'
                  placeholder={''}
                  className='w-full lg:h-1/2 text-bold text-white'
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  15h00
                </Typography>
                <Typography
                  variant='h3'
                  placeholder={''}
                  className='w-full lg:h-1/2 font-clicker'
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {"Église Notre-Dame-de-l'Assomption"}
                </Typography>
                <Typography
                  variant='h6'
                  placeholder={''}
                  className='w-full lg:h-1/2 italic'
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {"Rue de l'Église, 91370 Verrières-le-Buisson, France"}
                </Typography>
                <Button
                  placeholder={''}
                  variant='text'
                  className='text-blue-gray-700 hover:bg-transparent active:bg-transparent md:p-0'
                  onClick={() => {
                    setIsChurchHidden(!isChurchHidden)
                  }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Voir la carte
                </Button>
                <Link href={'/iCal_Church.ics'}>Ajouter au calendrier</Link>
              </div>
            </div>
            <div className='rounded-3xl md:h-full md:w-1/2 lg:h-full '>
              {isChurchHidden ? (
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26163.629389125283!2d2.267342227325112!3d48.753701896626374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e679d9e5b3097d%3A0x4a73cc10bf3d53ae!2s%C3%89glise%20Notre-Dame-de-l&#39;Assomption!5e0!3m2!1sfr!2sfr!4v1707783623093!5m2!1sfr!2sfr'
                  allowFullScreen={true}
                  className=' rounded-3xl w-full h-full object-fit'
                  loading='lazy'
                  title="Eglise Notre-Dame-de-l'Assomption"
                ></iframe>
              ) : (
                <Image
                  src={'/image/Eglise.webp'}
                  width={600}
                  height={400}
                  alt="Eglise Notre-Dame-de-l'Assomption"
                  className='relative rounded-3xl w-full h-full object-cover object-right-right'
                ></Image>
              )}
            </div>
          </div>
        </div>
        <div className='flex w-full lg:h-1/2'>
          <div className='my-4 md:flex w-full gap-4'>
            <div className='my-4 flex w-full gap-4 flex-col-reverse md:flex-row bg-cyan-700 bg-opacity-50 rounded-3xl shadow-2xl '>
              <div className='rounded-3xl md:h-full md:w-1/2 lg:h-full '>
                {isBanquetHidden ? (
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.966927159619!2d2.1092286999999996!3d48.4571641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5cb7e54515f41%3A0xce4bbe1bc5b4e46!2sGRANGES%20DU%20CHESNAY%20SCI!5e0!3m2!1sfr!2sfr!4v1707783370687!5m2!1sfr!2sfr'
                    allowFullScreen={true}
                    loading='lazy'
                    title='Les granges du chesnay'
                    className='rounded-3xl w-full h-full object-fit'
                  ></iframe>
                ) : (
                  <Image
                    src={'/image/Les_Granges.webp'}
                    width={600}
                    height={400}
                    alt="Eglise Notre-Dame-de-l'Assomption"
                    className='relative rounded-3xl w-full h-full object-cover object-right-right'
                  ></Image>
                )}
              </div>
              <div className='md:w-1/2 h-fit'>
                <div
                  className={
                    'flex flex-col text-center p-4 text-blue-gray-700 md:gap-4'
                  }
                >
                  <Typography
                    variant='h1'
                    placeholder={''}
                    className='w-full lg:h-1/2 font-clicker text-deep-orange-900 pb-4'
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Récéption
                  </Typography>
                  <Typography
                    variant='h3'
                    placeholder={''}
                    className='lg:hidden w-full lg:h-1/2 text-bold text-white italic'
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    21.09.2024
                  </Typography>
                  <Typography
                    variant='h3'
                    placeholder={''}
                    className='hidden lg:inline lg:h-1/2 text-bold text-white italic'
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    21 Septembre 2024
                  </Typography>
                  <Typography
                    variant='h3'
                    placeholder={''}
                    className='w-full lg:h-1/2 text-bold text-white'
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    18h00
                  </Typography>
                  <Typography
                    variant='h3'
                    placeholder={''}
                    className='w-full lg:h-1/2 font-clicker'
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {'Les granges du Chesnay'}
                  </Typography>
                  <Typography
                    variant='h6'
                    placeholder={''}
                    className='w-full lg:h-1/2 italic'
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {'2 Sentier des Mésanges, 91150 Étampes, France'}
                  </Typography>
                  <Button
                    placeholder={''}
                    variant='text'
                    className='text-blue-gray-700 hover:bg-transparent active:bg-transparent md:p-0 '
                    onClick={() => {
                      setIsBanquetHidden(!isBanquetHidden)
                    }}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Voir la carte
                  </Button>
                  <Link href={'/iCal_Banquet.ics'}>Ajouter au calendrier</Link>
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
