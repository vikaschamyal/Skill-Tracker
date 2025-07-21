// src/pages/QuestionBank.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByCategory, resetFilter } from '../features/questionBankSlice';

const QUESTIONS_PER_PAGE = 5;

const QuestionBank = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionBank.filteredQuestions);
  const categories = [...new Set(questions.map((q) => q.category))];

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

  const handleCategoryClick = (cat) => {
    dispatch(filterByCategory(cat));
    setCurrentPage(1); // reset to first page on filter
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">React 100</h1>

      <div className="mb-4 space-x-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => handleCategoryClick(cat)}
            className="px-3 py-1 bg-blue-100 rounded"
          >
            {cat}
          </button>
        ))}
        <button onClick={() => { dispatch(resetFilter()); setCurrentPage(1); }} className="px-3 py-1 bg-gray-300 rounded">
          All
        </button>
      </div>

      <div className="space-y-4">
        {currentQuestions.map((q) => (
          <div key={q.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-semibold">{q.question}</h2>
            <p className="text-gray-600">{q.answer}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-sm font-medium">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionBank;
