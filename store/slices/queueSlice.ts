import { createSlice, PayloadAction, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { setEditorState, resetEditorState } from './editorSlice';
import { RootState } from '@/store';

// INTERFACES -------------------------------------

export interface QueueItem {
  id: string;
  seed: string;
  newSeed: string | null;
  modNumber: string | null;
  newMod: string | null;
  attunementNumber: number | null;
  newAttunement: number | null;
  locked: boolean;
  isSet: boolean;
}

interface QueueState {
  items: QueueItem[];
  selectedIndex: number | null;
  currentPage: number;
  itemsPerPage: number;
}

// INITIALIZATION -----------------------------------

const initialState: QueueState = {
  items: [],
  selectedIndex: null,
  currentPage: 1,
  itemsPerPage: 10,
};

// MODULE FUNCTIONS -----------------------------------

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {

    // Set the entire queue of items
    initializeQueue: (state, action: PayloadAction<QueueItem[]>) => {
      state.items = action.payload.map(item => ({
        ...item,
        newSeed: null,
        newMod: null,
        newAttunement: null,
        initialLocked: item.locked || false,
        isSet: false,
      }));

      queueSlice.caseReducers.updateQueueOrder(state);

      if (state.items.length === 0) {
        state.selectedIndex = null;
        state.currentPage = 1;
      }
    },

    // Re-order the queue items
    updateQueueOrder: (state) => {
      const selectedItemId = state.selectedIndex !== null && state.selectedIndex < state.items.length
        ? state.items[state.selectedIndex].id
        : null;
      
      state.items.sort((a, b) => {
        const priorityA = getPriority(a);
        const priorityB = getPriority(b);
        return priorityA - priorityB || state.items.indexOf(a) - state.items.indexOf(b);
      });
    
      if (selectedItemId !== null) {
        state.selectedIndex = state.items.findIndex(item => item.id === selectedItemId);
      }
    },
    
    // Update or reset a specific item in the queue
    updateQueueItem: (state, action: PayloadAction<{ 
      index: number; 
      item: Partial<QueueItem>; 
      isExplicitSet: boolean;
      isReset?: boolean;
    }>) => {
      const { index, item, isExplicitSet, isReset } = action.payload;
      if (index >= 0 && index < state.items.length) {
        const currentItem = state.items[index];
        
        if (isReset) {
          // Reset logic
          Object.assign(currentItem, {
            newSeed: null,
            newMod: null,
            newAttunement: null,
            isSet: false,
            locked: currentItem.initialLocked
          });
        } else {
          // Update logic
          const hasChanged = updateItemValues(currentItem, item, isExplicitSet);
          
          if (hasChanged) {
            const selectedItemId = state.selectedIndex !== null ? state.items[state.selectedIndex].id : null;
            queueSlice.caseReducers.updateQueueOrder(state);
            if (selectedItemId !== null) {
              state.selectedIndex = state.items.findIndex(item => item.id === selectedItemId);
            }
          }
        }
      }
    },
    
    // Select or deselect queue items
    setSelectedIndex: (state, action: PayloadAction<number | null>) => {
      state.selectedIndex = action.payload;
    },

    // Select and update a queue item
    selectAndUpdateQueueItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.items.length) {
        if (index === state.selectedIndex) {
          state.selectedIndex = null;
        } else {
          state.selectedIndex = index;
        }
        state.currentPage = Math.floor(index / state.itemsPerPage) + 1;
      } else {
        state.selectedIndex = null;
      }
    },
    
    // Toggle the locked state of a queue item
    toggleQueueItemLock: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.items[index].seed !== '0') {
        const item = state.items[index];
        item.locked = !item.locked;
        
        if (item.locked !== item.initialLocked) {
          item.isSet = true;
          if (!item.newSeed) item.newSeed = item.seed;
          if (!item.newMod) item.newMod = item.modNumber;
          if (!item.newAttunement) item.newAttunement = item.attunementNumber;
        } else {
          const isUnchanged = 
            item.newSeed === item.seed &&
            item.newMod === item.modNumber &&
            item.newAttunement === item.attunementNumber;          
          if (isUnchanged) {
            item.isSet = false;
            item.newSeed = null;
            item.newMod = null;
            item.newAttunement = null;
          }
        }
        queueSlice.caseReducers.updateQueueOrder(state);
      }
    },

    // Reset a queue item
    resetQueueItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.items.length) {
        const item = state.items[index];
        item.newSeed = null;
        item.newMod = null;
        item.newAttunement = null;
        item.isSet = false;
        item.locked = item.initialLocked || false;
      }
      queueSlice.caseReducers.updateQueueOrder(state);
    },

    // Set the current page for pagination
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

// THUNKS ----------------------------------------------

// Thunk for selecting and updating queue item
export const selectAndUpdateQueueItemThunk = createAsyncThunk(
  'queue/selectAndUpdateQueueItemThunk',
  async (index: number, { dispatch, getState }) => {
    const state = getState() as RootState;
    const selectedItem = state.queue.items[index];
    
    dispatch(selectAndUpdateQueueItem(index));
    
    if (index !== state.queue.selectedIndex) {
      const isSet = selectedItem.isSet;
      dispatch(setEditorState({
        seed: isSet ? selectedItem.newSeed || selectedItem.seed : selectedItem.seed || '0',
        mod: isSet ? selectedItem.newMod || selectedItem.modNumber : selectedItem.modNumber || "000000000000000",
        attunement: isSet ? selectedItem.newAttunement ?? selectedItem.attunementNumber : selectedItem.attunementNumber ?? 0
      }));
    } else {
      dispatch(resetEditorState());
    }
  }
);

// Thunk for resetting queue items
export const resetQueueItemThunk = createAsyncThunk(
  'queue/resetQueueItemThunk',
  async (index: number, { dispatch }) => {
    dispatch(resetQueueItem(index));
    dispatch(updateQueueOrder());
  }
);

// Thunk for selecting next unset queue item
export const selectNextUnsetQueueItemThunk = createAsyncThunk(
  'queue/selectNextUnsetQueueItemThunk',
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    const nextUnsetIndex = state.queue.items.findIndex(item => item.seed === '0');
    if (nextUnsetIndex !== -1) {
      dispatch(selectAndUpdateQueueItemThunk(nextUnsetIndex));
    }
  }
);

// SELECTORS -----------------------------------------

// Get queue items and their values
export const getQueueItemsForRendering = createSelector(
  [(state: RootState) => state.queue.items, (state: RootState) => state.queue.selectedIndex],
  (items, selectedIndex) => items.map((item, index) => ({
    index,
    displaySeed: item.isSet ? (item.newSeed || item.seed) : item.seed || '0',
    isSet: item.isSet,
    isSeedZero: (item.isSet ? (item.newSeed || item.seed) : item.seed || '0') === '0',
    isSelected: index === selectedIndex,
    locked: item.locked
  }))
);

// Get all set queue items
export const getSetQueueItems = createSelector(
  [(state: RootState) => state.queue.items],
  (items) => items.filter(item => 
    (item.newSeed !== null && item.newSeed !== '0') || 
    (item.newMod !== null) || 
    (item.newAttunement !== null) || 
    item.isSet
  )
);

// UTILITY FUNCTIONS --------------------------------

const getPriority = (item: QueueItem) => {
  if (item.isSet) return 0;
  if (item.locked && !item.isSet) return 1;
  if ((item.seed !== '0' || item.newSeed !== null) && !item.isSet) return 2;
  return 3;
};

const updateItemValues = (item: QueueItem, updates: Partial<QueueItem>, isExplicitSet: boolean) => {
  let hasChanged = false;

  if (isExplicitSet) {
    if (updates.newSeed !== undefined) {
      item.newSeed = updates.newSeed;
      hasChanged = true;
    }
    if (updates.newMod !== undefined) {
      item.newMod = updates.newMod;
      hasChanged = true;
    }
    if (updates.newAttunement !== undefined) {
      item.newAttunement = updates.newAttunement;
      hasChanged = true;
    }
    item.isSet = true;
  }

  return hasChanged;
};

// EXPORTS ---------------------------------------------

export const {
  updateQueueItem,
  toggleQueueItemLock,
  setCurrentPage,
  updateQueueOrder,
  initializeQueue,
  selectAndUpdateQueueItem,
  resetQueueItem,
  setSelectedIndex, // Add this line
} = queueSlice.actions;

export default queueSlice.reducer;