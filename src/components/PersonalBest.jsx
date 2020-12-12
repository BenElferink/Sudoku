import React from 'react';

function PersonalBest({ sudokuData, difficulty }) {
  const displayBestTime = (storedRecords) => {
    let copyStoredRecords = [...storedRecords],
      possibleRecord = copyStoredRecords[0]; // variable with the updated 'best record' after each loop

    // compare fastest time for the selected difficulty by:  reference 1  ,  reference 2
    for (let i = 0; i < copyStoredRecords.length; i++) {
      let possibleMinutes = possibleRecord.timer.minutes, // updated best minutes
        possibleSeconds = possibleRecord.timer.seconds, // updated best seconds
        loopMinutes = copyStoredRecords[i].timer.minutes, // current loop minutes
        loopSeconds = copyStoredRecords[i].timer.seconds; // current loop seconds

      if (loopMinutes < possibleMinutes) {
        // reference 1 - fastest alltime, meaning minutes are beat!
        possibleRecord = copyStoredRecords[i];
      } else if (loopSeconds < possibleSeconds && loopMinutes === possibleMinutes) {
        // reference 2 - fastest by seconds only, but the minutes are equal
        possibleRecord = copyStoredRecords[i];
      }
    }

    return possibleRecord;
  };

  let record = displayBestTime(sudokuData[`${difficulty}`]);

  return (
    <>
      <h4>Your record playing '{difficulty}' is:</h4>
      <p>
        {record.timer.minutes} minutes, and {record.timer.seconds} seconds!
        <br />
        {record.resetCount === 0 && record.hintsUsed === 0
          ? 'You perfected your time without reseting and without using hints!'
          : record.resetCount === 0 && record.hintsUsed !== 0
          ? `You used ${record.hintsUsed} hints, without reseting.`
          : record.resetCount !== 0 && record.hintsUsed === 0
          ? `You used ${record.resetCount} resets, without any hints.`
          : `You used ${record.hintsUsed} hints, and reset ${record.resetCount} times.`}
      </p>
    </>
  );
}

export default PersonalBest;
