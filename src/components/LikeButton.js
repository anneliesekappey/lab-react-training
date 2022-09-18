import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState([
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
  ]);

  return (
    <div>
      <h2>Like Button</h2>
      <button
        className="like-button"
        onClick={() => {
          setCount(count + 1);
          //   setBackgroundColor(Math.floor(Math.random([])));
        }}
      >
        {' '}
        {count} Likes
        {/* {backgroundColor} */}
      </button>
    </div>
  );
};

export default LikeButton;
