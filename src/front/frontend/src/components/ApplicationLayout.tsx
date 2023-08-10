import '../App.css';
import { useNavigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';

import UploadFile, {UploadFileProps} from './UploadFile';
import Footer from './Footer';
import PdfViewer from './PdfViewer';
import { Container, Flex } from '@chakra-ui/react';
import { Page } from 'react-pdf';


interface ApplicationProps {
    setUser: (user: object | null) => void;
    user: object | null;
}

const ApplicationLayout = ({user, setUser}: ApplicationProps) => {

    const [pagePngs, setPagePngs] = useState<string[]>([]); //state to track page pngs
    const [pdfSource, setPdfSource] = useState<string>("null"); //state to track pdf source
    const [zoom, setZoom] = useState(0.45);

    const decreaseZoom = () => {
        if (zoom > 0.3) {
            setZoom(zoom - 0.05);
        }
    }

    const increaseZoom = () => {
        if (zoom < 1) {
            setZoom(zoom + 0.05);
        }
    }

    const props = {setPdfSource, setPagePngs, decreaseZoom, increaseZoom} as UploadFileProps;


    const handleSignout = () => {
        setUser(null);
    }

    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Flex direction='column' minH='100vh'> 
        <Flex as="header" position="fixed" w="100%" zIndex={15}>
            <Navbar handleSignOut={handleSignout} user={user}/>
        </Flex>
                {pagePngs.length === 0 ? 
                        <Flex
                            mt={30}
                            style= {{'width': "100vw"}}
                            flex='1'
                            alignItems='center'
                            justifyContent='center'
                            direction='column'
                            overflow={'auto'}> 
                            <UploadFile {...props}/> 
                        </Flex>
                        : 
                    <PdfViewer pagePngs={pagePngs} setPdfPngs={setPagePngs} zoom={zoom}/>
                }
        <Flex as="footer" position="fixed" w="100%" bottom="0" zIndex={15}>
            <Footer decreaseZoom={decreaseZoom} increaseZoom={increaseZoom} renderZoom={pagePngs.length !== 0}/>
        </Flex>
        </Flex>
    )
}

export default ApplicationLayout;