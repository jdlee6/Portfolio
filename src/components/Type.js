import Typist from 'react-typist';
import React, { Component } from 'react';

export class Type extends Component {
  state = {
    typing: true
  }

  done = () => {
    this.setState({typing: false}, () => {
      this.setState({typing: true})
    });
  }

  render() {
    return (
      <div className="type">
        <home-text>
          {this.state.typing ? 
          <Typist onTypingDone={this.done} cursor={{blink:true}} avgTypingDelay={70}>
            Software Developer
            <Typist.Delay ms={2500} />
            <Typist.Backspace count={20} />
            Backend Developer
            <Typist.Delay ms={2500} />
            <Typist.Backspace count={20} />
            Designer & Creator
            <Typist.Delay ms={2500} />
            <Typist.Backspace count={20} />
          </Typist>
          : ' '}
        </home-text>
      </div>
    );
  }
}

export default Type;
