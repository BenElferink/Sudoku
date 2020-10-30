export const hintsReset = (difficulty) => {
  return {
    type: 'hints/reset',
    payload: difficulty,
  };
};
