 // Square.jsx

import React from 'react';

function Square({ value, onSquareClick, isWinnerSquare }) {
  const squareStyle = {
    fontSize: '36px',
    width: '100px',
    height: '100px',
    padding: '10px',
    margin: '2px',
    background: isWinnerSquare ? '#ffc107' : 'white',
    border: '2px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <button
      className={`square ${isWinnerSquare ? 'winner' : ''}`}
      style={squareStyle}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
