export const resetsReducer = (state = 0, action) => {
  switch (action.type) {
    case 'resets/increment':
      return state + 1;

    case 'resets/reset':
      return 0;

    default:
      return state;
  }
};
