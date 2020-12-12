export function duplicateMatrix(matrix) {
  let newMatrix = new Array(0);
  for (let i = 0; i < 9; i++) {
    newMatrix.push(new Array(0));
    for (let j = 0; j < 9; j++) {
      newMatrix[i][j] = matrix[i][j];
    }
  }
  return newMatrix;
}

export function filterMatrixByDifficulty(matrix, diff) {
  let tilesToClear = Math.pow(9, 2);
  switch (diff) {
    case 'easy':
      tilesToClear = Math.floor(tilesToClear * 0.25);
      break;
    case 'normal':
      tilesToClear = Math.floor(tilesToClear * 0.5);
      break;
    case 'hard':
      tilesToClear = Math.floor(tilesToClear * 0.75);
      break;
    default:
      break;
  }
  while (tilesToClear !== 0) {
    let i = Math.floor(Math.random() * 9);
    let j = Math.floor(Math.random() * 9);
    if (matrix[i][j] !== '') {
      matrix[i][j] = '';
      tilesToClear--;
    }
  }
  return matrix;
}
