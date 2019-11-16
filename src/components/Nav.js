import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Nav() {
  return (
    <div>
      <Navbar style={header} sticky="top" bg="dark" variant="dark">
        <Navbar.Brand style={titleStyle} href="/">
          Home
        </Navbar.Brand>
        <Navbar.Brand style={titleStyle} href="/about">
          About
        </Navbar.Brand>
        <Navbar.Brand style={titleStyle} href="/projects">
          Projects
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

const titleStyle = {
  fontSize: '12px'
};

const header = {
  height: '20px',
  padding: '15px'
};
