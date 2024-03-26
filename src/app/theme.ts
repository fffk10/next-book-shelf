import { extendTheme, extendConfig } from '@yamada-ui/react'

export const theme = extendTheme({
  themeSchemes: {
    light: {
      semantics: {
        colors: { primary: 'white.500' },
        colorSchemes: { primary: 'white' },
      },
    },
    dark: {
      semantics: {
        colors: { primary: 'gray.500' },
        colorSchemes: { primary: 'gray' },
      },
    },
  },
})()

export const config = extendConfig({
  initialThemeScheme: 'dark',
})
