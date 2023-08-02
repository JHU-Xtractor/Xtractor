import { Box, VStack, Heading, HStack, Button, Flex } from '@chakra-ui/react';
import React from 'react'

const Footer = () => {
    return (
    <Flex as="header"
        bg="gray.100"
        p="10px"
        height="12vh"
        width="100%"
        alignItems="center"
        justifyContent='center'
        top="0"
        left="0"
        justify-content="space-between"
        mx='auto'
        zIndex="9999">
            <Box as="footer" p="4" textAlign="center" h='100px'>
                <VStack h='100%' w='100%' align='center' justify='center'>
                    <HStack> 
                        <Button color='blue'> Add File </Button>
                        <Button color='blue'> Extract </Button>
                        <Button color='blue'> Export </Button>
                    </HStack>
                    <Heading as='h4' size='xs'> {new Date().getFullYear()} | Xtractor @ Johns Hopkins University </Heading>
                </VStack>
            </Box>
    </Flex>
    )
}

export default Footer;