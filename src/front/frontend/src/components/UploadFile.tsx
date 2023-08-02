import React, {useState} from 'react'
import { FileUploader } from "react-drag-drop-files";
// import {MyPdfViewer} from './PdfViewer';

export interface UploadFileProps {
    setPdfSource: (pdfSource: string) => void;
    setPagePngs: (pagePngs: string[]) => void;
}

const pdfImages = require('../utils/pdf-images').default;

const UploadFile = ({setPdfSource, setPagePngs}: UploadFileProps) => {
    const fileTypes = ["PDF"]

    const [fileObj, setFile] = useState<File | null>(null);

    const handleChange = (file: File) => {
        const url = URL.createObjectURL(file);
        console.log(url);
        setFile(file);
        setPdfSource(url);
        setPagePngs(pdfImages);
    }
    return (
        <>
            <FileUploader mt="200" handleChange={handleChange} name='pdfFile' types={fileTypes}/>
        </>
    )
}

export default UploadFile;