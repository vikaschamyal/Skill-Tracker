// features/flashcardSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const flashcardSlice = createSlice({
  name: "flashcards",
  initialState: [],
  reducers: {
    addFlashcard: (state, action) => {
      state.push({ id: uuidv4(), ...action.payload });
    },
    deleteFlashcard: (state, action) =>
      state.filter((card) => card.id !== action.payload),
    updateFlashcard: (state, action) => {
      const index = state.findIndex((card) => card.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
  },
});

export const { addFlashcard, deleteFlashcard, updateFlashcard } = flashcardSlice.actions;
export default flashcardSlice.reducer;
