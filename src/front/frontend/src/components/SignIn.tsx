import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
    Button,
    Center, 
    VStack, 
    Image,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Box,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Input
} from '@chakra-ui/react';

import { BiUser, BiLockAlt } from 'react-icons/bi';

import logo from '../imgs/XtractorLogo.svg';

interface SignInProps {
    setAuth: (authVal: boolean) => void;
    isAuth: boolean;
}

const SignIn = ({setAuth, isAuth}: SignInProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate('/xtractor');
        }
    })

    const [showPassword, hidePassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');

    const showClick = () => {
        hidePassword(!showPassword);
    }

    const emailFormatError = () => {
        if (email === '') {
            setEmailError('Email is required');
            return true;
        } else if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setEmailError('Email format is invalid');
        }
        setEmailError('');
        return false;
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setAuth(true);
        navigate('/xtractor');
    }

    return (
        <Flex 
            flexDirection='column'
            width='100wh'
            height = '100vh'
            backgroundColor='gray.100'>
                <Center h='80vh' w='100vw'>
                    <VStack spacing='5px'>
                        <Image
                            src={logo}
                            alt='Xtractor Logo'
                            boxSize='400px'
                            objectFit='cover'
                            borderRadius='0px'
                        />
                        <Box minW={{ base: "90%", md: "468px" }}>
                            <form>
                                <VStack
                                    spacing={4}
                                    p="1rem"
                                    backgroundColor="whiteAlpha.900"
                                    boxShadow="md"
                                >
                                    <FormControl>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={<BiUser color="black" />}
                                            />
                                            <Input 
                                                type="email" 
                                                placeholder="email address" 
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl>
                                        <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                            children={<BiLockAlt color='black'/>}
                                        />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={showClick}>
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                        </InputGroup>
                                    </FormControl>

                                    <Button
                                        borderRadius={20}
                                        type="submit"
                                        variant="solid"
                                        colorScheme="blue"
                                        width="30%"
                                        onClick={handleSubmit}
                                    >
                                        Login
                                    </Button>
                                </VStack>
                            </form>
                        </Box>
                    </VStack>
                </Center>
        </Flex>
    )
}

export default SignIn;