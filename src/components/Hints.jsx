import React from 'react';
import Icon from './../icons/LightBulb';
import { duplicateMatrix } from './../js/matrixFunctions';

function Hints({ hints, dispMatrix, rawMatrix, updateStates }) {
  const clickHint = () => {
    if (hints > 0) {
      // allow the 'while' loop only if game-board is NOT complete
      let runLoop = false;
      dispMatrix.forEach((row) => {
        row.forEach((col) => {
          if (col === '') {
            runLoop = true;
          }
        });
      });

      // target random cell from displayed matrix, and if it's empty reveal it's number according to raw matrix.
      while (runLoop) {
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        if (dispMatrix[i][j] === '') {
          let revealNumber = rawMatrix[i][j];
          let copyOfDisplayedMatrix = duplicateMatrix(dispMatrix);
          copyOfDisplayedMatrix[i][j] = revealNumber;
          updateStates(copyOfDisplayedMatrix);
          break;
        }
      }
    }
  };

  return (
    <div className='hints'>
      <button onClick={clickHint}>Hint</button>
      {hints >= 1 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hints >= 2 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hints >= 3 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
    </div>
  );
}

export default Hints;
