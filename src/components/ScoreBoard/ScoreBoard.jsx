import React, { useContext } from 'react';
import { ScoresContext } from '../../context';

export default function ScoreBoard() {
  const [scores] = useContext(ScoresContext);

  return <div>{console.log(scores)}</div>;
}
