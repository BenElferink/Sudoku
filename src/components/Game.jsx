import React, { useState, useEffect } from 'react';
import SudokuCreate from './../js/sudokuAlgorithm';
import { duplicateMatrix, filterMatrixByDifficulty } from './../js/matrixFunctions';
import Timer from './Timer';
import Hints from './Hints';
import SudokuChart from './SudokuChart';

function Game({ children, difficulty, startGame, setStartGame, sudokuData, setSudokuData }) {
  const [rawMatrix, setRawMatrix] = useState(new Array(9).fill(new Array(9).fill(''))); // original matrix, has all data
  const [diffMatrix, setDiffMatrix] = useState(new Array(9).fill(new Array(9).fill(''))); // filtered by difficulty, kept for reset purpose
  const [dispMatrix, setDispMatrix] = useState(new Array(9).fill(new Array(9).fill(''))); // displayed matrix, manipulated by user
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [hints, setHints] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [resetCount, setResetCount] = useState(0);

  // this side effect is used when 'startGame' is toggled 'true' or 'false',
  useEffect(() => {
    if (startGame) {
      // if true
      // it creates and sets all 3 required matrixes,
      let sudokuMatrix = SudokuCreate(9);
      let filteredMatrix = filterMatrixByDifficulty(duplicateMatrix(sudokuMatrix), difficulty);
      setRawMatrix(sudokuMatrix);
      setDiffMatrix(filteredMatrix);
      setDispMatrix(duplicateMatrix(filteredMatrix));
      // and sets timer & hints
      setTimer({ minutes: 0, seconds: 0 });
      setHints(difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : difficulty === 'hard' ? 1 : console.warn('DEV ERROR'));
    } else {
      // if false
      // reset all states (because component does not unmount, it's children swap)
      setRawMatrix(new Array(9).fill(new Array(9).fill('')));
      setDiffMatrix(new Array(9).fill(new Array(9).fill('')));
      setDispMatrix(new Array(9).fill(new Array(9).fill('')));
      setTimer({ minutes: 0, seconds: 0 });
      setHints(0);
      setHintsUsed(0);
      setResetCount(0);
    }
    // eslint-disable-next-line
  }, [startGame]);

  // ----------
  // ---------------
  // Functions for: control buttons
  // ---------------
  // ----------

  const clickGiveUp = () => {
    setStartGame(false);
  };

  const clickReset = () => {
    setDispMatrix(duplicateMatrix(diffMatrix));
    setTimer({ minutes: 0, seconds: 0 });
    setHints(difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : difficulty === 'hard' ? 1 : console.warn('DEV ERROR'));
    setResetCount(resetCount + 1);
  };

  const clickSolve = () => {
    let isSuccess = true,
      copyOfDisplayedMatrix = duplicateMatrix(dispMatrix);

    // target each cell of the displayed matrix, and compare with the same cell on the raw matrix,
    // return false only if an error has been recognized
    dispMatrix.forEach((row, i) => {
      row.forEach((col, j) => {
        if (col !== rawMatrix[i][j]) {
          // this clears the errors
          copyOfDisplayedMatrix[i][j] = '';
          isSuccess = false;
        }
      });
    });

    if (isSuccess) {
      window.alert('Congratulations! You finished the puzzle!');
      // if puzzle was correct (no mistakes)
      // store the game data
      let storedData = { ...sudokuData };
      let currentGameData = { difficulty, timer, hintsUsed, resetCount };
      storedData[`${difficulty}`].push(currentGameData);
      setSudokuData(storedData);
      setStartGame(false);
    } else {
      window.alert('Puzzle is incorrect, clearing error(s), try again...');
      setDispMatrix(copyOfDisplayedMatrix);
    }
  };

  return (
    <div className='game-page'>
      {startGame && (
        <>
          <Timer value={timer} setValue={setTimer} />
          <Hints
            hints={hints}
            dispMatrix={dispMatrix}
            rawMatrix={rawMatrix}
            updateStates={(matrixAfterHint) => {
              setDispMatrix(matrixAfterHint);
              setHintsUsed(hintsUsed + 1);
              setHints(hints - 1);
            }}
          />
        </>
      )}

      {children}
      <SudokuChart startGame={startGame} diffMatrix={diffMatrix} dispMatrix={dispMatrix} setDispMatrix={setDispMatrix} />

      {startGame && (
        <div className='controls'>
          <button onClick={clickGiveUp}>Give Up</button>
          <button onClick={clickReset}>Reset</button>
          <button onClick={clickSolve}>Solve</button>
        </div>
      )}
    </div>
  );
}

export default Game;
