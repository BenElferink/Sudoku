import React from 'react';

function Difficulty({ value, onChange }) {
  return (
    <div className='diff-box'>
      <label>
        <input
          className='diff-inp'
          type='radio'
          name='difficulty'
          value='easy'
          checked={value === 'easy'}
          onChange={onChange}
        />{' '}
        Easy
      </label>
      <label>
        <input
          className='diff-inp'
          type='radio'
          name='difficulty'
          value='normal'
          checked={value === 'normal'}
          onChange={onChange}
        />{' '}
        Normal
      </label>
      <label>
        <input
          className='diff-inp'
          type='radio'
          name='difficulty'
          value='hard'
          checked={value === 'hard'}
          onChange={onChange}
        />{' '}
        Hard
      </label>
    </div>
  );
}

export default Difficulty;
