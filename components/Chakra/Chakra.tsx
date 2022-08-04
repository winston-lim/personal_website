import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'
import theme from 'theme'

type ChakraProps = {
  cookies: any
  children: React.ReactNode
}

export function Chakra({ cookies, children }: ChakraProps) {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}
