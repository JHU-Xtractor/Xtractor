import React, { useState,useEffect } from 'react';
import { NavBarSide,NavBarSideSmall, Imageplaceholder, SelectionFooter, ExpandButton,CloseImage, SelectionRect } from '../ui-components';
import '../App.css';
import {useNavigate} from 'react-router-dom';


const expandImage = (image) => {
  console.log(image);
  return image;
}

const getImagesFromS3 = async () => {
      // HARDCODED FOR NOW
      let query = "https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/file_managment?bucket=xtractor-main&key=kathyli/14324124&download=true"
      const response = await fetch(query, {
        method: "GET"
      });
    
      if (response.ok) {
        //Convert to JSON
        const output = await response.json();
        console.log(output);
        let url = output.urls;
        
        let listOfUrls = []
        for (var i = 0; i < url.length; i++) {
          listOfUrls.push({id: i, url: url[i]})
        }

        console.log(listOfUrls[0].url);
        return listOfUrls;
      }
      else {
        console.log("Failed to get presigned URL");
        return [];
      }
    }

const SelectImagesPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [expand, setExpand] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([]);

  const history = useNavigate();

  const handleSubmit = () => {
    console.log("selected pages")
    console.log(selectedImages);
    history('/results', {state:{selectedImages: selectedImages}});
  }

  useEffect(() => {
    getImagesFromS3().then(fetchedImages => {
      setImages(fetchedImages);
    });
  }, []);

  const handleImageClick = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter(imageId => imageId !== id));
      console.log("deselecting")
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  const selectAll = () => {

    if (selectedImages.length === 7) {
      setSelectedImages([]);
    } else {
      setSelectedImages(images.map(image => image.id));
    }
  };

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
            <span className="content-body-main-body-images">
    
              {images.map((image) => (
                <div className="image-container">
                <Imageplaceholder key={image.id} src={image.url} onClick={() => handleImageClick(image.url)}/>
                  
                  <div className="selectionRect" style = {{position: 'absolute'}}>
                  {selectedImages.includes(image.url) && (
                    <SelectionRect onClick = {() => handleImageClick(image.url)}/>
                  )}
                  </div>
                  <div className = "expand-button">
                    <ExpandButton onClick={() => setExpand(!expand)}/>
                  </div>

                  {/* Expand Image */}
                  {expand && (
                  <div className="expanded-background">
                    <div className= 'expanded-overlay'/>
                    <img src={image.url} alt="Goose" style={{width: '60vh', position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}/>
                    <div className = "close-button">
                      <CloseImage onClick={() => setExpand(!expand)}/>
                    </div>
                  </div>
                  )}
                </div>
              ))}
            </span>


        <div className = "footer">
            <SelectionFooter selectAll={selectAll} submit={handleSubmit} />
        </div>


      </span>
    </div>
  );
}

export default SelectImagesPage;