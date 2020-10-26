import React, { useState, useEffect } from 'react';
import { SudokuCreate } from '../../logic/matrixAlgorithm';
import { duplicateMatrix, filterDifficulty } from '../../logic/SudokuScripts';
import GameBoard from './GameBoard';
import Button from '../Button';
import LightBulb from '../../icons/LightBulb-48px';

function GamePage({ difficulty, quitClick }) {
  const [timer, setTimer] = useState('00:00');
  const [hints, setHints] = useState(
    difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : difficulty === 'hard' ? 1 : 0
  );
  const [matrix] = useState(SudokuCreate(9));
  const [matrixFiltered, setMatrixFiltered] = useState('');
  const [matrixUser, setMatrixUser] = useState('');

  // this useEffect runs each time the timer changes (every 1000ms), it calls an arrow function, and updates time accordingly (minutes and seconds)
  useEffect(() => {
    const timerStart = (minutes, seconds) => {
      if (seconds < 59) {
        seconds++;
      } else {
        seconds = 0;
        minutes++;
      }
      seconds < 10 ? (seconds = `0${seconds}`) : (seconds = `${seconds}`);
      minutes < 10 ? (minutes = `0${minutes}`) : (minutes = `${minutes}`);
      setTimer(`${minutes}:${seconds}`);
    };
    setTimeout(() => {
      timerStart(parseInt(timer.substring(0, 2)), parseInt(timer.substring(3, 5)));
    }, 1000);
  }, [timer]);

  // this function is called whenever the user clicks the hint button.
  const hintClick = () => {
    // upon click the function checks if any hints remain, and continues as told to
    if (hints > 0) {
      let newMatrix = duplicateMatrix(matrixUser);
      let loop = true;
      while (loop) {
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        if (newMatrix[i][j] === '') {
          newMatrix[i][j] = matrix[i][j];
          loop = false;
        } else {
          loop = true;
        }
      }
      setMatrixUser(newMatrix);
      setHints(hints - 1);
    } else {
      console.log('no hints left');
    }
  };

  const resetClick = () => {
    // TODO: reset matrix
    let newMatrix = duplicateMatrix(matrixFiltered);
    setMatrixUser(newMatrix);
    // TODO: reset timer
    setTimer('00:00');
    setHints(
      difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : difficulty === 'hard' ? 1 : 0
    );
  };

  const handleCellChange = (e, i, j) => {
    let newMatrix = duplicateMatrix(matrixUser);
    newMatrix[i][j] = e.target.value;
    setMatrixUser(newMatrix);
  };

  useEffect(() => {
    // with this useEffect, upon change of state to original matrix, or difficulty -> create a filtered (clean random tiles) matrix, and remember it twice.
    let newMatrix = duplicateMatrix(matrix);
    // matrixFiltered keeps the originally filtered matrix, for example to use in level reset.
    let filtered = filterDifficulty(newMatrix, difficulty);
    setMatrixFiltered(filtered);
    // matrixUser is the matrix which will change upon user interaction with the game's board, we compare this with the original matrix when checking if right/wrong
    let filteredUser = duplicateMatrix(filtered);
    setMatrixUser(filteredUser);
  }, [matrix, difficulty]);

  return (
    <main>
      <p className='timer'>Time elapsed: {timer}</p>
      <div className='buttons'>
        <Button text='HINT' onClick={hintClick} />
        {hints >= 1 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
        {hints >= 2 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
        {hints >= 3 ? <LightBulb opacity='100%' /> : <LightBulb opacity='25%' />}
      </div>
      {matrixUser !== '' ? <GameBoard matrix={matrixUser} onChange={handleCellChange} /> : null}
      <div className='buttons'>
        <Button text='Reset' onClick={resetClick} />
        <Button text='Quit' onClick={quitClick} />
      </div>
    </main>
  );
}

export default GamePage;
