export const matrixUpdate = (value, i, j) => {
  return {
    type: 'matrix/update',
    payload: {
      value,
      i,
      j,
    },
  };
};
