import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { setQueueItems } from './queueSlice';

interface WalletState {
  connected: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: WalletState = {
  connected: false,
  loading: false,
  error: null,
};

export const connectWalletAndLoadData = createAsyncThunk(
  'wallet/connectAndLoadData',
  async (_, { dispatch }) => {
    try {
      const response = await fetch('/simulatedWalletData.json');
      if (!response.ok) {
        throw new Error('Failed to fetch simulated wallet data');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Keep this line for debugging
      return data.map((item: any) => ({
        id: item.id,
        seed: item.seed,
        modNumber: item.modNumber,
        attunementNumber: item.attunementNumber,
        locked: item.locked
      }));
    } catch (error) {
      console.error('Error in connectWalletAndLoadData:', error);
      throw error;
    }
  }
);

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectWalletAndLoadData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(connectWalletAndLoadData.fulfilled, (state, action) => {
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

export const { setWalletConnected } = walletSlice.actions;
export default walletSlice.reducer;