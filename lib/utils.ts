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

// Sanitize seed number
export function sanitizeSeed(seed: string): string {
  return seed.replace(/\D/g, '').replace(/^0+/, '') || '0';
}

// Sanitize mod number
export function sanitizeMod(mod: string): string {
  if (mod === undefined) {
    return '000000000000000';
  }
  const sanitized = mod.replace(/\D/g, '').slice(0, 15);
  return sanitized.padStart(15, '0');
}

// Sanitize attunement number
export function sanitizeAttunement(attunement: number): number {
  return Math.max(0, Math.min(9, Math.floor(attunement)));
}


// Hide mouse cursor after 5 seconds of inactivity and disable interactions
export function hideMouseCursor() {
  let timeout: NodeJS.Timeout;
  let isHidden = false;
  
  const hideCursor = () => {
    document.body.classList.add('sleep-mode');
    isHidden = true;
  };

  const showCursor = () => {
    if (isHidden) {
      document.body.classList.remove('sleep-mode');
      isHidden = false;
    }
    clearTimeout(timeout);
    timeout = setTimeout(hideCursor, 6000);
  };

  const handleInteraction = (event: Event) => {
    showCursor();
    
    // If the cursor was hidden, prevent the current event from triggering
    // This ensures that the first interaction after sleep mode doesn't accidentally trigger unwanted actions
    if (isHidden) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const attachListeners = () => {
    document.addEventListener('mousemove', handleInteraction, true);
    document.addEventListener('mousedown', handleInteraction, true);
    document.addEventListener('mouseup', handleInteraction, true);
    document.addEventListener('keydown', handleInteraction, true);
    document.addEventListener('touchstart', handleInteraction, true);
  };

  const removeListeners = () => {
    document.removeEventListener('mousemove', handleInteraction, true);
    document.removeEventListener('mousedown', handleInteraction, true);
    document.removeEventListener('mouseup', handleInteraction, true);
    document.removeEventListener('keydown', handleInteraction, true);
    document.removeEventListener('touchstart', handleInteraction, true);
  };

  // Initial setup
  attachListeners();
  showCursor();

  // Return a cleanup function
  return () => {
    removeListeners();
    clearTimeout(timeout);
    document.body.classList.remove('sleep-mode');
  };
}

// Convert a string to a BigInt, exclude non-integers
const stringToBigInt = (str) => BigInt(str.replace(/[^0-9]/g, '') || 0);

// Generate a Claim ID
export function generateClaimId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}