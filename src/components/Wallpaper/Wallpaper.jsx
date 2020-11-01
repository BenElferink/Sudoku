import React from 'react';
import { useSpring, animated } from 'react-spring';
import './style/style.css';

export default function Wallpaper({ data, children }) {
  const spring = useSpring({
    backgroundPosition: placeWallpaper(data.startGame, data.finishGame),
  });

  return (
    <animated.div className='wallpaper' style={spring}>
      {children}
    </animated.div>
  );
}

const placeWallpaper = (start, finish) => {
  if (window.innerWidth < 768) {
    // [STATE: startGame: true, finishGame: false]
    if (start && !finish) {
      return '50%';
    }
    // [STATE: startGame: true, finishGame: true]
    else if (start && finish) {
      return '100%';
    }
    // [STATE: startGame: false, finishGame: true]
    else if (!start && finish) {
      return '100%';
    }
    // [STATE: startGame: false, finishGame: false]
    else if (!start && !finish) {
      return '0%';
    }
  } else {
    return '50%';
  }
};
