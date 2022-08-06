import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'

type Props = {}

const MaintenancePage = ({}: Props) => {
  return (
    <Box w='100%' h='100vh' display='flex' flexDir='column'>
      <Box w='100%' flexGrow={1} display='flex' justifyContent='center' alignItems='center'>
        <Heading size={['lg', 'xl']}>Currently under maintenance</Heading>
      </Box>
      <Footer />
    </Box>
  )
}

export default MaintenancePage
