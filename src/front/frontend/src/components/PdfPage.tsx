import React from 'react';
import { Box, Image, IconButton, Text, Flex} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';


interface PdfPageProps {
    src: string;
    zoom: number;
    onDelete: () => void;
    pageNum: number;
}

const PdfPage: React.FC<PdfPageProps> = ({pageNum, src, zoom, onDelete}: PdfPageProps) => {
    return (
        <Box justifyContent='center' alignItems='center' justifyItems='center' borderWidth='5px' borderColor='blue.500' style = {{"width":`${100 * zoom}%`, "height":`${100 * zoom}%`}}>
            <IconButton 
                icon={<CloseIcon />}
                onClick={onDelete}
                position='relative'
                top={"2"}
                left={"2"}
                colorScheme='red'
                aria-label='Delete Page'
                zIndex='1'
                w={'5vh'}
                h='5vh'
                objectFit='fill'
            />
        
            <Image zIndex='0' src={src} alt='Pdf Page Display'  objectFit= 'fill' justifyContent={'center'} w = "100vw"/>

            <Flex
                position='relative'
                backgroundColor='blue.500'
                aria-label='Delete Page'
                zIndex='1'
                w={'5vh'}
                h='5vh'
                alignItems='center'
                justifyContent='center'
                fontSize='xl'
                color='whiteAlpha.900'
            > 
                {pageNum} 
            </Flex>
            
        </Box>

    )

}

export default PdfPage