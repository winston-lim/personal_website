import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const themeConfig: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

export const theme = extendTheme({
  config: { ...themeConfig },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      // ...
      900: '#171923',
    },
    // ...
  },
})
