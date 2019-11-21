import React from 'react';
import { projects } from './projects';
import '../App.css';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const INITAL_INDEX = 0;
function App() {
  const [index, setIndex] = React.useState(INITAL_INDEX);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === projects.length - 1) {
        setIndex(INITAL_INDEX);
      } else {
        setIndex(index + 1);
      }
    }, 4000);

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
        {projects.map(project => (
          <GalleryImage
            className="realimage"
            objectFit="contain"
            src={projects[index].image}
          />
        ))}
      </Gallery>
      <div className="project-header">{projects[index].title}</div>
      <div className="project-description">{projects[index].description}</div>
    </>
  );
}

export default App;
