export const changeMatrix = (value, i, j) => {
  return {
    type: 'matrix/change',
    payload: {
      value,
      i,
      j,
    },
  };
};
