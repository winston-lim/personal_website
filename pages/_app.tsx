import 'styles/globals.scss'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { Chakra } from 'components/Chakra/Chakra'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
      <Analytics />
    </Chakra>
  )
}
