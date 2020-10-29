import { combineReducers, createStore } from 'redux';
import {
  startGameReducer,
  finishGameReducer,
  usernameReducer,
  difficultyReducer,
  timeReducer,
  hintsReducer,
  matrixReducer,
} from './reducers';

const allReducers = combineReducers({
  startGame: startGameReducer,
  finishGame: finishGameReducer,
  username: usernameReducer,
  difficulty: difficultyReducer,
  time: timeReducer,
  hints: hintsReducer,
  matrix: matrixReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
