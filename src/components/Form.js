import React from 'react';
import NameInput from './NameInput';
import DifficultySelector from './DifficultySelector';
import Button from './Button';

function Form({ name, setName, difficulty, setDifficulty, clickStart }) {
  return (
    <form
      className='col-12'
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <NameInput name={name} setName={setName} />
      <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
      <Button text='Start Game!' onClick={clickStart} />
    </form>
  );
}

export default Form;
