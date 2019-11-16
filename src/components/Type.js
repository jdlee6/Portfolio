import Typing from 'react-typing-animation';
import React, { Component } from 'react';

export class Type extends Component {
  render() {
    return (
      <div class="type">
        <Typing loop={true} speed={65} hideCursor={true}>
          <h1>Software Developer</h1>
          <Typing.Delay ms={2250} />
          <Typing.Backspace count={25} speed={65} />
          <h1>Backend Developer</h1>
          <Typing.Delay ms={2250} />
          <Typing.Backspace count={25} speed={65} />
          <Typing.Delay ms={2500} />
          <h1>Creator</h1>
          <Typing.Delay ms={2500} />
          <Typing.Backspace count={25} speed={65} />
        </Typing>
      </div>
    );
  }
}

export default Type;
