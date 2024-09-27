'use client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import seedReducer from '@/store/slices/editorSlice';
import queueReducer from '@/store/slices/queueSlice';
import newQueueReducer from '@/store/slices/newQueueSlice';
import newEditorReducer from '@/store/slices/newEditorSlice';
import modalReducer from '@/store/slices/modalSlice';
import walletReducer from '@/store/slices/walletSlice';
import otcReducer from '@/store/slices/otcSlice';

const store = configureStore({
  reducer: {
    seed: seedReducer,
    queue: queueReducer,
    newEditor: newEditorReducer,
    newQueue: newQueueReducer,
    modal: modalReducer,
    wallet: walletReducer,
    otc: otcReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}