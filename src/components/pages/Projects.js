import React, { Component } from 'react';
import ImageGallery from '../ImageGallery';

export class Projects extends Component {
  render() {
    return (
      <div className="projects-section" id="projects">
        <div className="container">
          <div className="section-title">Projects</div>
        </div>

        <div className="center">
          <ImageGallery />
        </div>
      </div>
    );
  }
}

export default Projects;
