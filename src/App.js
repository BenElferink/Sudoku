import React from 'react';
import { useSelector } from 'react-redux';
import Wallpaper from './components/Wallpaper/Wallpaper';
import SetupPage from './pages/SetupPage';
import GamePage from './pages/GamePage';
import ScorePage from './pages/ScorePage';
import './style/style.css';

export default function App() {
  const startGame = useSelector((state) => state.startGame);
  const finishGame = useSelector((state) => state.finishGame);

  return (
    <Wallpaper startGame={startGame} finishGame={finishGame}>
      {startGame ? (
        /* [STATE: startGame: true, finishGame: false] */
        <GamePage />
      ) : finishGame ? (
        /* [STATE: startGame: false, finishGame: true] */
        <ScorePage />
      ) : (
        /* [STATE: startGame: false, finishGame: false] */
        <SetupPage />
      )}
    </Wallpaper>
  );
}
