import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { RootState } from '@/store';
import { selectSelectedIndex, selectQueueItems, QueueItem } from './queueSlice';
import { memoize, isEqual } from 'lodash';
import { seedToBits, sanitizeSeed, sanitizeMod, sanitizeAttunement, calculateMostFrequentNumeral, randomizeBits, randomizeMod, getRandomNumber } from "@/lib/utils/global";





//=================================================//

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
    past: Array<EditorHistoryState>;
    future: Array<EditorHistoryState>;
  };
  urlSeed: string | null;
  urlMod: string | null;
  urlAttunement: string | null;
  isColorAnimationPaused: boolean;
  isSpinAnimationPaused: boolean;
  isDepthAnimationPaused: boolean;
  uiVisibility?: 'none' | 'layers' | 'displaySettings';
  displaySettings?: {
    value: number;
    array: boolean[];
  };
}

// Editor history state
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

// Initializing state
const initialState: EditorState = {
  editorSeed: '0',
  editorMod: '000000000000',
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


// STATE ACTIONS --------------------------------

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateEditorState: (state, action: PayloadAction<{
      seed?: string;
      mod?: string;
      attunement?: string;
      isAttunementOverridden?: boolean
    }>) => {
      return produce(state, draftState => {
        let { seed, mod, attunement, isAttunementOverridden } = action.payload;
        if (seed === '?') { // Randomize via URL parameter
          const { newSeed } = randomizeBits();
          seed = newSeed;
        }
        if (mod === '?') { // Randomize via URL parameter
          const newMod = randomizeMod();
          mod = newMod;
        }
        if (attunement === '?') {
          const newAttunement = getRandomNumber(0, 9);
          attunement = newAttunement.toString();
          state.editorAttunement = attunement;
        }
        if (seed !== undefined) {
          state.editorSeed = sanitizeSeed(seed);
          state.bitsArray = seedToBits(BigInt(state.editorSeed));
          const calculatedAttunement = calculateMostFrequentNumeral(state.editorSeed)?.toString() ?? "0";
          if (attunement !== undefined) {
            state.editorAttunement = sanitizeAttunement(attunement);
            state.isAttunementOverridden = isAttunementOverridden !== undefined ? isAttunementOverridden : attunement !== calculatedAttunement;
          } else if (!state.isAttunementOverridden) {
            state.editorAttunement = calculatedAttunement;
          }
        } else if (attunement !== undefined) {
          state.editorAttunement = sanitizeAttunement(attunement);
          state.isAttunementOverridden = isAttunementOverridden !== undefined ? isAttunementOverridden : true;
        }
        if (isAttunementOverridden !== undefined) {
          state.isAttunementOverridden = isAttunementOverridden;
        }
        if (mod !== undefined) {
          state.editorMod = sanitizeMod(mod);
          // Update modValues when mod is changed
          const newModValues = parseMod(mod);
          if (!isEqual(newModValues, state.modValues)) {
            state.modValues = newModValues;
          }
        }
        pushToHistory(state);
      });
    },
    setHasEditorChanges: (state, action: PayloadAction<boolean>) => {
        state.hasEditorChanges = action.payload;
    },
    resetEditorState: (state) => {
      const currentVisibility = state.uiVisibility;
      pushToHistory(state);
      Object.assign(state, {
        ...initialState,
        uiVisibility: currentVisibility === 'displaySettings' ? 'none' : currentVisibility,
        history: state.history,
        urlSeed: state.urlSeed,
        urlMod: state.urlMod,
        urlAttunement: state.urlAttunement,
        isColorAnimationPaused: state.isColorAnimationPaused,
        isSpinAnimationPaused: state.isSpinAnimationPaused,
        isDepthAnimationPaused: state.isDepthAnimationPaused,
      });
      // Push the reset state to history
      pushToHistory(state);
    },
    resetEditorToQueueItem: (state, action: PayloadAction<QueueItem>) => {
      const item = action.payload;
      state.editorSeed = item.initialSeed;
      state.editorMod = item.initialMod || '000000000000';
      state.editorAttunement = item.initialAttunement?.toString() || calculateMostFrequentNumeral(item.initialSeed)?.toString() || "0";
      state.isAttunementOverridden = item.initialAttunementOverridden;
      state.bitsArray = seedToBits(BigInt(state.editorSeed));
      state.modValues = parseMod(state.editorMod);
    },
    toggleBit: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.bitsArray[index] = !state.bitsArray[index];
      state.editorSeed = BigInt('0b' + [...state.bitsArray].reverse().map(b => b ? '1' : '0').join('')).toString();
      if (!state.isAttunementOverridden) {
        state.editorAttunement = calculateMostFrequentNumeral(state.editorSeed)?.toString() ?? "0";
      }
      pushToHistory(state);
    },
    toggleDisplaySetting: (state, action: PayloadAction<number>) => {
      const bitIndex = action.payload;
      const displaySettingsValue = parseInt(state.editorMod.slice(-3), 10);
      const newDisplaySettingsValue = displaySettingsValue ^ (1 << bitIndex); // Toggle the bit
      const newDisplaySettingsString = newDisplaySettingsValue.toString(10).padStart(3, '0'); // Convert to string
      state.editorMod = state.editorMod.slice(0, -3) + newDisplaySettingsString; // Update editorMod
      pushToHistory(state);
    },
    updateModValue: (state, action: PayloadAction<{ name: keyof typeof state.modValues; value: number }>) => {
      const { name, value } = action.payload;
      if (state.modValues[name] !== value) {
        state.modValues[name] = value;
        let newMod = state.editorMod;
      
        switch (name) {
          case 'color':
            newMod = value.toString().padStart(2, '0') + newMod.slice(2);
            break;
          case 'spin':
            newMod = newMod.slice(0, 2) + value.toString().padStart(2, '0') + newMod.slice(4);
            break;
          case 'depth':
            newMod = newMod.slice(0, 4) + value.toString().padStart(2, '0') + newMod.slice(6);
            break;
          case 'tint':
            newMod = newMod.slice(0, 6) + value.toString().padStart(2, '0') + newMod.slice(8);
            break;
          case 'tintPercent':
            newMod = newMod.slice(0, 8) + Math.floor(value / 10).toString().slice(-1) + newMod.slice(9);
            break;
        }
        state.editorMod = newMod;
        pushToHistory(state);
      }
    },
    setIsAttunementOverridden: (state, action: PayloadAction<boolean>) => {
      state.isAttunementOverridden = action.payload;
      pushToHistory(state);
    },
    resetAttunementOverride: (state) => {
      state.isAttunementOverridden = false;
      state.editorAttunement = calculateMostFrequentNumeral(state.editorSeed) ?? "0";
      pushToHistory(state);
    },
    pushCurrentStateToHistory: (state) => {
      pushToHistory(state);
    },
    undo: (state) => {
      if (state.history.past.length > 0) {
        let previous = state.history.past.pop();
        
        if (previous) {
          // Always consider the immediately previous state
          const currentState: EditorHistoryState = {
            seed: state.editorSeed,
            mod: state.editorMod,
            attunement: state.editorAttunement,
            bitsArray: [...state.bitsArray],
            isAttunementOverridden: state.isAttunementOverridden,
            modValues: { ...state.modValues },
          };
          state.history.future.push(currentState);
    
          // If the previous state is identical to the current state, find the next different state
          while (state.history.past.length > 0 && 
                previous.seed === state.editorSeed && 
                previous.mod === state.editorMod && 
                previous.attunement === state.editorAttunement) {
            const nextPrevious = state.history.past.pop();
            if (nextPrevious) {
              state.history.future.push(previous);
              previous = nextPrevious;
            }
          }
    
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
        } while (state.history.future.length > 0 && 
                next?.seed === state.editorSeed && 
                next?.mod === state.editorMod && 
                next?.attunement === state.editorAttunement);
    
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
    setUrlMod: (state, action: PayloadAction<string>) => {
      const mod = action.payload;
      state.urlMod = mod;
      state.editorMod = mod;
      
      state.modValues = {
        color: parseInt(mod.slice(0, 2), 10),
        spin: parseInt(mod.slice(2, 4), 10),
        depth: parseInt(mod.slice(4, 6), 10),
        tint: parseInt(mod.slice(6, 8), 10),
        tintPercent: parseInt(mod.slice(8, 9), 10) * 10,
      };

      const displaySettingsValue = parseInt(mod.slice(-3), 10);
      state.displaySettings = {
        value: displaySettingsValue,
        array: Array.from({ length: 9 }, (_, i) => !!(displaySettingsValue & (1 << i)))
      };
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


// UTILITY FUNCTIONS -------------------------------

// Push current state to history
const MAX_HISTORY_LENGTH = 15;
const pushToHistory = (state: EditorState) => {
  const lastHistoryState = state.history.past[state.history.past.length - 1];
  const isNewStateDifferent = !lastHistoryState ||
      state.editorSeed !== lastHistoryState.seed ||
      state.editorMod !== lastHistoryState.mod ||
      state.editorAttunement !== lastHistoryState.attunement ||
      !state.bitsArray.every((bit, index) => bit === lastHistoryState.bitsArray[index]);

  if (isNewStateDifferent && state.editorSeed !== '0') {
      const newHistoryState: EditorHistoryState = {
          seed: state.editorSeed,
          mod: state.editorMod,
          attunement: state.editorAttunement,
          bitsArray: state.bitsArray,
          isAttunementOverridden: state.isAttunementOverridden,
          modValues: state.modValues,
      };
      
      state.history.past = [...state.history.past.slice(-MAX_HISTORY_LENGTH + 1), newHistoryState];
      state.history.future = [];
  }
};

export const parseMod = memoize((mod: string) => {
  return {
    color: parseInt(mod.slice(0, 2), 10) || 0,
    spin: parseInt(mod.slice(2, 4), 10) || 0,
    depth: parseInt(mod.slice(4, 6), 10) || 0,
    tint: parseInt(mod.slice(6, 8), 10) || 0,
    tintPercent: (parseInt(mod.slice(8, 9), 10) * 10) || 100,
  };
});

const calculateMostFrequentNumeralMemo = memoize(calculateMostFrequentNumeral, 
  (seed: string) => seed
);


// SELECTORS -----------------------------------------

export const selectEditorSeed = (state: RootState) => state.editor.editorSeed;
export const selectEditorMod = (state: RootState) => state.editor.editorMod;
export const selectEditorAttunement = createSelector(
  [
    (state: RootState) => state.editor.editorAttunement,
    (state: RootState) => state.editor.isAttunementOverridden,
    (state: RootState) => state.editor.editorSeed
  ],
  (editorAttunement, isAttunementOverridden, editorSeed) => {
    if (isAttunementOverridden) {
      return editorAttunement;
    }
    return calculateMostFrequentNumeralMemo(editorSeed)?.toString() ?? "0";
  },
  {
    memoizeOptions: {
      resultEqualityCheck: isEqual
    }
  }
);

export const selectIsAttunementOverridden = (state: RootState) => state.editor.isAttunementOverridden;

export const selectBitsArray = (state: RootState) => state.editor.bitsArray;

export const selectReversedBitsArray = createSelector(
  [selectBitsArray],
  (bitsArray) => [...bitsArray].reverse()
);

export const selectModValues = (state: RootState) => state.editor.modValues;

export const selectDisplaySettings = createSelector(
  [(state: RootState) => state.editor.editorMod],
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

export const selectHasEditorChanges = createSelector(
  [
    selectEditorSeed,
    selectEditorMod,
    selectEditorAttunement,
    selectIsAttunementOverridden,
    selectSelectedIndex,
    selectQueueItems
  ],
  (editorSeed, editorMod, editorAttunement, isAttunementOverridden, selectedIndex, queueItems) => {
    if (selectedIndex === null || !queueItems.length) return false;
    const selectedItem = queueItems[selectedIndex];
    if (!selectedItem) return false;

    const itemSeed = selectedItem.newValues?.newSeed || selectedItem.initialSeed;
    const itemMod = selectedItem.newValues?.newMod || selectedItem.initialMod || '000000000000';
    const itemAttunement = selectedItem.newValues?.newAttunement?.toString() || selectedItem.initialAttunement?.toString() || calculateMostFrequentNumeral(selectedItem.initialSeed)?.toString() || "0";
    const itemIsAttunementOverridden = selectedItem.newValues?.isAttunementOverridden ?? selectedItem.isAttunementOverridden ?? false;

    const hasContentChanges = 
      editorSeed !== itemSeed ||
      editorMod !== itemMod ||
      editorAttunement !== itemAttunement;

    const hasAttunementOverrideChange = 
      isAttunementOverridden !== itemIsAttunementOverridden;

    return hasContentChanges || hasAttunementOverrideChange;
  }
);

export const selectIsEditorModChanged = createSelector(
  [selectEditorMod, selectSelectedIndex, selectQueueItems],
  (editorMod, selectedIndex, queueItems) => {
    if (selectedIndex === null || queueItems.length === 0) {
      return editorMod !== '000000000000';
    }
    const selectedItem = queueItems[selectedIndex];
    if (!selectedItem) return editorMod !== '000000000000';

    const initialMod = selectedItem.initialMod || '000000000000';
    const newMod = selectedItem.newValues?.newMod;

    if (newMod !== null && newMod !== undefined) {
      return editorMod !== newMod;
    }
    return editorMod !== initialMod;
  }
);

export const selectIsEditorAttunementChanged = createSelector(
  [selectEditorAttunement, selectSelectedIndex, selectQueueItems, selectEditorSeed],
  (editorAttunement, selectedIndex, queueItems, editorSeed) => {
    if (selectedIndex === null || queueItems.length === 0) {
      return editorAttunement !== calculateMostFrequentNumeral(editorSeed)?.toString();
    }
    const selectedItem = queueItems[selectedIndex];
    if (!selectedItem) {
      return editorAttunement !== calculateMostFrequentNumeral(editorSeed)?.toString();
    }
    const defaultAttunement = calculateMostFrequentNumeral(selectedItem.initialSeed)?.toString() ?? "0";
    return editorAttunement !== (selectedItem.newValues?.newAttunement?.toString() || selectedItem.initialAttunement?.toString() || defaultAttunement);
  }
);

export const selectUIVisibility = (state: RootState) => state.editor.uiVisibility;


// EXPORTED ACTIONS -------------------------------

export const {
  updateEditorState,
  resetEditorState,
  resetEditorToQueueItem,
  setHasEditorChanges,
  toggleBit,
  updateModValue,
  toggleDisplaySetting,
  setIsAttunementOverridden,
  resetAttunementOverride,
  undo,
  redo,
  setUIVisibility,
  setUrlParams,
  setSpinAnimationPaused,
  setDepthAnimationPaused,
  pushCurrentStateToHistory,
} = editorSlice.actions;

export default editorSlice.reducer;