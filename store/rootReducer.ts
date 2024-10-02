import { combineReducers } from '@reduxjs/toolkit';
import editorSlice from './slices/editorSlice';
import walletSlice from './slices/walletSlice';
import queueSlice from './slices/queueSlice';
import modalSlice from './slices/modalSlice';

const rootReducer = combineReducers({
  editor: editorSlice,
  queue: queueSlice,
  wallet: walletSlice,
  modal: modalSlice,
});

export default rootReducer;