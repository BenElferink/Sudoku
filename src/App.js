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

  const pageToMount = () => {
    // [STATE: startGame: true, finishGame: false]
    if (startGame && !finishGame) {
      console.log('Mount: ~GamePage');
      return <GamePage />;
    }
    // [STATE: startGame: true, finishGame: true]
    else if (startGame && finishGame) {
      console.log('Mount: ~ScorePage');
      return <ScorePage played={true} />;
    }
    // [STATE: startGame: false, finishGame: true]
    else if (!startGame && finishGame) {
      console.log('Mount: ~ScorePage');
      return <ScorePage played={false} />;
    }
    // [STATE: startGame: false, finishGame: false]
    else if (!startGame && !finishGame) {
      console.log('Mount: ~SetupPage');
      return <SetupPage />;
    }
  };

  return <Wallpaper data={{ startGame, finishGame }}>{pageToMount()}</Wallpaper>;
}
