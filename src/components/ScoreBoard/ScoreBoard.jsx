import React from 'react';
import { useSelector } from 'react-redux';
import Record from './../Record/Record';
import './style/style.css';

export default function ScoreBoard() {
  const difficulty = useSelector((state) => state.difficulty);
  const scores = useSelector((state) => state.scoresData);

  const recordsToDisplay = scores[`${difficulty}`].map((record, i) =>
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
      <Record key={i} position={i + 1} username='' time='' hints='' resets='' />
    )
  );

  return <div className='score-board'>{recordsToDisplay}</div>;
}
