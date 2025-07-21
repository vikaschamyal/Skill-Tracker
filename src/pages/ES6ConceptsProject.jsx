import React, { useState } from 'react';
import es6Concepts from '../data/es6Concepts';

const ITEMS_PER_PAGE = 10;

const ES6ConceptsProject = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCard = (index) => {
    const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
    setActiveIndex(globalIndex === activeIndex ? null : globalIndex);
  };

  const totalPages = Math.ceil(es6Concepts.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedConcepts = es6Concepts.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🚀 ES6 Concepts Explained</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Click a concept to expand and learn with live examples!</p>

      <div className="grid gap-4">
        {paginatedConcepts.map((concept, index) => {
          const globalIndex = start + index;
          return (
            <div
              key={globalIndex}
              onClick={() => toggleCard(index)}
              className="cursor-pointer transition-all duration-300 border border-gray-300 rounded-lg shadow-md hover:shadow-xl p-4 bg-white dark:bg-gray-900"
            >
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{concept.title}</h2>
              {activeIndex === globalIndex && (
                <div className="mt-2 text-sm">
                  <p className="text-gray-700 dark:text-gray-200">{concept.description}</p>
                  <pre className="mt-2 p-2 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-green-400 rounded text-sm whitespace-pre-wrap">
                    {concept.example}
                  </pre>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ES6ConceptsProject;
