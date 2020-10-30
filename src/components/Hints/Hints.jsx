import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateMatrix,
  decrementHintsLeft,
  incrementHintsUsed,
} from './../../redux/actions';
import Button from './../Button/Button';
import Icon from './LightBulb-48px';
import './Hints.css';

export default function Hints() {
  const matrixOriginal = useSelector((state) => state.matrix.original);
  const matrixPlayed = useSelector((state) => state.matrix.played);
  const hintsLeft = useSelector((state) => state.hintsLeft);
  const dispatch = useDispatch();

  const clickHint = () => {
    if (hintsLeft > 0) {
      let loop = true;
      while (loop) {
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        if (matrixPlayed[i][j] === '') {
          let revealNumber = matrixOriginal[i][j];
          dispatch(updateMatrix(revealNumber, i, j));
          loop = false;
        }
      }
      dispatch(decrementHintsLeft());
      dispatch(incrementHintsUsed());
    } else {
      console.log('no hints left');
    }
  };

  return (
    <div className='hints'>
      <Button text='HINT' onClick={clickHint} />
      {hintsLeft >= 1 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hintsLeft >= 2 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {hintsLeft >= 3 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
    </div>
  );
}
