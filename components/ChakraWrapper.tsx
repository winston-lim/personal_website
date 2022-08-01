import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'
import { theme } from '../pages/theme'
/*
    Wrapper to be used in _app that is used to prevent 'flashing' - where color modes change
    due to a difference between user's default color mode and theme.initialColorMode
*/
export function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}
