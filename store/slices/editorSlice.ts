import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { seedToBits } from "@/lib/utils";
import { RootState } from '@/store';

// EDITOR STATE DEFINITION -----------------------------

interface EditorState {
  seed: string;
  bitsArray: boolean[];
  modNumber: string;
  attunementNumber: number;
  displaySettings: number[];  // Array of display settings
  colorValue: number;  // Color value
  depthValue: number;  // Depth value
  spinValue: number;  // Spin value
  tintValue: number;  // Tint value
  tintPercentValue: number;  // Tint percent value
  actualTintPercentValue: number;
  layersUIToggled: boolean;
  displaySettingsToggled: boolean;
  activeSelection: boolean;
  tempSelectedButtons: number[];
  isActive: { [key: string]: boolean };
  newSeed: string;
  newMod: string;
  newAttunement: number;
  editorSeed: string;
  editorMod: string;
  editorAttunement: number;
  hasEditorChanges: boolean;
  editorHistory: {
    past: Array<{
      editorSeed: string;
      editorMod: string;
      editorAttunement: number;
      bitsArray: boolean[];
    }>;
    future: Array<{
      editorSeed: string;
      editorMod: string;
      editorAttunement: number;
      bitsArray: boolean[];
    }>;
  };
}

// INITIALIZE STATE ------------------------------------

const initialState: EditorState = {
  seed: '0',
  bitsArray: Array(100).fill(false),
  modNumber: "000000000000000",
  attunementNumber: 0,
  displaySettings: [],
  colorValue: 0,
  depthValue: 0,
  spinValue: 0,
  tintValue: 0,
  tintPercentValue: 100,
  actualTintPercentValue: 100,
  layersUIToggled: false,
  displaySettingsToggled: false,
  activeSelection: false,
  tempSelectedButtons: [],
  isActive: {},
  newSeed: '',
  newMod: "000000000000000",
  newAttunement: 0,
  editorSeed: '0',
  editorMod: "000000000000000",
  editorAttunement: 0,
  hasEditorChanges: false,
  editorHistory: {
    past: [],
    future: [],
  },
};

// MODULE FUNCTIONS -----------------------------------

const editorSlice = createSlice({
  name: 'seed',
  initialState,
  reducers: {

    // Revert to previous Editor state
    undo: (state) => {
      if (state.editorHistory.past.length > 0) {
        const previous = state.editorHistory.past.pop()!;
        state.editorHistory.future.push({
          editorSeed: state.editorSeed,
          editorMod: state.editorMod,
          editorAttunement: state.editorAttunement,
          bitsArray: state.bitsArray,
        });
        state.editorSeed = previous.editorSeed;
        state.editorMod = previous.editorMod;
        state.editorAttunement = previous.editorAttunement;
        state.bitsArray = previous.bitsArray;
      }
    },

    // Revert to previous Editor state
    redo: (state) => {
      if (state.editorHistory.future.length > 0) {
        const next = state.editorHistory.future.pop()!;
        state.editorHistory.past.push({
          editorSeed: state.editorSeed,
          editorMod: state.editorMod,
          editorAttunement: state.editorAttunement,
          bitsArray: state.bitsArray,
        });
        state.editorSeed = next.editorSeed;
        state.editorMod = next.editorMod;
        state.editorAttunement = next.editorAttunement;
        state.bitsArray = next.bitsArray;
      }
    },

    // Set Editor state with specified values
    setEditorState: (state, action: PayloadAction<{ seed: string; mod: string; attunement: number }>) => {
      const newState = {
        editorSeed: action.payload.seed || '0',
        editorMod: action.payload.mod,
        editorAttunement: action.payload.attunement,
        bitsArray: seedToBits(BigInt(action.payload.seed)),
        hasEditorChanges: false,
      };
      pushToHistory(state, newState);
      Object.assign(state, newState);
    },

    // Set Editor seed number
    setEditorSeed: (state, action: PayloadAction<{ seed: string; updateChanges?: boolean }>) => {
      const newState = {
        editorSeed: action.payload.seed,
        bitsArray: seedToBits(BigInt(action.payload.seed || '0')),
        hasEditorChanges: action.payload.updateChanges
      };
      pushToHistory(state, newState);
      Object.assign(state, newState);
    },

    // Set editor mod number
    setEditorMod: (state, action: PayloadAction<{ modNumber: string; updateChanges: boolean }>) => {
      const newState = {
        editorMod: action.payload.modNumber,
      };
      pushToHistory(state, newState);
      Object.assign(state, newState);
      state.actualTintPercentValue = state.tintValue === 0 ? 100 : state.tintPercentValue; // Reset tint% to 100 if tint is 0
    },

    // Set editor attunement number
    setEditorAttunement: (state, action: PayloadAction<{ attunementNumber: number; updateChanges?: boolean }>) => {
      const newState = {
        editorAttunement: action.payload.attunementNumber,
      };
      pushToHistory(state, newState);
      Object.assign(state, newState);
    },

    // Increment the attunement number
    incrementNewAttunementNumber: (state) => {
      if (state.hasEditorChanges = true) {
        state.newAttunement = (state.newAttunement + 1) % 10;
        state.hasEditorChanges = true;
      } else {
        state.newAttunement = (state.attunementNumber + 1) % 10;
        state.hasEditorChanges = true;
      }
    },

    // Decrement the attunement number
    decrementNewAttunementNumber: (state) => {
      pushToHistory(state, { newAttunement: (state.attunementNumber - 1) % 10 });
      state.newAttunement = (state.attunementNumber - 1) % 10;
    },

    // Update the hasEditorChanges state
    updateHasEditorChanges: (state, action: PayloadAction<boolean>) => {
      state.hasEditorChanges = action.payload;
    },

    // Reset the editor to initial state
    resetEditorState: (state, action: PayloadAction<{ selectedItem?: QueueItem | null } | undefined>) => {
      pushToHistory(state, {
        editorSeed: state.editorSeed,
        editorMod: state.editorMod,
        editorAttunement: state.editorAttunement,
        bitsArray: state.bitsArray,
      }, true);
    
      const selectedItem = action.payload?.selectedItem;
      const newState = {
        editorSeed: selectedItem ? selectedItem.seed : '0',
        editorMod: selectedItem ? selectedItem.modNumber || "000000000000000" : "000000000000000",
        editorAttunement: selectedItem ? selectedItem.attunementNumber || 0 : 0,
        hasEditorChanges: false,
        actualTintPercentValue: 100, // Reset tint% to 100
      };
      Object.assign(state, newState);
      
      if (selectedItem) {
        state.bitsArray = seedToBits(BigInt(selectedItem.seed));
      }
    },

    // Reset the Editor's seed number
    resetEditorSeed: (state, action: PayloadAction<string>) => {
      pushToHistory(state, {
        editorSeed: state.editorSeed,
        editorMod: state.editorMod,
        editorAttunement: state.editorAttunement,
        bitsArray: state.bitsArray
      }, true);
    
      const newState = {editorSeed: action.payload}
      state.editorSeed = newState.editorSeed;
      state.bitsArray = seedToBits(BigInt(newState.editorSeed));
      Object.assign(state, newState);
    },
    
    // Reset the Editor's mod number
    resetEditorMod: (state, action: PayloadAction<string>) => {
      pushToHistory(state, {
        editorSeed: state.editorSeed,
        editorMod: state.editorMod,
        editorAttunement: state.editorAttunement,
        bitsArray: state.bitsArray
      }, true);

      const newState = {editorMod: action.payload}
      state.editorMod = newState.editorMod;
      Object.assign(state, newState);
    },

    // Reset the Editor's attunement number
    resetEditorAttunement: (state, action: PayloadAction<number>) => {
      pushToHistory(state, {
        editorSeed: state.editorSeed,
        editorMod: state.editorMod,
        editorAttunement: state.editorAttunement,
        bitsArray: state.bitsArray
      }, true);

      const newState = {editorAttunement: action.payload}
      state.editorAttunement = newState.editorAttunement;
    },

    // Toggle a specific bit in the bitsArray
    toggleBit: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const newBitsArray = state.bitsArray.slice();
      newBitsArray[index] = !newBitsArray[index];
      const newState = {
        bitsArray: newBitsArray,
        editorSeed: BigInt('0b' + newBitsArray.map(b => b ? '1' : '0').join('')).toString(),
        hasEditorChanges: true,
      };
      pushToHistory(state, newState);
      Object.assign(state, newState);
    },

    // Randomize all bits in the bitsArray
    randomizeBits: (state) => {
      const bitArray = new Array(100).fill(false);
      const numSelected = getRandomNumber(3, 30);
      const shuffledIndices = shuffleArray(Array.from(Array(100).keys()));
      
      for (let i = 0; i < numSelected; i++) {
        bitArray[shuffledIndices[i]] = true;
      }
      
      const newState = {
        bitsArray: bitArray,
        editorSeed: BigInt('0b' + bitArray.map(b => b ? '1' : '0').join('')).toString(),
        hasEditorChanges: true,
      };
      pushToHistory(state, newState);
      Object.assign(state, newState);
      state.displaySettingsToggled = true;
    },

    // Track click + hold while selecting bit buttons
    setActiveSelection: (state, action: PayloadAction<boolean>) => {
      state.activeSelection = action.payload;
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
      state.displaySettingsToggled = true;
    },

    // Set slider active
    setSliderActive: (state, action: PayloadAction<{ name: string; isActive: boolean }>) => {
      state.isActive[action.payload.name] = action.payload.isActive;
    },

    // Update slider value
    updateSliderValue: (state, action: PayloadAction<{name: string, value: number}>) => {
      const { name, value } = action.payload;
      const key = name as keyof Pick<EditorState, 'colorValue' | 'depthValue' | 'spinValue' | 'tintValue' | 'tintPercentValue'>;
      if (state[key] !== value) {
        state[key] = value;
        state.modNumber = calculateModNumber(state);
      }
    },

    // Addresses the Tint% conversion
    updateActualTintPercent: (state, action: PayloadAction<number>) => {
      state.actualTintPercentValue = action.payload;
    },

    // Toggle layers UI
    toggleLayersUI: (state, action: PayloadAction<boolean | undefined>) => {
      if (action.payload !== undefined) {
        state.layersUIToggled = action.payload;
      } else {
        state.layersUIToggled = !state.layersUIToggled;
      }
    },

    // Toggle display settings
    toggleDisplaySettings: (state, action: PayloadAction<boolean | undefined>) => {
      if (action.payload !== undefined) {
        state.displaySettingsToggled = action.payload;
      } else {
        state.displaySettingsToggled = !state.displaySettingsToggled;
      }
    },

    checkEditorMatchesSelectedItem: (state, action: PayloadAction<QueueItem | null>) => {
      const selectedItem = action.payload;
      if (!selectedItem) {
        state.hasEditorChanges = false;
        return;
      }

      const editorMatchesItem =
        state.editorSeed === selectedItem.seed &&
        state.editorMod === (selectedItem.modNumber || "000000000000000") &&
        state.editorAttunement === (selectedItem.attunementNumber || 0);

      state.hasEditorChanges = !editorMatchesItem;
    },
  },
});

// SELECTORS -----------------------------------------

export const selectLayersUIToggled = (state: RootState) => state.seed.layersUIToggled;

export const selectDisplaySettingsToggled = (state: RootState) => state.seed.displaySettingsToggled;

// UTILITY FUNCTIONS ---------------------------------

// Shuffle an array of bits
const shuffleArray = (array: number[]) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// Generate a random number
const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Update Editor history
const MAX_HISTORY_LENGTH = 50;
const pushToHistory = (state: EditorState, newState: Partial<EditorState>, force: boolean = false) => {
  if (force || newState.editorSeed !== '0') {
    state.editorHistory.past.push({
      editorSeed: state.editorSeed,
      editorMod: state.editorMod,
      editorAttunement: state.editorAttunement,
      bitsArray: state.bitsArray,
    });
    if (state.editorHistory.past.length > MAX_HISTORY_LENGTH) {
      state.editorHistory.past.shift();
    }
    state.editorHistory.future = [];
  }
};

// Calculate a Mod number
export const calculateModNumber = (state: EditorState): string => {
  const displaySettingsValue = state.displaySettings.reduce((sum, value) => sum + value, 0).toString().padStart(3, '0');
  const colorValue = state.colorValue.toString().padStart(3, '0');
  const depthValue = state.depthValue.toString().padStart(3, '0');
  const spinValue = state.spinValue.toString().padStart(3, '0');
  const tintValue = state.tintValue.toString();
  const tintPercentValue = state.tintValue === 0 ? "00" : 
    (state.actualTintPercentValue === 100 ? "99" : state.actualTintPercentValue.toString().padStart(2, '0'));

  return `${displaySettingsValue}${colorValue}${depthValue}${spinValue}${tintValue}${tintPercentValue}`;
};

// EXPORTS ---------------------------------------------

export const {
  setEditorState,
  setEditorSeed,
  setEditorMod,
  setEditorAttunement,
  updateHasEditorChanges,
  resetEditorState,
  resetEditorSeed,
  undo,
  redo,
  toggleBit,
  randomizeBits,
  setActiveSelection,
  updateDisplaySetting,
  updateSliderValue,
  updateActualTintPercent,
  incrementNewAttunementNumber,
  decrementNewAttunementNumber,
  toggleLayersUI,
  toggleDisplaySettings,
  setSliderActive,
  checkEditorMatchesSelectedItem,
} = editorSlice.actions;

export default editorSlice.reducer;