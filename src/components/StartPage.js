import React, { useState } from 'react';
import Button from './Button';
import Difficulty from './Difficulty';

function StartPage() {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('normal');

  return (
    <header>
      <div className='heading'>
        <h2>Sudoku</h2>
        <div className='line'></div>
        <h3>by Ben Elferink</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          className='name-inp'
          placeholder='Nickname:'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Difficulty
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        />
        <Button
          text='Start Game!'
          onClick={() => {
            console.log('works');
          }}
        />
      </form>
    </header>
  );
}

export default StartPage;
