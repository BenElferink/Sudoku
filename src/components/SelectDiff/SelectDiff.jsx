import React from 'react';
import { useDispatch } from 'react-redux';
import { changeDiff } from './../../redux/actions';
import './SelectDiff.css';

export default function SelectDiff({ value }) {
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
          checked={value === 'easy'}
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
          checked={value === 'normal'}
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
          checked={value === 'hard'}
        />
        <label>hard</label>
      </li>
    </ul>
  );
}
