import React from 'react';
import Button from './Button';
import LightBulb from './icons/LightBulb-48px';
import GameBoard from './GameBoard';

function GamePage({ timer, hints, hintClick, resetClick, abortClick }) {
  return (
    <main>
      <p className='timer'>Time elapsed: {timer}</p>
      <div className='buttons'>
        <Button text='HINT' onClick={hintClick} />
        {hints >= 1 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
        {hints >= 2 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
        {hints >= 3 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
      </div>
      <GameBoard />
      <div className='buttons'>
        <Button text='Reset' onClick={resetClick} />
        <Button text='Abort' onClick={abortClick} />
      </div>
    </main>
  );
}

export default GamePage;
