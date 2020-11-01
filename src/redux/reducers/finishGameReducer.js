export const finishGameReducer = (state = false, action) => {
  switch (action.type) {
    case 'click/start':
      return false;

    case 'click/quit':
      return false;

    case 'click/scores':
      return true;

    case 'game/complete':
      return true;

    default:
      return state;
  }
};
