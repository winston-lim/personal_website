import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

type LayoutProps = {
  children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box color='primary' bgColor='background' w='100%' h='100vh' display='flex' flexDir='column'>
      <Head>
        <title>Winston Lim</title>
        <meta name='description' content="Winston's personal website" />
        <link rel='icon' href='/favicon.jpeg' />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout
