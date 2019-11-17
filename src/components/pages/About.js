import React, { Component } from 'react';
import AboutPaper from '../AboutPaper';
export class About extends Component {
  render() {
    return (
      <div className="about-section" id="about">
        <div className="about-paper">
          <AboutPaper />
        </div>
      </div>
    );
  }
}

export default About;
