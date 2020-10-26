import React from 'react';
import { duplicateMatrix } from '../../scripts/SudokuFunctions';
import Button from '../Button';
import LightBulb from '../../icons/LightBulb-48px';

function Hints({ hints, setHints, MATRIX }) {
  const hintClick = () => {
    if (hints > 0) {
      let newMatrix = duplicateMatrix(MATRIX.matrixPlayed);
      let loop = true;

      while (loop) {
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        if (newMatrix[i][j] === '') {
          newMatrix[i][j] = MATRIX.matrixOrigin[i][j];
          loop = false;
        } else {
          loop = true;
        }
      }

      MATRIX.setMatrixPlayed(newMatrix);
      setHints(hints - 1);
    } else {
      console.log('no hints left');
    }
  };

  return (
    <div className='hints'>
      <Button text='HINT' onClick={hintClick} />
      {hints >= 1 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
      {hints >= 2 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
      {hints >= 3 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
    </div>
  );
}

export default Hints;
