// src/features/questionBankSlice.js
import { createSlice } from '@reduxjs/toolkit';
import questions from '../data/questions'; // Import local questions

const initialState = {
  questions: questions, // directly assign
  filteredQuestions: questions,
};

const questionBankSlice = createSlice({
  name: 'questionBank',
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.filteredQuestions = state.questions.filter(
        (q) => q.category === action.payload
      );
    },
    resetFilter: (state) => {
      state.filteredQuestions = state.questions;
    },
  },
});

export const { filterByCategory, resetFilter } = questionBankSlice.actions;
export default questionBankSlice.reducer;
