import React from 'react';
import { useSelector } from 'react-redux';
import './style/style.css';

export default function Congrats() {
  const username = useSelector((state) => state.playerData.username);
  const time = useSelector((state) => state.playerData.time);
  const hints = useSelector((state) => state.playerData.hints);
  const resets = useSelector((state) => state.playerData.resets);

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
