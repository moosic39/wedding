'use server'

import prisma from './prisma'

export const getUserMetadata = async (userId: string) => {
  if (!userId || userId === 'Anonymous') return []

  return await prisma.user
    .findUnique({ where: { id: userId } })
    .catch(async (e: Error) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      console.log('disconnect')
      await prisma.$disconnect()
    })
}
