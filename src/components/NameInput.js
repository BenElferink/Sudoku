import React from 'react';

function NameInput({ name, setName }) {
  return <input className='col-9 name' placeholder='Nickname:' value={name} onChange={setName} />;
}

export default NameInput;
