import React from 'react';
import Home from './containers/home';
import About from './containers/about';
import Experience from './containers/experience';
import Project from './containers/projects';
import Skills from './containers/skills';
// import Contact from './containers/contact';
import Menu from './components/shared/menu';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './static/styles.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <About />
      <Experience />
      <Project />
      <Skills />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
