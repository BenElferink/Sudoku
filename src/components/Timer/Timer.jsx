import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTime } from './../../redux/actions';
import './Timer.css';

export default function Timer() {
  const time = useSelector((state) => state.time);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(incrementTime());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return <div className='timer'>Time elapsed: {time}</div>;
}
