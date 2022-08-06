import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    transparent: 'transparent',
    primary: '#92DCE5',
    accent: '#FCDDBC',
    background: '#494947',
  },
})

export default theme
