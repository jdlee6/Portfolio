import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Resume from './components/pages/Resume';
import Menu from './components/Menu';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <About />
      <Project />
      <Skills />
      <Resume />
    </div>
  );
}

export default App;
