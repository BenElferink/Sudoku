import { useState, useContext } from 'react';
import { MatrixContext } from '../../js/matrixContextAPI';
import { duplicateMatrix } from '../../js/matrixFunctions';
import styles from './style/SudokuTable.module.css';
import NumberWidget from '../NumberWidget';

export default function SudokuTable({ startGame }) {
  const { matrixes, setMatrixes } = useContext(MatrixContext);
  const [isSetNumMode, setIsSetNumMode] = useState(false); // reveals NumberWidget
  const [clickedCell, setClickedCell] = useState({ i: null, j: null }); // cell cordinates for NumberWidget value
  const [mousePosition, setMousePosition] = useState({ x: null, y: null }); // click cordinates for NumberWidget position

  // ----------
  // ---------------
  // Functions for: game interactions
  // ---------------
  // ----------

  // this sets the matrix indexes for the clicked cell,
  // and the clicked screen cordinates for the widget to appear at
  const clickCell = (e, i, j) => {
    setClickedCell({ i: i, j: j });
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsSetNumMode(true);
  };

  // this sets the clicked number from the widget into the matrix,
  // using the cell indexes
  const clickNumberOnWidget = (num) => {
    let copyOfPlayedMatrix = duplicateMatrix(matrixes.played);
    copyOfPlayedMatrix[clickedCell.i][clickedCell.j] = num;
    setMatrixes({ ...matrixes, played: copyOfPlayedMatrix });
    setIsSetNumMode(false);
  };

  return (
    <>
      <table className={styles.table} style={{ margin: startGame ? '1em 0' : '0' }}>
        <tbody>
          {matrixes.played.map((row, i) => (
            <tr key={i}>
              {row.map((num, j) =>
                matrixes.filtered[i][j] === '' ? (
                  <td
                    key={`${i}-${j}`}
                    onClick={(e) => {
                      clickCell(e, i, j);
                    }}>
                    {num}
                  </td>
                ) : (
                  <td key={`${i}-${j}`} className={styles.computed}>
                    {num}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {isSetNumMode && (
        <NumberWidget
          style={{ position: 'fixed', top: mousePosition.y, left: mousePosition.x }}
          setNum={(num) => {
            clickNumberOnWidget(num);
          }}
        />
      )}
    </>
  );
}
