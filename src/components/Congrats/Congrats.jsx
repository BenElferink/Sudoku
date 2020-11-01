import React from 'react';
import { useSelector } from 'react-redux';
import './style/style.css';

export default function Congrats() {
  const username = useSelector((state) => state.username);
  const time = useSelector((state) => state.time);
  const hints = useSelector((state) => state.hints);
  const resets = useSelector((state) => state.resets);

  return (
    <div className='congrats'>
      <h4>Well done {username}!</h4>
      <p>
        You finished in {time.minutes} minutes, {time.seconds} seconds
      </p>
      <p>
        You used {hints.used} hint(s), and reset {resets} time(s)
      </p>
    </div>
  );
}
