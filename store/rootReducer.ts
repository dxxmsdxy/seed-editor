import { combineReducers } from '@reduxjs/toolkit';
import seedReducer from './slices/editorSlice';
import queueReducer from './slices/queueSlice';

const rootReducer = combineReducers({
  seed: seedReducer,
  queue: queueReducer,
  // Add other reducers here
});

export default rootReducer;