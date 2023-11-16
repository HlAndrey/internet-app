 // Board.jsx

import React from 'react';
import Square from './Square';

// Копіюємо функцію calculateWinner без імпорту
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}

function Board({ xIsNext, squares, onPlay }) {
  const { winner, line } = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '5px',
    padding: '20px',
    textAlign: 'center',
    border: '2px solid #ddd',
    borderRadius: '10px',
  };

  return (
    <>
      <div style={boardStyle}>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => onPlay(index)}
            isWinnerSquare={winner && line.includes(index)}
          />
        ))}
      </div>
      <div className="status">{status}</div>
    </>
  );
}

export default Board;
