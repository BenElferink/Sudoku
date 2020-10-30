export const difficultyReducer = (state = 'normal', action) => {
  switch (action.type) {
    case 'difficulty/update':
      return action.payload;

    default:
      return state;
  }
};
