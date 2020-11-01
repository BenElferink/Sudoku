export const startGameReducer = (state = false, action) => {
  switch (action.type) {
    case 'click/start':
      return true;

    case 'click/quit':
      return false;

    case 'click/scores':
      return false;

    case 'game/complete':
      return true;

    default:
      return state;
  }
};
