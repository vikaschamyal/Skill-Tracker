// src/features/interviewQuestionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const interviewQuestionsSlice = createSlice({
  name: 'interviewQuestions',
  initialState: {
    questionsRaw: [],      // 👈 matches what you're trying to destructure
    currentIndex: 0,
  },
  reducers: {
    setInterviewQuestions: (state, action) => {
      state.questionsRaw = action.payload;
    },
    nextQuestion: (state) => {
      if (state.currentIndex < state.questionsRaw.length - 1) {
        state.currentIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
  },
});

export const {
  setInterviewQuestions,
  nextQuestion,
  prevQuestion,
} = interviewQuestionsSlice.actions;

export default interviewQuestionsSlice.reducer;
