import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameToggle } from './../redux/actions/startGameToggle';
import { finishGameToggle } from './../redux/actions/finishGameToggle';
import { timeReset } from './../redux/actions/timeReset';
import { hintsReset } from './../redux/actions/hintsReset';
import { resetsIncrement } from './../redux/actions/resetsIncrement';
import { matrixReset } from './../redux/actions/matrixReset';
import { scoresUpdate } from './../redux/actions/scoresUpdate';
import Hints from '../components/Hints/Hints';
import GameBoard from '../components/GameBoard/GameBoard';
import Timer from '../components/Timer/Timer';
import Button from '../components/Button/Button';
import './style/style.css';

export default function GamePage() {
  const username = useSelector((state) => state.username);
  const difficulty = useSelector((state) => state.difficulty);
  const time = useSelector((state) => state.time);
  const hints = useSelector((state) => state.hints);
  const resets = useSelector((state) => state.resets);
  const matrix = useSelector((state) => state.matrix);
  const dispatch = useDispatch();

  const handleQuit = () => {
    dispatch(startGameToggle());
  };

  const handleReset = () => {
    dispatch(matrixReset());
    dispatch(timeReset());
    dispatch(hintsReset(difficulty));
    dispatch(resetsIncrement());
  };

  const handleFinish = () => {
    dispatch(scoresUpdate(username, difficulty, time, hints, resets));
    dispatch(finishGameToggle());
  };

  return (
    <div className='page'>
      <div className='page-content'>
        <Timer time={time} />
        <Hints hints={hints} matrix={matrix} />
        <GameBoard matrix={matrix} handleFinish={handleFinish} />
      </div>
      <div className='btn-bar'>
        <Button text='Quit' onClick={handleQuit} />
        <Button text='Reset' onClick={handleReset} />
      </div>
    </div>
  );
}
