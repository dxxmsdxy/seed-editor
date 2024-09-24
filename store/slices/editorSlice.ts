import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { calculateMostFrequentNumeral, checkPalindrome } from '@/lib/utils/artwork/helpers';
import { seedToBits, sanitizeSeed, sanitizeMod, sanitizeAttunement } from "@/lib/utils";
import { RootState } from '@/store';


//================================================//

interface EditorState {
  urlSeed: string | null;
  urlMod: string | null;
  urlAttunement: string | null;
  shouldUpdateURL: boolean,
  seed: string;
  bitsArray: boolean[];
  modNumber: string;
  attunementNumber: number;
  newSeed: string | null;
  newMod: string | null;
  newAttunement: number | null;
  editorSeed: string | null;
  editorMod: string;
  editorAttunement: number | null;
  isAttunementOverridden: boolean;
  shouldResetLayers: boolean;
  hasEditorChanges: boolean;
  displaySettings: number;
  tintPercentValue: number;  // Tint percent value
  actualTintPercentValue: number;
  layersUIToggled: boolean;
  displaySettingsToggled: boolean;
  isOverlayToggled: boolean;
  activeSelection: boolean;
  isActive: { [ key: string ]: boolean };
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
  urlSeed: null,
  urlMod: null,
  urlAttunement: null,
  seed: '0',
  bitsArray: Array(100).fill(false),
  modNumber: "000000000000000",
  attunementNumber: 0,
  shouldUpdateURL: false,
  newSeed: null,
  newMod: null,
  newAttunement: null,
  editorSeed: "0",
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
  isOverlayToggled: false,
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
    updateEditorState: (state, action: PayloadAction<{ seed: string; mod: string; attunement: number; updateURL?: boolean }>) => {
      const sanitizedSeed = sanitizeSeed(action.payload.seed);
      const sanitizedMod = sanitizeMod(action.payload.mod);
      const sanitizedAttunement = sanitizeAttunement(action.payload.attunement);
      const { seed, mod, attunement, updateURL = true } = action.payload;
      const newState = {
        editorSeed: sanitizedSeed,
        editorMod: sanitizedMod,
        editorAttunement: sanitizedAttunement,
        bitsArray: seedToBits(BigInt(sanitizedSeed)),
        hasEditorChanges: false,
        modValues: parseModValues(sanitizedMod),
        shouldUpdateURL: updateURL,
      };
      pushToHistory(state, newState);
      Object.assign(state, newState);
    
      state.shouldResetLayers = true;
      state.isAttunementOverridden = sanitizedAttunement !== calculateMostFrequentNumeral(BigInt(sanitizedSeed));
      checkPalindrome(BigInt(sanitizedSeed));
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
      const sanitizedSeed = sanitizeSeed(selectedItem ? selectedItem.seed : '0');
      const sanitizedMod = sanitizeMod(selectedItem ? selectedItem.modNumber || "000000000000000" : "000000000000000");
      const sanitizedAttunement = sanitizeAttunement(selectedItem ? selectedItem.attunementNumber || 0 : 0);
      const newState = {
        editorSeed: sanitizedSeed,
        editorMod: sanitizedMod,
        editorAttunement: sanitizedAttunement,
        bitsArray: seedToBits(BigInt(sanitizedSeed)),
        hasEditorChanges: false,
        actualTintPercentValue: 100,
        isOverlayToggled: false,
        isAttunementOverridden: false, // Reset the override flag
        // Preserve focus state
        isArtworkFocused: state.isArtworkFocused,
        modValues: parseModValues(sanitizedMod),
      };
      
      // Only push to history if the current state is not '0'
      if (state.editorSeed !== '0') {
        pushToHistory(state, newState, true);
      }
      
      Object.assign(state, newState);
      
      if (selectedItem) {
        state.bitsArray = seedToBits(BigInt(selectedItem.seed));
      }
      checkPalindrome(BigInt(sanitizedSeed));
    },

    // Update the hasEditorChanges state
    updateHasEditorChanges: (state, action: PayloadAction<boolean>) => {
      state.hasEditorChanges = action.payload;
    },

    // Update seed/mod/attunement ------------------

    // Update editor seed number
    updateEditorSeed: (state, action: PayloadAction<{ seed: string; updateChanges?: boolean }>) => {
      const sanitizedSeed = sanitizeSeed(action.payload.seed);
      const newState = {
        editorSeed: sanitizedSeed,
        bitsArray: seedToBits(BigInt(sanitizedSeed)),
        hasEditorChanges: action.payload.updateChanges ?? state.hasEditorChanges,
      };
    
      // Only update attunement if it's not overridden
      if (!state.isAttunementOverridden) {
        const calculatedAttunement = calculateMostFrequentNumeral(BigInt(sanitizedSeed));
        newState.editorAttunement = calculatedAttunement !== null ? calculatedAttunement : 0;
      }
    
      Object.assign(state, newState);
      pushToHistory(state, newState);
    },

    //  Update editor mod number
    updateEditorMod: (state, action: PayloadAction<{ mod: string; updateChanges?: boolean }>) => {
      let sanitizedMod;
      if (action.payload.mod === undefined) {
        sanitizedMod = "000000000000000"
      } else {
        sanitizedMod = sanitizeMod(action.payload.mod);
      }
      const newState = {
        editorMod: sanitizedMod,
        hasEditorChanges: action.payload.updateChanges ?? state.hasEditorChanges,
        modValues: parseModValues(sanitizedMod),
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
        displaySettings: 0,
      };
      Object.assign(state, newState);
      state.shouldResetLayers = true;
    },

    // Reset the Editor's attunement number
    resetEditorAttunement: (state) => {
      const calculatedAttunement = calculateMostFrequentNumeral(BigInt(state.editorSeed));
      const defaultAttunement = calculatedAttunement !== null ? calculatedAttunement : 0;
    
      if (state.editorAttunement === defaultAttunement) {
        // If the current attunement is already the default, toggle the override
        state.isAttunementOverridden = !state.isAttunementOverridden;
      } else {
        // Otherwise, reset to the default attunement and remove the override
        state.editorAttunement = defaultAttunement;
        state.isAttunementOverridden = false;
      }
    
      pushToHistory(state, {
        editorSeed: state.editorSeed,
        editorMod: state.editorMod,
        editorAttunement: state.editorAttunement,
        bitsArray: state.bitsArray
      }, true);
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
      
      const newSeed = BigInt('0b' + bitArray.map(b => b ? '1' : '0').join('')).toString();
      
      const newState = {
        bitsArray: bitArray,
        editorSeed: newSeed,
        hasEditorChanges: true,
      };
      
      // Only update attunement if it's not overridden
      if (!state.isAttunementOverridden) {
        const calculatedAttunement = calculateMostFrequentNumeral(BigInt(newSeed));
        newState.editorAttunement = calculatedAttunement !== null ? calculatedAttunement : 0;
      }

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
      const index = action.payload;
      
      if (index >= 7 && index <= 9) {
        // For buttons 7-9, we'll use a special logic
        if (state.displaySettings & (1 << index)) {
          // If the clicked button is already on, turn it off
          state.displaySettings &= ~(1 << index);
        } else {
          // If the clicked button is off, turn it on and turn off the others
          state.displaySettings &= ~(0b111 << 7); // Turn off bits 6, 7, and 8
          state.displaySettings |= (1 << index);  // Turn on the clicked button
        }
      } else {
        // For other buttons, toggle as before
        state.displaySettings ^= (1 << index);
      }

      // Update the editorMod based on the new display settings
      const displaySettingsValue = state.displaySettings.toString().padStart(3, '0');
      state.editorMod = state.editorMod.slice(0, 12) + displaySettingsValue;
      state.hasEditorChanges = true;
      pushToHistory(state, { editorMod: state.editorMod });
    },

    // Set slider active
    setSliderActive: (state, action: PayloadAction<{ name: string; isActive: boolean }>) => {
      state.isActive[action.payload.name] = action.payload.isActive;
    },

    // Update display settings toggle buttons from mod
    updateDisplaySettingsFromMod: (state, action: PayloadAction<string>) => {
      const mod = action.payload;
      const displaySettingsValue = parseInt(mod.slice(-3), 10);
      state.displaySettings = displaySettingsValue;
    },


    // Update slider value
    updateSliderValue: (state, action: PayloadAction<{ name: string; value: number }>) => {
      const { name, value } = action.payload;
      state.modValues[name] = value;

      // Special handling for tint and tint%
      if (name === 'tint') {
        if (value === 0) {
          state.modValues.tintPercent = 0;
        } else if (state.modValues.tintPercent === 0) {
          state.modValues.tintPercent = 100;
        }
      } else if (name === 'tintPercent') {
        if (state.modValues.tint === 0) {
          state.modValues.tintPercent = 0;
        }
      }

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
    toggleDisplaySettingsUI: (state, action: PayloadAction<boolean | undefined>) => {
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
      state.isSpinAnimationPaused = !state.
      isSpinAnimationPaused;
    },

    toggleOverlay: (state, action: PayloadAction<boolean | undefined>) => {
      if (action.payload !== undefined) {
        state.isOverlayToggled = action.payload;
      } else {
        state.isOverlayToggled = !state.isOverlayToggled;
      }
    },

    // Undo Editor state change
    undo: (state) => {
      if (state.editorHistory.past.length > 0) {
        let previous = state.editorHistory.past.pop()!;
        while (state.editorHistory.past.length > 0 && previous.editorSeed === state.editorSeed) {
          previous = state.editorHistory.past.pop()!;
        }
        if (previous.editorSeed !== state.editorSeed) {
          state.editorHistory.future.push({
            editorSeed: state.editorSeed,
            editorMod: state.editorMod,
            editorAttunement: state.editorAttunement,
            bitsArray: state.bitsArray,
          });
          Object.assign(state, previous);
          state.hasEditorChanges = true;
        }
      }
    },

    // Redo Editor state change
    redo: (state) => {
      if (state.editorHistory.future.length > 0) {
        let next = state.editorHistory.future.pop()!;
        while (state.editorHistory.future.length > 0 && next.editorSeed === state.editorSeed) {
          next = state.editorHistory.future.pop()!;
        }
        if (next.editorSeed !== state.editorSeed) {
          state.editorHistory.past.push({
            editorSeed: state.editorSeed,
            editorMod: state.editorMod,
            editorAttunement: state.editorAttunement,
            bitsArray: state.bitsArray,
          });
          Object.assign(state, next);
          state.hasEditorChanges = true;
        }
      }
    },

    setUrlParams: (state, action: PayloadAction<{ seed: string; mod: string; attunement: string }>) => {
      state.urlSeed = action.payload.seed;
      state.urlMod = action.payload.mod;
      state.urlAttunement = action.payload.attunement;
    },

    clearUrlParams: (state) => {
      state.urlSeed = null;
      state.urlMod = null;
      state.urlAttunement = null;
    },

  }
});


// UTILITY FUNCTIONS -------------------------------

// Update Editor history
const MAX_HISTORY_LENGTH = 25;
const pushToHistory = (state: EditorState, newState: Partial<EditorState>, force: boolean = false) => {
  const lastHistoryState = state.editorHistory.past[state.editorHistory.past.length - 1];
  const isNewStateDifferent = !lastHistoryState ||
    newState.editorSeed !== lastHistoryState.editorSeed ||
    newState.editorMod !== lastHistoryState.editorMod ||
    newState.editorAttunement !== lastHistoryState.editorAttunement;

  if (force || (state.editorSeed !== '0' && isNewStateDifferent)) {
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
  const tintValue = tint.toString().padStart(2, '0');
  
  let tintPercentValue: string;
  if (tint === 0) {
    tintPercentValue = "0";
  } else if (tintPercent === 100) {
    tintPercentValue = "0";
  } else {
    tintPercentValue = Math.ceil(9 * (tintPercent / 100)).toString();
  }

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

// Should the Mod Reset button show
export const selectShouldShowResetMod = createSelector(
  [
    (state: RootState) => state.seed.editorMod,
    (state: RootState) => state.queue.selectedIndex,
    (state: RootState) => state.queue.items,
  ],
  (editorMod, selectedIndex, queueItems) => {
    if (selectedIndex === null) {
      // No queue item selected
      return editorMod !== "000000000000000";
    }

    const selectedItem = queueItems[selectedIndex];
    const itemMod = selectedItem.newMod || selectedItem.modNumber || "000000000000000";
    
    return editorMod !== itemMod;
  }
);

// Parsing individual mod values
export function parseModValues(mod: string) {
  const safeMod = sanitizeMod(mod);
  return {
    spin: parseInt(safeMod.slice(3, 6)),
    depth: parseInt(safeMod.slice(6, 9)),
    color: parseInt(safeMod.slice(9, 12)),
    tint: parseInt(safeMod.slice(0, 2)),
    tintPercent: parseInt(safeMod.slice(2, 3)),
  };
}


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
  updateDisplaySettingsFromMod,
  resetEditorAttunement,
  undo,
  redo,
  setUrlParams,
  clearUrlParams,
  toggleBit,
  randomizeBits,
  setActiveSelection,
  updateDisplaySetting,
  updateSliderValue,
  updateActualTintPercent,
  incrementEditorAttunementNumber,
  decrementEditorAttunementNumber,
  toggleLayersUI,
  toggleDisplaySettingsUI,
  setSliderActive,
  checkEditorMatchesSelectedItem,
  toggleColorAnimationPause,
  toggleDepthAnimationPause,
  toggleSpinAnimationPause,
} = editorSlice.actions;

export default editorSlice.reducer;