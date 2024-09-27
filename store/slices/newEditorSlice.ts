import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { seedToBits, sanitizeSeed, sanitizeMod, sanitizeAttunement } from "@/lib/newUtils";
import { calculateMostFrequentNumeral } from "@/lib/utils/artwork/helpers";

// Core editor state
interface EditorState {
  editorSeed: string;
  editorMod: string;
  editorAttunement: string;
  bitsArray: boolean[];
  hasEditorChanges: boolean;
  isAttunementOverridden: boolean;
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
  uiVisibility: 'none' | 'layers' | 'displaySettings';
}

const initialState: EditorState = {
  editorSeed: '0',
  editorMod: '000000000000000',
  editorAttunement: '0',
  bitsArray: Array(100).fill(false),
  hasEditorChanges: false,
  isAttunementOverridden: false,
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
  uiVisibility: 'none',
};

const newEditorSlice = createSlice({
  name: 'newEditor',
  initialState,
  reducers: {
    updateEditorState: (state, action: PayloadAction<{ seed?: string; mod?: string; attunement?: string }>) => {
      const { seed, mod, attunement } = action.payload;
      if (seed !== undefined) state.editorSeed = sanitizeSeed(seed);
      if (mod !== undefined) state.editorMod = sanitizeMod(mod);
      if (attunement !== undefined) {
        state.editorAttunement = sanitizeAttunement(attunement);
        state.isAttunementOverridden = true;
      }
      pushToHistory(state);
    },
    setHasEditorChanges: (state, action: PayloadAction<boolean>) => {
        state.hasEditorChanges = action.payload;
    },
    resetEditorState: (state) => {
      Object.assign(state, initialState);
    },
    toggleBit: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const newBitsArray = state.bitsArray.slice();
      newBitsArray[index] = !newBitsArray[index];
      state.bitsArray = newBitsArray;
      state.editorSeed = BigInt('0b' + newBitsArray.map(b => b ? '1' : '0').join('')).toString();
      pushToHistory(state);
    },
    overrideAttunement: (state, action: PayloadAction<string>) => {
      state.editorAttunement = sanitizeAttunement(action.payload);
      state.isAttunementOverridden = true;
      pushToHistory(state);
    },
    resetAttunementOverride: (state) => {
      state.isAttunementOverridden = false;
      state.editorAttunement = calculateMostFrequentNumeral(BigInt(state.editorSeed))?.toString() ?? "0";
      pushToHistory(state);
    },
    undo: (state) => {
      if (state.history.past.length > 0) {
        const previous = state.history.past.pop()!;
        state.history.future.push({ seed: state.editorSeed, mod: state.editorMod, attunement: state.editorAttunement });
        Object.assign(state, previous);
      }
    },
    redo: (state) => {
      if (state.history.future.length > 0) {
        const next = state.history.future.pop()!;
        state.history.past.push({ seed: state.editorSeed, mod: state.editorMod, attunement: state.editorAttunement });
        Object.assign(state, next);
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
    toggleColorAnimationPause: (state) => {
        state.isColorAnimationPaused = !state.isColorAnimationPaused;
    },
    toggleDepthAnimationPause: (state) => {
        state.isDepthAnimationPaused = !state.isDepthAnimationPaused;
    },
    toggleSpinAnimationPause: (state) => {
        state.isSpinAnimationPaused = !state.isSpinAnimationPaused;
    },
    setUIVisibility: (state, action: PayloadAction<'none' | 'layers' | 'displaySettings'>) => {
      state.uiVisibility = action.payload;
    },
  },
});

// Helper function to push current state to history
const pushToHistory = (state: EditorState) => {
  state.history.past.push({ seed: state.editorSeed, mod: state.editorMod, attunement: state.editorAttunement });
  state.history.future = [];
  if (state.history.past.length > 25) state.history.past.shift();
};

export const {
  updateEditorState,
  toggleBit,
  resetEditorState,
  overrideAttunement,
  resetAttunementOverride,
  undo,
  redo,
  setUIVisibility,
  setUrlParams,
} = newEditorSlice.actions;

// Selectors
export const selectEditorSeed = (state: RootState) => state.newEditor.editorSeed;
export const selectEditorMod = (state: RootState) => state.newEditor.editorMod;
export const selectEditorAttunement = (state: RootState) => state.newEditor.editorAttunement;
export const selectIsAttunementOverridden = (state: RootState) => state.newEditor.isAttunementOverridden;

export const selectBitsArray = (state: RootState) => seedToBits(BigInt(state.newEditor.editorSeed));

export const selectModValues = (state: RootState) => {
  const mod = state.newEditor.editorMod;
  return {
    color: parseInt(mod.slice(0, 3)),
    spin: parseInt(mod.slice(3, 6)),
    depth: parseInt(mod.slice(6, 9)),
    tint: parseInt(mod.slice(9, 11)),
    tintPercent: parseInt(mod.slice(11, 12)) * 10 || 100,
  };
};

export const selectDisplaySettings = (state: RootState) => parseInt(state.newEditor.editorMod.slice(12), 10);

export const selectHasEditorChanges = (state: RootState, originalState: { seed: string; mod: string; attunement: string }) => {
  return state.newEditor.editorSeed !== originalState.seed ||
         state.newEditor.editorMod !== originalState.mod ||
         state.newEditor.editorAttunement !== originalState.attunement;
};

export const selectUIVisibility = (state: RootState) => state.newEditor.uiVisibility;

export default newEditorSlice.reducer;