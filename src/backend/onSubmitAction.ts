'use server'
import prisma from '@/lib/prisma'

import { Answer } from '@prisma/client'

const serverAction = async (formData: FormData) => {
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const email = formData.get('email')
  const presence = formData.get('presence')
  const plusOneFirstName = formData.get('plusOneFirstName')
  const plusOneLastName = formData.get('plusOneLastName')
  const dietaryRestriction = formData.get('dietaryRestriction')
  const message = formData.get('message')

  const data = {
    firstName,
    lastName,
    email,
    presence,
    plusOneFirstName,
    plusOneLastName,
    dietaryRestriction,
    message,
    dateTime: new Date().toLocaleString(),
  } as unknown as Answer

  console.log(data)
  console.log('connect')

  const existingMail = await prisma.answer.findUnique({
    where: {
      email: email as string,
    },
  })

  if (existingMail?.email === email) {
    console.log('disconnect')
    await prisma.$disconnect()
    return { message: 'Mail déjà existant', status: 'error' }
  } else {
    await prisma.answer
      .create({ data })
      .catch(async (e: Error) => {
        console.error(e)
        process.exit(1)
      })
      .finally(async () => {
        console.log('disconnect')
        await prisma.$disconnect()
      })
    return { message: 'Merci de votre réponse', status: 'success' }
  }
}

export default serverAction
