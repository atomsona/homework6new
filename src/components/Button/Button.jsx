import React from 'react';
import './Button.css';

function Button({ onClick }) {
  return (
    <button className="generate-button" onClick={onClick}>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18V6M6 12h12" stroke="#1F2937" strokeWidth="2" fill="none" />
      </svg>
    </button>
  );
}

export default Button;