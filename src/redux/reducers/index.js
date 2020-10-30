import { combineReducers, createStore } from 'redux';
import { startGameReducer } from './startGameReducer';
import { finishGameReducer } from './finishGameReducer';
import { usernameReducer } from './usernameReducer';
import { difficultyReducer } from './difficultyReducer';
import { timeReducer } from './timeReducer';
import { hintsReducer } from './hintsReducer';
import { resetsReducer } from './resetsReducer';
import { matrixReducer } from './matrixReducer';

const allReducers = combineReducers({
  startGame: startGameReducer,
  finishGame: finishGameReducer,
  username: usernameReducer,
  difficulty: difficultyReducer,
  time: timeReducer,
  hints: hintsReducer,
  resets: resetsReducer,
  matrix: matrixReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
