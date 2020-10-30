import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameToggle } from './../redux/actions/startGameToggle';
import { finishGameToggle } from './../redux/actions/finishGameToggle';
import { timeReset } from './../redux/actions/timeReset';
import { hintsReset } from './../redux/actions/hintsReset';
import { resetsReset } from './../redux/actions/resetsReset';
import { matrixCreate } from './../redux/actions/matrixCreate';
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
      dispatch(startGameToggle());
      dispatch(timeReset());
      dispatch(hintsReset(difficulty));
      dispatch(resetsReset());
      dispatch(matrixCreate(difficulty));
    } else {
      window.alert('error: create a username');
    }
  };

  const handleShowScores = () => {
    dispatch(finishGameToggle());
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
