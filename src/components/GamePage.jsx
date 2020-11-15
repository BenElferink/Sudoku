import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clickQuit } from '../redux/actions/clickQuit';
import { clickReset } from '../redux/actions/clickReset';
import { gameComplete } from '../redux/actions/gameComplete';
import { changeScores } from '../redux/actions/changeScores';
import Hints from './Hints';
import GameBoard from './GameBoard';
import Timer from './Timer';

export default function GamePage({ style }) {
  const difficulty = useSelector((state) => state.difficulty);
  const playerData = useSelector((state) => state.playerData);
  const matrix = useSelector((state) => state.matrixData);
  const dispatch = useDispatch();

  const handleQuit = () => {
    dispatch(clickQuit());
  };

  const handleReset = () => {
    dispatch(clickReset(difficulty));
  };

  const handleFinish = () => {
    dispatch(gameComplete());
    dispatch(changeScores(playerData, difficulty));
  };

  return (
    <div style={style} className='page'>
      <div className='page-head'>
        <Timer time={playerData.time} />
        <Hints hints={playerData.hints} matrix={matrix} />
      </div>
      <div className='page-main'>
        <GameBoard matrix={matrix} handleFinish={handleFinish} />
      </div>
      <div className='btn-bar'>
        <button className='btn' onClick={handleQuit}>
          Quit
        </button>
        <button className='btn' onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
