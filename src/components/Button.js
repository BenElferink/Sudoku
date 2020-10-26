import React from 'react';

function Button({ text, onClick }) {
  return (
    <button className='interactive' onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
