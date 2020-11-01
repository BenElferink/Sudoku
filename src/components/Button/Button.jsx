import React from 'react';
import './style/style.css';

function Button({ text, onClick }) {
  return (
    <button className='btn' onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
