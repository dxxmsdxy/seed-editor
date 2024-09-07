import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { prepareToChangeSeed } from '@/store/slices/seedSlice';
import { RootState } from '../store'; // Make sure to import RootState
import { setWalletConnected } from './walletSlice'; // We'll create this slice

// Define the structure of a queue item
interface QueueItem {
  id: string;
  seed: string;  // Initial seed from wallet data
  modNumber: string | null;
  attunementNumber: number | null;
  locked: boolean;
  isSet: boolean;  // New field to indicate if it's been set in the UI
  url?: string; // Add this line
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
  items: [], // Start with an empty array
  selectedIndex: null,
  currentPage: 1,
  itemsPerPage: 10,
};

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    // Set the currently selected queue item index
    setSelectedIndex: (state, action: PayloadAction<number | null>) => {
      state.selectedIndex = action.payload;
    },
    
    // Update a specific item in the queue
    updateQueueItem: (state, action: PayloadAction<{ index: number; item: Partial<QueueItem> }>) => {
      const { index, item } = action.payload;
      state.items[index] = { 
        ...state.items[index], 
        ...item,
        // Ensure locked is false if seed is '0'
        locked: item.seed === '0' ? false : (item.locked ?? state.items[index].locked)
      };
    },

    // Reset a specific item in the queue and reorder items
    resetQueueItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.items[index] = { seed: '0', modNumber: null, attunementNumber: null, locked: false };

      // Update selectedIndex if necessary
      if (state.selectedIndex !== null) {
        if (index === state.selectedIndex) {
          state.selectedIndex = null;
        } else if (index < state.selectedIndex) {
          state.selectedIndex--;
        }
      }
    },
    
    // Toggle the locked state of a queue item
    toggleQueueItemLock: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      // Only toggle if seed is not '0'
      if (state.items[index].seed !== '0') {
        state.items[index].locked = !state.items[index].locked;
      }
    },

    // Set the current page for pagination
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    // Move all set items to the front of the queue
    updateQueueOrder: (state) => {
      const setItems = state.items.filter(item => item.seed !== '0');
      const unsetItems = state.items.filter(item => item.seed === '0');
      state.items = [...setItems, ...unsetItems];
    },

    // Select the next unset item in the queue
    selectNextUnsetItem: (state) => {
      const nextUnsetIndex = state.items.findIndex(item => item.seed === '0');
      if (nextUnsetIndex !== -1) {
        state.selectedIndex = nextUnsetIndex;
        state.currentPage = Math.floor(nextUnsetIndex / state.itemsPerPage) + 1;
      } else {
        // If no unset item is found, clear the selection
        state.selectedIndex = null;
      }
    },

    initializeQueue: (state) => {
      if (state.selectedIndex === null) {
        const nextUnsetIndex = state.items.findIndex(item => item.seed === '0');
        if (nextUnsetIndex !== -1) {
          state.selectedIndex = nextUnsetIndex;
          state.currentPage = Math.floor(nextUnsetIndex / state.itemsPerPage) + 1;
        }
      }
    },

    // Add this to the reducers
    setQueueItems: (state, action: PayloadAction<QueueItem[]>) => {
      state.items = action.payload.map(item => ({
        id: item.id,
        seed: item.seed || '0',
        modNumber: item.modNumber || null,
        attunementNumber: item.attunementNumber || null,
        locked: item.locked || false
      }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(prepareToChangeSeed, (state) => {
      if (state.selectedIndex === null) {
        const nextUnsetIndex = state.items.findIndex(item => item.seed === '0');
        if (nextUnsetIndex !== -1) {
          state.selectedIndex = nextUnsetIndex;
          state.currentPage = Math.floor(nextUnsetIndex / state.itemsPerPage) + 1;
        }
      }
    });
  },
});

// Export the action creators
export const {
  setSelectedIndex,
  updateQueueItem,
  resetQueueItem,
  toggleQueueItemLock,
  setCurrentPage,
  selectNextUnsetItem,
  updateQueueOrder,
  initializeQueue, // Make sure this is included
  setQueueItems, // Add this to the exported actions
} = queueSlice.actions;

// Add this new thunk
export const loadSimulatedWalletData = createAsyncThunk(
  'queue/loadSimulatedWalletData',
  async (_, { dispatch }) => {
    try {
      const response = await fetch('/simulatedWalletData.json');
      const data = await response.json();
      dispatch(setQueueItems(data));
    } catch (error) {
      console.error('Error loading simulated data:', error);
    }
  }
);

// Export the reducer
export default queueSlice.reducer;

// Add this selector at the end of the file
export const selectSetQueueItems = (state: RootState) => 
  state.queue.items.filter(item => item.seed !== '0');
