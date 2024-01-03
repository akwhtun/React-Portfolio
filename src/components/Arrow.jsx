import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const Arrow = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleButton = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleButton);
    return () => {
      window.removeEventListener('scroll', toggleButton);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`button-e fixed bottom-10 right-10 bg-btn-color hover:bg-btn-hover text-white text-3xl p-4 
      rounded-full shadow-lg focus:outline-none transition duration-300 
      ${
        showButton ? 'showButton' : ''
      }`}
    >
      <FontAwesomeIcon icon={faAngleDoubleUp} />
    </button>
  );
};

export default Arrow;
