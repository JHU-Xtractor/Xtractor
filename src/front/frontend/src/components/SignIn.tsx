import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { 
    Button,
    Center, 
    VStack, 
    Image,
    FormControl,
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
        setUser: (user: object | null) => void;
        user: object | null;
        setIsHuman: (isHuman: boolean) => void;
}

const SignIn = ({user, setUser, setIsHuman}: SignInProps) => {
    const navigate = useNavigate();

    const [showPassword, hidePassword] = useState(false); //show/hide password state
    const [email, setEmail] = useState(''); //state to track email input
    const [password, setPassword] = useState(''); //state to track password input

    //const [emailError, setEmailError] = useState('');
    //const [passwordError, setPasswordError] = useState(false);

    const showClick = () => {
        hidePassword(!showPassword);
    }

    //TODO: Implement working email and password error checking and display of the errors

    // const emailFormatError = () => {

    //     const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //     if (email === '') {
    //         setEmailError('Email is required');
    //         return true;
    //     } 
    //     if (regex.test(email) === false) {
    //         setEmailError('Email format is invalid');
    //         return true;
    //     }
    //     setEmailError('');
    //     return false;
    // }

    // const passwordFormatError = () => {
    //     if (password === '') {
    //         setPasswordError(true);
    //         return true;
    //     }
    // }

    //TODO: Implement auth system with backend
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // const activeEmailError = emailFormatError();
        // const activePasswordError = passwordFormatError();
        // if (activeEmailError || activePasswordError) {
        //     return;
        // }
        // setEmailError('');
        // setPasswordError(false);

        setUser( {id: 1, email: email, password: password}) //set the user to be a user with id and specified email and password 
        setIsHuman(true); 
        navigate('/xtractor');
    }

    //TODO: Seperate necessary code to a "Registration" component, part of creating an auth system
    //TODO: Add recaptcha to sign-in page
    return (

        <>

        {user ? <Navigate to='/xtractor' replace={true}/> : null}

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
                            boxSize='500px'
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

        </>
    )
}

export default SignIn;