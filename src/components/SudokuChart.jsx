import React, { useState, useEffect } from 'react';
import { duplicateMatrix } from './../js/matrixFunctions';
import NumberWidget from './NumberWidget';

function SudokuChart({ startGame, diffMatrix, dispMatrix, setDispMatrix }) {
  const [isSetNumMode, setIsSetNumMode] = useState(false); // reveals NumberWidget
  const [clickedCell, setClickedCell] = useState({ i: null, j: null }); // cell cordinates for NumberWidget
  const [mousePosition, setMousePosition] = useState({ x: null, y: null }); // click cordinates for NumberWidget

  useEffect(() => {
    setIsSetNumMode(false);
  }, [dispMatrix]);

  // ----------
  // ---------------
  // Functions for: game interactions
  // ---------------
  // ----------

  const clickCell = (e, i, j) => {
    setClickedCell({ i: i, j: j });
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsSetNumMode(true);
  };

  const clickNumberOnWidget = (num) => {
    let copyOfDisplayedMatrix = duplicateMatrix(dispMatrix);
    copyOfDisplayedMatrix[clickedCell.i][clickedCell.j] = num;
    setDispMatrix(copyOfDisplayedMatrix);
  };
  return (
    <>
      <table className='game-table' style={{ margin: startGame ? '1em 0' : '0' }}>
        <tbody>
          {dispMatrix.map((row, i) => (
            <tr key={i}>
              {row.map((num, j) =>
                diffMatrix[i][j] === '' ? (
                  <td
                    key={`${i}-${j}`}
                    onClick={(e) => {
                      clickCell(e, i, j);
                    }}>
                    {num}
                  </td>
                ) : (
                  <td key={`${i}-${j}`} className='computed'>
                    {num}
                  </td>
                )
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

export default SudokuChart;
