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

// Seed number to bits
export function seedToBits(seed: bigint): boolean[] {
  return seed.toString(2).padStart(100, '0').split('').reverse().map(bit => bit === '1');
}

// Hide mouse cursor after 5 seconds of inactivity and disable interactions
export function hideMouseCursor(element: HTMLElement) {
  let timeout: NodeJS.Timeout;
  let isHidden = false;
  
  const hideCursor = () => {
    document.body.classList.add('cursor-hidden');
    isHidden = true;
  };

  const showCursor = () => {
    if (isHidden) {
      document.body.classList.remove('cursor-hidden');
      isHidden = false;
      // Explicitly reset cursor style
      element.style.cursor = 'auto';
      // Force a repaint to ensure hover states are updated
      element.style.display = 'none';
      element.offsetHeight; // Trigger a reflow
      element.style.display = '';
    }
    clearTimeout(timeout);
    timeout = setTimeout(hideCursor, 5000);
  };

  const handleMouseMove = (e: MouseEvent) => {
    showCursor();
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mousedown', showCursor);
  element.addEventListener('mouseup', showCursor);

  // Initial setup
  showCursor();

  // Return a cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mousedown', showCursor);
    element.removeEventListener('mouseup', showCursor);
    clearTimeout(timeout);
    document.body.classList.remove('cursor-hidden');
    element.style.cursor = 'auto';
  };
}

// Generate a Claim ID
export function generateClaimId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}