import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleStart,
  toggleFinish,
  createMatrix,
  timeReset,
  resetHints,
  resetResets,
} from './../redux/actions';
import Title from '../components/Title/Title';
import Username from '../components/Username/Username';
import SelectDiff from '../components/SelectDiff/SelectDiff';
import Button from '../components/Button/Button';
import './page.css';

export default function SetupPage() {
  const username = useSelector((state) => state.username);
  const difficulty = useSelector((state) => state.difficulty);
  const dispatch = useDispatch();

  const handleStartGame = () => {
    if (username !== '') {
      dispatch(createMatrix(difficulty));
      dispatch(timeReset());
      dispatch(resetHints(difficulty));
      dispatch(resetResets());
      dispatch(toggleStart());
    } else {
      window.alert('error: create a username');
    }
  };

  const handleShowScores = () => {
    dispatch(toggleFinish());
  };

  return (
    <div className='page'>
      <div className='page-content'>
        <Title />
        <Username value={username} />
        <SelectDiff value={difficulty} />
      </div>
      <div className='btn-bar'>
        <Button text='Start Game!' onClick={handleStartGame} />
        <Button text='Show Scores' onClick={handleShowScores} />
      </div>
    </div>
  );
}
