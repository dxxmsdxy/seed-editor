import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { calculateMostFrequentNumeral } from '@/lib/newUtils';





//==================================================//

// Queue item state
export interface QueueItem {
  id: string;
  initialSeed: string;
  initialMod: string | null;
  initialAttunement: number | null;
  isSet: boolean;
  newValues: {
    newSeed: string | null;
    newMod: string | null;
    newAttunement: number | null;
  };
  kind?: string;
}

// Queue state
interface QueueState {
  items: QueueItem[];
  selectedIndex: number | null;
  currentPage: number;
  itemsPerPage: number;
}

// Initialize queue state
const initialState: QueueState = {
  items: [],
  selectedIndex: null,
  currentPage: 1,
  itemsPerPage: 10,
};


// STATE ACTIONS --------------------------------

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
        state.items[index].isSet = false;
      }
    },
    setSelectedIndex: (state, action: PayloadAction<number | null>) => {
      state.selectedIndex = action.payload;
    },
    updateQueueItemWithDragDrop: (state, action: PayloadAction<{ 
      index: number; 
      newValues: Partial<QueueItem['newValues']> 
    }>) => {
      const { index, newValues } = action.payload;
      if (index >= 0 && index < state.items.length) {
        state.items[index].newValues = {
          ...state.items[index].newValues,
          ...newValues,
        };
        state.selectedIndex = index;
      }
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    updateQueueOrder: (state) => {
      const selectedItemId = state.selectedIndex !== null && state.selectedIndex < state.items.length
        ? state.items[state.selectedIndex].id
        : null;
      
      state.items.sort((a, b) => {
        const priorityA = getPriority(a);
        const priorityB = getPriority(b);
        if (priorityA !== priorityB) {
          return priorityA - priorityB;
        }
        // If priorities are the same, sort by seed in descending order
        const seedA = BigInt(a.newValues.newSeed || a.initialSeed);
        const seedB = BigInt(b.newValues.newSeed || b.initialSeed);
        return seedB < seedA ? -1 : seedB > seedA ? 1 : 0;
      });
    
      if (selectedItemId !== null) {
        state.selectedIndex = state.items.findIndex(item => item.id === selectedItemId);
      }
    },
  },
});


// UTILITY FUNCTIONS -------------------------------

const getPriority = (item: QueueItem) => {
  if (item.isSet || item.newValues.newSeed !== null || item.newValues.newMod !== null || item.newValues.newAttunement !== null) {
    // Set items: priority 0, then sorted by seed
    return 0;
  }
  // Unset items: priority 1, then sorted by seed
  return 1;
};


// SELECTORS ---------------------------------------

export const selectQueueItems = (state: RootState) => state.newQueue.items;
export const selectSelectedIndex = (state: RootState) => state.newQueue.selectedIndex;
export const selectCurrentPage = (state: RootState) => state.newQueue.currentPage;
export const selectItemsPerPage = (state: RootState) => state.newQueue.itemsPerPage;

// Get queue items
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

// Check if queue has been modified
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

// Get the total queue page count
export const selectTotalPages = createSelector(
  [selectQueueItems, selectItemsPerPage],
  (items, itemsPerPage) => Math.ceil(items.length / itemsPerPage)
);

// Get the queue items on current queue page
export const selectCurrentPageItems = createSelector(
  [selectQueueItemsForRendering, selectCurrentPage, selectItemsPerPage],
  (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);
    return items.slice(startIndex, endIndex);
  }
);


// EXPORTED ACTIONS ---------------------------------

export const {
  initializeQueue,
  updateQueueItem,
  resetQueueItem,
  setSelectedIndex,
  updateQueueItemWithDragDrop,
  setCurrentPage,
  updateQueueOrder,
} = newQueueSlice.actions;

export default newQueueSlice.reducer;