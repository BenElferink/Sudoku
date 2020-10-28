import React, { useState, useEffect } from 'react';
import './SudokuChart.css';
import { duplicateMatrix, filterDifficulty } from './../../scripts/SudokuFunctions';

export default function SudokuChart({ originalMatrix, difficulty, hideShow }) {
  const [filteredMatrix] = useState(
    filterDifficulty(duplicateMatrix(originalMatrix), difficulty)
  );

  const [playerMatrix, setPlayerMatrix] = useState([]);

  useEffect(() => {
    setPlayerMatrix(duplicateMatrix(filteredMatrix));
    return () => {};
  }, [filteredMatrix]);

  const handleSudokuCellChange = (e, i, j) => {
    let newMatrix = duplicateMatrix(playerMatrix);
    newMatrix[i][j] = e.target.value;
    setPlayerMatrix(newMatrix);
  };

  return (
    <div className={`sudoku-chart ${hideShow}`}>
      {playerMatrix.map((row, i) => (
        <div className='chart-row' key={i}>
          {row.map((col, j) => (
            <input
              className='chart-col'
              key={`${i},${j}`}
              value={col}
              onChange={(e) => {
                handleSudokuCellChange(e, i, j);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
