import React from 'react';
import AboutPaper from '../components/about/about-paper';
import Timeline from '../components/experience/timeline';
import { useSpring, animated } from 'react-spring';
import Fade from 'react-reveal/Fade';

export default function About(props) {
  const style = useSpring({
    from: {
      width: '95%',
      opacity: 0,
      boxShadow: '0px 5px 10px 0px #2D3747'
    },
    to: {
      width: '100%',
      opacity: 1,
      boxShadow: '0px 10px 15px 0px #2D3747'
    },
    delay: 400,
    // mass
    // tension
    // friction
    // clamp
    // precision
    // velocity
    // duration
    // easing

    config: {
      mass: 1,
      tension: 300,
      friction: 100,
      duration: 1000,
      velocity: 4000
    }
  });

  return (
    <div className="about-section" id="about">

      <div className="container">
        <div className="section-title">About Me</div>
      </div>

      <div className="about-paper">
        <Fade bottom>
          <animated.div style={style}>
            <AboutPaper />

          </animated.div>
        </Fade>
      </div>
      {/* <Timeline /> */}
    </div>
  );
}
