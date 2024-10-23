import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initializeQueue, QueueItem, updateQueueOrder, setSelectedIndex } from './queueSlice';
import { resetEditorState } from './editorSlice';




//=================================================//

// Wallet state
interface WalletState {
  connected: boolean;
  loading: boolean;
  error: string | null;
}

// Initialize wallet state
const initialState: WalletState = {
  connected: false,
  loading: false,
  error: null,
};

// STATE ACTIONS ----------------------------------

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    disconnectWallet: (state) => {
      state.connected = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectWalletAndLoadData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(connectWalletAndLoadData.fulfilled, (state) => {
        state.connected = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(connectWalletAndLoadData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to connect wallet and load data';
      });
  },
});


// UTILITY FUNCTIONS -------------------------------

// Fetch seedList data
const fetchSeedList = async () => {
  const response = await fetch('/seedList.json');
  if (!response.ok) {
    throw new Error('Failed to fetch seed list data');
  }
  return await response.json();
};

// Merge wallet data with seedList data
const mergeWalletDataWithSeedList = (walletData: any[], seedList: any[]) => {
  const seedMap = new Map(seedList.map((item, index) => [item.id, { ...item, mintOrder: index }]));
  
  return walletData.map(item => {
    const seedItem = seedMap.get(item.id);
    if (seedItem) {
      return {
        ...item,
        kind: seedItem.kind,
        sat: seedItem.sat,
        mintOrder: seedItem.mintOrder
      };
    }
    return item;
  });
};

// Transform wallet data
const transformWalletData = (data: any[]): QueueItem[] => {
  return data.map((item: any) => ({
    id: item.id,
    initialSeed: item.seed,
    initialMod: item.modNumber || null,
    initialAttunement: item.attunementNumber !== null ? Number(item.attunementNumber) : null,
    initialAttunementOverridden: false,
    isAttunementOverridden: false,
    locked: item.locked,
    isSet: false,
    newValues: {
      newSeed: null,
      newMod: null,
      newAttunement: null,
      isAttunementOverridden: null 
    },
    kind: item.kind,
    sat: item.sat,
    mintOrder: item.mintOrder,
  }));
};

// Async thunk to connect wallet and load data
export const connectWalletAndLoadData = createAsyncThunk(
  'wallet/connectAndLoadData',
  async (_, { dispatch }) => {
    try {
      const [walletData, seedList] = await Promise.all([
        fetch('/simulatedWalletData.json').then(response => {
          if (!response.ok) throw new Error('Failed to fetch simulated wallet data');
          return response.json();
        }),
        fetchSeedList()
      ]);

      console.log('Fetched wallet data:', walletData);
      console.log('Fetched seed list:', seedList);
      
      const mergedData = mergeWalletDataWithSeedList(walletData, seedList);
      console.log('Merged data:', mergedData);

      const transformedData = transformWalletData(mergedData);
      await dispatch(initializeQueue(transformedData));
      await dispatch(updateQueueOrder());
      
      return transformedData;
    } catch (error) {
      console.error('Error in connectWalletAndLoadData:', error);
      throw error;
    }
  }
);

// Disconnect wallet and clear queue
export const disconnectWalletAndClearQueue = createAsyncThunk(
  'wallet/disconnectAndClear',
  async (_, { dispatch }) => {
    dispatch(disconnectWallet());
    dispatch(initializeQueue([]));
    dispatch(resetEditorState());
    dispatch(setSelectedIndex(null)); // Add this line
  }
);

export const { disconnectWallet } = walletSlice.actions;
export default walletSlice.reducer;