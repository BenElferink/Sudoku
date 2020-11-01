export const clickReset = (difficulty) => {
  return {
    type: 'click/reset',
    payload: difficulty,
  };
};
