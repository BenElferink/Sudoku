export const hintsReducer = (
  state = {
    remaining: 0,
    used: 0,
  },
  action
) => {
  switch (action.type) {
    case 'hints/use':
      return { ...state, remaining: state.remaining - 1, used: state.used + 1 };

    case 'hints/reset':
      return {
        ...state,
        remaining:
          action.payload === 'easy'
            ? 3
            : action.payload === 'normal'
            ? 2
            : action.payload === 'hard'
            ? 1
            : 0,
        used: 0,
      };

    default:
      return state;
  }
};
