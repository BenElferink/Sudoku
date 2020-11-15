import React from 'react';
import { useDispatch } from 'react-redux';
import { clickQuit } from '../redux/actions/clickQuit';
import Congrats from './Congrats';
import ScoreBoard from './ScoreBoard';

export default function ScorePage({ style, played }) {
  const dispatch = useDispatch();

  const handleHome = () => {
    dispatch(clickQuit());
  };

  return (
    <div style={style} className='page'>
      <div className='page-head'>{played ? <Congrats /> : null}</div>
      <div className='page-main'>
        <ScoreBoard />
      </div>
      <div className='btn-bar'>
        <button className='btn' onClick={handleHome}>
          Home
        </button>
      </div>
    </div>
  );
}
