import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateMatrix } from './../../redux/actions';
import { finishGameToggle } from './../../redux/actions/finishGameToggle';

import './SudokuChart.css';

export default function SudokuChart() {
  const matrixOriginal = useSelector((state) => state.matrix.original);
  const matrixPlayed = useSelector((state) => state.matrix.played);
  const dispatch = useDispatch();

  useEffect(() => {
    let trueCounter = 0;

    for (let i = 0; i < matrixPlayed.length; i++) {
      for (let j = 0; j < matrixPlayed[i].length; j++) {
        if (matrixPlayed[i][j] === matrixOriginal[i][j]) {
          trueCounter++;
        }
      }
    }

    if (trueCounter === Math.pow(9, 2)) {
      dispatch(finishGameToggle());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matrixPlayed]);

  return (
    <div className='sudoku-chart'>
      {matrixPlayed.map((row, i) => (
        <div className='chart-row' key={i}>
          {row.map((col, j) => (
            <input
              className='chart-col'
              key={`${i}, ${j}`}
              value={col}
              onChange={(e) => {
                dispatch(updateMatrix(Number(e.target.value), i, j));
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
