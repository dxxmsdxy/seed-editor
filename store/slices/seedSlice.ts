import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of the seed state
interface SeedState {
  seed: string;  // Using string to represent BigInt for Redux compatibility
  bitsArray: boolean[];  // Array of 256 bits representing the seed
  modNumber: string;
  attunementNumber: number;
  savedSeeds: { seed: string }[];  // Array of saved seeds
}

// Set up the initial state
const initialState: SeedState = {
  seed: '0',
  bitsArray: Array(100).fill(false),
  modNumber: "000000000000000",
  attunementNumber: 0,
  savedSeeds: [],
};

const shuffleArray = (array: number[]) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const seedSlice = createSlice({
  name: 'seed',
  initialState,
  reducers: {
    // Set the current seed
    setSeed: (state, action: PayloadAction<string>) => {
      state.seed = action.payload;
      state.bitsArray = BigInt(action.payload)
        .toString(2)
        .padStart(100, '0')
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

    // Increment the attunement number
    incrementAttunementNumber: (state) => {
      state.attunementNumber = (state.attunementNumber + 1) % 10;
    },

    // Decrement the attunement number
    decrementAttunementNumber: (state) => {
      state.attunementNumber = (state.attunementNumber - 1 + 10) % 10;
    },

    // Reset the seed to initial state
    resetSeed: (state) => {
      state.seed = '0';
      state.modNumber = "000000000000000";
      state.attunementNumber = 0;
      state.bitsArray = Array(100).fill(false);
    },

    // Toggle a specific bit in the bitsArray
    toggleBit: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.bitsArray[index] = !state.bitsArray[index];
      state.seed = BigInt('0b' + state.bitsArray.map(b => b ? '1' : '0').join('')).toString();
    },

    // Randomize all bits in the bitsArray
    randomizeBits: (state) => {
      const bitArray = new Array(100).fill(false);
      const numSelected = getRandomNumber(3, 30);
      const shuffledIndices = shuffleArray(Array.from(Array(100).keys()));
      
      for (let i = 0; i < numSelected; i++) {
        bitArray[shuffledIndices[i]] = true;
      }
      
      state.bitsArray = bitArray;
      state.seed = BigInt('0b' + bitArray.map(b => b ? '1' : '0').join('')).toString();
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

    // Prepare to change seed
    prepareToChangeSeed: (state) => {
      // This action doesn't modify the state, but will be used as a signal
    },
  },
});

// Export the action creators
export const {
  setSeed,
  setModNumber,
  setAttunementNumber,
  incrementAttunementNumber,
  decrementAttunementNumber,
  resetSeed,
  toggleBit,
  randomizeBits,
  saveSeed,
  deleteSaved,
  setSavedSeeds,
  prepareToChangeSeed, // Add this new action
} = seedSlice.actions;

// Export the reducer
export default seedSlice.reducer;