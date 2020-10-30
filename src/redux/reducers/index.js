import { combineReducers, createStore } from 'redux';
import {
  SudokuCreate,
  duplicateMatrix,
  filterDifficulty,
} from '../../scripts/SudokuAlgorithm';

import { timeReducer } from './timeReducer';

const startGameReducer = (state = false, action) => {
  switch (action.type) {
    case 'startGame/toggle':
      return !state;

    default:
      return state;
  }
};

const finishGameReducer = (state = false, action) => {
  switch (action.type) {
    case 'finishGame/toggle':
      return !state;

    default:
      return state;
  }
};

const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case 'username/updateValue':
      return action.payload;

    default:
      return state;
  }
};

const difficultyReducer = (state = 'normal', action) => {
  switch (action.type) {
    case 'difficulty/updateValue':
      return action.payload;

    default:
      return state;
  }
};

const hintsLeftReducer = (state = 0, action) => {
  switch (action.type) {
    case 'hints/decrement':
      return state - 1;

    case 'hints/reset':
      let difficulty = action.payload;
      return difficulty === 'easy'
        ? 3
        : difficulty === 'normal'
        ? 2
        : difficulty === 'hard'
        ? 1
        : 0;

    default:
      return state;
  }
};

const hintsUsedReducer = (state = 0, action) => {
  switch (action.type) {
    case 'hints/increment':
      return state + 1;

    case 'hints/reset':
      return 0;

    default:
      return state;
  }
};

const resetCountReducer = (state = 0, action) => {
  switch (action.type) {
    case 'resets/increment':
      return state + 1;

    case 'resets/reset':
      return 0;

    default:
      return state;
  }
};

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
  hintsLeft: hintsLeftReducer,
  hintsUsed: hintsUsedReducer,
  resetCount: resetCountReducer,
  matrix: matrixReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
