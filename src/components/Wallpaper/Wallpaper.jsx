import React, { useState, useEffect } from 'react';
import './Wallpaper.css';

export default function Wallpaper({ children, startGame, finishGame }) {
  const [wallPosition, setWallPosition] = useState('');

  useEffect(() => {
    if (window.innerWidth > 600) {
      setWallPosition('center');
    } else {
      startGame
        ? setWallPosition('center')
        : finishGame
        ? setWallPosition('right')
        : setWallPosition('left');
    }
  }, [startGame, finishGame]);

  return (
    <div className='wallpaper' style={{ backgroundPosition: wallPosition }}>
      {children}
    </div>
  );
}
