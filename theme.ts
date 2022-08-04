import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// const themeConfig: ThemeConfig = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// }

// export const theme = extendTheme({
//   config: { themeConfig },
//   colors: {
//     transparent: 'transparent',
//     black: '#000',
//     white: '#fff',
//     gray: {
//       50: '#f7fafc',
//       // ...
//       900: '#171923',
//     },
//     // ...
//   },
// })

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme
