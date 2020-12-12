import React from 'react';

function Difficulty({ value, setValue }) {
  return (
    <div className='difficulty'>
      <div className='radio-group'>
        <input
          type='radio'
          name='diff'
          id='diff_easy'
          value='easy'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          checked={value === 'easy'}
        />
        <label htmlFor='diff_easy'>Easy</label>
      </div>

      <div className='radio-group'>
        <input
          type='radio'
          name='diff'
          id='diff_normal'
          value='normal'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          checked={value === 'normal'}
        />
        <label htmlFor='diff_normal'>Normal</label>
      </div>

      <div className='radio-group'>
        <input
          type='radio'
          name='diff'
          id='diff_hard'
          value='hard'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          checked={value === 'hard'}
        />
        <label htmlFor='diff_hard'>Hard</label>
      </div>
    </div>
  );
}

export default Difficulty;
