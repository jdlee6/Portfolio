import React from 'react';
import ImageGallery from '../components/projects/image-gallery';
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      <div className="container">
        <div className="section-title">Projects</div>
      </div>
      <div className="center">
        <Fade bottom>
          <ImageGallery />
        </Fade>
      </div>
    </div>
  );
}
