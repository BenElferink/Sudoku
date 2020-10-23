import React from 'react';
import Button from './Button';
import LightBulb from './icons/LightBulb-48px';

function GamePage({ timer, hints, hintClick, resetClick, abortClick }) {
  return (
    <main>
      <p className='timer'>Time elapsed: {timer}</p>
      <div className='hints'>
        <Button text='HINT' onClick={hintClick} />
        {hints >= 1 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
        {hints >= 2 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
        {hints >= 3 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
      </div>
    </main>
  );
}

export default GamePage;
