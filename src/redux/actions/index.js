export const toggleStart = () => {
  return {
    type: 'startGame/toggle',
  };
};

export const toggleFinish = () => {
  return {
    type: 'finishGame/toggle',
  };
};

export const changeName = (value) => {
  return {
    type: 'username/updateValue',
    payload: value,
  };
};

export const changeDiff = (value) => {
  return {
    type: 'difficulty/updateValue',
    payload: value,
  };
};

export const incrementTime = () => {
  return {
    type: 'time/increment',
  };
};

export const resetTime = (time) => {
  return {
    type: 'time/reset',
    payload: time,
  };
};

export const decrementHints = () => {
  return {
    type: 'hints/decrement',
  };
};

export const resetHints = (difficulty) => {
  return {
    type: 'hints/reset',
    payload: difficulty,
  };
};

export const createMatrix = (difficulty) => {
  return {
    type: 'matrix/create',
    payload: difficulty,
  };
};

export const updateMatrix = (value, i, j) => {
  return {
    type: 'matrix/update',
    payload: {
      value,
      i,
      j,
    },
  };
};

export const resetMatrix = () => {
  return {
    type: 'matrix/reset',
  };
};
