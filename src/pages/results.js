import React, { useState,useEffect } from 'react';
import { NavBarSide,NavBarSideSmall, Imageplaceholder, SelectionFooter, ExpandButton,CloseImage, SelectionRect } from '../ui-components';
import '../App.css';
import Papa from 'papaparse';
import {useLocation} from 'react-router-dom';




const getListOfObjects = (listOfUrls) => {
  let listOfObjects = [];
  for (var i = 0; i < listOfUrls.length; i++) {
    let currUrl = listOfUrls[i];
    //get contents between 3rd slash and ?
    let start = currUrl.indexOf("/", currUrl.indexOf("/", currUrl.indexOf("/") + 1) + 1);
    let end = currUrl.indexOf("?");

    let currObject = {
      key: currUrl.substring(start+1, end)
    }
    listOfObjects.push(currObject.key);


  }
  console.log("list of objects");
  console.log(listOfObjects);
  return listOfObjects;
}

function renderTables (tables,curInd) {

  if (tables.length == 0 || tables == null) {
    return <div>Loading...</div>;
  }

  let csvData = Papa.parse(tables[curInd]).data;


  console.log("csvData");
  console.log(csvData);
  return (
      <table>
        <tbody>
        {csvData.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                  <td key={j} style={{ border: '1px solid black', padding: '10px' }}>{cell}</td>
                  ))}
                    </tr>
                  ))}

        </tbody>
      </table>
  )
}

const ReviewCSVResults = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tables, setTables] = useState([]);


  const location = useLocation();
  const selectedImages = location.state ? location.state.selectedImages : [];

  let listOfObjects = getListOfObjects(selectedImages);

  const handleButtonClick = (count) => {
    setCurrentIndex((prevIndex) => {

      if (prevIndex + count < 0) {
        return listOfObjects.length - 1;
      }
      return (prevIndex + count) % listOfObjects.length;
    });
  };


  useEffect(() => {
    
    const fetchData = async () => {
      const result = await getContentFromS3(listOfObjects);

      const tables = result.files.listOfFileContents;
      setTables(tables);
    };

    fetchData();
  }, []);

  console.log("tables");
  console.log(tables);

  if (tables === null) {
    return <div>Loading...</div>;
  } 



  return (
    <div className="Parent">
      <span className="navbar">
        {isSidebarOpen && (
          <NavBarSide collapse={() => setSidebarOpen(!isSidebarOpen)} />
        )}
        {!isSidebarOpen && (
          <NavBarSideSmall expand={() => setSidebarOpen(!isSidebarOpen)} />
        )}
      </span>

        <span className={` ${isSidebarOpen ? 'content' : 'content-expanded'}`}>
          <button onClick={() =>handleButtonClick(1)}>Next</button>
          <button onClick={() =>handleButtonClick(-1)}>Previous</button>
          <span className="content-body-main-body-images">
            <span className="image-container">
              <Imageplaceholder src={selectedImages[currentIndex]} />
            </span>
            <span>
              {tables != null && renderTables(tables,currentIndex)}
            </span>

            </span>
        </span>
    </div>
  );
};

const getContentFromS3 = async (listOfUrls) => {


    console.log("list of urls");
    console.log(listOfUrls);

      // convert listOfUrls to String
      let listOfUrlsString = JSON.stringify(listOfUrls);

    
      // HARDCODED FOR NOW
      // let listOfUrls = "[\"kathyli/14324124/14324124page3.jpg\",\"kathyli/14324124/14324124page2.jpg\"]"


      let query = "https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/csv?files="+listOfUrlsString

    
      console.log(query);
      const response = await fetch(query, {
        method: "GET"
      });
    
      console.log(response);

      if (response.ok) {
        //Convert to JSON
        const output = await response.json();
        console.log(output);
        return output;
        
      }
      else {
        console.log("Failed to get presigned URL");
        return [];
      }
    }

// const ReviewCSVResults = async () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [data, setData] = useState(null);


//   return (
//     <div className="Parent">
//       <span className="navbar">
//         {isSidebarOpen && (
//           <NavBarSide collapse={() => setSidebarOpen(!isSidebarOpen)} />
//         )}
//         {!isSidebarOpen && (
//           <NavBarSideSmall expand={() => setSidebarOpen(!isSidebarOpen)} />
//         )}
//       </span>
//         <span className={` ${isSidebarOpen ? 'content' : 'content-expanded'}`}>
//             <span className="content-body-main-body-images">

          

//             </span>
//       </span>
//     </div>
//   );
// }

export default ReviewCSVResults;