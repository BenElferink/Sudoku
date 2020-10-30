import React from 'react';
import { useDispatch } from 'react-redux';
import { usernameUpdate } from './../../redux/actions/usernameUpdate';
import './Username.css';

export default function Username({ value }) {
  const dispatch = useDispatch();

  return (
    <input
      className='username'
      placeholder='nickname:'
      value={value}
      onChange={(e) => {
        dispatch(usernameUpdate(e.target.value));
      }}
    />
  );
}
