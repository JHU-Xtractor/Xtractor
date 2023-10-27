import React, { Component } from 'react';
import './index.css';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImages: new Set(),
      expandedImage: null, // Initialize expandedImage as null
    };
  }

  toggleImageSelection = (imageUrl) => {
    const { selectedImages } = this.state;
    if (selectedImages.has(imageUrl)) {
      selectedImages.delete(imageUrl);
    } else {
      selectedImages.add(imageUrl);
    }
    this.setState({ selectedImages });
  };

  expandImage = (imageUrl) => {
    // When plus button is clicked, set expandedImage to the URL
    this.setState({ expandedImage: imageUrl });
  };

  closeExpandedImage = () => {
    // Close the expanded image
    this.setState({ expandedImage: null });
  };

  render() {
    const { imageUrls } = this.props;
    const { selectedImages, expandedImage } = this.state;

    return (
      <div>
        <h2>Image Gallery</h2>
        <div className="two-images">
          {imageUrls.map((imageUrl) => (
            <figure className="half-width" key={imageUrl}>
              <img src={imageUrl} alt="Gallery" className = "img-size" />
              <div>
                <input
                  type="checkbox"
                  onChange={() => this.toggleImageSelection(imageUrl)}
                  checked={selectedImages.has(imageUrl)}
                />
                <input
                  type="button"
                  value="+"
                  onClick={() => this.expandImage(imageUrl)}
                />
              </div>
            </figure>
          ))}
        </div>
        {expandedImage && (
          <div className="image-overlay">
            <div className="expanded-image">
              <div style={{ position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
              <img src={expandedImage} alt="Gallery" />

              <center>
                <button onClick={this.closeExpandedImage}>Close</button>
              </center>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function ImgDisplay() {
  // Define an array of image URLs.
  const imageUrls = [
    'https://images.trvl-media.com/lodging/56000000/55360000/55359000/55358926/6af3f6de.jpg?impolicy=resizecrop&rw=500&ra=fit',
    'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
    'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg',
    'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg',
    'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg',
    'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg'
    // Add more image URLs here.
  ];

  return (
    <div className="App">
      <ImageGallery imageUrls={imageUrls} /> {/* Pass the imageUrls array as a prop. */}
    </div>
  );
}

export default ImgDisplay;

