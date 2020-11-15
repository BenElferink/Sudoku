import React, { useState, useEffect } from 'react';
import { Transition } from 'react-spring/renderprops';
import SetupPage from './SetupPage';
import GamePage from './GamePage';
import ScorePage from './ScorePage';

export default function Pages({ startGame, finishGame }) {
  const [page, setPage] = useState(null);

  useEffect(() => {
    setPage(pageToDisplay(startGame, finishGame));
  }, [startGame, finishGame]);

  return (
    <Transition
      items={page}
      from={{ transform: 'translate(0% ,-100%)', position: 'absolute' }}
      enter={{ transform: 'translate(0% ,0%)' }}
      leave={{ transform: 'translate(0% ,-100%)' }}>
      {(page) =>
        page === 'game'
          ? (props) => <GamePage style={props} />
          : page === 'complete'
          ? (props) => <ScorePage style={props} played={true} />
          : page === 'scores'
          ? (props) => <ScorePage style={props} played={false} />
          : page === 'setup'
          ? (props) => <SetupPage style={props} />
          : null
      }
    </Transition>
  );
}

const pageToDisplay = (start, finish) => {
  if (start && !finish) {
    return 'game';
  } else if (start && finish) {
    return 'complete';
  } else if (!start && finish) {
    return 'scores';
  } else if (!start && !finish) {
    return 'setup';
  }
};
