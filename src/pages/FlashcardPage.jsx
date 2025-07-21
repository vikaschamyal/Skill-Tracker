// src/pages/FlashcardPage.jsx
import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import FlashcardForm from '../components/FlashcardForm';
import FlashcardList from '../components/FlashcardList';

const FlashcardPage = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="flex">
      
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Flashcards</h1>
        <SearchBar query={query} setQuery={setQuery} />
        <FlashcardForm />
        <FlashcardList searchQuery={query} />
      </div>
    </div>
  );
};

export default FlashcardPage;
