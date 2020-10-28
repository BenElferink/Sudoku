import React from 'react';
import './Header.css';

export default function Header({ hideShow }) {
  return (
    <div className={`header ${hideShow}`}>
      <h2>Sudoku</h2>
      <div className='line'></div>
      <h3>by Ben Elferink</h3>
    </div>
  );
}
