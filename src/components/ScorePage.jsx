import React from 'react';
import { useDispatch } from 'react-redux';
import { clickQuit } from '../redux/actions/clickQuit';
import Congrats from './Congrats';
import ScoreBoard from './ScoreBoard';
import { useSelector } from 'react-redux';
import Record from './Record';

export default function ScorePage({ style, played }) {
  const difficulty = useSelector((state) => state.difficulty);
  const scores = useSelector((state) => state.scoresData);
  const dispatch = useDispatch();

  const handleHome = () => {
    dispatch(clickQuit());
  };

  return (
    <div style={style} className='page'>
      <div className='page-head'>{played ? <Congrats /> : null}</div>
      <div className='page-main'>
        <div className='score-board'>
          {scores[`${difficulty}`].map((record, i) =>
            record.username !== '' ? (
              <Record
                key={i}
                position={i + 1}
                username={record.username}
                time={record.time}
                hints={record.hints}
                resets={record.resets}
              />
            ) : (
              <Record
                key={i}
                position={i + 1}
                username=''
                time=''
                hints=''
                resets=''
              />
            )
          )}
        </div>
      </div>
      <div className='btn-bar'>
        <button className='btn' onClick={handleHome}>
          Home
        </button>
      </div>
    </div>
  );
}
