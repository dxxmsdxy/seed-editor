import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of the seed state
interface SeedState {
  seed: string;  // Using string to represent BigInt for Redux compatibility
  bitsArray: boolean[];  // Array of 256 bits representing the seed
  modNumber: string;
  attunementNumber: number;
  savedSeeds: { seed: string }[];  // Array of saved seeds
  displaySettings: number[];  // Array of display settings
  colorValue: number;  // Color value
  depthValue: number;  // Depth value
  spinValue: number;  // Spin value
  tintValue: number;  // Tint value
  tintPercentValue: number;  // Tint percent value
  hasUnsavedChanges: boolean;
  layersUIToggled: boolean;
  displaySettingsToggled: boolean;
  isSelecting: boolean;
  tempSelectedButtons: number[];
  isActive: { [key: string]: boolean };
}

// Set up the initial state
const initialState: SeedState = {
  seed: '0',
  bitsArray: Array(100).fill(false),
  modNumber: "000000000000000",
  attunementNumber: 0,
  savedSeeds: [],
  displaySettings: [],
  colorValue: 0,
  depthValue: 0,
  spinValue: 0,
  tintValue: 0,
  tintPercentValue: 100,
  hasUnsavedChanges: false,
  layersUIToggled: false,
  displaySettingsToggled: false,
  isSelecting: false,
  tempSelectedButtons: [],
  isActive: {},
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
      state.hasUnsavedChanges = true;
    },

    // Set the mod number
    setModNumber: (state, action: PayloadAction<string>) => {
      state.modNumber = action.payload;
      updateStateFromModNumber(state, action.payload);
      state.hasUnsavedChanges = true;
    },

    // Set the attunement number
    setAttunementNumber: (state, action: PayloadAction<number>) => {
      state.attunementNumber = action.payload;
      state.hasUnsavedChanges = true;
    },

    // Increment the attunement number
    incrementAttunementNumber: (state) => {
      state.attunementNumber = (state.attunementNumber + 1) % 10;
      state.hasUnsavedChanges = true;
    },

    // Decrement the attunement number
    decrementAttunementNumber: (state) => {
      state.attunementNumber = (state.attunementNumber - 1 + 10) % 10;
      state.hasUnsavedChanges = true;
    },

    // Reset the seed to initial state
    resetSeed: (state) => {
      state.seed = '0';
      state.modNumber = "000000000000000";
      state.attunementNumber = 0;
      state.bitsArray = Array(100).fill(false);
      state.hasUnsavedChanges = false;
    },

    // Toggle a specific bit in the bitsArray
    toggleBit: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.bitsArray[index] = !state.bitsArray[index];
      state.seed = BigInt('0b' + state.bitsArray.map(b => b ? '1' : '0').join('')).toString();
      state.hasUnsavedChanges = true;
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
      state.hasUnsavedChanges = true;
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

    // Update display setting
    updateDisplaySetting: (state, action: PayloadAction<number>) => {
      const displaySettings = action.payload;
      state.displaySettings = [];
      for (let i = 0; i < 9; i++) {
        if (displaySettings & (1 << (8 - i))) {
          state.displaySettings.push(1 << (8 - i));
        }
      }
      state.modNumber = calculateModNumber(state);
      state.hasUnsavedChanges = true;
    },

    // Update slider value
    updateSliderValue: (state, action: PayloadAction<{name: string, value: number}>) => {
      const { name, value } = action.payload;
      const key = name as keyof Pick<SeedState, 'colorValue' | 'depthValue' | 'spinValue' | 'tintValue' | 'tintPercentValue'>;
      if (state[key] !== value) {
        state[key] = value;
        state.modNumber = calculateModNumber(state);
        state.hasUnsavedChanges = true;
      }
    },
    
    // Reset unsaved changes
    resetUnsavedChanges: (state) => {
      state.hasUnsavedChanges = false;
    },

    // Toggle layers UI
    toggleLayersUI: (state) => {
      state.layersUIToggled = !state.layersUIToggled;
      state.displaySettingsToggled = false;
    },

    // Toggle display settings
    toggleDisplaySettings: (state) => {
      state.displaySettingsToggled = !state.displaySettingsToggled;
      state.layersUIToggled = false;
    },

    // Set is selecting
    setIsSelecting: (state, action: PayloadAction<boolean>) => {
      state.isSelecting = action.payload;
    },

    // Update temp selected buttons
    updateTempSelectedButtons: (state, action: PayloadAction<number[]>) => {
      state.tempSelectedButtons = action.payload;
    },

    // Set slider active
    setSliderActive: (state, action: PayloadAction<{ name: string; isActive: boolean }>) => {
      state.isActive[action.payload.name] = action.payload.isActive;
    },
  },
});

// Helper function to update state from mod number
const updateStateFromModNumber = (state: SeedState, modNumber: string) => {
  state.displaySettings = [];
  const displaySettingsValue = parseInt(modNumber.slice(0, 3), 10);
  for (let i = 0; i < 9; i++) {
    if (displaySettingsValue & (1 << (8 - i))) {
      state.displaySettings.push(1 << (8 - i));
    }
  }
  state.colorValue = parseInt(modNumber.slice(3, 6), 10);
  state.depthValue = parseInt(modNumber.slice(6, 9), 10);
  state.spinValue = parseInt(modNumber.slice(9, 12), 10);
  state.tintValue = parseInt(modNumber.slice(12, 13), 10);
  state.tintPercentValue = modNumber.slice(13) === "99" ? 100 : parseInt(modNumber.slice(13), 10);
};

// Change this from a function declaration to an exported const
export const calculateModNumber = (state: SeedState): string => {
  const displaySettingsValue = state.displaySettings.reduce((sum, value) => sum + value, 0).toString().padStart(3, '0');
  const colorValue = state.colorValue.toString().padStart(3, '0');
  const depthValue = state.depthValue.toString().padStart(3, '0');
  const spinValue = state.spinValue.toString().padStart(3, '0');
  const tintValue = state.tintValue.toString();
  const tintPercentValue = state.tintValue === 0 ? "00" : state.tintPercentValue === 100 ? "99" : state.tintPercentValue.toString().padStart(2, '0');

  return `${displaySettingsValue}${colorValue}${depthValue}${spinValue}${tintValue}${tintPercentValue}`;
};

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
  prepareToChangeSeed,
  updateDisplaySetting,
  updateSliderValue,
  resetUnsavedChanges,
  toggleLayersUI,
  toggleDisplaySettings,
  setIsSelecting,
  updateTempSelectedButtons,
  setSliderActive,
} = seedSlice.actions;

// Export the reducer
export default seedSlice.reducer;