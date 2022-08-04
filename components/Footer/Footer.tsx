import { Box } from '@chakra-ui/react'

type FooterProps = {}

const Footer = ({}: FooterProps) => {
  return (
    <Box w='100%' h='80px' display='flex' justifyContent='center' alignItems='center'>
      Winston Lim 2022 ©
    </Box>
  )
}

export default Footer
