import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hintsUse } from './../../redux/actions/hintsUse';
import { matrixUpdate } from './../../redux/actions/matrixUpdate';
import Button from './../Button/Button';
import Icon from './LightBulb-48px';
import './Hints.css';

export default function Hints() {
  const hints = useSelector((state) => state.hints.remaining);
  const matrix = useSelector((state) => state.matrix);
  const dispatch = useDispatch();

  const clickHint = () => {
    if (hints > 0) {
      while (true) {
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        if (matrix.played[i][j] === '') {
          let revealNumber = matrix.original[i][j];
          dispatch(matrixUpdate(revealNumber, i, j));
          break;
        }
      }
      dispatch(hintsUse());
    }
  };

  return (
    <div className='hints'>
      <Button text='HINT' onClick={clickHint} />
      {hints >= 1 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hints >= 2 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hints >= 3 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
    </div>
  );
}
