import React from 'react';

function GameBoard({ matrix, onChange }) {
  return (
    <table>
      <tbody>
        {matrix.map((row, i) => (
          <tr key={i}>
            {row.map((column, j) => (
              <td key={j}>
                {column === '' ? (
                  <input
                    className='cell-inp'
                    value={column}
                    onChange={(e) => {
                      onChange(e, i, j);
                    }}
                    maxLength='1'
                  />
                ) : (
                  <input className='cell-inp' value={column} readOnly />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GameBoard;
