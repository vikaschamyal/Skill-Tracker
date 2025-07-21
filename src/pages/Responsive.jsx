import React, { useState } from 'react';
import responsiveQuestions from '../data/responsiveQuestions';

const Responsive = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 8;

  const totalPages = Math.ceil(responsiveQuestions.length / questionsPerPage);

  const toggleCard = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = responsiveQuestions.slice(startIndex, startIndex + questionsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
    setActiveIndex(null); // close open cards on page change
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📱 Responsive Design Topics</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Click on a topic to expand and learn how to make your websites beautifully responsive across all screen sizes.
      </p>

      <div className="grid gap-4">
        {currentQuestions.map((question, index) => (
          <div
            key={index}
            onClick={() => toggleCard(index)}
            className="cursor-pointer transition-all duration-300 border border-gray-300 rounded-lg shadow-md hover:shadow-xl p-4 bg-white dark:bg-gray-900"
          >
            <h2 className="text-xl font-semibold text-purple-600">{question.title}</h2>
            {activeIndex === index && (
              <div className="mt-2 text-sm">
                <p className="text-gray-700 dark:text-gray-200">{question.description}</p>
                <pre className="mt-2 p-2 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-green-400 rounded text-sm whitespace-pre-wrap">
                  {question.example}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Responsive;
