import React from 'react';
import './Greetings.css';

const Greetings = ({ language, children }) => {
  const getGreeting = (language) => {
    switch (language) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      case 'en':
        return 'Hello';
      default:
        return 'Hola';
    }
  };

  return (
    <div className="greetings">
      <p>
        {getGreeting(language)}
        {children}
      </p>
    </div>
  );
};

export default Greetings;
