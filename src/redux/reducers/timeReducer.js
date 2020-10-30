export const timeReducer = (state = { minutes: 0, seconds: 0 }, action) => {
  switch (action.type) {
    case 'time/increment':
      if (state.seconds < 59) {
        return { ...state, seconds: state.seconds + 1 };
      } else {
        return { ...state, minutes: state.minutes + 1, seconds: 0 };
      }

    case 'time/reset':
      return { ...state, minutes: 0, seconds: 0 };

    default:
      return state;
  }
};
