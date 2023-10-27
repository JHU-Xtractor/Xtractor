import React, { Component } from 'react';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImages: new Set(), // Initialize an empty set for selected images
    };
  }

  toggleImageSelection = (imageUrl) => {
    const { selectedImages } = this.state;
    if (selectedImages.has(imageUrl)) {
      selectedImages.delete(imageUrl); // If already selected, unselect it
    } else {
      selectedImages.add(imageUrl); // If not selected, select it
    }
    this.setState({ selectedImages });
  };

  expandImage = (imageUrl) => {
    
  }

  render() {
    const { imageUrls } = this.props;
    const { selectedImages } = this.state;

    return (
      <div>
        <h2>Image Gallery</h2>
        <div className="image-container">
          {imageUrls.map((imageUrl) => (
            <div key={imageUrl} className="image-item">
              <img src={imageUrl} alt="Gallery" />
              <div>
              <input
                type="checkbox"
                onChange={() => this.toggleImageSelection(imageUrl)}
                checked={selectedImages.has(imageUrl)}
              />
              <input
                type="button"
                value="+"
                onClick={() => this.deleteImage(imageUrl)}
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function ImgDisplay() {
  // Define an array of image URLs.
  const imageUrls = [
    'https://images.trvl-media.com/lodging/56000000/55360000/55359000/55358926/6af3f6de.jpg?impolicy=resizecrop&rw=500&ra=fit',
    './previews/2.jpg',
    './previews/3.jpg'
    // Add more image URLs here.
  ];

  return (
    <div className="App">
      <ImageGallery imageUrls={imageUrls} />  {/* Pass the imageUrls array as a prop. */}
    </div>
  );
}

export default ImgDisplay;
