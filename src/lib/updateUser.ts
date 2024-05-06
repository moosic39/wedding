'use server'

import prisma from './prisma'

export const updateUserMetadata = async (userId: string, data: FormData) => {
  if (!userId || userId === 'Anonymous') return []

  return await prisma.user
    .update({
      where: { id: userId },
      data: {
        firstName: data.get('firstName') as string,
        lastName: data.get('lastName') as string,
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
