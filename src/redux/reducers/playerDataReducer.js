export const playerDataReducer = (
  state = {
    username: '',
    time: {
      minutes: 0,
      seconds: 0,
    },
    hints: {
      remaining: 0,
      used: 0,
    },
    resets: 0,
  },
  action
) => {
  switch (action.type) {
    case 'click/start':
      return {
        ...state,
        time: { minutes: 0, seconds: 0 },
        hints: {
          remaining:
            action.payload === 'easy'
              ? 3
              : action.payload === 'normal'
              ? 2
              : action.payload === 'hard'
              ? 1
              : 0,
          used: 0,
        },
        resets: 0,
      };

    case 'click/reset':
      return {
        ...state,
        time: { minutes: 0, seconds: 0 },
        hints: {
          remaining:
            action.payload === 'easy'
              ? 3
              : action.payload === 'normal'
              ? 2
              : action.payload === 'hard'
              ? 1
              : 0,
          used: 0,
        },
        resets: state.resets + 1,
      };

    case 'username/change':
      return { ...state, username: action.payload };

    case 'time/increment':
      if (state.time.seconds < 59) {
        return {
          ...state,
          time: { minutes: state.time.minutes, seconds: state.time.seconds + 1 },
        };
      } else {
        return { ...state, time: { minutes: state.time.minutes + 1, seconds: 0 } };
      }

    case 'hints/use':
      return {
        ...state,
        hints: { remaining: state.hints.remaining - 1, used: state.hints.used + 1 },
      };

    default:
      return state;
  }
};
