import React from 'react';
import { duplicateMatrix } from '../../logic/SudokuScripts';

function GameBoard({ MATRIX }) {
  const handleCellChange = (e, i, j) => {
    let newMatrix = duplicateMatrix(MATRIX.matrixPlayed);
    newMatrix[i][j] = e.target.value;
    MATRIX.setMatrixPlayed(newMatrix);
  };

  return (
    <table>
      <tbody>
        {MATRIX.matrixPlayed.map((row, i) => (
          <tr key={i}>
            {row.map((column, j) => (
              <td key={j}>
                {column === '' ? (
                  <input
                    className='cell-inp'
                    value={column}
                    onChange={(e) => {
                      handleCellChange(e, i, j);
                    }}
                    maxLength='1'
                  />
                ) : (
                  <input className='cell-inp' value={column} readOnly />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GameBoard;
