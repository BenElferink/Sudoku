export const changeDifficulty = (value) => {
  return {
    type: 'difficulty/change',
    payload: value,
  };
};
