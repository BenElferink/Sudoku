import React, { useState, useEffect } from 'react';
// import { useTransition, animated } from 'react-spring';
import SetupPage from './..//Pages/SetupPage';
import GamePage from './../Pages/GamePage';
import ScorePage from './../Pages/ScorePage';

export default function Pages({ startGame, finishGame }) {
  const [page, setPage] = useState(null);

  useEffect(() => {
    setPage(pageToMount(startGame, finishGame));
  }, [startGame, finishGame]);

  // const transitions = useTransition(page, (item) => item.id, {
  //   from: { opacity: '0' },
  //   enter: { opacity: '1' },
  //   leave: { opacity: '0' },
  // });

  // return transitions.map((test, key, style) => <animated.div>{test}</animated.div>);
  return page;
}

const pageToMount = (start, finish) => {
  if (start && !finish) {
    return <GamePage />;
  } else if (start && finish) {
    return <ScorePage played={true} />;
  } else if (!start && finish) {
    return <ScorePage played={false} />;
  } else if (!start && !finish) {
    return <SetupPage />;
  }
};
