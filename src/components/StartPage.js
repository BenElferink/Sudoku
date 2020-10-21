import React from 'react';
import Button from './Button';
import Difficulty from './Difficulty';

function StartPage({ name, nameChange, diff, diffChange, startGame }) {
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
        <input className='name-inp' placeholder='Nickname:' value={name} onChange={nameChange} />
        <Difficulty value={diff} onChange={diffChange} />
        <Button text='Start Game!' onClick={startGame} />
      </form>
    </header>
  );
}

export default StartPage;
