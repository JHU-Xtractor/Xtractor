import { Box, VStack, Heading, HStack, Button } from '@chakra-ui/react';
import React from 'react'

const Footer = () => {
    return (
    <Box as="footer" p="4" bg="gray.100" textAlign="center" h='100px'>
        <VStack h='100%' align='center' justify='center'>
            <HStack> 
                <Button color='blue'> Add File </Button>
                <Button color='blue'> Extract </Button>
                <Button color='blue'> Export </Button>
            </HStack>
            <Heading as='h4' size='xs'> {new Date().getFullYear()} | Xtractor @ Johns Hopkins University </Heading>
        </VStack>
    </Box>
    )
}

export default Footer;