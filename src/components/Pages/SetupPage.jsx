import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clickStart } from '../../redux/actions/clickStart';
import { clickScores } from '../../redux/actions/clickScores';
import Title from '../Title/Title';
import Username from '../Username/Username';
import SelectDifficulty from '../SelectDifficulty/SelectDifficulty';
import Button from '../Button/Button';
import './style/style.css';

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
      <div className='page-content'>
        <Title />
        <Username value={username} />
        <SelectDifficulty value={difficulty} />
      </div>
      <div className='btn-bar'>
        <Button text='Start Game!' onClick={handleStartGame} />
        <Button text='Show Scores' onClick={handleShowScores} />
      </div>
    </div>
  );
}
