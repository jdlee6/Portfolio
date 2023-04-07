import React from 'react';
import { Link } from 'react-scroll';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {
  return (
    <div className="navbar">
      <div className="contact-svg">
        <a className="contact-svg" href="https://www.github.com/jdlee6">
          <FontAwesomeIcon icon={faGithub} color="#FFF" />
        </a>
        <a
          className="contact-svg"
          href="https://www.linkedin.com/in/joe-lee-a90680151/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#FFF" />
        </a>
        <a className="contact-svg" href={'/resume_4.5.23.pdf'}>
          <FontAwesomeIcon icon={faFilePdf} color="#FFF" />
        </a>
      </div>
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
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Experience
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
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Skills
          </Link>
        </li>
      </ul>
    </div>
  );
}
