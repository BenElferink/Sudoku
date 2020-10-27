import React, { useEffect } from 'react';

function Timer({ timer, setTimer }) {
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

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return <p className='col-12 timer'>Time elapsed: {timer}</p>;
}

export default Timer;
