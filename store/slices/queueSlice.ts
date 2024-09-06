import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of a queue item
interface QueueItem {
  seed: string;  // Using string to represent BigInt for Redux compatibility
  modNumber: string | null;
  attunementNumber: number | null;
  locked: boolean;
}

// Define the overall state structure for the queue
interface QueueState {
  items: QueueItem[];
  selectedIndex: number | null;
  currentPage: number;
  itemsPerPage: number;
}

// Set up the initial state
const initialState: QueueState = {
  items: Array(10).fill({ seed: '0', modNumber: null, attunementNumber: null, locked: false }),
  selectedIndex: null,
  currentPage: 1,
  itemsPerPage: 10,
};

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    // Replace the entire queue with a new set of items
    setQueueItems: (state, action: PayloadAction<QueueItem[]>) => {
      state.items = action.payload;
    },

    // Update a specific item in the queue
    updateQueueItem: (state, action: PayloadAction<{ index: number; item: Partial<QueueItem> }>) => {
      const { index, item } = action.payload;
      state.items[index] = { ...state.items[index], ...item };
    },

    // Set the currently selected queue item index
    setSelectedIndex: (state, action: PayloadAction<number | null>) => {
      state.selectedIndex = action.payload;
    },

    // Reset a specific item in the queue and reorder items
    resetQueueItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.items.splice(index, 1);
      const setItems = state.items.filter(item => item.seed !== '0');
      const unsetItems = state.items.filter(item => item.seed === '0');
      unsetItems.push({ seed: '0', modNumber: null, attunementNumber: null, locked: false });
      state.items = [...setItems, ...unsetItems];

      // Update selectedIndex if necessary
      if (state.selectedIndex !== null) {
        if (index === state.selectedIndex) {
          const nextUnsetIndex = state.items.findIndex(item => item.seed === '0');
          state.selectedIndex = nextUnsetIndex !== -1 ? nextUnsetIndex : null;
        } else if (index < state.selectedIndex) {
          state.selectedIndex--;
        }
      }
    },

    // Toggle the locked state of a queue item
    toggleQueueItemLock: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.items[index].locked = !state.items[index].locked;
    },

    // Set the current page for pagination
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    // Select the next unset item in the queue
    selectNextUnsetItem: (state) => {
      const nextUnsetIndex = state.items.findIndex(item => item.seed === '0');
      if (nextUnsetIndex !== -1) {
        state.selectedIndex = nextUnsetIndex;
        state.currentPage = Math.floor(nextUnsetIndex / state.itemsPerPage) + 1;
      }
    },
  },
});

// Export the action creators
export const {
  setQueueItems,
  updateQueueItem,
  setSelectedIndex,
  resetQueueItem,
  toggleQueueItemLock,
  setCurrentPage,
  selectNextUnsetItem,
} = queueSlice.actions;

// Export the reducer
export default queueSlice.reducer;
