import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameToggle } from './../redux/actions/startGameToggle';
import { timeReset } from './../redux/actions/timeReset';
import { hintsReset } from './../redux/actions/hintsReset';
import { resetsIncrement } from './../redux/actions/resetsIncrement';
import { matrixReset } from './../redux/actions/matrixReset';
import Hints from '../components/Hints/Hints';
import SudokuChart from '../components/SudokuChart/SudokuChart';
import Timer from '../components/Timer/Timer';
import Button from '../components/Button/Button';
import './page.css';

export default function GamePage() {
  const difficulty = useSelector((state) => state.difficulty);
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

  return (
    <div className='page'>
      <div className='page-content'>
        <Timer />
        <Hints />
        <SudokuChart />
      </div>
      <div className='btn-bar'>
        <Button text='Quit' onClick={handleQuit} />
        <Button text='Reset' onClick={handleReset} />
      </div>
    </div>
  );
}
