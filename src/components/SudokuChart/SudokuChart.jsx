import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMatrix } from './../../redux/actions';
import './SudokuChart.css';

export default function SudokuChart() {
  const matrix = useSelector((state) => state.matrix.played);
  const dispatch = useDispatch();

  return (
    <div className='sudoku-chart'>
      {matrix.map((row, i) => (
        <div className='chart-row' key={i}>
          {row.map((col, j) => (
            <input
              className='chart-col'
              key={`${i}, ${j}`}
              value={col}
              onChange={(e) => {
                dispatch(updateMatrix(e.target.value, i, j));
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
