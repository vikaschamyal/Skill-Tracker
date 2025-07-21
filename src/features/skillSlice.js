// src/features/skillSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("skills");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Error loading skills from localStorage", err);
    return [];
  }
};

const saveToLocalStorage = (skills) => {
  try {
    localStorage.setItem("skills", JSON.stringify(skills));
  } catch (err) {
    console.error("Error saving skills to localStorage", err);
  }
};

const initialState = loadFromLocalStorage();

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    removeSkill: (state, action) => {
      const updated = state.filter((skill) => skill.id !== action.payload);
      saveToLocalStorage(updated);
      return updated;
    },
    updateSkill: (state, action) => {
      const index = state.findIndex((skill) => skill.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        saveToLocalStorage(state);
      }
    },
    setSkills: (state, action) => {
      return action.payload;
    }
    
  },
});

export const { addSkill, removeSkill, updateSkill ,setSkills} = skillSlice.actions;
export default skillSlice.reducer;
