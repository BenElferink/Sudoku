export const finishGameReducer = (state = false, action) => {
  switch (action.type) {
    case 'finishGame/toggle':
      return !state;

    default:
      return state;
  }
};
