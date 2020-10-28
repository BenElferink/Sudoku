import React, { useState, useEffect } from 'react';
import './Timer.css';

export default function Timer({ pullData, hideShow }) {
  const [timer, setTimer] = useState('00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      let minutes = parseInt(timer.substring(0, 2));
      let seconds = parseInt(timer.substring(3, 5));

      if (seconds < 59) {
        seconds++;
      } else {
        seconds = 0;
        minutes++;
      }

      seconds < 10 ? (seconds = `0${seconds}`) : (seconds = `${seconds}`);
      minutes < 10 ? (minutes = `0${minutes}`) : (minutes = `${minutes}`);
      setTimer(`${minutes}:${seconds}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  useEffect(() => {
    if (hideShow === 'hide') {
      pullData(timer);
    }
  });

  return <div className={`timer ${hideShow}`}>Time elapsed: {timer}</div>;
}
