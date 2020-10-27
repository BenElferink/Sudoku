import React from 'react';
import Title from './Title';
import Form from './Form';

function StartPage({ hideShow, name, setName, difficulty, setDifficulty, clickStart }) {
  return (
    <section id='start' className={`container ${hideShow}`}>
      <Title />
      <Form
        name={name}
        setName={setName}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        clickStart={clickStart}
      />
    </section>
  );
}

export default StartPage;
