import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";




//===================================================//

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert bit array to a seed number
export const bitsToSeed = (bitsArray: number[]) => {
  let seed = BigInt(0);
  for (let i = 0; i < bitsArray.length; i++) {
    if (bitsArray[i] === 1) {
      seed |= BigInt(1) << BigInt(i);
    }
  }
  return seed;
};

// Convert a string to a BigInt
const stringToBigInt = (str) => BigInt(str.replace(/[^0-9]/g, '') || 0);

// Select all input contents
export function selectElementContents(element: HTMLElement) {
  console.log('Selecting contents of:', element);
  const range = document.createRange();
  range.selectNodeContents(element);
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
    console.log('Selection applied');
  }
}

// Clear input selection
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
