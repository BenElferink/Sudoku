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

export const decrementHintsLeft = () => {
  return {
    type: 'hints/decrement',
  };
};

export const incrementHintsUsed = () => {
  return {
    type: 'hints/increment',
  };
};

export const resetHints = (difficulty) => {
  return {
    type: 'hints/reset',
    payload: difficulty,
  };
};

export const incrementResets = () => {
  return {
    type: 'resets/increment',
  };
};

export const resetResets = () => {
  return {
    type: 'resets/reset',
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
