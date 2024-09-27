import { combineReducers } from '@reduxjs/toolkit';
import seedReducer from './slices/editorSlice';
import queueReducer from './slices/queueSlice';
import otcReducer from './slices/otcSlice';
import editorReducer from './slices/newEditorSlice';

const rootReducer = combineReducers({
  editor: editorReducer,
  seed: seedReducer,
  queue: queueReducer,
  otc: otcReducer,
});

export default rootReducer;