import Typing from 'react-typing-animation';
import React, { Component } from 'react';

export class Type extends Component {
  render() {
    return (
      <div className="type">
        <Typing loop={true} speed={10} hideCursor={false}>
          <home-text>Software Developer</home-text>
          <Typing.Delay ms={2250} />
          <Typing.Backspace count={19} />
          <home-text>Backend Developer</home-text>
          <Typing.Delay ms={2250} />
          <Typing.Backspace count={19} />
          <home-text>Creator</home-text>
          <Typing.Delay ms={2500} />
          <Typing.Backspace count={9} />
        </Typing>
      </div>
    );
  }
}

export default Type;
