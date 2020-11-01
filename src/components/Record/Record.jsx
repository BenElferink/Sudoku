import React from 'react';
import { timeToString } from './../../scripts/timeFunctions';
import './style/style.css';

export default function Record({ position, username, time, hints, resets }) {
  return (
    <div className='record'>
      <span>#{position}</span>
      <div className='categories'>
        Name:
        <br />
        Time elapsed:
        <br />
        Hints used:
        <br />
        Number of resets:
        <br />
      </div>
      <div className='data'>
        {username}
        <br />
        {time !== '' ? timeToString(time) : ''}
        <br />
        {hints.used}
        <br />
        {resets}
        <br />
      </div>
    </div>
  );
}
