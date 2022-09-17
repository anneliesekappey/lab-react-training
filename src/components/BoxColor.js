import React from 'react';
import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  let colorText = 'white';

  if (r + b + g > 255) {
    colorText = 'black';
  }

  return (
    <div
      className="box-color"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, color: colorText }}
    >
      <p>
        rgb({r}, {g}, {b})
      </p>
      BoxColor
    </div>
  );
};

export default BoxColor;
