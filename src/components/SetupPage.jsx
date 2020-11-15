import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clickStart } from '../redux/actions/clickStart';
import { clickScores } from '../redux/actions/clickScores';
import Username from './Username';
import SelectDifficulty from './SelectDifficulty';

export default function SetupPage({ style }) {
  const difficulty = useSelector((state) => state.difficulty);
  const username = useSelector((state) => state.playerData.username);
  const dispatch = useDispatch();

  const handleStartGame = () => {
    if (username !== '') {
      dispatch(clickStart(difficulty));
    } else {
      window.alert('error: create a username');
    }
  };

  const handleShowScores = () => {
    dispatch(clickScores());
  };

  return (
    <div style={style} className='page'>
      <div className='page-head'>
        <h2>Sudoku</h2>
        <h3>by Ben Elferink</h3>
      </div>
      <div className='page-main'>
        <Username value={username} />
        <SelectDifficulty value={difficulty} />
      </div>
      <div className='btn-bar'>
        <button className='btn' onClick={handleStartGame}>
          Start Game!
        </button>
        <button className='btn' onClick={handleShowScores}>
          Show Scores
        </button>
      </div>
    </div>
  );
}
