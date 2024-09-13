import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initializeQueue, updateQueueOrder, selectNextUnsetQueueItemThunk } from './queueSlice';
import {
  toggleLayersUI, toggleDisplaySettings,
} from '@/store/slices/editorSlice';




//==================================================//

// Define the structure of the wallet state
interface WalletState {
  connected: boolean;
  loading: boolean;
  error: string | null;
}

// Set up the initial state
const initialState: WalletState = {
  connected: false,
  loading: false,
  error: null,
};

// Utility function to transform wallet data
const transformWalletData = (data: any[]) => {
  return data.map((item: any) => ({
    id: item.id,
    seed: item.seed,
    modNumber: item.modNumber,
    attunementNumber: item.attunementNumber,
    locked: item.locked
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
      await dispatch(toggleLayersUI(false));
      await dispatch(toggleDisplaySettings(false));
      await dispatch(selectNextUnsetQueueItemThunk());
      
      return transformedData;
    } catch (error) {
      console.error('Error in connectWalletAndLoadData:', error);
      throw error;
    }
  }
);

export const disconnectWalletAndClearQueue = createAsyncThunk(
  'wallet/disconnectAndClear',
  async (_, { dispatch }) => {
    dispatch(disconnectWallet());
    dispatch(initializeQueue([]));
  }
);

// Create the wallet slice
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

export const { disconnectWallet } = walletSlice.actions;
export default walletSlice.reducer;