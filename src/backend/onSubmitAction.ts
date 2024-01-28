'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const serverAction = async (formData: FormData) => {
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const email = formData.get('email')
  const presence = formData.get('presence')
  const plusOne = formData.get('plusOne')
  const plusOneFirstName = formData.get('plusOneFirstName')
  const plusOneLastName = formData.get('plusOneLastName')
  const dietaryRestriction = formData.get('dietaryRestriction')
  const message = formData.get('message')

  const data = {
    firstName,
    lastName,
    email,
    presence,
    plusOne,
    plusOneFirstName,
    plusOneLastName,
    dietaryRestriction,
    message,
  } as Record<string, string>

  console.log(data)
  const prisma = new PrismaClient()
  console.log('connect')
  await prisma.user
    .create({ data })
    .catch(async (e: Error) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      console.log('disconnect')
      await prisma.$disconnect()
    })

  revalidatePath('/')
}

export default serverAction
