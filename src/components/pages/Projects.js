import React, { Component } from 'react';
import ImageGallery from '../ImageGallery';
import Fade from 'react-reveal/Fade';

export class Projects extends Component {
  render() {
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
}

export default Projects;
