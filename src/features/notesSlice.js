// src/features/notesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
        const { id, title, content } = action.payload;
        const index = state.notes.findIndex(note => note.id === id);
        if (index !== -1) {
          state.notes[index] = { ...state.notes[index], title, content };
        }
      },
      
  },
});

export const { addNote, deleteNote , updateNote} = notesSlice.actions;
export default notesSlice.reducer;
