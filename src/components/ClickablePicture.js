import React, { useState } from 'react';
import image1 from '../assets/images/maxence.png';
import image2 from '../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
  const [picture, setPicture] = useState(image1);

  return (
    <div>
      <img
        src={picture}
        alt="guy"
        onClick={() => {
          if (picture === image2) {
            setPicture(image1);
          } else if (picture === image1) {
            setPicture(image2);
          }
        }}
      />
    </div>
  );
};

export default ClickablePicture;
