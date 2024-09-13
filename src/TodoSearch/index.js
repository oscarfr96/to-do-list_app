import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <div className="brutalist-container">
      <input
        placeholder="Watch Star Wars"
        className="brutalist-input smooth-type"
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <label className="brutalist-label">Search for a task</label>
    </div>
  );
}

export { TodoSearch };
