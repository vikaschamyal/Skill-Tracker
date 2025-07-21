// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import skillReducer from "../features/skillSlice";
import notesReducer from '../features/notesSlice';
import flashcardReducer from "../features/flashcardSlice"; // ✅
import questionBankReducer from "../features/questionBankSlice";
import interviewQuestionsReducer from '../features/interviewQuestionsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    skills: skillReducer,
    notes: notesReducer,
    flashcards: flashcardReducer,

    questionBank: questionBankReducer,
    interviewQuestions: interviewQuestionsReducer,
  },
});
