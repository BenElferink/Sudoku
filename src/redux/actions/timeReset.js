export const timeReset = (time) => {
  return {
    type: 'time/reset',
    payload: time,
  };
};
