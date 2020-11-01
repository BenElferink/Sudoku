import { combineReducers, createStore } from 'redux';
import { startGameReducer } from './startGameReducer';
import { finishGameReducer } from './finishGameReducer';
import { difficultyReducer } from './difficultyReducer';
import { matrixDataReducer } from './matrixDataReducer';
import { scoresDataReducer } from './scoresDataReducer';
import { playerDataReducer } from './playerDataReducer';

const allReducers = combineReducers({
  startGame: startGameReducer,
  finishGame: finishGameReducer,
  difficulty: difficultyReducer,
  playerData: playerDataReducer,
  matrixData: matrixDataReducer,
  scoresData: scoresDataReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
