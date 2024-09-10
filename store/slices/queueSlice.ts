import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { prepareToChangeSeed } from '@/store/slices/editorSlice';
import { RootState } from '../store';
import { setWalletConnected } from './walletSlice';

// Update the QueueItem interface
interface QueueItem {
  id: string;
  seed: string;  // Initial seed from wallet data
  newSeed: string | null;  // set from editorSeed
  modNumber: string | null;
  newMod: string | null; // set from editorMod
  attunementNumber: number | null;
  newAttunement: number | null; // set from editorAttunement
  locked: boolean;
  isSet: boolean;  // Add this property
  initialLocked: boolean;  // Add this property to store the initial lock status
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
    selectedIndex: (state, action: PayloadAction<number | null>) => {
      state.selectedIndex = action.payload;
    },
    
    // Update a specific item in the queue
    updateQueueItem: (state, action: PayloadAction<{ index: number; item: Partial<QueueItem>; isExplicitSet: boolean }>) => {
      const { index, item, isExplicitSet } = action.payload;
      if (index >= 0 && index < state.items.length) {
        const currentItem = state.items[index];
        let hasChanged = false;
    
        if (isExplicitSet) {
          // Always update values when explicitly set
          if (item.newSeed !== undefined) {
            currentItem.newSeed = item.newSeed;
            hasChanged = true;
          }
          if (item.newMod !== undefined) {
            currentItem.newMod = item.newMod;
            hasChanged = true;
          }
          if (item.newAttunement !== undefined) {
            currentItem.newAttunement = item.newAttunement;
            hasChanged = true;
          }
          currentItem.isSet = true;
        }
    
        if (hasChanged) {
          const selectedItemId = state.selectedIndex !== null ? state.items[state.selectedIndex].id : null;
          queueSlice.caseReducers.updateQueueOrder(state);
          if (selectedItemId !== null) {
            state.selectedIndex = state.items.findIndex(item => item.id === selectedItemId);
          }
        }
      }
    },
    // Reset a specific item in the queue and reorder items
    resetQueueItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const item = state.items[index];
      const originalId = item.id;
      
      // Reset to original values
      item.newSeed = null;
      item.newMod = null;
      item.newAttunement = null;
      
      // Reset the isSet flag
      item.isSet = false;
      
      // Reset the lock status to its initial state
      item.locked = item.initialLocked;

      // Update the queue order
      queueSlice.caseReducers.updateQueueOrder(state);

      // Find the new index of the reset item
      const newIndex = state.items.findIndex(item => item.id === originalId);

      // Update the selected index if necessary
      if (state.selectedIndex === index) {
        state.selectedIndex = newIndex;
      }

      // Update the current page if necessary
      if (newIndex !== -1) {
        state.currentPage = Math.floor(newIndex / state.itemsPerPage) + 1;
      }
    },
    
    // Toggle the locked state of a queue item
    toggleQueueItemLock: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      // Only toggle if seed is not '0'
      if (state.items[index].seed !== '0') {
        const item = state.items[index];
        item.locked = !item.locked;
        
        // Set the item if the lock status changes from its initial state
        if (item.locked !== item.initialLocked) {
          item.isSet = true;
          // If the item is now set, update its new values
          if (!item.newSeed) item.newSeed = item.seed;
          if (!item.newMod) item.newMod = item.modNumber;
          if (!item.newAttunement) item.newAttunement = item.attunementNumber;
        } else {
          // If the lock status is back to its initial state, check if other values are unchanged
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

    // Set the current page for pagination
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    // Move all set items to the front of the queue
    updateQueueOrder: (state) => {
      const selectedItemId = state.selectedIndex !== null ? state.items[state.selectedIndex] : null;
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

      // Update the selectedIndex if a item was selected
      if (selectedItemId !== null) {
        state.selectedIndex = state.items.findIndex(item => item.id === selectedItemId);
      }
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

    setQueueItems: (state, action: PayloadAction<QueueItem[]>) => {
      state.items = action.payload.map(item => ({
        id: item.id,
        seed: item.seed || '0',
        newSeed: null,  // Initialize newSeed as null
        modNumber: item.modNumber || null,
        newMod: null,
        attunementNumber: item.attunementNumber || null,
        newAttunement: null,
        locked: item.locked || false,
        initialLocked: item.locked || false,  // Store the initial lock status
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

export const {
  selectedIndex,
  updateQueueItem,
  resetQueueItem,
  toggleQueueItemLock,
  setCurrentPage,
  selectNextUnsetItem,
  updateQueueOrder,
  setQueueItems,
} = queueSlice.actions;

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

export const selectSetQueueItems = (state: RootState) => 
  state.queue.items.filter(item => 
    (item.newSeed !== null && item.newSeed !== '0') || 
    (item.newMod !== null) || 
    (item.newAttunement !== null) || 
    item.isSet
  );

export const selectSelectedQueueItem = (state: RootState) => state.queue.selectedIndex !== null ? state.queue.items[state.queue.selectedIndex] : null;
  
