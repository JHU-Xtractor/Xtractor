import '../App.css';
import { useNavigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';

import UploadFile, {UploadFileProps} from './UploadFile';
import Footer from './Footer';
import PdfViewer from './PdfViewer';
import { Container, Flex } from '@chakra-ui/react';


interface ApplicationProps {
    setUser: (user: object | null) => void;
    user: object | null;
}

const ApplicationLayout = ({user, setUser}: ApplicationProps) => {

    const [pagePngs, setPagePngs] = useState<string[]>([]); //state to track page pngs
    const [pdfSource, setPdfSource] = useState<string>("null"); //state to track pdf source
    const props = {setPdfSource, setPagePngs} as UploadFileProps;

    const handleSignout = () => {
        setUser(null);
    }

    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Flex direction='column' minH='100vh'> 
        <Flex as="header" position="fixed" w="100%" zIndex={15}>
            <Navbar handleSignOut={handleSignout} user={user}/>
        </Flex>
            <Container as="main" mt="120" zIndex={5} mb="120">
                <Flex 
                    flex='1'
                    align='center'
                    justifyContent='center'
                    direction='column'
                    overflow={'auto'}
                >
                    {pagePngs.length === 0 ? <Flex mt={300}> <UploadFile {...props}/> </Flex>: <PdfViewer pagePngs={pagePngs} setPdfPngs={setPagePngs}/>}
                </Flex>
            </Container>
            <Flex as="footer" position="fixed" w="100%" bottom="0" zIndex={15}>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default ApplicationLayout;