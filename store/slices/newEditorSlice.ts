import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { selectSelectedIndex, selectQueueItems } from './newQueueSlice';
import { seedToBits, sanitizeSeed, sanitizeMod, sanitizeAttunement, calculateMostFrequentNumeral } from "@/lib/newUtils";

// Core editor state
interface EditorState {
  editorSeed: string;
  editorMod: string;
  editorAttunement: string;
  bitsArray: boolean[];
  hasEditorChanges: boolean;
  isAttunementOverridden: boolean;
  modValues: {
    color: number;
    spin: number;
    depth: number;
    tint: number;
    tintPercent: number;
  };
  history: {
    past: Array<{ seed: string; mod: string; attunement: string }>;
    future: Array<{ seed: string; mod: string; attunement: string }>;
  };
  urlSeed: string | null;
  urlMod: string | null;
  urlAttunement: string | null;
  isColorAnimationPaused: boolean;
  isSpinAnimationPaused: boolean;
  isDepthAnimationPaused: boolean;
  uiVisibility?: 'none' | 'layers' | 'displaySettings';
}

// Update the EditorHistoryState interface
interface EditorHistoryState {
  seed: string;
  mod: string;
  attunement: string;
  bitsArray: boolean[];
  isAttunementOverridden: boolean;
  modValues: {
    color: number;
    spin: number;
    depth: number;
    tint: number;
    tintPercent: number;
  };
}

const initialState: EditorState = {
  editorSeed: '0',
  editorMod: '000000000000000',
  editorAttunement: '0',
  bitsArray: Array(100).fill(false),
  hasEditorChanges: false,
  isAttunementOverridden: false,
  modValues: {
    color: 0,
    spin: 0,
    depth: 0,
    tint: 0,
    tintPercent: 100,
  },
  history: {
    past: [],
    future: [],
  },
  urlSeed: null,
  urlMod: null,
  urlAttunement: null,
  isColorAnimationPaused: true,
  isSpinAnimationPaused: true,
  isDepthAnimationPaused: true,
};

const newEditorSlice = createSlice({
  name: 'newEditor',
  initialState,
  reducers: {
    updateEditorState: (state, action: PayloadAction<{ seed?: string; mod?: string; attunement?: string }>) => {
      const { seed, mod, attunement } = action.payload;
      if (seed !== undefined) {
        state.editorSeed = sanitizeSeed(seed);
        state.bitsArray = seedToBits(BigInt(state.editorSeed));
        const calculatedAttunement = calculateMostFrequentNumeral(BigInt(state.editorSeed))?.toString() ?? "0";
        if (attunement !== undefined) {
          state.editorAttunement = sanitizeAttunement(attunement);
          state.isAttunementOverridden = attunement !== calculatedAttunement;
        } else if (!state.isAttunementOverridden) {
          state.editorAttunement = calculatedAttunement;
        }
      } else if (attunement !== undefined) {
        state.editorAttunement = sanitizeAttunement(attunement);
        state.isAttunementOverridden = true;
      }
      if (mod !== undefined) state.editorMod = sanitizeMod(mod);
      pushToHistory(state);
    },
    setHasEditorChanges: (state, action: PayloadAction<boolean>) => {
        state.hasEditorChanges = action.payload;
    },
    resetEditorState: (state) => {
      const currentVisibility = state.uiVisibility;
      
      // Push the current state to history before resetting
      pushToHistory(state);
      
      // Reset the state
      Object.assign(state, {
        ...initialState,
        uiVisibility: currentVisibility,
        history: state.history, // Preserve the history
      });
      
      // Push the reset state to history
      pushToHistory(state);
    },
    toggleBit: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.bitsArray[index] = !state.bitsArray[index];
      state.editorSeed = BigInt('0b' + [...state.bitsArray].reverse().map(b => b ? '1' : '0').join('')).toString();
      if (!state.isAttunementOverridden) {
        state.editorAttunement = calculateMostFrequentNumeral(BigInt(state.editorSeed))?.toString() ?? "0";
      }
      pushToHistory(state);
    },
    toggleDisplaySetting: (state, action: PayloadAction<number>) => {
      const bitIndex = action.payload;
      const displaySettingsValue = parseInt(state.editorMod.slice(-3), 10);
      const newDisplaySettingsValue = displaySettingsValue ^ (1 << bitIndex); // Toggle the bit
      const newDisplaySettingsString = newDisplaySettingsValue.toString(10).padStart(3, '0'); // Convert to string
      state.editorMod = state.editorMod.slice(0, -3) + newDisplaySettingsString; // Update editorMod
      pushToHistory(state); // Maintain history
    },
    updateModValue: (state, action: PayloadAction<{ name: string; value: number }>) => {
      const { name, value } = action.payload;
      let newMod = state.editorMod;
    
      switch (name) {
        case 'color':
          newMod = value.toString().padStart(3, '0') + newMod.slice(3);
          break;
        case 'spin':
          newMod = newMod.slice(0, 3) + value.toString().padStart(3, '0') + newMod.slice(6);
          break;
        case 'depth':
          newMod = newMod.slice(0, 6) + value.toString().padStart(3, '0') + newMod.slice(9);
          break;
        case 'tint':
          newMod = newMod.slice(0, 9) + value.toString().padStart(2, '0') + newMod.slice(11);
          break;
        case 'tintPercent':
          newMod = newMod.slice(0, 11) + Math.floor(value / 10).toString().slice(-1) + newMod.slice(12);
          break;
      }
    
      state.editorMod = newMod;
      state.modValues[name] = value;
      pushToHistory(state);
    },
    resetAttunementOverride: (state) => {
      state.isAttunementOverridden = false;
      state.editorAttunement = calculateMostFrequentNumeral(BigInt(state.editorSeed))?.toString() ?? "0";
      pushToHistory(state);
    },
    undo: (state) => {
      if (state.history.past.length > 0) {
        let previous: EditorHistoryState | undefined;
        do {
          previous = state.history.past.pop();
        } while (state.history.past.length > 0 && previous?.seed === state.editorSeed);
    
        if (previous) {
          const currentState: EditorHistoryState = {
            seed: state.editorSeed,
            mod: state.editorMod,
            attunement: state.editorAttunement,
            bitsArray: [...state.bitsArray],
            isAttunementOverridden: state.isAttunementOverridden,
            modValues: { ...state.modValues },
          };
          state.history.future.push(currentState);
    
          state.editorSeed = previous.seed;
          state.editorMod = previous.mod;
          state.editorAttunement = previous.attunement;
          state.bitsArray = [...previous.bitsArray];
          state.isAttunementOverridden = previous.isAttunementOverridden;
          state.modValues = { ...previous.modValues };
          state.hasEditorChanges = true;
        }
      }
    },
    redo: (state) => {
      if (state.history.future.length > 0) {
        let next: EditorHistoryState | undefined;
        do {
          next = state.history.future.pop();
        } while (state.history.future.length > 0 && next?.seed === state.editorSeed);
    
        if (next) {
          const currentState: EditorHistoryState = {
            seed: state.editorSeed,
            mod: state.editorMod,
            attunement: state.editorAttunement,
            bitsArray: [...state.bitsArray],
            isAttunementOverridden: state.isAttunementOverridden,
            modValues: { ...state.modValues },
          };
          state.history.past.push(currentState);
    
          state.editorSeed = next.seed;
          state.editorMod = next.mod;
          state.editorAttunement = next.attunement;
          state.bitsArray = [...next.bitsArray];
          state.isAttunementOverridden = next.isAttunementOverridden;
          state.modValues = { ...next.modValues };
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
    setUIVisibility: (state, action: PayloadAction<'none' | 'layers' | 'displaySettings'>) => {
      state.uiVisibility = action.payload;
    },
    setSpinAnimationPaused: (state, action: PayloadAction<boolean>) => {
      state.isSpinAnimationPaused = action.payload
    },
    setDepthAnimationPaused: (state, action: PayloadAction<boolean>) => {
      state.isDepthAnimationPaused = action.payload
    },
  },
});

// Helper function to push current state to history
const MAX_HISTORY_LENGTH = 25;
const pushToHistory = (state: EditorState) => {
  const lastHistoryState = state.history.past[state.history.past.length - 1];
  const isNewStateDifferent = !lastHistoryState ||
    state.editorSeed !== lastHistoryState.seed ||
    state.editorMod !== lastHistoryState.mod ||
    state.editorAttunement !== lastHistoryState.attunement ||
    !state.bitsArray.every((bit, index) => bit === lastHistoryState.bitsArray[index]);

  if (isNewStateDifferent) {
    const newHistoryState: EditorHistoryState = {
      seed: state.editorSeed,
      mod: state.editorMod,
      attunement: state.editorAttunement,
      bitsArray: [...state.bitsArray],
      isAttunementOverridden: state.isAttunementOverridden,
      modValues: { ...state.modValues },
    };
    
    state.history.past = [...state.history.past, newHistoryState];
    
    if (state.history.past.length > MAX_HISTORY_LENGTH) {
      state.history.past = state.history.past.slice(-MAX_HISTORY_LENGTH);
    }
    
    state.history.future = [];
  }
};

export const {
  updateEditorState,
  resetEditorState,
  setHasEditorChanges,
  toggleBit,
  updateModValue,
  toggleDisplaySetting,
  resetAttunementOverride,
  undo,
  redo,
  setUIVisibility,
  setUrlParams,
  setSpinAnimationPaused,
  setDepthAnimationPaused,
} = newEditorSlice.actions;

// Selectors
export const selectEditorSeed = (state: RootState) => state.newEditor.editorSeed;
export const selectEditorMod = (state: RootState) => state.newEditor.editorMod;
export const selectEditorAttunement = createSelector(
  [
    (state: RootState) => state.newEditor.editorAttunement,
    (state: RootState) => state.newEditor.isAttunementOverridden,
    (state: RootState) => state.newEditor.editorSeed
  ],
  (editorAttunement, isAttunementOverridden, editorSeed) => {
    if (isAttunementOverridden) {
      return editorAttunement;
    } else {
      return calculateMostFrequentNumeral(BigInt(editorSeed))?.toString() ?? "0";
    }
  }
);
export const selectIsAttunementOverridden = (state: RootState) => state.newEditor.isAttunementOverridden;

export const selectBitsArray = (state: RootState) => state.newEditor.bitsArray;

export const selectReversedBitsArray = createSelector(
  [selectBitsArray],
  (bitsArray) => [...bitsArray].reverse()
);

export const selectModValues = createSelector(
  [(state: RootState) => state.newEditor.modValues],
  (modValues) => modValues
);

export const selectDisplaySettings = createSelector(
  [(state: RootState) => state.newEditor.editorMod],
  (editorMod) => {
    const displaySettingsValue = parseInt(editorMod.slice(-3), 10);
    return {
      value: displaySettingsValue,
      array: Array.from({ length: 9 }, (_, i) => !!(displaySettingsValue & (1 << i)))
    };
  }
);

export const selectModValuesAndDisplaySettings = createSelector(
  [selectModValues, selectDisplaySettings],
  (modValues, displaySettings) => ({ modValues, displaySettings })
);

export const selectHasEditorChanges = (state: RootState, originalState: { seed: string; mod: string; attunement: string }) => {
  return state.newEditor.editorSeed !== originalState.seed ||
         state.newEditor.editorMod !== originalState.mod ||
         state.newEditor.editorAttunement !== originalState.attunement;
};

export const selectIsEditorModChanged = createSelector(
  [selectEditorMod, selectSelectedIndex, selectQueueItems],
  (editorMod, selectedIndex, queueItems) => {
    if (selectedIndex === null) {
      return editorMod !== '000000000000000';
    }
    const selectedItem = queueItems[selectedIndex];
    return editorMod !== (selectedItem.newValues.newMod || selectedItem.initialMod || '000000000000000');
  }
);

export const selectIsEditorAttunementChanged = createSelector(
  [selectEditorAttunement, selectSelectedIndex, selectQueueItems, selectEditorSeed],
  (editorAttunement, selectedIndex, queueItems, editorSeed) => {
    if (selectedIndex === null) {
      return editorAttunement !== calculateMostFrequentNumeral(BigInt(editorSeed))?.toString();
    }
    const selectedItem = queueItems[selectedIndex];
    const defaultAttunement = calculateMostFrequentNumeral(BigInt(selectedItem.initialSeed))?.toString() ?? "0";
    return editorAttunement !== (selectedItem.newValues.newAttunement?.toString() || selectedItem.initialAttunement?.toString() || defaultAttunement);
  }
);

export const selectUIVisibility = (state: RootState) => state.newEditor.uiVisibility;

export default newEditorSlice.reducer;