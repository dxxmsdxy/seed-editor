import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { prepareToChangeSeed } from '@/store/slices/editorSlice';
import { RootState } from '../store'; // Make sure to import RootState
import { setWalletConnected } from './walletSlice'; // We'll create this slice

// Update the QueueItem interface
interface QueueItem {
  id: string;
  seed: string;  // Initial seed from wallet data
  newSeed: string | null;  // New seed set in the editor
  modNumber: string | null;
  newModNumber: string | null;
  attunementNumber: number | null;
  newAttunementNumber: number | null;
  locked: boolean;
  isSet: boolean;
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
    updateQueueItem: (state, action: PayloadAction<{ index: number; item: Partial<QueueItem>; isExplicitSet?: boolean }>) => {
      const { index, item, isExplicitSet } = action.payload;
      if (index >= 0 && index < state.items.length) {
        const currentItem = state.items[index];
        let hasChanged = false;

        for (const [key, value] of Object.entries(item)) {
          if (currentItem[key as keyof QueueItem] !== value) {
            if (key === 'seed') {
              currentItem.newSeed = value as string;
            } else if (key === 'modNumber') {
              currentItem.newModNumber = value as string;
            } else if (key === 'attunementNumber') {
              currentItem.newAttunementNumber = value as number;
            } else {
              (currentItem as any)[key] = value;
            }
            hasChanged = true;
          }
        }

        if (isExplicitSet && hasChanged) {
          currentItem.isSet = true;
        }

        // Only update the queue order if changes were made
        if (hasChanged) {
          queueSlice.caseReducers.updateQueueOrder(state);
        }
      }
    },

    // Reset a specific item in the queue and reorder items
    resetQueueItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const item = state.items[index];
      item.newSeed = null;
      item.newModNumber = null;
      item.newAttunementNumber = null;
      item.isSet = false;
      // We don't change the original seed, modNumber, or attunementNumber
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
      const itemsWithIndices = state.items.map((item, index) => ({ item, originalIndex: index }));
      
      itemsWithIndices.sort((a, b) => {
        const getPriority = (item: QueueItem) => {
          if (item.isSet) return 0; // Set items (highest priority)
          if (item.seed !== '0' || item.newSeed !== null) return 1; // Non-zero seed items
          return 2; // Zero seed items (lowest priority)
        };

        const priorityA = getPriority(a.item);
        const priorityB = getPriority(b.item);

        if (priorityA !== priorityB) {
          return priorityA - priorityB;
        }

        // If priorities are the same, maintain original order
        return a.originalIndex - b.originalIndex;
      });

      state.items = itemsWithIndices.map(({ item }) => item);
    },

    // Select the next unset item in the queue
    selectNextUnsetItem: (state) => {
      const nextUnsetIndex = state.items.findIndex(item => !item.isSet);
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
        newSeed: null,  // Initialize newSeed as null
        modNumber: item.modNumber || null,
        newModNumber: null,
        attunementNumber: item.attunementNumber || null,
        newAttunementNumber: null,
        locked: item.locked || false,
        isSet: false,
      }));

      // Sort the items immediately after setting them
      queueSlice.caseReducers.updateQueueOrder(state);

      if (state.items.length === 0) {
        state.selectedIndex = null;
        state.currentPage = 1;
      }
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
  state.queue.items.filter(item => (item.newSeed !== null && item.newSeed !== '0') || (item.seed !== '0' && item.isSet));
