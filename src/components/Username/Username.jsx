import React from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../../redux/actions/changeName';
import './style/style.css';

export default function Username({ value }) {
  const dispatch = useDispatch();

  return (
    <input
      className='username'
      placeholder='nickname:'
      value={value}
      onChange={(e) => {
        dispatch(changeName(e.target.value));
      }}
    />
  );
}
