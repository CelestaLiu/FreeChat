import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingAnim = () => {
  return (
    <div style={{ fontSize: '60px', color: 'white', textShadow: '1px 1px 20px #000', display: 'inline-block' }}>
      <Typewriter
        words={['Chat With Your OWN AI', 'Built With OpenAI 🤖', 'Your Own Customized ChatGPT 💻']}
        loop={Infinity}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypingAnim;