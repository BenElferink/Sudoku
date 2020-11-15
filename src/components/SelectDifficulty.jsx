import React from 'react';
import { useDispatch } from 'react-redux';
import { changeDifficulty } from '../redux/actions/changeDifficulty';

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
            dispatch(changeDifficulty(e.target.value));
          }}
          checked={value === setting}
        />
        {setting}
      </label>
    </li>
  ));

  return <ul className='difficulty-list'>{settingsList}</ul>;
}
