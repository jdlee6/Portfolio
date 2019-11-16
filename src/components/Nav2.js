import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default class Nav2 extends Component {
  state = {};

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
