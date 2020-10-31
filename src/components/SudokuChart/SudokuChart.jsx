import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishGameToggle } from './../../redux/actions/finishGameToggle';
import { matrixUpdate } from './../../redux/actions/matrixUpdate';
import './SudokuChart.css';

export default function SudokuChart() {
  const matrix = useSelector((state) => state.matrix);
  const dispatch = useDispatch();

  useEffect(() => {
    let trueCounter = 0;
    for (let i = 0; i < matrix.played.length; i++) {
      for (let j = 0; j < matrix.played[i].length; j++) {
        if (matrix.played[i][j] === matrix.original[i][j]) {
          trueCounter++;
        }
      }
    }
    if (trueCounter === Math.pow(9, 2)) {
      dispatch(finishGameToggle());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matrix.played]);

  return (
    <div className='sudoku-chart'>
      {matrix.played.map((row, i) => (
        <div className='chart-row' key={i}>
          {row.map((col, j) => {
            if (col === '') {
              return (
                <input
                  className='chart-col interact'
                  key={`${i}, ${j}`}
                  value={col}
                  onChange={(e) => {
                    dispatch(matrixUpdate(e.target.value, i, j));
                  }}
                />
              );
            } else if (col === matrix.original[i][j]) {
              return (
                <input
                  className='chart-col computed'
                  key={`${i}, ${j}`}
                  defaultValue={col}
                  readOnly
                />
              );
            } else {
              return (
                <input
                  className='chart-col error'
                  key={`${i}, ${j}`}
                  value={col}
                  onChange={(e) => {
                    dispatch(matrixUpdate(e.target.value, i, j));
                  }}
                />
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
