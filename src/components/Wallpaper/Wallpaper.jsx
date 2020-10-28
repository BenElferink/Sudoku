import React, { useState, useEffect } from 'react';
import './Wallpaper.css';

export default function Wallpaper({ children, startGame, finishGame }) {
  const [wallPosition, setWallPosition] = useState(
    startGame ? 'center' : finishGame ? 'right' : 'left'
  );

  useEffect(() => {
    startGame
      ? setWallPosition('center')
      : finishGame
      ? setWallPosition('right')
      : setWallPosition('left');
  }, [startGame, finishGame]);

  return (
    <div className='wallpaper' style={{ backgroundPosition: wallPosition }}>
      {children}
    </div>
  );
}
