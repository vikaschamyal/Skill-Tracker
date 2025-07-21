// components/FlashcardItem.jsx
import React, { useState } from "react";

const FlashcardItem = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-64 h-40 border rounded shadow-lg p-4 bg-white text-center cursor-pointer transition-all duration-300"
    >
      {flipped ? card.back : card.front}
      <div className="mt-2 text-sm text-gray-500">{card.category}</div>
    </div>
  );
};

export default FlashcardItem;
