import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { calculateMostFrequentNumeral } from '@/lib/utils/artwork/helpers';

export interface QueueItem {
  id: string;
  initialSeed: string;
  initialMod: string | null;
  initialAttunement: number | null;
  locked: boolean;
  newValues: {
    newSeed: string | null;
    newMod: string | null;
    newAttunement: number | null;
  };
}

interface QueueState {
  items: QueueItem[];
  selectedIndex: number | null;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: QueueState = {
  items: [],
  selectedIndex: null,
  currentPage: 1,
  itemsPerPage: 10,
};

const newQueueSlice = createSlice({
  name: 'newQueue',
  initialState,
  reducers: {
    initializeQueue: (state, action: PayloadAction<QueueItem[]>) => {
      state.items = action.payload.map(item => ({
        ...item,
        initialAttunement: item.initialAttunement ?? calculateMostFrequentNumeral(BigInt(item.initialSeed)) ?? 0,
        newValues: {
          newSeed: null,
          newMod: null,
          newAttunement: null,
        },
      }));
    },
    updateQueueItem: (state, action: PayloadAction<{ index: number; newValues: Partial<QueueItem['newValues']> }>) => {
      const { index, newValues } = action.payload;
      if (index >= 0 && index < state.items.length) {
        state.items[index].newValues = {
          ...state.items[index].newValues,
          ...newValues,
        };
      }
    },
    resetQueueItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.items.length) {
        state.items[index].newValues = {
          newSeed: null,
          newMod: null,
          newAttunement: null,
        };
      }
    },
    setSelectedIndex: (state, action: PayloadAction<number | null>) => {
      state.selectedIndex = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

// Selectors
export const selectQueueItems = (state: RootState) => state.newQueue.items;
export const selectSelectedIndex = (state: RootState) => state.newQueue.selectedIndex;
export const selectCurrentPage = (state: RootState) => state.newQueue.currentPage;
export const selectItemsPerPage = (state: RootState) => state.newQueue.itemsPerPage;

export const selectQueueItemsForRendering = createSelector(
  [selectQueueItems, selectSelectedIndex],
  (items, selectedIndex) => items.map((item, index) => ({
    ...item,
    index,
    displaySeed: item.newValues.newSeed || item.initialSeed,
    isSet: item.newValues.newSeed !== null || item.newValues.newMod !== null || item.newValues.newAttunement !== null,
    isSeedZero: (item.newValues.newSeed || item.initialSeed) === '0',
    isSelected: index === selectedIndex,
  }))
);

export const selectIsQueueModified = createSelector(
  [selectQueueItems],
  (items) => items.some(item => 
    item.newValues.newSeed !== null || 
    item.newValues.newMod !== null || 
    item.newValues.newAttunement !== null
  )
);

// Get all set queue items
export const selectSetQueueItems = createSelector(
  [(state: RootState) => state.newQueue.items],
  (items) => items.filter(item => 
    (item.newValues.newSeed !== null && item.newSeed !== '0') || 
    (item.newValues.newMod !== null) || 
    (item.newValues.newAttunement !== null)
  )
);

export const selectTotalPages = createSelector(
  [selectQueueItems, selectItemsPerPage],
  (items, itemsPerPage) => Math.ceil(items.length / itemsPerPage)
);

export const selectCurrentPageItems = createSelector(
  [selectQueueItemsForRendering, selectCurrentPage, selectItemsPerPage],
  (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);
    return items.slice(startIndex, endIndex);
  }
);



export const {
  initializeQueue,
  updateQueueItem,
  resetQueueItem,
  setSelectedIndex,
  setCurrentPage,
} = newQueueSlice.actions;

export default newQueueSlice.reducer;