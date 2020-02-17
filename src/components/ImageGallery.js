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
    }, 10000);

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
            key={projects[index].key}
            className="realimage"
            objectFit="contain"
            src={projects[index].image}
          />
        ))}
      </Gallery>

      <div className="project-header">{projects[index].title}</div>
      <div className="project-description">{projects[index].description}</div>
      <div className="project-description">
        <em>{projects[index].stack}</em>
      </div>
      <br />

      <div className="project-links">
        <a href={projects[index].demo}>Demo</a>
      </div>
      {index !== 4 && (
        <div className="project-links">
          <a href={projects[index].live}>Live</a>{' '}
        </div>
      )}
      <div className="project-links">
        <a href={projects[index].github}>Github</a>{' '}
      </div>
    </>
  );
}

export default App;
