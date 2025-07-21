// src/pages/InterviewQuestions.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setInterviewQuestions,
  nextQuestion,
  prevQuestion,
} from '../features/interviewQuestionsSlice';
import frontendQuestions from '../data/frontendInterviewQuestions'; // ✅ local data import

const InterviewQuestions = () => {
  const dispatch = useDispatch();
  const { questionsRaw, currentIndex } = useSelector((state) => state.interviewQuestions);

  useEffect(() => {
    // ✅ Only dispatch local data once on load
    if (questionsRaw.length === 0) {
      dispatch(setInterviewQuestions(frontendQuestions));
    }
  }, [dispatch, questionsRaw.length]);

  const current = questionsRaw[currentIndex];

  if (!current) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Frontend Interview Flashcards</h2>
      <div className="border p-4 rounded bg-white shadow">
        <p className="font-medium text-blue-600">Q: {current.question}</p>
        <p className="text-gray-700 mt-2">A: {current.answer}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => dispatch(prevQuestion())}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={() => dispatch(nextQuestion())}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InterviewQuestions;
