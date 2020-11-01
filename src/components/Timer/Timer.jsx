import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { timeIncrement } from './../../redux/actions/timeIncrement';
import { timeToString } from '../../scripts/timeFunctions';
import './style/style.css';

export default function Timer({ time }) {
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
