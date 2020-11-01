import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clickQuit } from '../../redux/actions/clickQuit';
import { clickReset } from '../../redux/actions/clickReset';
import { gameComplete } from '../../redux/actions/gameComplete';
import { changeScores } from '../../redux/actions/changeScores';
import Hints from '../Hints/Hints';
import GameBoard from '../GameBoard/GameBoard';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';
import './style/style.css';

export default function GamePage() {
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
    <div className='page'>
      <div className='page-content'>
        <Timer time={playerData.time} />
        <Hints hints={playerData.hints} matrix={matrix} />
        <GameBoard matrix={matrix} handleFinish={handleFinish} />
      </div>
      <div className='btn-bar'>
        <Button text='Quit' onClick={handleQuit} />
        <Button text='Reset' onClick={handleReset} />
      </div>
    </div>
  );
}
