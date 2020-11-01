import React from 'react';
import { useDispatch } from 'react-redux';
import { startGameToggle } from './../redux/actions/startGameToggle';
import { finishGameToggle } from './../redux/actions/finishGameToggle';
import Congrats from './../components/Congrats/Congrats';
import ScoreBoard from './../components/ScoreBoard/ScoreBoard';
import Button from '../components/Button/Button';
import './style/style.css';

export default function ScorePage({ played }) {
  const dispatch = useDispatch();

  const handleHome = () => {
    if (played) {
      dispatch(startGameToggle());
      dispatch(finishGameToggle());
    } else {
      dispatch(finishGameToggle());
    }
  };

  return (
    <div className='page'>
      <div className='page-content'>
        {played ? <Congrats /> : null}
        <ScoreBoard />
      </div>
      <div className='btn-bar'>
        <Button text='Home' onClick={handleHome} />
      </div>
    </div>
  );
}
