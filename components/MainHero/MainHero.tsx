import { Box, Avatar, Heading, Button, Icon, Link } from '@chakra-ui/react'

import React from 'react'
import { FaLinkedin, FaGithub, FaFile, FaArrowRight } from 'react-icons/fa'

type MainHeroProps = {}

const MainHero = ({}: MainHeroProps) => {
  return (
    <Box w='100%' flexGrow={1} padding='16px 16px 0px 16px'>
      <Box
        w={['400px', '500px', '800px']}
        maxW='100%'
        h='100%'
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        margin='auto'
      >
        <Avatar w='200px' h='200px' src='/profile-avatar.jpeg' />
        <Heading color='white' size={['2xl', '4xl']}>
          Winston Lim
        </Heading>
        <Box color='whiteAlpha.800' marginBottom='16px'>
          Year 2 Computer Engineering Undergraduate @ NUS
        </Box>
        <Box color='accent2'>
          <Link
            style={{ textDecoration: 'none' }}
            href='https://www.linkedin.com/in/winston-lim-ch/'
            isExternal
          >
            <Button
              bgColor='transparent'
              marginRight='8px'
              aria-label='linkedin-button'
              leftIcon={<Icon as={FaLinkedin} />}
            >
              LinkedIn
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} href='https://github.com/winston-lim' isExternal>
            <Button
              bgColor='transparent'
              marginRight='10px'
              aria-label='github-button'
              leftIcon={<Icon as={FaGithub} />}
            >
              Github
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} href='/resume.pdf'>
            <Button
              bgColor='transparent'
              aria-label='resume-button'
              leftIcon={<Icon as={FaFile} />}
            >
              Resume
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default MainHero
