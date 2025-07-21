import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFlashcard, updateFlashcard } from '../features/flashcardSlice';

const FlashcardForm = ({ editId, onFinish }) => {
  const dispatch = useDispatch();
  const flashcards = useSelector((state) => state.flashcards.flashcards);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (editId) {
      const cardToEdit = flashcards.find((card) => card.id === editId);
      if (cardToEdit) {
        setQuestion(cardToEdit.question);
        setAnswer(cardToEdit.answer);
      }
    }
  }, [editId, flashcards]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question || !answer) return;

    const newFlashcard = {
      id: editId || Date.now(),
      question,
      answer,
    };

    if (editId) {
      dispatch(updateFlashcard(newFlashcard));
    } else {
      dispatch(addFlashcard(newFlashcard));
    }

    setQuestion('');
    setAnswer('');
    if (onFinish) onFinish();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-4 mb-4"
    >
      <h2 className="text-xl font-semibold mb-2">
        {editId ? 'Edit Flashcard' : 'Add Flashcard'}
      </h2>

      <div className="mb-2">
        <label className="block font-medium mb-1">Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter the question"
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium mb-1">Answer</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          rows="3"
          placeholder="Enter the answer"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {editId ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default FlashcardForm;
