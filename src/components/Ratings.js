import React from 'react';

const Ratings = ({ children }) => {
  let roundNumber = Math.round(children);
  let rating;

  switch (roundNumber) {
    case 1:
      rating = '*****';
      break;
    case 2:
      rating = '****';
      break;
    case 3:
      rating = '***';
      break;
  }

  return (
    <div>
      <p>{ratings}</p>
    </div>
  );
};

export default Ratings;
