import type { Config } from 'tailwindcss'
const withMT = require('@material-tailwind/react/utils/withMT')

const config: Config = withMT({
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        clicker: ['var(--font-clicker)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
})

export default config
