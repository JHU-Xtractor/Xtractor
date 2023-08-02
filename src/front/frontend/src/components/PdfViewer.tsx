import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import {useState} from 'react';
import PdfPage from './PdfPage';


interface PdfViewerProps {
    pagePngs: string[];
    setPdfPngs: (pagePngs: string[]) => void;
}

const PdfViewer = ({pagePngs, setPdfPngs}: PdfViewerProps) => {

    const [zoom, setZoom] = useState(1);

    const deletePage = (index: number) => {
        const newPagePngs = pagePngs.filter((pagePng, i) => i !== index);
        setPdfPngs(newPagePngs);
    }

    const decreaseZoom = () => {
        if (zoom > 0.1) {
            setZoom(zoom - 0.1);
        }
    }

    const increaseZoom = () => {
        if (zoom < 2.0) {
            setZoom(zoom + 0.1);
        }
    }

    return (
        <Box overflow='auto' transform={`scale(${zoom})`}>
            <VStack justifyContent='center' alignItems='center'  >
                {pagePngs.map((pagePng, index) => (
                
                        <PdfPage src={pagePng} zoom={1} onDelete={() => deletePage(index)} />
                  
                ) )}
            </VStack>
            <Flex justifyContent='flex-end' p={2}>
                <Button color='blue' onClick={decreaseZoom}> - </Button>
                <Button color='blue' onClick={increaseZoom}> + </Button>
            </Flex>
        </Box>
    )
}

export default PdfViewer;