import React, { useState, useEffect } from 'react';
import './Wallpaper.css';

export default function Wallpaper({ startGame, finishGame, children }) {
  const [wallPosition, setWallPosition] = useState('');

  useEffect(() => {
    if (window.innerWidth > 768) {
      setWallPosition('center');
    } else {
      // [STATE: startGame: true, finishGame: false]
      startGame && !finishGame
        ? setWallPosition('center')
        : // [STATE: startGame: true, finishGame: true |OR| STATE: startGame: false, finishGame: true]
        (startGame && finishGame) || (!startGame && finishGame)
        ? setWallPosition('right')
        : // [STATE: startGame: false, finishGame: false]
          setWallPosition('left');
    }
  }, [startGame, finishGame]);

  return (
    <div className='wallpaper' style={{ backgroundPosition: wallPosition }}>
      {children}
    </div>
  );
}
