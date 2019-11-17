import Typing from 'react-typing-animation';
import React, { Component } from 'react';

export class Type extends Component {
  render() {
    return (
      <div className="type">
        <Typing loop={true} speed={65} hideCursor={false}>
          <span>Software Developer</span>
          <Typing.Delay ms={2250} />
          <Typing.Backspace count={19} speed={65} />
          <span>Backend Developer</span>
          <Typing.Delay ms={2250} />
          <Typing.Backspace count={19} speed={65} />
          <span>Creator</span>
          <Typing.Delay ms={2500} />
          <Typing.Backspace count={9} speed={65} />
        </Typing>
      </div>
    );
  }
}

export default Type;
