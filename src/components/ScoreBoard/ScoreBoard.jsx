import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scoresUpdate } from './../../redux/actions/scoresUpdate';

export default function ScoreBoard({ played }) {
  const scores = useSelector((state) => state.scores);
  const username = useSelector((state) => state.username);
  const difficulty = useSelector((state) => state.difficulty);
  const time = useSelector((state) => state.time);
  const hints = useSelector((state) => state.hints);
  const resets = useSelector((state) => state.resets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (played) {
      dispatch(scoresUpdate(username, difficulty, time, hints, resets));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{console.log(scores)}</div>;
}
