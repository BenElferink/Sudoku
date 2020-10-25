import React from 'react';

function GameBoard({ matrix }) {
  return (
    <table>
      <tbody>
        {matrix.map((row, i) => (
          <tr key={i}>
            {row.map((column, i) => (
              <td key={i}>
                {/* <input maxLength='1' value={column} /> */}
                {column}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GameBoard;
