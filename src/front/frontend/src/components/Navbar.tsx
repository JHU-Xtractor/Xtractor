import { Button, Flex, HStack, Spacer, Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../imgs/XtractorLogo.svg';

const Navbar = ({handleSignOut, user}: any) => {

    const navigate = useNavigate();

    return (
            <Flex as="header"
            bg="gray.100"
            p="10px"
            height="12vh"
            width="100%"
            alignItems="center"
            top="0"
            left="0"
            justify-content="space-between"
            mx='auto'
            zIndex="9999">
                <Spacer flex='0.1'/>
                <HStack height='100%'> 
                    <Image src={logo} alt="Xtractor Logo" boxSize="150px" />
                </HStack>
                <Spacer flex='0.8'/>
                <HStack spacing='5px'>
                    {user !== null && <Button color='blue'> Profile </Button>}
                    {user !== null ? <Button color='blue' onClick={handleSignOut}> Sign Out </Button> : <Button color='blue' onClick={() => navigate('/')}> Sign In </Button>}
                </HStack>
            </Flex>
    )
}

export default Navbar;