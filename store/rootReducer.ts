import { combineReducers } from '@reduxjs/toolkit';
import seedReducer from './slices/editorSlice';
import queueReducer from './slices/queueSlice';
import otcReducer from './slices/otcSlice';
import newEditorSlice from './slices/newEditorSlice';
import newQueueSlice from './slices/newQueueSlice';

const rootReducer = combineReducers({
  newEditor: newEditorSlice,
  newQueue: newQueueSlice,
  seed: seedReducer,
  queue: queueReducer,
  otc: otcReducer,
});

export default rootReducer;