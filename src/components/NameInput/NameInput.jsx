import React, { useState, useEffect } from 'react';
import './NameInput.css';

export default function NameInput({ pullData, hideShow }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (hideShow === 'hide') {
      pullData(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideShow]);

  return (
    <input
      className={`name-input ${hideShow}`}
      placeholder='nickname:'
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}
