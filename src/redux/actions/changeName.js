export const changeName = (value) => {
  return {
    type: 'username/change',
    payload: value,
  };
};
