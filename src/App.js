import React, { useState } from 'react';
import StartPage from './components/StartPage';

function App() {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('normal');

  return (
    <>
      <StartPage
        name={name}
        nameChange={(e) => {
          setName(e.target.value);
        }}
        diff={difficulty}
        diffChange={(e) => {
          setDifficulty(e.target.value);
        }}
        startGame={() => {
          console.log('worksssss');
        }}
      />
    </>
  );
}

export default App;
