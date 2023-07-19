import '../App.css';
import { useNavigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';

import UploadFile from './UploadFile';
import Footer from './Footer';
import { Flex } from '@chakra-ui/react';


interface ApplicationProps {
    setUser: (user: object | null) => void;
    user: object | null;
}

const ApplicationLayout = ({user, setUser}: ApplicationProps) => {

    const handleSignout = () => {
        setUser(null);
    }


    return (
        //TODO: Footer, UploadFile that stays within bounds of the navbar and footer
        // eslint-disable-next-line react/jsx-no-undef
        <Flex direction='column' minH='100vh'> 
            <Navbar handleSignOut={handleSignout} user={user}/>
            <Flex 
                as="main"
                flex='1'
                align='center'
                justifyContent='center'
                direction='column'
            >
                <UploadFile />
            </Flex>
            <Footer />
        </Flex>
    )
}

export default ApplicationLayout;