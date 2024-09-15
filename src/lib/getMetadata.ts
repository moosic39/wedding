'use server'

import prisma from './prisma'

export const getUserMetadata = async (userId: string) => {
  if (!userId || userId === 'Anonymous') return []

  return await prisma.photo
    .findMany({
      where: {
        userId,
      },
    })
    .catch(async (e: Error) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      console.log('disconnect')
      await prisma.$disconnect()
    })
}

export const getAllMetadata = async () => {
  return await prisma.photo
    .findMany()
    .catch(async (e: Error) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      console.log('disconnect')
      await prisma.$disconnect()
    })
}
