export const snakeCase = (str: string) => {
  return str
    .replace(/\s+/g, '_')
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, '')
    .replace(/_{2,}/g, '_')
    .replace(/^_/, '')
    .replace(/_$/, '')
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const capitalizeSnakeCase = (str: string) => {
  return str
    .split(' ')
    .map((word) => capitalize(word))
    .join('_')
}

export const camelCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toLowerCase())
    .replace(/ /g, '')
}
