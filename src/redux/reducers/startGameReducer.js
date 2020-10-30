export const startGameReducer = (state = false, action) => {
  switch (action.type) {
    case 'startGame/toggle':
      return !state;

    default:
      return state;
  }
};
