import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: []
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    updateNotes: (state, action) => {
      state.notes = action.payload     
    }
  }
})

export default notesSlice.reducer;
export const { updateNotes } = notesSlice.actions;
