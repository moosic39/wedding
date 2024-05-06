'use server'

import prisma from './prisma'

export const getUserMetadata = async (userId: string) => {
  if (!userId || userId === 'Anonymous') return []
  console.log(userId)

  const data = await prisma.user
    .findMany({
      where: {
        id: userId,
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
  console.log(data)
  return data
}
