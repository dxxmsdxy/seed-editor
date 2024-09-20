import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface OTCState {
  isOTC: boolean;
  address: string | null;
}

const initialState: OTCState = {
  isOTC: false,
  address: null,
};

const otcSlice = createSlice({
  name: 'otc',
  initialState,
  reducers: {
    setOTCMode: (state, action: PayloadAction<boolean>) => {
      state.isOTC = action.payload;
    },
    setOTCAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    clearOTCState: (state) => {
      state.isOTC = false;
      state.address = null;
    },
  },
});

export const { setOTCMode, setOTCAddress, clearOTCState } = otcSlice.actions;

export const selectOTCMode = (state: RootState) => state.otc.isOTC;
export const selectOTCAddress = (state: RootState) => state.otc.address;

export default otcSlice.reducer;