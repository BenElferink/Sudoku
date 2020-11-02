import React from 'react';
import { useDispatch } from 'react-redux';
import { clickQuit } from '../../redux/actions/clickQuit';
import Congrats from '../Congrats/Congrats';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import Button from '../Button/Button';
import './style/style.css';

export default function ScorePage({ style, played }) {
  const dispatch = useDispatch();

  const handleHome = () => {
    dispatch(clickQuit());
  };

  return (
    <div style={style} className='page'>
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
