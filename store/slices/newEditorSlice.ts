import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { calculateMostFrequentNumeral, seedToBits, sanitizeSeed, sanitizeMod, sanitizeAttunement } from "@/lib/utils";
import { stat } from 'fs';

// Core editor state
interface EditorState {
  seed: string;
  mod: string;
  attunement: number;
  hasEditorChanges: boolean;
  isAttunementOverridden: boolean;
  history: {
    past: Array<{ seed: string; mod: string; attunement: number }>;
    future: Array<{ seed: string; mod: string; attunement: number }>;
  };
  urlSeed: string | null;
  urlMod: string | null;
  urlAttunement: string | null;
  isColorAnimationPaused: boolean;
  isSpinAnimationPaused: boolean;
  isDepthAnimationPaused: boolean;
}

const initialState: EditorState = {
  seed: '0',
  mod: '000000000000000',
  attunement: 0,
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
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateEditorState: (state, action: PayloadAction<{ seed?: string; mod?: string; attunement?: number }>) => {
      const { seed, mod, attunement } = action.payload;
      if (seed !== undefined) state.seed = sanitizeSeed(seed);
      if (mod !== undefined) state.mod = sanitizeMod(mod);
      if (attunement !== undefined) {
        state.attunement = sanitizeAttunement(attunement);
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
    overrideAttunement: (state, action: PayloadAction<number>) => {
      state.attunement = sanitizeAttunement(action.payload);
      state.isAttunementOverridden = true;
      pushToHistory(state);
    },
    resetAttunementOverride: (state) => {
      state.isAttunementOverridden = false;
      state.attunement = calculateMostFrequentNumeral(BigInt(state.seed)) ?? 0;
      pushToHistory(state);
    },
    undo: (state) => {
      if (state.history.past.length > 0) {
        const previous = state.history.past.pop()!;
        state.history.future.push({ seed: state.seed, mod: state.mod, attunement: state.attunement });
        Object.assign(state, previous);
      }
    },
    redo: (state) => {
      if (state.history.future.length > 0) {
        const next = state.history.future.pop()!;
        state.history.past.push({ seed: state.seed, mod: state.mod, attunement: state.attunement });
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
  },
});

// Helper function to push current state to history
const pushToHistory = (state: EditorState) => {
  state.history.past.push({ seed: state.seed, mod: state.mod, attunement: state.attunement });
  state.history.future = [];
  if (state.history.past.length > 25) state.history.past.shift();
};

export const {
  updateEditorState,
  resetEditorState,
  overrideAttunement,
  resetAttunementOverride,
  undo,
  redo,
} = editorSlice.actions;

// Selectors
export const selectEditorSeed = (state: RootState) => state.editor.seed;
export const selectEditorMod = (state: RootState) => state.editor.mod;
export const selectEditorAttunement = (state: RootState) => state.editor.attunement;
export const selectIsAttunementOverridden = (state: RootState) => state.editor.isAttunementOverridden;

export const selectBitsArray = (state: RootState) => seedToBits(BigInt(state.editor.seed));

export const selectModValues = (state: RootState) => {
  const mod = state.editor.mod;
  return {
    color: parseInt(mod.slice(0, 3)),
    spin: parseInt(mod.slice(3, 6)),
    depth: parseInt(mod.slice(6, 9)),
    tint: parseInt(mod.slice(9, 11)),
    tintPercent: parseInt(mod.slice(11, 12)) * 10 || 100,
  };
};

export const selectDisplaySettings = (state: RootState) => parseInt(state.editor.mod.slice(12), 10);

export const selectHasEditorChanges = (state: RootState, originalState: { seed: string; mod: string; attunement: number }) => {
  return state.editor.seed !== originalState.seed ||
         state.editor.mod !== originalState.mod ||
         state.editor.attunement !== originalState.attunement;
};

export default editorSlice.reducer;