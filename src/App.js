import React, { useState } from 'react';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';
import ScorePage from './components/ScorePage';

function App() {
  const [startPage, setStartPage] = useState(false);
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('normal');
  const [gamePage, setGamePage] = useState(true);
  const [timer, setTimer] = useState('00:00');
  const [hints, setHints] = useState(3);
  const [scorePage, setScorePage] = useState(false);

  const handleHintClick = () => {
    if (hints > 0) {
      setHints(hints - 1);
    }
  };

  return (
    <>
      {startPage ? (
        <StartPage
          name={name}
          nameChange={(e) => {
            setName(e.target.value);
          }}
          diff={difficulty}
          diffChange={(e) => {
            setDifficulty(e.target.value);
          }}
          startGame={null}
        />
      ) : null}
      {gamePage ? (
        <GamePage
          timer={timer}
          hints={hints}
          hintClick={handleHintClick}
          resetClick={null}
          abortClick={null}
        />
      ) : null}
      {scorePage ? <ScorePage /> : null}
    </>
  );
}

export default App;
