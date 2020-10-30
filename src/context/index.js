import React, { useState, useEffect, createContext } from 'react';

export const ScoresContext = createContext();

export function ScoresProvider(props) {
  const [scores, setScores] = useState(() => {
    let scoresStorage = JSON.parse(
      localStorage.getItem('Sudoku_WebApp__dev_Ben_Elferink')
    );
    if (scoresStorage == null) {
      return initializeStorage();
    } else {
      return scoresStorage;
    }
  });

  useEffect(() => {
    return () => {
      localStorage.setItem('Sudoku_WebApp__dev_Ben_Elferink', JSON.stringify(scores));
    };
  }, [scores]);

  return (
    <ScoresContext.Provider value={[scores, setScores]}>
      {props.children}
    </ScoresContext.Provider>
  );
}

function initializeStorage() {
  let storageStructure = {
    easy: [],
    normal: [],
    hard: [],
  };

  let recordStructure = {
    username: '',
    time: '',
    hintsUsed: '',
    resetCount: '',
  };

  let fillStorageObject = (objProp, recordObj) => {
    let numberOfRecords = 5;
    for (let i = 0; i < numberOfRecords; i++) {
      objProp.push(recordObj);
    }
  };

  fillStorageObject(storageStructure.easy, recordStructure);
  fillStorageObject(storageStructure.normal, recordStructure);
  fillStorageObject(storageStructure.hard, recordStructure);

  return storageStructure;
}
