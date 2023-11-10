import '../App.css';

import {NavBarSide} from '../ui-components';
import {ProcessNewFileButton} from '../ui-components'
import {Login}  from '../ui-components';


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

const uploadFile = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
}

function Upload () {

    const handleUpload = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
    }
  return (
    <div className="Parent">
        <span class = 'navbar'> <NavBarSide /> </span>
        <span class = 'main'> <ProcessNewFileButton uploadFile={uploadFile}/> </span>
        <span class = 'footer'> <Login /> </span>

    </div>
  )
}
export default Upload;

  
