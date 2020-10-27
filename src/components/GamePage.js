import React from 'react';
import Timer from './Timer';
import Hints from './Hints';
import Chart from './Chart';
import Button from './Button';

function GamePage({
  hideShow,
  MATRIX,
  timer,
  setTimer,
  hints,
  setHints,
  clickQuit,
  clickReset,
  clickFinish,
}) {
  return (
    <section className={`container ${hideShow}`} id='game'>
      <Timer timer={timer} setTimer={setTimer} />
      <Hints hints={hints} setHints={setHints} MATRIX={MATRIX} />
      {MATRIX.matrixPlayed !== '' ? <Chart MATRIX={MATRIX} /> : null}
      <div className='row buttons'>
        <Button text='Quit' onClick={clickQuit} />
        <Button text='Reset' onClick={clickReset} />
        <Button text='Finish' onClick={clickFinish} />
      </div>
    </section>
  );
}

export default GamePage;
