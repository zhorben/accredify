import type { Config } from 'tailwindcss'
import resolveConfig from 'tailwindcss/resolveConfig'
// @ts-expect-error (not-improtant for technical assignment)
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig as Config)

interface CustomTheme {
  colors: {
    secondary: string
    text: {
      primary: string
      heading: string
    }
  }
}

// @ts-expect-error (not-improtant for technical assignment)
export const theme = fullConfig.theme as CustomTheme
