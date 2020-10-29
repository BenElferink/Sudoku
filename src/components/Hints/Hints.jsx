import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMatrix, decrementHints } from './../../redux/actions';
import Button from './../Button/Button';
import Icon from './LightBulb-48px';
import './Hints.css';

export default function Hints() {
  const matrixOriginal = useSelector((state) => state.matrix.original);
  const matrixPlayed = useSelector((state) => state.matrix.played);
  const hints = useSelector((state) => state.hints);
  const dispatch = useDispatch();

  const clickHint = () => {
    if (hints > 0) {
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
      dispatch(decrementHints());
    } else {
      console.log('no hints left');
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
