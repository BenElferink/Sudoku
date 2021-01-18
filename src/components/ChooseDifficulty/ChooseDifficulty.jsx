import styles from './style/ChooseDifficulty.module.css';

function ChooseDifficulty({ value, setValue }) {
  return (
    <div className={styles.component}>
      <div className={styles.inpGroup}>
        <input
          name='diff'
          id='diff_easy'
          type='radio'
          value='easy'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          checked={value === 'easy'}
        />
        <label htmlFor='diff_easy'>Easy</label>
      </div>

      <div className={styles.inpGroup}>
        <input
          name='diff'
          id='diff_normal'
          type='radio'
          value='normal'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          checked={value === 'normal'}
        />
        <label htmlFor='diff_normal'>Normal</label>
      </div>

      <div className={styles.inpGroup}>
        <input
          name='diff'
          id='diff_hard'
          type='radio'
          value='hard'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          checked={value === 'hard'}
        />
        <label htmlFor='diff_hard'>Hard</label>
      </div>
    </div>
  );
}

export default ChooseDifficulty;
