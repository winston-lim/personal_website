import { Box } from '@chakra-ui/react'

type FooterProps = {}

const Footer = ({}: FooterProps) => {
  return (
    <Box
      color='white'
      h={['60px', '70px']}
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      Winston Lim 2022 ©
    </Box>
  )
}

export default Footer
