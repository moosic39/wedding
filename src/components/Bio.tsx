'use client'
import React from 'react'

import Card from './ui-components/atom/Card'
import { Container, Title } from './ui-components/atom'

const Bio = () => {
  const jennProps = {
    src: 'https://tecdn.b-cdn.net/img/new/avatars/5.webp',
    title: 'Jennifer Da Silva',
    desc: 'La Mariée',
  }
  const mickaProps = {
    src: 'https://tecdn.b-cdn.net/img/new/avatars/5.webp',
    title: 'Mickaël Jégat',
    desc: 'Le Marié',
  }
  const aurelProps = {
    src: 'https://tecdn.b-cdn.net/img/new/avatars/5.webp',
    title: 'Aurélie Da Silva',
    desc: 'Sœur de la mariée',
  }
  const ingridProps = {
    src: 'https://tecdn.b-cdn.net/img/new/avatars/5.webp',
    title: 'Ingrid Ramon',
    desc: 'Amie de la mariée',
  }
  const auroreProps = {
    src: 'https://tecdn.b-cdn.net/img/new/avatars/5.webp',
    title: 'Aurore Gaumel',
    desc: 'Amie de la mariée',
  }
  const benoitProps = {
    src: 'https://tecdn.b-cdn.net/img/new/avatars/5.webp',
    title: 'Benoit Boudier',
    desc: 'Frère de ❤ du marié',
  }
  const jeromeProps = {
    src: 'https://tecdn.b-cdn.net/img/new/avatars/5.webp',
    title: 'Jérôme Perrard',
    desc: 'Binôme du marié',
  }
  const alexyProps = {
    src: 'https://tecdn.b-cdn.net/img/new/avatars/5.webp',
    title: 'Alexy Guillon',
    desc: 'Meilleur ami du marié',
  }
  return (
    <Container
      id='bio'
      title='Les Mariées'
      className='container mx-auto flex flex-col items-center gap-4 px-4 py-10'
    >
      <div className='md:flex flex-row w-full justify-between gap-8'>
        <Card {...jennProps} />
        <Card {...mickaProps} />
      </div>
      <Title title={"Les demoiselles d'honneur"} />
      <div className='lg:flex flex-row gap-4 w-full'>
        <Card {...aurelProps} />
        <Card {...ingridProps} />
        <Card {...auroreProps} />
      </div>
      <Title title={"Les garçons d'honneur"} />
      <div className='lg:flex flex-row gap-4 w-full'>
        <Card {...benoitProps} />
        <Card {...alexyProps} />
        <Card {...jeromeProps} />
      </div>
    </Container>
  )
}

export default Bio
