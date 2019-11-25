import React, { Component } from 'react';
import Type from '../Type';

export class Home extends Component {
  render() {
    return (
      <div className="home-section" id="home">
        <Type />
        <div class="arrow">
          <span></span>
          <span></span>
        </div>
      </div>


    );
  }
}

export default Home;
