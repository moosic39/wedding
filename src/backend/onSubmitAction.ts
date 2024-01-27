'use server'

const serverAction = async (formData: FormData) => {
  console.log(formData)
  const result = { message: 'onSumbitAction', status: 'success' }
  return result
}

export default serverAction
