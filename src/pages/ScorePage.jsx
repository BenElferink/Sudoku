import React from 'react';
import { useDispatch } from 'react-redux';
import { startGameToggle } from './../redux/actions/startGameToggle';
import { finishGameToggle } from './../redux/actions/finishGameToggle';
import ScoreBoard from './../components/ScoreBoard/ScoreBoard';
import Button from '../components/Button/Button';
import './page.css';

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
        <ScoreBoard />
      </div>
      <div className='btn-bar'>
        <Button text='Home' onClick={handleHome} />
      </div>
    </div>
  );
}
