import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of the seed state
interface SeedState {
  seed: string;  // Using string to represent BigInt for Redux compatibility
  modNumber: string;
  attunementNumber: number;
  bitsArray: boolean[];  // Array of 256 bits representing the seed
  savedSeeds: { seed: string }[];  // Array of saved seeds
}

// Set up the initial state
const initialState: SeedState = {
  seed: '0',
  modNumber: "000000000000000",
  attunementNumber: 0,
  bitsArray: Array(256).fill(false),
  savedSeeds: [],
};

const seedSlice = createSlice({
  name: 'seed',
  initialState,
  reducers: {
    // Set the current seed
    setSeed: (state, action: PayloadAction<string>) => {
      state.seed = action.payload;
      // Update bitsArray based on the new seed
      state.bitsArray = BigInt(action.payload)
        .toString(2)
        .padStart(256, '0')
        .split('')
        .map(bit => bit === '1');
    },

    // Set the mod number
    setModNumber: (state, action: PayloadAction<string>) => {
      state.modNumber = action.payload;
    },

    // Set the attunement number
    setAttunementNumber: (state, action: PayloadAction<number>) => {
      state.attunementNumber = action.payload;
    },

    // Reset the seed to initial state
    resetSeed: (state) => {
      state.seed = '0';
      state.modNumber = "000000000000000";
      state.attunementNumber = 0;
      state.bitsArray = Array(256).fill(false);
    },

    // Toggle a specific bit in the bitsArray
    toggleBit: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.bitsArray[index] = !state.bitsArray[index];
      // Update seed based on new bitsArray
      state.seed = BigInt('0b' + state.bitsArray.map(b => b ? '1' : '0').join('')).toString();
    },

    // Randomize all bits in the bitsArray
    randomizeBits: (state) => {
      state.bitsArray = Array(256).fill(false).map(() => Math.random() < 0.5);
      // Update seed based on new bitsArray
      state.seed = BigInt('0b' + state.bitsArray.map(b => b ? '1' : '0').join('')).toString();
    },

    // Save the current seed
    saveSeed: (state) => {
      if (state.seed !== '0' && !state.savedSeeds.some(saved => saved.seed === state.seed)) {
        state.savedSeeds.push({ seed: state.seed });
      }
    },

    // Remove a saved seed
    deleteSaved: (state, action: PayloadAction<string>) => {
      state.savedSeeds = state.savedSeeds.filter(saved => saved.seed !== action.payload);
    },

    // Set the list of saved seeds
    setSavedSeeds: (state, action: PayloadAction<{ seed: string }[]>) => {
      state.savedSeeds = action.payload;
    },
  },
});

// Export the action creators
export const {
  setSeed,
  setModNumber,
  setAttunementNumber,
  resetSeed,
  toggleBit,
  randomizeBits,
  saveSeed,
  deleteSaved,
  setSavedSeeds,
} = seedSlice.actions;

// Export the reducer
export default seedSlice.reducer;