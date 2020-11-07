import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { incrementTime } from '../redux/actions/incrementTime';
import { timeToString } from '../scripts/timeFunctions';

export default function Timer({ time }) {
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

  return <div className='timer'>Time elapsed: {timeToString(time)}</div>;
}
