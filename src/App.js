import React from 'react';
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import Pages from './components/Pages/Pages';
import './style/style.css';

export default function App() {
  const startGame = useSelector((state) => state.startGame);
  const finishGame = useSelector((state) => state.finishGame);

  const spring = useSpring({
    backgroundPosition: placeWallpaper(startGame, finishGame),
  });

  return (
    <animated.div className='wallpaper' style={spring}>
      <Pages startGame={startGame} finishGame={finishGame} />
    </animated.div>
  );
}

const placeWallpaper = (start, finish) => {
  if (window.innerWidth < 768) {
    if (start && !finish) {
      return '50%';
    } else if (start && finish) {
      return '100%';
    } else if (!start && finish) {
      return '100%';
    } else if (!start && !finish) {
      return '0%';
    }
  } else {
    return '50%';
  }
};
