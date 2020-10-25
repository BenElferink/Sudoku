import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import LightBulb from './icons/LightBulb-48px';
import Button from './Button';

function GamePage({ matrix, difficulty, quitClick }) {
  const [timer, setTimer] = useState('00:00');
  const [hints, setHints] = useState(
    difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : difficulty === 'hard' ? 1 : 0
  );

  // -------------------------------------------------- //
  // -------------------------------------------------- //
  // -------------- button function(s) ---------------- //
  // -------------------------------------------------- //
  // -------------------------------------------------- //

  const resetClick = () => {
    // TODO: reset matrix
    // TODO: reset timer
    setHints(
      difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : difficulty === 'hard' ? 1 : 0
    );
  };

  // -------------------------------------------------- //
  // -------------------------------------------------- //
  // --------------- timer function(s) ---------------- //
  // -------------------------------------------------- //
  // -------------------------------------------------- //

  const timerStart = (minutes, seconds) => {
    if (seconds < 59) {
      seconds++;
    } else {
      seconds = 0;
      minutes++;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    setTimer(`${minutes}:${seconds}`);
  };

  useEffect(() => {
    setTimeout(() => {
      timerStart(parseInt(timer.substring(0, 2)), parseInt(timer.substring(3, 5)));
    }, 1000);
  }, [timer]);

  // -------------------------------------------------- //
  // -------------------------------------------------- //
  // ---------------- hint function(s) ---------------- //
  // -------------------------------------------------- //
  // -------------------------------------------------- //

  const hintClick = () => {
    if (hints > 0) {
      // TODO: target empty tile, and reveal it's value
      setHints(hints - 1);
    } else {
      console.log('no hints left');
    }
  };

  // -------------------------------------------------- //
  // -------------------------------------------------- //
  // --------------- component content ---------------- //
  // -------------------------------------------------- //
  // -------------------------------------------------- //

  // timer already starts above
  // hints already rendered by difficulty
  // -----
  // what happens when component mounts?
  // -----
  // i might have to render the matrix?
  // matrix is unfiltered upon entry from props

  return (
    <main>
      <p className='timer'>Time elapsed: {timer}</p>
      <div className='buttons'>
        <Button text='HINT' onClick={hintClick} />
        {hints >= 1 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
        {hints >= 2 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
        {hints >= 3 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
      </div>
      <GameBoard matrix={matrix} />
      <div className='buttons'>
        <Button text='Reset' onClick={resetClick} />
        <Button text='Quit' onClick={quitClick} />
      </div>
    </main>
  );
}

export default GamePage;
