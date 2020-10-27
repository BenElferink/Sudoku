import React from 'react';
import { duplicateMatrix } from './../scripts/SudokuFunctions';

function Chart({ MATRIX }) {
  const handleCellChange = (e, i, j) => {
    let newMatrix = duplicateMatrix(MATRIX.matrixPlayed);
    newMatrix[i][j] = e.target.value;
    MATRIX.setMatrixPlayed(newMatrix);
  };

  return (
    <div className='container chart'>
      {MATRIX.matrixPlayed.map((row, i) => (
        <div className='row' key={i}>
          {row.map((column, j) => (
            <input
              key={j}
              value={column}
              onChange={(e) => {
                handleCellChange(e, i, j);
              }}
              maxLength='1'
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Chart;
