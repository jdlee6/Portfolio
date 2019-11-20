import React from 'react';
import { images } from './images';
import { titles } from './titles';
import { descriptions } from './descriptions';
import '../App.css';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const INITAL_INDEX = 0;
function App() {
  const [index, setIndex] = React.useState(INITAL_INDEX);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(INITAL_INDEX);
      } else {
        setIndex(index + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <Gallery
        style={{
          height: '50vh',
          width: '100vw',
          maxWidth: '100%',
          background: 'none',
          position: 'relative'
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" src={image} />
        ))}
      </Gallery>
      <div className="project-header">{titles[index]}</div>
      <div className="project-description">{descriptions[index]}</div>
    </>
  );
}

export default App;
