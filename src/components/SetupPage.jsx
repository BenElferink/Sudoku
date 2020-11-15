import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../redux/actions/changeName';
import { clickStart } from '../redux/actions/clickStart';
import { clickScores } from '../redux/actions/clickScores';
import { changeDifficulty } from '../redux/actions/changeDifficulty';

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
        <input
          className='username'
          placeholder='nickname:'
          value={username}
          onChange={(e) => {
            dispatch(changeName(e.target.value));
          }}
        />

        <ul className='difficulty-list'>
          <li>
            <label>
              <input
                type='radio'
                name='difficulty'
                value='easy'
                onChange={(e) => {
                  dispatch(changeDifficulty(e.target.value));
                }}
                checked={difficulty === 'easy'}
              />
              easy
            </label>
          </li>
          <li>
            <label>
              <input
                type='radio'
                name='difficulty'
                value='normal'
                onChange={(e) => {
                  dispatch(changeDifficulty(e.target.value));
                }}
                checked={difficulty === 'normal'}
              />
              normal
            </label>
          </li>
          <li>
            <label>
              <input
                type='radio'
                name='difficulty'
                value='hard'
                onChange={(e) => {
                  dispatch(changeDifficulty(e.target.value));
                }}
                checked={difficulty === 'hard'}
              />
              hard
            </label>
          </li>
        </ul>
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
