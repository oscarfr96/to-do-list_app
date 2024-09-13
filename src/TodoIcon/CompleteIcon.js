import React from 'react';
import './CompleteIcon.css'; // Import the CSS file

function CompleteIcon({ completed, onComplete }) {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={completed}
        onChange={onComplete}
      />
      <span className="checkmark"></span>
    </label>
  );
}

export { CompleteIcon };
