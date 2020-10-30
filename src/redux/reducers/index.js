import { combineReducers, createStore } from 'redux';
import {
  SudokuCreate,
  duplicateMatrix,
  filterDifficulty,
} from '../../scripts/SudokuAlgorithm';

import { startGameReducer } from './startGameReducer';
import { finishGameReducer } from './finishGameReducer';
import { usernameReducer } from './usernameReducer';
import { difficultyReducer } from './difficultyReducer';
import { timeReducer } from './timeReducer';
import { hintsReducer } from './hintsReducer';
import { resetsReducer } from './resetsReducer';

const matrixReducer = (state = { original: [], filtered: [], played: [] }, action) => {
  switch (action.type) {
    case 'matrix/create':
      let matrix = SudokuCreate(9);
      let filtered = filterDifficulty(duplicateMatrix(matrix), action.payload);
      let played = duplicateMatrix(filtered);
      return {
        ...state,
        original: matrix,
        filtered: filtered,
        played: played,
      };

    case 'matrix/update':
      let value = action.payload.value;
      let i = action.payload.i;
      let j = action.payload.j;
      let newMatrix = duplicateMatrix(state.played);
      newMatrix[i][j] = value;
      return {
        ...state,
        played: newMatrix,
      };

    case 'matrix/reset':
      return {
        ...state,
        played: duplicateMatrix(state.filtered),
      };

    default:
      return state;
  }
};

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
