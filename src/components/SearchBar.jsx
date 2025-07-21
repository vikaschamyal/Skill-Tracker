// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="w-full mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search skills, flashcards, or notes..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;
