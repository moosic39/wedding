export const isProd = process.env.NODE_ENV === 'production'
export const isDev = process.env.NODE_ENV === 'development'

export const isServer = typeof window === 'undefined'
export const isClient = typeof window === 'object'

export const isBrowser = typeof window !== 'undefined'
export const isNode = typeof window === 'undefined'

