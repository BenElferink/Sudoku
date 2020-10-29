import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStart, resetTime, resetHints, resetMatrix } from './../redux/actions';
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
    dispatch(resetTime());
    dispatch(resetHints(difficulty));
    dispatch(resetMatrix());
  };

  const handleFinish = () => {};

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
        <Button text='Finish' onClick={handleFinish} />
      </div>
    </div>
  );
}
