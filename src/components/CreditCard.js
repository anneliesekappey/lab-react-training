import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: '250px',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        color: 'white',
        padding: '5px',
        margin: '10px',
      }}
    >
      <div>{number}</div>
      <div>
        <p>
          Expires {expirationMonth}/{expirationYear.toString().slice(-2)}
        </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
