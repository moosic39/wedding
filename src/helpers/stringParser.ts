export const snakeCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toLowerCase())
    .replace(/ /g, '_')
}

export const camelCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toLowerCase())
    .replace(/ /g, '')
}
