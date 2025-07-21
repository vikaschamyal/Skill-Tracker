// components/FlashcardLearningMode.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";

const FlashcardLearningMode = () => {
  const cards = useSelector((state) => state.flashcards);
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const nextCard = () => {
    setShowBack(false);
    setIndex((prev) => (prev + 1 < cards.length ? prev + 1 : 0));
  };

  if (!cards.length) return <div>No flashcards to learn.</div>;

  return (
    <div className="p-4 text-center">
      <div className="text-lg font-bold mb-2">
        {showBack ? cards[index].back : cards[index].front}
      </div>
      <button
        onClick={() => setShowBack(!showBack)}
        className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded"
      >
        Flip
      </button>
      <button
        onClick={nextCard}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Next
      </button>
      <div className="mt-2 text-sm text-gray-500">
        {index + 1}/{cards.length}
      </div>
    </div>
  );
};

export default FlashcardLearningMode;
