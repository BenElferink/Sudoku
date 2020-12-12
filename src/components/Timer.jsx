import React, { useEffect } from 'react';

export default function Timer({ value, setValue }) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (value.seconds < 59) {
        setValue({ minutes: value.minutes, seconds: value.seconds + 1 });
      } else {
        setValue({ minutes: value.minutes + 1, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return <p className='timer'>Time elapsed: {timeToString(value)}</p>;
}

const timeToString = (timeState) => {
  let minutes = timeState.minutes;
  let seconds = timeState.seconds;
  minutes < 10 ? (minutes = `0${minutes}`) : (minutes = `${minutes}`);
  seconds < 10 ? (seconds = `0${seconds}`) : (seconds = `${seconds}`);
  return `${minutes}:${seconds}`;
};
