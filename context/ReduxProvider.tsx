'use client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import newQueueReducer from '@/store/slices/newQueueSlice';
import newEditorReducer from '@/store/slices/newEditorSlice';
import modalReducer from '@/store/slices/modalSlice';
import walletReducer from '@/store/slices/walletSlice';

const store = configureStore({
  reducer: {
    newEditor: newEditorReducer,
    newQueue: newQueueReducer,
    modal: modalReducer,
    wallet: walletReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}