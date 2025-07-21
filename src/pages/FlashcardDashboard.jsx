// pages/FlashcardDashboard.jsx
import React from "react";
import AddFlashcard from "../components/AddFlashcard";
import FlashcardList from "../components/FlashcardList";
import FlashcardLearningMode from "../components/FlashcardLearningMode";

const FlashcardDashboard = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Flashcard Learning</h2>
      <AddFlashcard />
      <FlashcardList />
      <FlashcardLearningMode />
    </div>
  );
};

export default FlashcardDashboard ;
