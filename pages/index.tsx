import { Avatar, Box, Button, Heading, Icon } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from 'styles/Home.module.scss'
import Footer from '../components/Footer'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFile } from 'react-icons/ai'

const Home: NextPage = () => {
  return (
    <Box w='100%' h='100vh' display='flex' flexDir='column'>
      <Head>
        <title>Winston Lim</title>
        <meta name='description' content="Winston's personal website" />
        <link rel='icon' href='/favicon.jpeg' />
      </Head>
      <Box w='100%' flexGrow={1} padding='16px 16px 0px 16px'>
        <Box
          w={['400px', '500px', '800px']}
          h='100%'
          display='flex'
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          margin='auto'
        >
          <Avatar />
          <Heading size={['xl', '2xl', '4xl']}>Winston Lim</Heading>
          <Box marginBottom='16px'>Year 2 Computer Engineering Undergraduate @ NUS</Box>
          <Box>
            <Button
              bgColor='transparent'
              marginRight='8px'
              aria-label='linkedin-button'
              leftIcon={<Icon backgroundClip='none' as={AiOutlineLinkedin} />}
            >
              LinkedIn
            </Button>
            <Button
              bgColor='transparent'
              marginRight='10px'
              aria-label='github-button'
              leftIcon={<Icon as={AiOutlineGithub} />}
            >
              Github
            </Button>
            <Button
              bgColor='transparent'
              aria-label='resume-button'
              leftIcon={<Icon sx={{ bgColor: 'transparent' }} as={AiOutlineFile} />}
            >
              Resume
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
