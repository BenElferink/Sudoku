import React from 'react';
import Button from './../Button';
import Difficulty from './Difficulty';

function StartPage({ nameValue, nameChange, difficultyValue, difficultyChange, startClick }) {
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
          className='name-inp interactive'
          placeholder='Nickname:'
          value={nameValue}
          onChange={nameChange}
        />
        <Difficulty value={difficultyValue} onChange={difficultyChange} />
        <Button text='Start Game!' onClick={startClick} />
      </form>
    </header>
  );
}

export default StartPage;
