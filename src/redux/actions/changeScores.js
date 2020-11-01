export const changeScores = (playerData) => {
  return {
    type: 'scores/update',
    payload: playerData,
  };
};
