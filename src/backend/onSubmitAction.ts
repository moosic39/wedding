'use server'

import { revalidatePath } from 'next/cache'

const serverAction = async (formData: FormData) => {
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')

  console.log(firstName, lastName)
  const result = { message: 'onSumbitAction', status: 'success' }
  revalidatePath('/')
}

export default serverAction
