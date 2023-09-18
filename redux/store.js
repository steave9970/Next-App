// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSilice';

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  // Add middleware if needed
});

export default store;
