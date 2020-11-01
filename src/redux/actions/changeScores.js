export const changeScores = (playerData, difficulty) => {
  return {
    type: 'scores/change',
    playerData: playerData,
    difficulty: difficulty,
  };
};
