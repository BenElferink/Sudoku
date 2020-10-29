import {
  SudokuCreate,
  duplicateMatrix,
  filterDifficulty,
} from '../../scripts/SudokuAlgorithm';

export const startGameReducer = (state = false, action) => {
  switch (action.type) {
    case 'startGame/toggle':
      return !state;

    default:
      return state;
  }
};

export const finishGameReducer = (state = false, action) => {
  switch (action.type) {
    case 'finishGame/toggle':
      return !state;

    default:
      return state;
  }
};

export const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case 'username/updateValue':
      return action.payload;

    default:
      return state;
  }
};

export const difficultyReducer = (state = 'normal', action) => {
  switch (action.type) {
    case 'difficulty/updateValue':
      return action.payload;

    default:
      return state;
  }
};

export const timeReducer = (state = '00:00', action) => {
  switch (action.type) {
    case 'time/increment':
      let minutes = Number(state.substring(0, 2));
      let seconds = Number(state.substring(3, 5));
      if (seconds < 59) {
        seconds++;
      } else {
        seconds = 0;
        minutes++;
      }
      seconds < 10 ? (seconds = `0${seconds}`) : (seconds = `${seconds}`);
      minutes < 10 ? (minutes = `0${minutes}`) : (minutes = `${minutes}`);
      return `${minutes}:${seconds}`;

    case 'time/reset':
      return '00:00';

    default:
      return state;
  }
};

export const hintsReducer = (state = 0, action) => {
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

export const matrixReducer = (
  state = { original: [], filtered: [], played: [] },
  action
) => {
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
