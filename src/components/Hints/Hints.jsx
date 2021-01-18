import { useContext } from 'react';
import { MatrixContext } from '../../js/matrixContextAPI';
import { duplicateMatrix } from '../../js/matrixFunctions';
import styles from './style/Hints.module.css';
import Icon from '../../icons/LightBulb';

function Hints({ value, setValue, setHintsUsed }) {
  const { matrixes, setMatrixes } = useContext(MatrixContext);

  const clickHint = () => {
    if (value > 0) {
      // allow the 'while' loop only if game-board is NOT complete
      let runLoop = false;
      matrixes.played.forEach((row) => {
        row.forEach((col) => {
          if (col === '') {
            runLoop = true;
          }
        });
      });

      // target random cell from displayed matrix, and if it's empty reveal it's number according to raw matrix.
      while (runLoop) {
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        if (matrixes.played[i][j] === '') {
          let revealNumber = matrixes.complete[i][j];
          let copyOfPlayedMatrix = duplicateMatrix(matrixes.played);
          copyOfPlayedMatrix[i][j] = revealNumber;
          setMatrixes({ ...matrixes, played: copyOfPlayedMatrix });

          // update hint counters
          setValue((prevState) => prevState - 1);
          setHintsUsed((prevState) => prevState + 1);
          break;
        }
      }
    }
  };

  return (
    <div className={styles.component}>
      <button onClick={clickHint}>Hint</button>
      {value >= 1 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {value >= 2 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
      {value >= 3 ? <Icon opacity='100%' /> : <Icon opacity='25%' />}
    </div>
  );
}

export default Hints;
