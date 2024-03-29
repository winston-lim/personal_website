import { Box, Breadcrumb, BreadcrumbItem, Button, Link } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

type NavBarProps = {}

const NavBar = ({}: NavBarProps) => {
  return (
    <Box
      as='header'
      backgroundColor='header'
      height={['60px', '70px']}
      paddingStart='10%'
      display='flex'
      alignItems='center'
      position='sticky'
      top='0'
    >
      <Link style={{ textDecoration: 'none', color: 'white' }} href='/'>
        <Button bgColor='transparent' marginRight='10px' aria-label='home-button'>
          Home
        </Button>
      </Link>
      {/* Add blog href when complete*/}
      <Link style={{ textDecoration: 'none', color: 'white' }}>
        <Button bgColor='transparent' marginRight='10px' aria-label='blog-button'>
          Blog(WIP)
        </Button>
      </Link>
    </Box>
  )
}

export default NavBar
