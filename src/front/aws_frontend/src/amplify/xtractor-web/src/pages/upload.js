import '../App.css';

import {NavBarSide} from '../ui-components';
import { FileUploader } from '@aws-amplify/ui-react';
import {ProcessNewFileButton} from '../ui-components'


// const UploadButton = ()=> {

//     const handleUpload = (e) => {
//         e.preventDefault();
//         console.log('The link was clicked.');
//     }
//     return (
//         //use the ProcessNewFileButton component
//         <button onClick={handleUpload}>
//             Upload
//         </button>
//     )

// }


function Upload () {

    const handleUpload = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
    }
  return (
    <div className="Parent">
        <span class = 'navbar'> <NavBarSide /> </span>
        <span class = 'main'> <ProcessNewFileButton /> </span>
    </div>
  )
}
export default Upload;

  
