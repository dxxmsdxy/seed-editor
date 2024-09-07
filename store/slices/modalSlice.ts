// store/slices/modalSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  showInscribeModal: boolean;
}

const initialState: ModalState = {
  showInscribeModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowInscribeModal: (state, action: PayloadAction<boolean>) => {
      state.showInscribeModal = action.payload;
    },
  },
});

export const { setShowInscribeModal } = modalSlice.actions;

export default modalSlice.reducer;