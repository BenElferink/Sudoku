export const scoresUpdate = (username, difficulty, time, hints, resets) => {
  return {
    type: 'scores/update',
    username: username,
    difficulty: difficulty,
    time: time,
    hints: hints,
    resets: resets,
  };
};
