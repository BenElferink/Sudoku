import React from 'react';
import './Button.css';

function Button({ text, onClick, hideShow }) {
  return (
    <button className='btn' onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
