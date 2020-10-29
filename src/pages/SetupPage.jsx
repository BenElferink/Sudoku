import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createMatrix, resetTime, resetHints, toggleStart } from './../redux/actions';
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
    dispatch(toggleStart());
  };

  return (
    <div className='page'>
      <div className='page-content'>
        <Title />
        <Username />
        <SelectDiff />
      </div>
      <div className='btn-bar'>
        <Button text='Show Scores' onClick={() => {}} />
        <Button text='Start Game!' onClick={handleStartGame} />
      </div>
    </div>
  );
}
