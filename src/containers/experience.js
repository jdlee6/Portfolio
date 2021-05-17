import React from 'react'
import Timeline from '../components/experience/timeline';
import Fade from 'react-reveal/Fade';

export default function Experience() {
  return (
    <div className="experience-section" id="experience">
      <div className="container">
        <div className="section-title">Experience</div>
      </div>

      <Fade bottom>
        <div className="experience-container">
          <Timeline />
        </div>
      </Fade>
    </div>
  )
}
