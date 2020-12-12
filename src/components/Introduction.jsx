import React from 'react';
import NeverPlayed from './NeverPlayed';
import NeverPlayedDifficulty from './NeverPlayedDifficulty';
import PersonalBest from './PersonalBest';

function Introduction({ sudokuData, difficulty }) {
  const whatToDisplay = () => {
    if (sudokuData.easy.length === 0 && sudokuData.normal.length === 0 && sudokuData.hard.length === 0) {
      // if no previous records exist, display the relevent UI
      return <NeverPlayed />;
    } else if (sudokuData[`${difficulty}`].length === 0) {
      // if previous records exist, but not for the current displayed difficulty, then display the relevant UI
      return <NeverPlayedDifficulty difficulty={difficulty} />;
    } else {
      // a record for the current difficulty exists,
      // analyze the array of objects, locate the fastest time, and display it in the UI
      return <PersonalBest sudokuData={sudokuData} difficulty={difficulty} />;
    }
  };

  return <div className='personal-best'>{whatToDisplay()}</div>;
}

export default Introduction;
