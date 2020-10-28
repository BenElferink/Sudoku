import React, { useState } from 'react';
import Button from './../Button/Button';
import Icon from './LightBulb-48px';
import './Hints.css';
import { duplicateMatrix } from './../../scripts/SudokuFunctions';

export default function Hints({ difficulty, hideShow }) {
  const [hints, setHints] = useState(
    difficulty === 'easy'
      ? 3
      : difficulty === 'normal'
      ? 2
      : difficulty === 'hard'
      ? 1
      : 0
  );

  const hintClick = () => {
    if (hints > 0) {
      let newMatrix = duplicateMatrix({
        /* matrixPlayer */
      });
      let loop = true;

      while (loop) {
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        if (newMatrix[i][j] === '') {
          newMatrix[i][j] = {
            /* matrixOrigin[i][j] */
          };
          loop = false;
        } else {
          loop = true;
        }
      }

      /* setMatrixPlayer(newMatrix) */
      setHints(hints - 1);
    } else {
      console.log('no hints left');
    }
  };

  return (
    <div className={`hints ${hideShow}`}>
      <Button text='HINT' onClick={hintClick} />
      {hints >= 1 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hints >= 2 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hints >= 3 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
    </div>
  );
}
