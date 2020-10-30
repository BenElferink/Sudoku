import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleStart,
  toggleFinish,
  createMatrix,
  resetTime,
  resetHints,
  resetResets,
} from './../redux/actions';
import Title from '../components/Title/Title';
import Username from '../components/Username/Username';
import SelectDiff from '../components/SelectDiff/SelectDiff';
import Button from '../components/Button/Button';
import './page.css';

export default function SetupPage() {
  const difficulty = useSelector((state) => state.difficulty);
  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(createMatrix(difficulty));
    dispatch(resetTime());
    dispatch(resetHints(difficulty));
    dispatch(resetResets());
    dispatch(toggleStart());
  };

  const handleShowScores = () => {
    dispatch(toggleFinish());
  };

  return (
    <div className='page'>
      <div className='page-content'>
        <Title />
        <Username />
        <SelectDiff />
      </div>
      <div className='btn-bar'>
        <Button text='Start Game!' onClick={handleStartGame} />
        <Button text='Show Scores' onClick={handleShowScores} />
      </div>
    </div>
  );
}
