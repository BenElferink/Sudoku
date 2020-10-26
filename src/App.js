import React, { useState } from 'react';
import StartPage from './components/StartPage/StartPage';
import GamePage from './components/GamePage/GamePage';
import ScorePage from './components/ScorePage/ScorePage';

export function App() {
  const [sideScroll, setSideScroll] = useState('-0%');
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('normal');

  const startClick = () => {
    if (name !== '') {
      setSideScroll('-100%');
    }
  };

  const quitClick = () => {
    setSideScroll('-0%');
  };

  return (
    <main style={{ left: sideScroll }}>
      <StartPage
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
      <GamePage difficulty={difficulty} quitClick={quitClick} />
      <ScorePage />
    </main>
  );
}

export default App;
