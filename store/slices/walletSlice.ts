import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initializeQueue, QueueItem, updateQueueOrder, setSelectedIndex } from './newQueueSlice';
import { resetEditorState } from './newEditorSlice';




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

// Transform wallet data
const transformWalletData = (data: any[]): QueueItem[] => {
  return data.map((item: any) => ({
    id: item.id,
    initialSeed: item.seed,
    initialMod: item.modNumber || null,
    initialAttunement: item.attunementNumber !== null ? Number(item.attunementNumber) : null,
    locked: item.locked,
    isSet: false,
    newValues: {
      newSeed: null,
      newMod: null,
      newAttunement: null,
    },
    kind: item.kind || undefined,
  }));
};

// Async thunk to connect wallet and load data
export const connectWalletAndLoadData = createAsyncThunk(
  'wallet/connectAndLoadData',
  async (_, { dispatch }) => {
    try {
      const response = await fetch('/simulatedWalletData.json');
      if (!response.ok) {
        throw new Error('Failed to fetch simulated wallet data');
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      
      const transformedData = transformWalletData(data);
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