export const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case 'username/update':
      return action.payload;

    default:
      return state;
  }
};
