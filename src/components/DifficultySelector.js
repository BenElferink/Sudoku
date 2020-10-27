import React from 'react';

function DifficultySelector({ difficulty, setDifficulty }) {
  return (
    <>
      <div className='col-5'>
        <input
          className='diff'
          type='radio'
          name='difficulty'
          value='easy'
          onChange={setDifficulty}
          checked={difficulty === 'easy'}
        />
        <label className=''>easy</label>
      </div>
      <div className='col-5'>
        <input
          className='diff'
          type='radio'
          name='difficulty'
          value='normal'
          onChange={setDifficulty}
          checked={difficulty === 'normal'}
        />
        <label>normal</label>
      </div>
      <div className='col-5'>
        <input
          className='diff'
          type='radio'
          name='difficulty'
          value='hard'
          onChange={setDifficulty}
          checked={difficulty === 'hard'}
        />
        <label>hard</label>
      </div>
    </>
  );
}

export default DifficultySelector;
