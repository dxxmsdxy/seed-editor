import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const bitsToSeed = (bitsArray: number[]) => {
  let seed = BigInt(0);
  for (let i = 0; i < bitsArray.length; i++) {
    if (bitsArray[i] === 1) {
      seed |= BigInt(1) << BigInt(i);
    }
  }
  return seed;
};

// Helper functions
export function selectElementContents(element: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(element);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

export function clearSelection() {
  if (window.getSelection) {
    window.getSelection()?.removeAllRanges();
  }
  const activeEl = document.activeElement;
  if (activeEl instanceof HTMLInputElement || activeEl instanceof HTMLTextAreaElement) {
    activeEl.selectionStart = activeEl.selectionEnd;
  }
}

export function seedToBits(seed: bigint): boolean[] {
  return seed.toString(2).padStart(100, '0').split('').map(bit => bit === '1');
}
