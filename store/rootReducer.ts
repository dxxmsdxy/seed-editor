import { combineReducers } from '@reduxjs/toolkit';
import queueReducer from './slices/newQueueSlice';
import newEditorSlice from './slices/newEditorSlice';
import walletSlice from './slices/walletSlice';
import newQueueSlice from './slices/newQueueSlice';

const rootReducer = combineReducers({
  newEditor: newEditorSlice,
  newQueue: newQueueSlice,
  wallet: walletSlice,
  queue: queueReducer,
});

export default rootReducer;