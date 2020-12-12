import React, { useState, useEffect } from 'react';
import { getStorage, setStorage } from './js/localSotrage';
import './style/style.css';
import Introduction from './components/Introduction';
import Difficulty from './components/Difficulty';
import Game from './components/Game';

function CurrencyConverter() {
  const [startGame, setStartGame] = useState(false);
  const [difficulty, setDifficulty] = useState('normal');
  const [sudokuData, setSudokuData] = useState(getStorage('sudokuData', { easy: [], normal: [], hard: [] }));

  useEffect(() => {
    setStorage('sudokuData', sudokuData);
  }, [sudokuData]);

  return (
    <div className='SUDOKU'>
      <Game difficulty={difficulty} startGame={startGame} setStartGame={setStartGame} sudokuData={sudokuData} setSudokuData={setSudokuData}>
        {!startGame && (
          <div className='start-group'>
            <Introduction sudokuData={sudokuData} difficulty={difficulty} />
            <Difficulty value={difficulty} setValue={setDifficulty} />
            <button
              onClick={() => {
                setStartGame(true);
              }}>
              Start Game
            </button>
          </div>
        )}
      </Game>
    </div>
  );
}

export default CurrencyConverter;
