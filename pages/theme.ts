import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  themeConfig,
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
