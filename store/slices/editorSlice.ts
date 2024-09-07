import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  advancedToggled: false,
  modToggled: false,
  selectedButtons: new Set<number>(),
  sliderValues: {
    attune: 0,
    color: 0,
    depth: 0,
    spin: 0,
    tint: 0,
    "tint%": 100
  },
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    // We'll add reducers in a later step
  },
});

export default editorSlice.reducer;