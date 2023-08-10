import { Box, Button, Center, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import {useState} from 'react';
import PdfPage from './PdfPage';


interface PdfViewerProps {
    pagePngs: string[];
    setPdfPngs: (pagePngs: string[]) => void;
    zoom: number;
}

const PdfViewer = ({pagePngs, setPdfPngs, zoom}: PdfViewerProps) => {


    const deletePage = (index: number) => {
        const newPagePngs = pagePngs.filter((pagePng, i) => i !== index);
        setPdfPngs(newPagePngs);
    }

    return (
        <Center>
            <VStack justifyContent='center' mt={`${200 * (0.7 + Math.abs(0.7 - zoom))}`} mb={`${200 * (0.7 + Math.abs(0.7 - zoom))}`} style = {{"width":`${100 * zoom}%`, "height":`${100 * zoom}%`}} alignItems='center' justifyItems='center'>
                {pagePngs.map((pagePng, index) => (

                        <PdfPage key={index} pageNum={index + 1} src={pagePng} zoom={zoom} onDelete={() => deletePage(index)} />

                ) )}
            </VStack>
        </Center>
    )
}

export default PdfViewer;