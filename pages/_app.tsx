import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import { Chakra } from './Chakra'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  )
}
