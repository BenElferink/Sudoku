export const difficultyReducer = (state = 'normal', action) => {
  switch (action.type) {
    case 'difficulty/change':
      return action.payload;

    default:
      return state;
  }
};
