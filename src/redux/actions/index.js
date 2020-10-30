export const createMatrix = (difficulty) => {
  return {
    type: 'matrix/create',
    payload: difficulty,
  };
};

export const updateMatrix = (value, i, j) => {
  return {
    type: 'matrix/update',
    payload: {
      value,
      i,
      j,
    },
  };
};

export const resetMatrix = () => {
  return {
    type: 'matrix/reset',
  };
};
