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
    Input,
    Select,
    useToast
} from '@chakra-ui/react';

import { BiUser, BiLockAlt, BiQuestionMark } from 'react-icons/bi';

import logo from '../imgs/XtractorLogo.svg';


interface AuthLayoutProps {
        setUser: (user: object | null) => void;
        user: object | null;
        setIsHuman: (isHuman: boolean) => void;
        signIn : boolean;
}

const AuthLayout = ({user, setUser, setIsHuman, signIn}: AuthLayoutProps) => {
    const navigate = useNavigate();

    const [showPassword, hidePassword] = useState(false); //show/hide password state
    const [email, setEmail] = useState(''); //state to track email input
    const [password, setPassword] = useState(''); //state to track password input
    const [secQuestion, setSecQuestion] = useState(''); //state to track security question 
    const [secAnswer, setSecAnswer] = useState(''); //state to track security question answer

    const toast = useToast();

    const showClick = () => {
        hidePassword(!showPassword);
    }

    //TODO: Implement working email and password error checking and display of the errors

    const emailFormatError = () => {

        const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            toast({
                title: 'Email Empty',
                description: "Please enter an email address",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return true;
        } 
        if (regex.test(email) === false) {
            toast({
                title: 'Email Invalid',
                description: "Please enter a valid email address",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return true;
        }
        return false;
    }

    const passwordFormatError = () => {
        if (password === '') {
            toast({
                title: 'No Password',
                description: "Please enter a password",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return true;
        }
        if (password.length < 8) {
            toast({
                title: 'Password Too Short',
                description: "Please enter a password with at least 8 characters",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return true;
        }
        if (password.length > 20) {
            toast({
                title: 'Password Too Long',
                description: "Please enter a password with at most 20 characters",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return true;
        }
        return false;
    }

    const secQuestionFormatError = () => {
        if (secQuestion === '') {
            toast({
                title: 'No Security Question',
                description: "Please select a security question",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return true;
        }
    }

    const secAnswerFormatError = () => {
        if (secAnswer === '') {
            toast({
                title: 'No Security Answer',
                description: "Please enter a security answer",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return true;
        }
        if (secAnswer === secQuestion) {
            toast({
                title: 'Security Question and Answer Match',
                description: "Please enter a security answer that is not the same as the security question",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            return true;
        }
    }

    //TODO: Implement auth system with backend
    const handleSubmitLogin = (e: any) => {
        e.preventDefault();
        const activeEmailError = emailFormatError();
        const activePasswordError = passwordFormatError();
        if (activeEmailError || activePasswordError) {
            return;
        }

        setUser( {id: 1, email: email, password: password}) //set the user to be a user with id and specified email and password 
        setIsHuman(true); 
        toast({
            title: 'Login Successful',
            description: "You have successfully logged in",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        navigate('/xtractor');
    }

    const handleSubmitRegister = (e: any) => {
        e.preventDefault();
        const activeEmailError = emailFormatError();
        const activePasswordError = passwordFormatError();
        const activeSecQuestionError = secQuestionFormatError();
        const activeSecAnswerError = secAnswerFormatError();
        if (activeEmailError || activePasswordError || activeSecQuestionError || activeSecAnswerError) {
            return;
        }
 
        const securityStr = secQuestion + secAnswer;

        setUser( {id: 1, email: email, password: password}) //set the user to be a user with id and specified email and password 
        setIsHuman(true); 
        toast({
            title: 'Registration Successful',
            description: "You have successfully registered",
            status: 'success',
            duration: 9000,
            isClosable: true,
            })
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

                                    {!signIn && <FormControl>
                                        <InputGroup>
                                            <Select color='gray.500' placeholder='Security Question' onChange={(e) => setSecQuestion(e.target.value)}>
                                                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                                                <option value="What is your favorite color?">What is your favorite color?</option>
                                                <option value="What is your grandfather's birthday?">What is your grandfather's birthday?</option>
                                                <option value="What is the name of your favorite childhood pet?">What is the name of your favorite childhood pet?</option>
                                            </Select>
                                        </InputGroup>
                                    </FormControl>}

                                    {!signIn && <FormControl>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={<BiQuestionMark color="black" />}
                                            />
                                            <Input 
                                                type="text" 
                                                placeholder="Security Answer" 
                                                onChange={(e) => setSecAnswer(e.target.value)}
                                            />
                                        </InputGroup>
                                    </FormControl>}
                    
                                    <Button
                                        borderRadius={20}
                                        type="submit"
                                        variant="solid"
                                        colorScheme="blue"
                                        width="30%"
                                        onClick={signIn ? handleSubmitLogin : handleSubmitRegister}
                                    >
                                        {signIn ? 'Login' : 'Register'}
                                    </Button>

                                    <Button onClick={() => signIn ? navigate('/register') : navigate('/')}>
                                        {signIn ? 'Register new account' : 'Login to existing acccount'}
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

export default AuthLayout;