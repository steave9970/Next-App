// notesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
        console.log(state, action, "OOOOO");
      return state.filter(note => note.id !== action.payload);
    },
    reorderNotes: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const [movedNote] = state.splice(sourceIndex, 1);
      state.splice(destinationIndex, 0, movedNote);
    },
  },
});

export const { addNote, deleteNote, reorderNotes } = notesSlice.actions;
export default notesSlice.reducer;
