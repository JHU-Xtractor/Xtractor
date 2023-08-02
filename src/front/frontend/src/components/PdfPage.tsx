import React from 'react';
import { Box, Image, IconButton, Flex} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';


interface PdfPageProps {
    src: string;
    zoom: number;
    onDelete: () => void;
}

const PdfPage: React.FC<PdfPageProps> = ({src, zoom, onDelete}: PdfPageProps) => {
    return (
        <Box borderWidth='2px' borderColor='blue.500' position='relative' width='100%' height='100%'  transform={`scale(${zoom})`}>
            <Box width='100%' height='100%' transformOrigin='top left' > 
                <Image src={src} alt='Pdf Page Display' style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </Box>

            <IconButton 
                icon={<CloseIcon />}
                onClick={onDelete}
                position='absolute'
                top={1}
                left={1}
                colorScheme='red'
                aria-label='Delete Page'
            />
        </Box>
    )

}

export default PdfPage