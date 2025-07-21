// src/components/FlashcardList.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFlashcard,
  deleteFlashcard,
  updateFlashcard,
} from "../features/flashcardSlice";

const FlashcardList = () => {
  const dispatch = useDispatch();
  const flashcards = useSelector((state) => state.flashcards);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");

  const handleAdd = () => {
    if (!question || !answer) return;
    dispatch(addFlashcard({ question, answer }));
    setQuestion("");
    setAnswer("");
  };

  const handleEdit = (fc) => {
    setEditingId(fc.id);
    setEditQuestion(fc.question);
    setEditAnswer(fc.answer);
  };

  const handleUpdate = (id) => {
    if (!editQuestion || !editAnswer) return;
    dispatch(updateFlashcard({ id, question: editQuestion, answer: editAnswer }));
    setEditingId(null);
    setEditQuestion("");
    setEditAnswer("");
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow">
      <h2 className="text-xl font-semibold mb-4">Flashcards</h2>

      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white py-2 rounded"
        >
          Add Flashcard
        </button>
      </div>

      <div className="grid gap-4">
        {flashcards.map((fc) => (
          <div
            key={fc.id}
            className="p-4 border rounded bg-gray-100 shadow-sm flex justify-between items-center"
          >
            {editingId === fc.id ? (
              <div className="flex flex-col gap-1 w-full">
                <input
                  type="text"
                  value={editQuestion}
                  onChange={(e) => setEditQuestion(e.target.value)}
                  className="border p-1 rounded"
                />
                <input
                  type="text"
                  value={editAnswer}
                  onChange={(e) => setEditAnswer(e.target.value)}
                  className="border p-1 rounded"
                />
                <div className="flex gap-2 mt-1">
                  <button
                    onClick={() => handleUpdate(fc.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-400 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between w-full">
                <div>
                  <strong>Q:</strong> {fc.question} <br />
                  <strong>A:</strong> {fc.answer}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(fc)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteFlashcard(fc.id))}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardList;
