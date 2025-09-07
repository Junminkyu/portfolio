import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Typing = () => {
  const [currentColor, setCurrentColor] = useState(getRandomColor());

  const handleType = (count) => {
    if (count === 0) { // Start of a new word
      setCurrentColor(getRandomColor());
    }
  };

  return (
    <div>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold' }}>
        I am a{' '}
        <span style={{ color: currentColor, fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Coder', 'Developer', 'Creator', 'Collaborator']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={110}
            deleteSpeed={50}
            delaySpeed={1000}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};

export default Typing;
