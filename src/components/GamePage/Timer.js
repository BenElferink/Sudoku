import React, { useEffect } from 'react';

function Timer({ time, setTime }) {
  useEffect(() => {
    const startTime = () => {
      let minutes = parseInt(time.substring(0, 2));
      let seconds = parseInt(time.substring(3, 5));
      if (seconds < 59) {
        seconds++;
      } else {
        seconds = 0;
        minutes++;
      }
      seconds < 10 ? (seconds = `0${seconds}`) : (seconds = `${seconds}`);
      minutes < 10 ? (minutes = `0${minutes}`) : (minutes = `${minutes}`);
      setTime(`${minutes}:${seconds}`);
    };

    setTimeout(() => {
      startTime();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return <p className='timer'>Time elapsed: {time}</p>;
}

export default Timer;
