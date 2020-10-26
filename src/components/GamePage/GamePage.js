import React, { useState, useEffect } from 'react';
import { SudokuCreate } from '../../logic/matrixAlgorithm';
import { duplicateMatrix, filterDifficulty } from '../../logic/SudokuScripts';
import Timer from './Timer';
import Hints from './Hints';
import GameBoard from './GameBoard';
import Button from '../Button';

function GamePage({ difficulty, quitClick }) {
  const [matrixOrigin] = useState(SudokuCreate(9));
  const [matrixFilter, setMatrixFilter] = useState('');
  const [matrixPlayed, setMatrixPlayed] = useState('');
  const [time, setTime] = useState('00:00');
  const [hints, setHints] = useState(
    difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : difficulty === 'hard' ? 1 : 0
  );

  var MATRIX = {
    matrixOrigin: matrixOrigin,
    matrixFilter: matrixFilter,
    matrixPlayed: matrixPlayed,
    setMatrixFilter: setMatrixFilter,
    setMatrixPlayed: setMatrixPlayed,
  };

  const resetClick = () => {
    setMatrixPlayed(matrixFilter);
    setTime('00:00');
    setHints(
      difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : difficulty === 'hard' ? 1 : 0
    );
  };

  useEffect(() => {
    let newMatrix = duplicateMatrix(matrixOrigin);
    let filtered = filterDifficulty(newMatrix, difficulty);
    setMatrixFilter(filtered);
    setMatrixPlayed(duplicateMatrix(filtered));
  }, [matrixOrigin, difficulty]);

  return (
    <main>
      <Timer time={time} setTime={setTime} />
      <Hints hints={hints} setHints={setHints} MATRIX={MATRIX} />
      {matrixPlayed !== '' ? <GameBoard MATRIX={MATRIX} /> : null}
      <div className='buttons'>
        <Button text='Reset' onClick={resetClick} />
        <Button text='Quit' onClick={quitClick} />
      </div>
    </main>
  );
}

export default GamePage;
