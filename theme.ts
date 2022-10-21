import { extendTheme } from '@chakra-ui/react'

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
    accent: '#c8c8c8',
    accent2: '#bbb891',
    accent3: '#dc965a',
    header: '#20232a',
    background: '#282c34',
  },
})

export default theme
