export const matrixCreate = (difficulty) => {
  return {
    type: 'matrix/create',
    payload: difficulty,
  };
};
