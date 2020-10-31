import React from 'react';
import { useSelector } from 'react-redux';
import Record from '../Record/Record';
import './ScoreBoard.css';

export default function ScoreBoard() {
  const scores = useSelector((state) => state.scores);
  const difficulty = useSelector((state) => state.difficulty);

  return (
    <div className='score-board'>
      {
        // eslint-disable-next-line array-callback-return
        scores[`${difficulty}`].map((record, i) => {
          if (record.username !== '') {
            return (
              <Record
                key={i}
                position={i + 1}
                username={record.username}
                time={record.time}
                hints={record.hints}
                resets={record.resets}
              />
            );
          } else {
            return (
              <Record key={i} position={i + 1} username='' time='' hints='' resets='' />
            );
          }
        })
      }
    </div>
  );
}
