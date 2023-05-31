import logo from './logo.svg';
import './App.css';
import Masonry from 'react-masonry-css';
import img from './images/1.jpeg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import React, { useState, useEffect } from 'react';


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);


  
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
    700: 3,
    450: 2,
    300: 1,

  };
  
  return (
    <div className="App">
    {
      images==false ? (
       <div className='loader-container'> 
          <div className='spinner'></div>
       </div>
      )
      :
   
(
  <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {/* array of JSX items */}
  {images.map((image, index) => (
          <div><a data-lightbox="gallery" href={image} ><LazyLoadImage     effect="blur"          key={index} src={image} alt={`Image ${index + 1}`} /></a></div>
        ))}
</Masonry>)
 }

 
    </div>
  );
}

export default App;
