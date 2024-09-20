import { combineReducers } from '@reduxjs/toolkit';
import seedReducer from './slices/editorSlice';
import queueReducer from './slices/queueSlice';
import otcReducer from './slices/otcSlice';

const rootReducer = combineReducers({
  seed: seedReducer,
  queue: queueReducer,
  otc: otcReducer,
});

export default rootReducer;