import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from './../../redux/actions';
import './Username.css';

export default function Username() {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();

  return (
    <input
      className='username'
      placeholder='nickname:'
      value={username}
      onChange={(e) => {
        dispatch(changeName(e.target.value));
      }}
    />
  );
}
