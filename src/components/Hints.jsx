import React from 'react';
import { useDispatch } from 'react-redux';
import { activateHint } from '../redux/actions/activateHint';
import { changeMatrix } from '../redux/actions/changeMatrix';
import Icon from './LightBulb-48px';

export default function Hints({ hints, matrix }) {
  const dispatch = useDispatch();

  const clickHint = () => {
    if (hints.remaining > 0) {
      while (true) {
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        if (matrix.played[i][j] === '') {
          let revealNumber = matrix.original[i][j];
          dispatch(changeMatrix(revealNumber, i, j));
          break;
        }
      }
      dispatch(activateHint());
    }
  };

  return (
    <div className='hints'>
      <button className='btn' onClick={clickHint}>
        HINT
      </button>
      {hints.remaining >= 1 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hints.remaining >= 2 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hints.remaining >= 3 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
    </div>
  );
}
