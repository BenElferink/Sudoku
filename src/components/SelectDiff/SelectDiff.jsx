import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeDiff } from './../../redux/actions';
import './SelectDiff.css';

export default function SelectDiff() {
  const difficulty = useSelector((state) => state.difficulty);
  const dispatch = useDispatch();

  return (
    <ul className='select-diff'>
      <li>
        <input
          type='radio'
          name='difficulty'
          value='easy'
          onChange={(e) => {
            dispatch(changeDiff(e.target.value));
          }}
          checked={difficulty === 'easy'}
        />
        <label>easy</label>
      </li>
      <li>
        <input
          type='radio'
          name='difficulty'
          value='normal'
          onChange={(e) => {
            dispatch(changeDiff(e.target.value));
          }}
          checked={difficulty === 'normal'}
        />
        <label>normal</label>
      </li>
      <li>
        <input
          type='radio'
          name='difficulty'
          value='hard'
          onChange={(e) => {
            dispatch(changeDiff(e.target.value));
          }}
          checked={difficulty === 'hard'}
        />
        <label>hard</label>
      </li>
    </ul>
  );
}
