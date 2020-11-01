import { SudokuCreate } from '../../scripts/sudokuAlgorithm';
import { duplicateMatrix, filterMatrixByDifficulty } from '../../scripts/matrixFunctions';

export const matrixDataReducer = (
  state = { original: [], filtered: [], played: [] },
  action
) => {
  switch (action.type) {
    case 'click/start':
      let original = SudokuCreate(9);
      let filtered = filterMatrixByDifficulty(duplicateMatrix(original), action.payload);
      let played = duplicateMatrix(filtered);
      return {
        ...state,
        original: original,
        filtered: filtered,
        played: played,
      };

    case 'click/reset':
      return {
        ...state,
        played: duplicateMatrix(state.filtered),
      };

    case 'matrix/change':
      let value = Number(action.payload.value);
      let i = action.payload.i;
      let j = action.payload.j;
      let newMatrix = duplicateMatrix(state.played);
      if (value !== 0) {
        newMatrix[i][j] = value;
      } else {
        newMatrix[i][j] = '';
      }
      return {
        ...state,
        played: newMatrix,
      };

    default:
      return state;
  }
};
