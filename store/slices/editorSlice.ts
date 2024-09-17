import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { calculateMostFrequentNumeral } from '@/lib/utils/artwork/helpers';
import { seedToBits } from "@/lib/utils";
import { RootState } from '@/store';


//================================================//

interface EditorState {
  seed: string;
  bitsArray: boolean[];
  modNumber: string;
  attunementNumber: number;
  newSeed: string;
  newMod: string;
  newAttunement: number;
  editorSeed: string;
  editorMod: string;
  editorAttunement: number;
  isAttunementOverridden: boolean;
  shouldResetLayers: boolean;
  hasEditorChanges: boolean;
  displaySettings: number;
  colorValue: number;  // Color value
  depthValue: number;  // Depth value
  spinValue: number;  // Spin value
  tintValue: number;  // Tint value
  tintPercentValue: number;  // Tint percent value
  actualTintPercentValue: number;
  layersUIToggled: boolean;
  displaySettingsToggled: boolean;
  activeSelection: boolean;
  isActive: { [key: string]: boolean };
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
  modValues: {
    color: number;
    depth: number;
    spin: number;
    tint: number;
    tintPercent: number;
  };
  isColorAnimationPaused: boolean;
  isDepthAnimationPaused: boolean;
  isSpinAnimationPaused: boolean;
}


// INITIALIZE STATE ---------------------------------

const initialState: EditorState = {
  seed: '0',
  bitsArray: Array(100).fill(false),
  modNumber: "000000000000000",
  attunementNumber: 0,
  newSeed: '',
  newMod: "000000000000000",
  newAttunement: 0,
  editorSeed: '0',
  editorMod: "000000000000000",
  editorAttunement: 0,
  isAttunementOverridden: false,
  shouldResetLayers: false,
  hasEditorChanges: false,
  displaySettings: 0,
  colorValue: 0,
  depthValue: 0,
  spinValue: 0,
  tintValue: 0,
  tintPercentValue: 100,
  actualTintPercentValue: 100,
  layersUIToggled: false,
  displaySettingsToggled: false,
  activeSelection: false,
  isActive: {},
  editorHistory: {
    past: [],
    future: [],
  },
  modValues: {
    color: 0,
    depth: 0,
    spin: 0,
    tint: 0,
    tintPercent: 100,
  },
  isColorAnimationPaused: true,
  isDepthAnimationPaused: true,
  isSpinAnimationPaused: true,
};


// MODULE FUNCTIONS --------------------------------

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {

    // Update editor state with specified values
    updateEditorState: (state, action: PayloadAction<{ seed: string; mod: string; attunement: number }>) => {
      const sanitizedSeed = sanitizeSeed(action.payload.seed);
      const sanitizedMod = sanitizeMod(action.payload.mod);
      const sanitizedAttunement = sanitizeAttunement(action.payload.attunement);
      const newState = {
        editorSeed: sanitizedSeed,
        editorMod: sanitizedMod,
        editorAttunement: sanitizedAttunement,
        bitsArray: seedToBits(BigInt(sanitizedSeed)),
        hasEditorChanges: false,
        modValues: parseModValues(sanitizedMod), // Add this line
      };
      pushToHistory(state, newState);
      Object.assign(state, newState);

      state.shouldResetLayers = true;
      state.isAttunementOverridden = false;
    },

    setShouldResetLayers: (state, action: PayloadAction<boolean>) => {
      state.shouldResetLayers = action.payload;
    },

    clearShouldResetLayers: (state) => {
      state.shouldResetLayers = false;
    },

    // Reset the editor to initial state
    resetEditorState: (state, action: PayloadAction<{ selectedItem?: QueueItem | null } | undefined>) => {
      const selectedItem = action.payload?.selectedItem;
      const newState = {
        editorSeed: selectedItem ? selectedItem.seed : '0',
        editorMod: selectedItem ? selectedItem.modNumber || "000000000000000" : "000000000000000",
        editorAttunement: selectedItem ? selectedItem.attunementNumber || 0 : 0,
        hasEditorChanges: false,
        actualTintPercentValue: 100,
      };
      
      // Only push to history if the current state is not '0'
      if (state.editorSeed !== '0') {
        pushToHistory(state, newState, true);
      }
      
      state.isAttunementOverridden = false;
      Object.assign(state, newState);
      
      if (selectedItem) {
        state.bitsArray = seedToBits(BigInt(selectedItem.seed));
      }
    },

    // Update the hasEditorChanges state
    updateHasEditorChanges: (state, action: PayloadAction<boolean>) => {
      state.hasEditorChanges = action.payload;
    },

    // Update seed/mod/attunement ------------------

    // Update editor seed number
    updateEditorSeed: (state, action: PayloadAction<{ seed: string; updateChanges?: boolean }>) => {
      const sanitizedSeed = sanitizeSeed(action.payload.seed);
      const calculatedAttunement = calculateMostFrequentNumeral(BigInt(sanitizedSeed));
      const newState = {
        editorSeed: sanitizedSeed,
        bitsArray: seedToBits(BigInt(sanitizedSeed)),
        editorAttunement: calculatedAttunement !== null ? calculatedAttunement : 0,
        hasEditorChanges: action.payload.updateChanges ?? state.hasEditorChanges,
        isAttunementOverridden: false,
      };

      // Calculate new attunement if not overridden
      if (!state.isAttunementOverridden) {
        const calculatedAttunement = calculateMostFrequentNumeral(BigInt(sanitizedSeed));
        state.editorAttunement = calculatedAttunement !== null ? calculatedAttunement : 0;
        newState.editorAttunement = state.editorAttunement;
      }

      pushToHistory(state, newState);
      Object.assign(state, newState);
    },

    //  Update editor mod number
    updateEditorMod: (state, action: PayloadAction<{ mod: string; updateChanges?: boolean }>) => {
      if (action.payload.mod === undefined) {
        console.error('Received undefined mod value');
        return;
      }
      const sanitizedMod = sanitizeMod(action.payload.mod);
      const newState = {
        editorMod: sanitizedMod,
        hasEditorChanges: action.payload.updateChanges ?? state.hasEditorChanges,
      };
      pushToHistory(state, newState);
      Object.assign(state, newState);
    },

    // Update editor attunement number
    updateEditorAttunement: (state, action: PayloadAction<{ attunementNumber: number; updateChanges?: boolean; isOverride?: boolean }>) => {
      const sanitizedAttunement = sanitizeAttunement(action.payload.attunementNumber);
      const newState = {
        editorAttunement: sanitizedAttunement,
        hasEditorChanges: action.payload.updateChanges ?? state.hasEditorChanges,
        isAttunementOverridden: action.payload.isOverride ?? state.isAttunementOverridden,
      };
      pushToHistory(state, newState);
      Object.assign(state, newState);
    },

    // Increment/decrement the attunement number
    incrementEditorAttunementNumber: (state) => {
        state.editorAttunement = (state.newAttunement + 1) % 10;
    },
    decrementEditorAttunementNumber: (state) => {
      state.newAttunement = (state.attunementNumber - 1) % 10;
    },

    // Reset seed/mod/attunement ------------------

    // Reset the Editor's seed number
    resetEditorSeed: (state, action: PayloadAction<string>) => {
      pushToHistory(state, {
        editorSeed: state.editorSeed,
        bitsArray: state.bitsArray
      }, true);
    
      const newState = {editorSeed: action.payload}
      state.editorSeed = newState.editorSeed;
      state.bitsArray = seedToBits(BigInt(newState.editorSeed));
      Object.assign(state, newState);
    },

    // Reset the Editor's seed number
    resetEditorMod: (state, action: PayloadAction<void>) => {
      let modToResetTo: string = "000000000000000";
    
      const newState = {
        editorMod: modToResetTo,
        modValues: {
          color: 0,
          depth: 0,
          spin: 0,
          tint: 0,
          tintPercent: 100,
        },
        hasEditorChanges: false,
      };
      Object.assign(state, newState);
    },

    // Reset the Editor's attunement number
    resetEditorAttunement: (state) => {
      const calculatedAttunement = calculateMostFrequentNumeral(BigInt(state.editorSeed));
      state.editorAttunement = calculatedAttunement !== null ? calculatedAttunement : 0;
      state.isAttunementOverridden = false;
      pushToHistory(state, {
        editorSeed: state.editorSeed,
        editorMod: state.editorMod,
        editorAttunement: state.editorAttunement,
        bitsArray: state.bitsArray
      }, true);
      state.isAttunementOverridden = false;
    },

    overrideEditorAttunement: (state, action: PayloadAction<number>) => {
      state.editorAttunement = action.payload;
      state.isAttunementOverridden = true;
    },

    resetAttunementOverride: (state) => {
      state.isAttunementOverridden = false;
    },

    // Editor UI state ------------------------------

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
      
      const calculatedAttunement = calculateMostFrequentNumeral(BigInt(state.editorSeed));
      newState.editorAttunement = calculatedAttunement !== null ? calculatedAttunement : 0;
      state.isAttunementOverridden = false;

      pushToHistory(state, newState);
      Object.assign(state, newState);
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

    // Track click + hold while selecting bit buttons
    setActiveSelection: (state, action: PayloadAction<boolean>) => {
      state.activeSelection = action.payload;
    },

    // Update display setting
    updateDisplaySetting: (state, action: PayloadAction<number>) => {
      state.displaySettings ^= (1 << action.payload);
      state.editorMod = calculateModNumber(state);
      state.hasEditorChanges = true;
      pushToHistory(state, { editorMod: state.editorMod });
    },

    // Set slider active
    setSliderActive: (state, action: PayloadAction<{ name: string; isActive: boolean }>) => {
      state.isActive[action.payload.name] = action.payload.isActive;
    },

    // Update slider value
    updateSliderValue: (state, action: PayloadAction<{ name: string; value: number }>) => {
      const { name, value } = action.payload;
      state.modValues[name] = value;
      state.editorMod = calculateModNumber(state);
      state.hasEditorChanges = true;
      pushToHistory(state, { editorMod: state.editorMod });
    },

    // Addresses the Tint% conversion
    updateActualTintPercent: (state, action: PayloadAction<number>) => {
      state.actualTintPercentValue = action.payload;
    },

    // Show/hide layers UI
    toggleLayersUI: (state, action: PayloadAction<boolean | undefined>) => {
      if (action.payload !== undefined) {
        state.layersUIToggled = action.payload;
      } else {
        state.layersUIToggled = !state.layersUIToggled;
      }
    },

    // Show/hide display settings UI
    toggleDisplaySettings: (state, action: PayloadAction<boolean | undefined>) => {
      if (action.payload !== undefined) {
        state.displaySettingsToggled = action.payload;
      } else {
        state.displaySettingsToggled = !state.displaySettingsToggled;
      }
    },

    // Check if selected queue item has unsaved edits
    checkEditorMatchesSelectedItem: (state, action: PayloadAction<QueueItem>) => {
      const selectedItem = action.payload;
      if (!selectedItem) {
        state.hasEditorChanges = false;
        return;
      }
    
      let editorMatchesItem: boolean;
    
      if (selectedItem.isSet) {
        editorMatchesItem =
          state.editorSeed === (selectedItem.newSeed || selectedItem.seed) &&
          state.editorMod === (selectedItem.newMod || selectedItem.modNumber || "000000000000000") &&
          state.editorAttunement === (selectedItem.newAttunement ?? selectedItem.attunementNumber ?? 0);
      } else {
        editorMatchesItem =
          state.editorSeed === selectedItem.seed &&
          state.editorMod === (selectedItem.modNumber || "000000000000000") &&
          state.editorAttunement === (selectedItem.attunementNumber || 0);
      }
    
      state.hasEditorChanges = !editorMatchesItem;
    },

    toggleColorAnimationPause: (state) => {
      state.isColorAnimationPaused = !state.isColorAnimationPaused;
    },
    toggleDepthAnimationPause: (state) => {
      state.isDepthAnimationPaused = !state.isDepthAnimationPaused;
    },
    toggleSpinAnimationPause: (state) => {
      state.isSpinAnimationPaused = !state.isSpinAnimationPaused;
    },

    // Undo Editor state change
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
        state.hasEditorChanges = true;
      }
    },

    // Redo Editor state change
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
        state.hasEditorChanges = true;
      }
    },
  },
});


// UTILITY FUNCTIONS -------------------------------

// Update Editor history
const MAX_HISTORY_LENGTH = 25;
const pushToHistory = (state: EditorState, newState: Partial<EditorState>, force: boolean = false) => {
  if (force || (state.editorSeed !== '0' && (
    state.editorSeed !== newState.editorSeed ||
    state.editorMod !== newState.editorMod ||
    state.editorAttunement !== newState.editorAttunement
  ))) {
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

// Sanitize seed number
function sanitizeSeed(seed: string): string {
  return seed.replace(/\D/g, '').replace(/^0+/, '') || '0';
}

// Sanitize mod number
function sanitizeMod(mod: string): string {
  if (mod === undefined) {
    return '000000000000000';
  }
  const sanitized = mod.replace(/\D/g, '').slice(0, 15);
  return sanitized.padStart(15, '0');
}

// Sanitize attunement number
function sanitizeAttunement(attunement: number): number {
  return Math.max(0, Math.min(9, Math.floor(attunement)));
}

// Parsing individual mod values
function parseModValues(mod: string) {
  return {
    tint: parseInt(mod.slice(0, 1)),
    tintPercent: parseInt(mod.slice(1, 3)),
    spin: parseInt(mod.slice(3, 6)),
    depth: parseInt(mod.slice(6, 9)),
    color: parseInt(mod.slice(9, 12)),
  };
}

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

// Calculate a Mod number
const calculateModNumber = (state: EditorState): string => {
  const { color, depth, spin, tint, tintPercent } = state.modValues;
  const displaySettingsValue = state.displaySettings.toString().padStart(3, '0');
  const colorValue = color.toString().padStart(3, '0');
  const depthValue = depth.toString().padStart(3, '0');
  const spinValue = spin.toString().padStart(3, '0');
  const tintValue = tint.toString();
  const tintPercentValue = tint === 0 ? "00" : 
    (tintPercent === 100 ? "99" : tintPercent.toString().padStart(2, '0'));

  return `${tintValue}${tintPercentValue}${spinValue}${depthValue}${colorValue}${displaySettingsValue}`;
};


// SELECTORS ---------------------------------------

export const selectLayersUIToggled = (state: RootState) => state.seed.layersUIToggled;

export const selectDisplaySettingsToggled = (state: RootState) => state.seed.displaySettingsToggled;

export const selectModValues = createSelector(
  (state: RootState) => state.seed.modValues,
  (modValues) => modValues
);
export const selectDisplaySettings = (state: RootState) => state.seed.displaySettings;

export const selectShouldResetLayers = (state: RootState) => state.seed.shouldResetLayers;

export const selectAttunement = (state: RootState) => state.seed.editorAttunement;


// EXPORTS -----------------------------------------

export const {
  updateEditorState,
  updateEditorSeed,
  updateEditorMod,
  updateEditorAttunement,
  overrideEditorAttunement,
  resetAttunementOverride,
  updateHasEditorChanges,
  setShouldResetLayers,
  clearShouldResetLayers,
  resetEditorState,
  resetEditorSeed,
  resetEditorMod,
  resetEditorAttunement,
  undo,
  redo,
  toggleBit,
  randomizeBits,
  setActiveSelection,
  updateDisplaySetting,
  updateSliderValue,
  updateActualTintPercent,
  incrementEditorAttunementNumber,
  decrementEditorAttunementNumber,
  toggleLayersUI,
  toggleDisplaySettings,
  setSliderActive,
  checkEditorMatchesSelectedItem,
  toggleColorAnimationPause,
  toggleDepthAnimationPause,
  toggleSpinAnimationPause,
} = editorSlice.actions;

export default editorSlice.reducer;