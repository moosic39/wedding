'use client'
import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Container } from './ui-components/atom'

const Menu = () => {
  return (
    <Container id={'menu'} title={'⚗️ Menu du Laboratoire Mystique ⚗️'}>
      <Typography
        className='text-justify text-xl'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {/* <ul className='list-disc list-inside space-y-2'>
          <li>
            <strong>Cocktails :</strong> Punch et Bellini.
          </li>
          <li>
            <strong>Animations :</strong> Noix de Saint Jacques et Pata Negra
            Bellotta.
          </li>
          <li>
            <strong>Entrée :</strong> Compression de foie gras de canard et
            anguille fumée, compotée d’oignons rouges, chutney de dattes, et
            nougat maison.
          </li>
          <li>
            <strong>Plat :</strong> Filet de bœuf laqué, compoté d’échalotes,
            surprise de pomme au rocamadour, et carottes confites au miel de
            romarin.
          </li>
          <li>
            <strong>Dessert :</strong> Pièce montée avec Entremet Corail du
            Pacifique et Entremet du Paradis, avec une question sur leur
            compatibilité.
          </li>
        </ul> */}
        <div className='bg-gray-900 text-gray-200 p-8 rounded-lg shadow-lg max-w-3xl mx-auto'>
          <h2 className='text-2xl text-purple-400 mt-6 mb-4'>🍸 Cocktails :</h2>
          <ul className='space-y-4'>
            <li className='bg-gray-800 p-4 rounded-md border-l-4 border-yellow-400'>
              <strong>Potion Incandescente (Punch) :</strong> Un cocktail
              explosif aux saveurs fruitées, offrant une couleur flamboyante
              rappelant la lave en fusion.
            </li>
            <li className='bg-gray-800 p-4 rounded-md border-l-4 border-yellow-400'>
              <strong>Nectar d’Aurore (Bellini) :</strong> Une fusion éclatante
              de pêche et de bulles dorées, préparée avec précision pour
              éveiller les sens.
            </li>
          </ul>

          <h2 className='text-2xl text-purple-400 mt-6 mb-4'>
            🧪 Animations Expérimentales :
          </h2>
          <ul className='space-y-4'>
            <li className='bg-gray-800 p-4 rounded-md border-l-4 border-yellow-400'>
              <strong>Orbes de Mer (Noix de Saint Jacques) :</strong> Sphères
              nacrées flambées sous vos yeux, une expérience sensorielle digne
              des grands laboratoires aquatiques.
            </li>
            <li className='bg-gray-800 p-4 rounded-md border-l-4 border-yellow-400'>
              <strong>Trésor Iberico (Pata Negra Bellotta) :</strong> Délicates
              tranches de jambon affinées, présentées sur un plateau moléculaire
              de brume froide.
            </li>
          </ul>

          <h2 className='text-2xl text-purple-400 mt-6 mb-4'>🔬 Entrée :</h2>
          <ul className='space-y-4'>
            <li className='bg-gray-800 p-4 rounded-md border-l-4 border-yellow-400'>
              <strong>
                Compression Cryptée de Foie Gras & Anguille Fumée :
              </strong>{' '}
              Un assemblage moléculaire de foie gras et anguille, enrichi d’une
              compotée d’oignons rouges, d&apos;un chutney de dattes, et de
              nougat maison, scellé sous vide pour une expérience gustative
              secrète.
            </li>
          </ul>

          <h2 className='text-2xl text-purple-400 mt-6 mb-4'>
            🧬 Plat Principal :
          </h2>
          <ul className='space-y-4'>
            <li className='bg-gray-800 p-4 rounded-md border-l-4 border-yellow-400'>
              <strong>Filet de Bœuf Quantum Laqué :</strong> Un chef-d’œuvre de
              bœuf laqué aux équations parfaites, accompagné d’échalotes
              compotées et d’une surprise sphérique de pomme au rocamadour,
              carottes confites au miel de romarin, le tout infusé dans une
              atmosphère de vapeur mystérieuse.
            </li>
          </ul>

          <h2 className='text-2xl text-purple-400 mt-6 mb-4'>🍰 Dessert :</h2>
          <ul className='space-y-4'>
            <li className='bg-gray-800 p-4 rounded-md border-l-4 border-yellow-400'>
              <strong>
                Montée Mécanique avec Entremet Corail du Pacifique & Entremet du
                Paradis :
              </strong>
              Une construction complexe de délices sucrés, unissant les saveurs
              aquatiques du Corail du Pacifique et les douceurs célestes de
              l&apos;Entremet du Paradis, assemblés pour défier les lois de la
              compatibilité.
            </li>
          </ul>
        </div>
      </Typography>
    </Container>
  )
}

export default Menu
