import Typing from 'react-typing-animation';
import React, { Component } from 'react';

export class Type extends Component {
  render() {
    return (
      <div className="type">
        <Typing loop={true} hideCursor={false}>
          <Typing.Speed ms={2} />
          <home-text>Software Developer</home-text>
          <Typing.Delay ms={2500} />
          <Typing.Backspace count={19} />
          <home-text>Backend Developer</home-text>
          <Typing.Delay ms={2500} />
          <Typing.Backspace count={19} />
          <home-text>Designer & Creator</home-text>
          <Typing.Delay ms={2500} />
          <Typing.Backspace count={25} />
        </Typing>
      </div>
    );
  }
}

export default Type;
