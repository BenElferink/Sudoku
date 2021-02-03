import { useState, useEffect, useCallback, useContext } from 'react';
import { getStorage, setStorage } from './js/localStorage';
import { MatrixContext } from './js/matrixContextAPI';
import { duplicateMatrix } from './js/matrixFunctions';
import './style/style.css';
import Introduction from './components/Introduction';
import ChooseDifficulty from './components/ChooseDifficulty';
import Timer from './components/Timer';
import Hints from './components/Hints';
import SudokuTable from './components/SudokuTable';

export default function App() {
  // gameRecords holds an object with 3 keys: 'easy', 'normal', 'hard',
  // each lkey has an array of game data, which can be used to show personal best or even create a leaderboard.
  const [gameRecords, setGameRecords] = useState(
    useCallback(() => getStorage('Sudoku_by_Ben_Elferink', { easy: [], normal: [], hard: [] }), []),
  );
  // all of the game records are pulled & saved into local storage!
  useEffect(() => setStorage('Sudoku_by_Ben_Elferink', gameRecords), [gameRecords]);

  // the sudoku matrixes (3 of them) are held and handled in Context API
  const { matrixes, setMatrixes, prepMatrixesForStartGame, prepMatrixesForEndGame } = useContext(
    MatrixContext,
  );

  // these are the game states
  const [startGame, setStartGame] = useState(false);
  const [difficulty, setDifficulty] = useState('normal');
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [hints, setHints] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [resetCount, setResetCount] = useState(0);

  // ----------
  // ---------------
  // Functions for: control buttons
  // ---------------
  // ----------

  const clickStartGame = () => {
    // create and set all 3 required matrixes,
    prepMatrixesForStartGame(difficulty);
    // set timer & hints
    setTimer({ minutes: 0, seconds: 0 });
    switch (difficulty) {
      case 'easy':
        setHints(3);
        break;
      case 'normal':
        setHints(2);
        break;
      case 'hard':
        setHints(1);
        break;
      default:
        break;
    }
    // and toggle the UI
    setStartGame(true);
  };

  const clickGiveUp = () => {
    // reset all states (because component does not unmount, it's children swap)
    prepMatrixesForEndGame();
    setTimer({ minutes: 0, seconds: 0 });
    setHints(0);
    setHintsUsed(0);
    setResetCount(0);
    // and toggle the UI
    setStartGame(false);
  };

  const clickReset = () => {
    // reset the played matrix with the filtered matrix
    setMatrixes({ ...matrixes, played: matrixes.filtered });
    // reset timer & hints
    setTimer({ minutes: 0, seconds: 0 });
    switch (difficulty) {
      case 'easy':
        setHints(3);
        break;
      case 'normal':
        setHints(2);
        break;
      case 'hard':
        setHints(1);
        break;
      default:
        break;
    }
    setHintsUsed(0);
    // add +1 to the reset count
    setResetCount((prevState) => prevState + 1);
  };

  const clickSolve = () => {
    let isSuccess = true,
      copyOfPlayedMatrix = duplicateMatrix(matrixes.played);

    // target each cell of the played matrix, and compare with the same cell on the complete matrix,
    // return false only if an error has been recognized
    matrixes.played.forEach((row, i) => {
      row.forEach((col, j) => {
        if (col !== matrixes.complete[i][j]) {
          // this clears the errors
          copyOfPlayedMatrix[i][j] = '';
          isSuccess = false;
        }
      });
    });

    if (isSuccess) {
      window.alert('Congratulations! You finished the puzzle!');
      // if puzzle was correct (no mistakes)
      // store the game data
      let storedData = { ...gameRecords };
      let currentGameData = { difficulty, timer, hintsUsed, resetCount };
      storedData[`${difficulty}`].push(currentGameData);
      setGameRecords(storedData);
      // then reset all states (because component does not unmount, it's children swap)
      prepMatrixesForEndGame();
      setTimer({ minutes: 0, seconds: 0 });
      setHints(0);
      setHintsUsed(0);
      setResetCount(0);
      // and toggle the UI
      setStartGame(false);
    } else {
      window.alert('Puzzle is incorrect, clearing error(s), try again...');
      setMatrixes({ ...matrixes, played: copyOfPlayedMatrix });
    }
  };

  if (!startGame) {
    return (
      <div className='app'>
        <div className='startGroup'>
          <Introduction gameRecords={gameRecords} difficulty={difficulty} />
          <ChooseDifficulty value={difficulty} setValue={setDifficulty} />
          <button onClick={clickStartGame}>Start Game</button>
        </div>
        <SudokuTable startGame={startGame} />
      </div>
    );
  } else {
    return (
      <div className='app'>
        <Timer value={timer} setValue={setTimer} />
        <Hints value={hints} setValue={setHints} setHintsUsed={setHintsUsed} />
        <SudokuTable startGame={startGame} />
        <div className='controls'>
          <button onClick={clickGiveUp}>Give Up</button>
          <button onClick={clickReset}>Reset</button>
          <button onClick={clickSolve}>Solve</button>
        </div>
      </div>
    );
  }
}
