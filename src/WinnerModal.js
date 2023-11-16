// WinnerModal.js

import React from 'react';

function WinnerModal({ winner, onClose }) {
  return (
    <div className="winner-modal">
      <div className="content">
        <h2>Winner</h2>
        <p>{winner}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default WinnerModal;
