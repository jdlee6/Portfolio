import Typist from 'react-typist';
import React, { useState } from 'react';

export default function Type() {
  const [typing, setTyping] = useState(true);

  const done = () => {
    setTyping(false);
    setTyping(true);
  };

  return (
    <div className="type">
      <home-text>
        {typing ? (
          <Typist
            onTypingDone={done}
            cursor={{ blink: true }}
            avgTypingDelay={70}
          >
            Full Stack Developer
            <Typist.Delay ms={2500} />
            <Typist.Backspace count={20} />
            Frontend Developer
            <Typist.Delay ms={2500} />
            <Typist.Backspace count={22} />
            Designer & Creator
            <Typist.Delay ms={2500} />
            <Typist.Backspace count={20} />
          </Typist>
        ) : (
          ' '
        )}
      </home-text>
    </div>
  );
}
