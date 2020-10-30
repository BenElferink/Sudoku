import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleStart,
  resetMatrix,
  timeReset,
  resetHints,
  incrementResets,
} from './../redux/actions';
import Hints from '../components/Hints/Hints';
import SudokuChart from '../components/SudokuChart/SudokuChart';
import Timer from '../components/Timer/Timer';
import Button from '../components/Button/Button';
import './page.css';

export default function GamePage() {
  const difficulty = useSelector((state) => state.difficulty);
  const dispatch = useDispatch();

  const handleQuit = () => {
    dispatch(toggleStart());
  };

  const handleReset = () => {
    dispatch(resetMatrix());
    dispatch(timeReset());
    dispatch(resetHints(difficulty));
    dispatch(incrementResets());
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
