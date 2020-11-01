export const scoresDataReducer = (
  state = checkLocalStorage('Sudoku_WebApp__dev_Ben_Elferink'),
  action
) => {
  switch (action.type) {
    case 'scores/update':
      let scoresStorage = { ...state };
      let difficultyArray = scoresStorage[`${action.difficulty}`].slice();
      let isRecord = checkRecords(difficultyArray, action.time);
      if (isRecord !== false) {
        difficultyArray.splice(
          isRecord,
          0,
          constructRecord(action.username, action.time, action.hints, action.resets)
        );
        difficultyArray.pop();
        scoresStorage[`${action.difficulty}`] = difficultyArray;
      }
      localStorage.setItem(
        'Sudoku_WebApp__dev_Ben_Elferink',
        JSON.stringify(scoresStorage)
      );
      return scoresStorage;

    default:
      localStorage.setItem('Sudoku_WebApp__dev_Ben_Elferink', JSON.stringify(state));
      return state;
  }
};

function checkLocalStorage(key) {
  let scoresStorage = JSON.parse(localStorage.getItem(key));
  if (scoresStorage == null) {
    return initializeStorage();
  } else {
    return scoresStorage;
  }
}

function initializeStorage() {
  let fillStorageObject = (difficultyArray, emptyRecord) => {
    let numberOfRecords = 5;
    for (let i = 0; i < numberOfRecords; i++) {
      difficultyArray.push(emptyRecord);
    }
  };

  let storageStructure = {
    easy: [],
    normal: [],
    hard: [],
  };

  let recordStructure = {
    username: '',
    time: {
      minutes: '',
      seconds: '',
    },
    hints: {
      remaining: '',
      used: '',
    },
    resets: '',
  };

  fillStorageObject(storageStructure.easy, recordStructure);
  fillStorageObject(storageStructure.normal, recordStructure);
  fillStorageObject(storageStructure.hard, recordStructure);

  return storageStructure;
}

function checkRecords(difficultyArray, time) {
  let minOfGame = time.minutes;
  let secOfGame = time.seconds;
  let timeRecords = difficultyArray.map((record) => record.time);
  for (let i = 0; i < timeRecords.length; i++) {
    let minToBeat = timeRecords[i].minutes;
    let secToBeat = timeRecords[i].seconds;
    if (minOfGame < minToBeat) {
      return i;
    } else if (secOfGame < secToBeat) {
      return i;
    } else if (minToBeat === '' && secToBeat === '') {
      return i;
    }
  }
  return false;
}

function constructRecord(username, time, hints, resets) {
  return {
    username: username,
    time: {
      minutes: time.minutes,
      seconds: time.seconds,
    },
    hints: {
      remaining: hints.remaining,
      used: hints.used,
    },
    resets: resets,
  };
}
