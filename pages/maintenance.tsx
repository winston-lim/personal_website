import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'

type Props = {}

const MaintenancePage = ({}: Props) => {
  return (
    <Box w='100%' h='100vh' display='flex' flexDir='column'>
      <Box w='100%' flexGrow={1} display='flex' justifyContent='center' alignItems='center'>
        Currently under maintenance
      </Box>
      <Footer />
    </Box>
  )
}

export default MaintenancePage
