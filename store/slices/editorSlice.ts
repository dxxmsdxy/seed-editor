import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bitsToSeed, seedToBits } from "@/lib/utils";

// Define the structure of the seed state
interface SeedState {
  seed: string;
  bitsArray: boolean[];
  modNumber: string;
  attunementNumber: number;
  savedSeeds: { seed: string }[];  // Array of saved seeds
  displaySettings: number[];  // Array of display settings
  colorValue: number;  // Color value
  depthValue: number;  // Depth value
  spinValue: number;  // Spin value
  tintValue: number;  // Tint value
  tintPercentValue: number;  // Tint percent value
  layersUIToggled: boolean;
  displaySettingsToggled: boolean;
  isSelecting: boolean;
  tempSelectedButtons: number[];
  isActive: { [key: string]: boolean };
  newSeed: string;
  newMod: string;
  newAttunement: number;
  editorSeed: string;
  editorMod: string;
  editorAttunement: number;
  hasEditorChanges: boolean;
  history: {
    past: Partial<SeedState>[];
    future: Partial<SeedState>[];
  };
}

// Set up the initial state
const initialState: SeedState = {
  seed: '',
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
  layersUIToggled: false,
  displaySettingsToggled: false,
  isSelecting: false,
  tempSelectedButtons: [],
  isActive: {},
  newSeed: '',
  newMod: "000000000000000",
  newAttunement: 0,
  editorSeed: '0',
  editorMod: "000000000000000",
  editorAttunement: 0,
  hasEditorChanges: false,
  history: {
    past: [],
    future: [],
  },
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

    undo: (state) => {
      const previous = state.history.past.pop();
      if (previous) {
        state.history.future.push({ ...state });
        Object.assign(state, previous);
      }
    },

    redo: (state) => {
      const next = state.history.future.pop();
      if (next) {
        state.history.past.push({ ...state });
        Object.assign(state, next);
      }
    },

    setEditorState: (state, action: PayloadAction<{ seed: string; mod: string; attunement: number }>) => {
      state.editorSeed = action.payload.seed;
      state.editorMod = action.payload.mod;
      state.editorAttunement = action.payload.attunement;
      state.bitsArray = seedToBits(BigInt(action.payload.seed));
      updateStateFromModNumber(state, action.payload.mod);
      state.hasEditorChanges = false;
    },

    // Set the current seed
    setNewSeed: (state, action: PayloadAction<string>) => {
      state.newSeed = action.payload;
      state.bitsArray = BigInt(action.payload)
        .toString(2)
        .padStart(100, '0')
        .split('')
        .map(bit => bit === '1');
      state.hasEditorChanges = true;
    },

    // Set the mod number
    setNewMod: (state, action: PayloadAction<string>) => {
      state.newMod = action.payload;
      updateStateFromModNumber(state, action.payload);
      state.hasEditorChanges = true;
    },

    // Set the attunement number
    setNewAttunement: (state, action: PayloadAction<number>) => {
      state.newAttunement = action.payload;
      state.hasEditorChanges = true;
    },

    // Increment the attunement number
    incrementAttunementNumber: (state) => {
      if (state.hasEditorChanges = true) {
        state.newAttunement = (state.newAttunement + 1) % 10;
        state.hasEditorChanges = true;
      } else {
        state.newAttunement = (state.attunementNumber + 1) % 10;
        state.hasEditorChanges = true;
      }
    },

    // Decrement the attunement number
    decrementAttunementNumber: (state) => {
      if (state.hasEditorChanges = true) {
        state.newAttunement = (state.newAttunement - 1) % 10;
        state.hasEditorChanges = true;
      } else {
        state.newAttunement = (state.attunementNumber - 1) % 10;
        state.hasEditorChanges = true;
      }
    },

    // Reset the editor to initial state
    resetEditorState: (state) => {
      state.editorSeed = '0';
      state.editorMod = "000000000000000";
      state.editorAttunement = 0;
      state.bitsArray = Array(100).fill(false);
      state.hasEditorChanges = false;
    },

    // Toggle a specific bit in the bitsArray
    toggleBit: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.bitsArray[index] = !state.bitsArray[index];
      state.editorSeed = BigInt('0b' + state.bitsArray.map(b => b ? '1' : '0').join('')).toString();
      state.hasEditorChanges = true;
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
      state.editorSeed = BigInt('0b' + bitArray.map(b => b ? '1' : '0').join('')).toString();
      state.hasEditorChanges = true;
    },

    // Prepare to change seed
    prepareToChangeSeed: (state) => {
      // This action doesn't modify the state, is used as a signal
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
      state.hasEditorChanges = true;
    },

    // Update slider value
    updateSliderValue: (state, action: PayloadAction<{name: string, value: number}>) => {
      const { name, value } = action.payload;
      const key = name as keyof Pick<SeedState, 'colorValue' | 'depthValue' | 'spinValue' | 'tintValue' | 'tintPercentValue'>;
      if (state[key] !== value) {
        state[key] = value;
        state.modNumber = calculateModNumber(state);
        state.hasEditorChanges = true;
      }
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

    // Set slider active
    setSliderActive: (state, action: PayloadAction<{ name: string; isActive: boolean }>) => {
      state.isActive[action.payload.name] = action.payload.isActive;
    },

    // Set editor seed
    setEditorSeed: (state, action: PayloadAction<{ seed: string; updateChanges?: boolean }>) => {
      state.editorSeed = action.payload.seed;
      state.bitsArray = seedToBits(BigInt(action.payload.seed || '0'));
      if (action.payload.updateChanges) {
        state.hasEditorChanges = true;
      }
    },

    // Set editor mod number
    setEditorMod: (state, action: PayloadAction<{ modNumber: string; updateChanges?: boolean }>) => {
      state.editorMod = action.payload.modNumber;
      updateStateFromModNumber(state, action.payload.modNumber);
      if (action.payload.updateChanges) {
        state.hasEditorChanges = true;
      }
    },

    // Set editor attunement number
    setEditorAttunement: (state, action: PayloadAction<{ attunementNumber: number; updateChanges?: boolean }>) => {
      state.editorAttunement = action.payload.attunementNumber;
      if (action.payload.updateChanges) {
        state.hasEditorChanges = true;
      }
    },

    // Reset editor changes
    resetEditorChangedStatus: (state) => {
      state.hasEditorChanges = false;
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
  setNewSeed,
  setNewMod,
  setNewAttunement,
  incrementAttunementNumber,
  decrementAttunementNumber,
  resetEditorState,
  toggleBit,
  randomizeBits,
  prepareToChangeSeed,
  updateDisplaySetting,
  updateSliderValue,
  toggleLayersUI,
  toggleDisplaySettings,
  setIsSelecting,
  setSliderActive,
  setEditorSeed,
  setEditorMod,
  setEditorAttunement,
  resetEditorChangedStatus,
  setEditorState,
  undo,
  redo,
} = seedSlice.actions;

// Export the reducer
export default seedSlice.reducer;