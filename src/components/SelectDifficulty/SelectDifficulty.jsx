import React from 'react';
import { useDispatch } from 'react-redux';
import { difficultyUpdate } from '../../redux/actions/difficultyUpdate';
import './style/style.css';

export default function SelectDifficulty({ value }) {
  const dispatch = useDispatch();

  const settings = ['easy', 'normal', 'hard'];
  const settingsList = settings.map((setting, i) => (
    <li key={i}>
      <label>
        <input
          type='radio'
          name='difficulty'
          value={setting}
          onChange={(e) => {
            dispatch(difficultyUpdate(e.target.value));
          }}
          checked={value === setting}
        />
        {setting}
      </label>
    </li>
  ));

  return <ul className='difficulty-list'>{settingsList}</ul>;
}
