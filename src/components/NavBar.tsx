import { Box, HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack padding="10px">
        <Image src={logo} boxSize="60px" borderRadius="full" />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
