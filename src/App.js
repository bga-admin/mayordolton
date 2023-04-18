import logo from './logo.svg';
import './App.css';
import Masonry from 'react-masonry-css';
import img from './images/1.jpeg'
import React, { useState, useEffect } from 'react';


function App() {
  const [images, setImages] = useState([]);

  
  useEffect(() => {
    const importImages = async () => {
      const images = [];
      for (let i = 1; i <= 80; i++) {
        const image = await import(`./images/${i}.jpeg`);
        images.push(image.default);
      }
      setImages(images);
    };
    importImages();
  }, []);



  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  
  return (
    <div className="App">


  <Masonry
  breakpointCols={8}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {/* array of JSX items */}
  {images.map((image, index) => (
          <div><a data-lightbox="gallery" href={image} ><img key={index} src={image} alt={`Image ${index + 1}`} /></a></div>
        ))}
</Masonry>

    </div>
  );
}

export default App;
