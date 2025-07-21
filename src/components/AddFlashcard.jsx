import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../features/flashcardSlice";
import { v4 as uuidv4 } from "uuid";

const AddFlashcard = () => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) return;

    dispatch(
      addFlashcard({
        id: uuidv4(),
        question,
        answer,
      })
    );

    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="p-4 border rounded bg-white shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">Add New Flashcard</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Flashcard
        </button>
      </form>
    </div>
  );
};

export default AddFlashcard;
