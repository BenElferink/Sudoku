import styles from './style/Introduction.module.css';

function NeverPlayedDifficulty({ difficulty }) {
  return (
    <div className={styles.introduction}>
      <p>
        You haven't played '{difficulty}' mode yet,
        <br />
        what are you waiting for? Let's play!
        <br />
        <br />
        Playing in {difficulty} gives you{' '}
        {difficulty === 'easy' ? 3 : difficulty === 'normal' ? 2 : 1} hints,
        <br />
        and the board is {difficulty === 'easy' ? 75 : difficulty === 'normal' ? 50 : 25}% complete
      </p>
    </div>
  );
}

export default NeverPlayedDifficulty;
