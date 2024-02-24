'use client'
import React from 'react'

import Card from './ui-components/atom/ProfileCard'
import { Container, Title } from './ui-components/atom'

const Bio = () => {
  const jennProps = {
    src: '/image/Jennifer.webp',
    title: 'Jennifer Da Silva',
    desc: 'La Mariée',
  }
  const mickaProps = {
    src: '/image/Mickael.webp',
    title: 'Mickaël Jégat',
    desc: 'Le Marié',
  }
  const aurelProps = {
    src: '/image/Aurelie.webp',
    title: 'Aurélie Da Silva',
    desc: 'Sœur de la mariée',
  }
  const ingridProps = {
    src: '/image/Ingrid.webp',
    title: 'Ingrid Ramon',
    desc: 'Meilleure amie de la mariée',
  }
  const auroreProps = {
    src: '/image/Aurore.webp',
    title: 'Aurore Gomel',
    desc: 'Amie de la mariée',
  }
  const benoitProps = {
    src: '/image/Benoit.webp',
    title: 'Benoit Boudier',
    desc: 'Frère de ❤ du marié',
  }
  const jeromeProps = {
    src: '/image/Jerome.webp',
    title: 'Jérôme Perrard',
    desc: 'Binôme du marié',
  }
  const alexyProps = {
    src: '/image/Alexy.webp',
    title: 'Alexy Guillon',
    desc: 'Meilleur ami du marié',
  }
  return (
    <Container id='bio' title='Les Mariés' className='gap-4'>
      <div className='md:flex flex-row w-full justify-between gap-8 mb-12'>
        <Card {...jennProps} />
        <Card {...mickaProps} />
      </div>
      <Title title={"Les demoiselles d'honneur"} />
      <div className='lg:flex flex-row gap-4 w-full mb-4'>
        <Card {...aurelProps} />
        <Card {...ingridProps} />
        <Card {...auroreProps} />
      </div>
      <Title title={"Les garçons d'honneur"} />
      <div className='lg:flex flex-row gap-4 w-full'>
        <Card {...benoitProps} />
        <Card {...jeromeProps} />
        <Card {...alexyProps} />
      </div>
    </Container>
  )
}

export default Bio
