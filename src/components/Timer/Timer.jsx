import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { timeIncrement } from './../../redux/actions';
import './Timer.css';

export default function Timer() {
  const time = useSelector((state) => state.time);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(timeIncrement());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return <div className='timer'>Time elapsed: {timeToString(time)}</div>;
}

function timeToString(timeState) {
  let minutes = timeState.minutes;
  let seconds = timeState.seconds;
  minutes < 10 ? (minutes = `0${minutes}`) : (minutes = `${minutes}`);
  seconds < 10 ? (seconds = `0${seconds}`) : (seconds = `${seconds}`);
  return `${minutes}:${seconds}`;
}
