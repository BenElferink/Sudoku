import React, { useState } from 'react';
import StartPage from './components/StartPage/StartPage';
import GamePage from './components/GamePage/GamePage';
import ScorePage from './components/ScorePage/ScorePage';

export function App() {
  const [startPage, setStartPage] = useState(true);
  const [gamePage, setGamePage] = useState(false);
  const [scorePage, setScorePage] = useState(false);
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('normal');

  const startClick = () => {
    if (name !== '') {
      setGamePage(true);
      setStartPage(false);
    }
  };

  const quitClick = () => {
    setStartPage(true);
    setGamePage(false);
  };

  return (
    <>
      {startPage ? (
        <StartPage
          className={gamePage ? 'hide' : 'show'}
          nameValue={name}
          nameChange={(e) => {
            setName(e.target.value);
          }}
          difficultyValue={difficulty}
          difficultyChange={(e) => {
            setDifficulty(e.target.value);
          }}
          startClick={startClick}
        />
      ) : null}
      {gamePage ? <GamePage difficulty={difficulty} quitClick={quitClick} /> : null}
      {scorePage ? <ScorePage /> : null}
    </>
  );
}

export default App;
