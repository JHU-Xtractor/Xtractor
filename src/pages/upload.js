import '../App.css';
import React, {
    useState,
    useRef
} from 'react';
import {
    NavBarSide,
    ProcessNewFileButton,
    UploadFileImage,
    ValidPdf,
    FileFailed,
    FileUploaded,
    UploadInProgress

} from '../ui-components';

var XTRACTOR_BUCKET = "xtractor-main"

const getPresignedURL = async (bucketName, key) => {

    var HARCODED_PREFIX = "kathyli_"

    // get a presigned URL From S3
    let query = `https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/file_managment?bucket=${bucketName}&key=${HARCODED_PREFIX+key}&upload=true`
    //use axios to get presigned URL
    try{      
    const response = await fetch(query, {
                    method: "GET"
                });

            if (response.ok) {
                const output =  await response.json();
                let url = output.url;
                return url;
      
            } else {
                console.log("Failed to get presigned URL");
            }
        }
        catch(error){
            console.log("error", error);
        }
 
  }

const Upload = () => {
    const [image, setImage] = useState("");
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [attemptedUpload, setAttemptedUpload] = useState(false);
    const [uploadFailed, setUploadFailed] = useState(false);
    const inputFile = useRef(null);

    const handleFileUpload = async e => {
        const {
            files
        } = e.target;
        if (files && files.length) {
            const filename = files[0].name;
            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
            setImage(files[0]);

            console.log("filename", filename);
            // get a presigned URL From S3
            let presignedURL = await getPresignedURL(XTRACTOR_BUCKET, filename);
            console.log("presignedURL", presignedURL);

            // upload the file to S3 using the presigned URL
            try {
                setAttemptedUpload(true)
                fetch(presignedURL, {
                        method: "PUT",
                        body: files[0],
                        headers: {
                            'ContentType': '*',
                            'Access-Control-Allow-Origin': 'http://localhost:3000',
                        }
                    })
                    .then(response => {

                        console.log("response", response);
                        if (response.status === 200) {
                          //use presigned URL to upload file to S3
                          setUploadSuccess(true)
                          setAttemptedUpload(false)
                        } else {
                            console.log("Failed to upload file");
                            setUploadFailed(true)
                            setAttemptedUpload(false)
                        }
                    })
                    .catch(error => {
                        console.log("error", error);
                    });
            } catch (e) {
                console.log("error", e);
            }
        }
    };

    const onButtonClick = () => {
        inputFile.current.click();
    };

    return ( 
    <div className = "Parent" >
        <span className = 'navbar' > < NavBarSide /> </span>
        <span className = 'main' >
        <div className = 'upload' >
        <center >
        <div className = 'uploadTitle' >
        <UploadFileImage />
        </div> <div >
        <ValidPdf />
        </div> <
        div >
        <input style = {
            {
                display: "none"
            }
        }
        ref = {
            inputFile
        }
        onChange = {
            handleFileUpload
        }
        type = "file" />
        <ProcessNewFileButton onClick = {
            onButtonClick
        }/> 
        </div>
        
        <div style = {{marginTop: "10%"}}> 
        {attemptedUpload && <div> <UploadInProgress/></div>}
        {uploadSuccess && <div> <FileUploaded/> </div>}
        {uploadFailed && <div> <FileFailed/> </div>}
        </div>
        </center> </div> </span> </div>
    )
};
export default Upload;