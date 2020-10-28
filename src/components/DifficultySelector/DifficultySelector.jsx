import React, { useState, useEffect } from 'react';
import './DifficultySelector.css';

export default function DifficultySelect({ pullData, hideShow }) {
  const [difficulty, setDifficulty] = useState('normal');

  useEffect(() => {
    if (hideShow === 'hide') {
      pullData(difficulty);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideShow]);

  return (
    <ul className={`difficulty-selector ${hideShow}`}>
      <li>
        <input
          type='radio'
          name='difficulty'
          value='easy'
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
          checked={difficulty === 'easy'}
        />
        <label>easy</label>
      </li>
      <li>
        <input
          type='radio'
          name='difficulty'
          value='normal'
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
          checked={difficulty === 'normal'}
        />
        <label>normal</label>
      </li>
      <li>
        <input
          type='radio'
          name='difficulty'
          value='hard'
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
          checked={difficulty === 'hard'}
        />
        <label>hard</label>
      </li>
    </ul>
  );
}
