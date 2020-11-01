import React from 'react';
import './style/style.css';

export default function Wallpaper({ data, children }) {
  const placeWallpaper = (start, finish) => {
    if (window.innerWidth < 768) {
      // [STATE: startGame: true, finishGame: false]
      if (start && !finish) {
        console.log('Transition: ~Wallpaper');
        return 'center';
      }
      // [STATE: startGame: true, finishGame: true]
      else if (start && finish) {
        console.log('Transition: ~Wallpaper');
        return 'right';
      }
      // [STATE: startGame: false, finishGame: true]
      else if (!start && finish) {
        console.log('Transition: ~Wallpaper');
        return 'right';
      }
      // [STATE: startGame: false, finishGame: false]
      else if (!start && !finish) {
        console.log('Transition: ~Wallpaper');
        return 'left';
      }
    } else {
      console.log('DISABLED/Transition: ~Wallpaper');
      return 'center';
    }
  };

  return (
    <div
      className='wallpaper'
      style={{ backgroundPosition: placeWallpaper(data.startGame, data.finishGame) }}>
      {children}
    </div>
  );
}
