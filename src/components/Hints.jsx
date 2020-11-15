import React from 'react';
import { useDispatch } from 'react-redux';
import { activateHint } from '../redux/actions/activateHint';
import { changeMatrix } from '../redux/actions/changeMatrix';

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
      {hints.remaining >= 1 ? returnIcon('100%') : returnIcon('25%')}
      {hints.remaining >= 2 ? returnIcon('100%') : returnIcon('25%')}
      {hints.remaining >= 3 ? returnIcon('100%') : returnIcon('25%')}
    </div>
  );
}

function returnIcon(opacity) {
  return (
    <svg
      style={{ opacity: opacity }}
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'>
      <g>
        <path d='M18 42c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2H18v2zm6-38c-7.73 0-14 6.27-14 14 0 4.76 2.38 8.95 6 11.48V34c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.52c3.62-2.53 6-6.72 6-11.48 0-7.73-6.27-14-14-14zm5.71 22.2L28 27.39V32h-8v-4.6l-1.71-1.19C15.6 24.33 14 21.27 14 18.01c0-5.51 4.49-10 10-10s10 4.49 10 10c0 3.25-1.6 6.31-4.29 8.19z' />
      </g>
    </svg>
  );
}
