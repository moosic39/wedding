'use server'

import prisma from './prisma'

export const getUserMetadata = async (userId: string) => {
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
