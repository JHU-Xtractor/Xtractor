import React, {useState} from 'react'
import { FileUploader } from "react-drag-drop-files";



const UploadFile = () => {
    const fileTypes = ["PDF"]

    const [file, setFile] = useState<File | null>(null);
    const handleChange = (file: File) => {

        setFile(file);
    }
    return (
        <FileUploader handleChange={handleChange} name='pdfFile' types={fileTypes}/>
    )
}

export default UploadFile;