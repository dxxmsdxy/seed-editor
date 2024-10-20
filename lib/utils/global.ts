import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import seedList from '@/public/seedList.json';
import { memoize, debounce } from 'lodash';





//===========================================//

export const attunementNames = [
  "creation",
  "destruction",
  "perception",
  "protection",
  "passion",
  "fortune",
  "wisdom",
  "resilience",
  "transformation",
  "eternity",
];

// ============  CORE  ============== //

// Sanitize seed number
export function sanitizeSeed(seed: string): string {
  return seed.replace(/\D/g, '').replace(/^0+/, '') || '0';
}

// Sanitize mod number
export function sanitizeMod(mod: string): string {
  if (mod === undefined) {
    return '000000000000';
  }
  const sanitized = mod.replace(/\D/g, '').slice(0, 12);
  return sanitized.padStart(12, '0');
}

// Sanitize attunement number
export function sanitizeAttunement(attunement: string): string {
  if (attunement === undefined) {
    return '0';
  }
  return Math.max(0, Math.min(9, Math.floor(Number(attunement)))).toString();
}

// Convert a string to a BigInt, exclude non-integers
const stringToBigInt = (str) => BigInt(str.replace(/[^0-9]/g, '') || 0);

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

// Seed number to bits
export const seedToBits = memoize((seed: bigint): boolean[] => {
  return seed.toString(2).padStart(100, '0').split('').reverse().map(bit => bit === '1');
});

// Generate a random number
export const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
  
// Randomize bits function
export function randomizeBits(numBits: number = 100): { bitArray: boolean[], newSeed: string } {
    const bitArray = new Array(numBits).fill(false);
    const numSelected = getRandomNumber(3, 36);
    const shuffledIndices = shuffleArray(Array.from(Array(numBits).keys()));
    
    for (let i = 0; i < numSelected; i++) {
      bitArray[shuffledIndices[i]] = true;
    }
    
    const newSeed = BigInt('0b' + bitArray.map(b => b ? '1' : '0').join('')).toString();
    
    return { bitArray, newSeed };
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Helper function to pad a number with leading zeros
function padWithZeros(num: number, length: number): string {
  return num.toString().padStart(length, '0');
}

export function randomizeMod(): string {
  const segments: string[] = [];

  // Generate 4 segments of 2 digits each (00-99)
  for (let i = 0; i < 4; i++) {
    const segment = padWithZeros(getRandomNumber(0, 99), 2);
    segments.push(segment);
    console.log(`Segment ${i + 1} (00-99): ${segment}`);
  }

  // Generate the 5th segment (0-9)
  const segment5 = getRandomNumber(0, 9).toString();
  segments.push(segment5);
  console.log(`Segment 5 (0-9): ${segment5}`);

  // Generate the 6th segment (9-bit array)
  const bitArray = Array.from({ length: 9 }, () => Math.random() < 0.5);
  const decimalValue = parseInt(bitArray.map(bit => bit ? '1' : '0').join(''), 2);
  const segment6 = padWithZeros(decimalValue, 3);
  segments.push(segment6);
  console.log(`Segment 6 (000-511): ${segment6} (Binary: ${bitArray.map(b => b ? '1' : '0').join('')})`);

  const finalMod = segments.join('');
  console.log(`Final randomized mod: ${finalMod}`);

  return finalMod;
}

export const calculateMostFrequentNumeral = memoize((seedStr: string) => {
  const numeralFrequencies: Record<string, number> = {};

  for (let i = 0; i < seedStr.length; i++) {
    const numeral = seedStr[i];
    if (/\d/.test(numeral)) {
      numeralFrequencies[numeral] = (numeralFrequencies[numeral] || 0) + 1;
    }
  }

  const entries = Object.entries(numeralFrequencies);
  if (entries.length === 0) {
    return '0';
  }
  return entries.reduce((a, b) => (a[1] > b[1] ? a : b))[0];
});

export function updateDataAttunementAttribute(seed, artwork) {
  const mostFrequentNumeral = calculateMostFrequentNumeral(seed);
  artwork.setAttribute(
    "data-attunement",
    mostFrequentNumeral !== null ? mostFrequentNumeral.toString() : ""
  );
}

// Check if the seed number is a palindrome
export function checkPalindrome(seed) {  
  // Convert the BigInt to a string for easier manipulation
  const seedString = seed.toString();

  // Check if the string is equal to its reverse
  return seedString === seedString.split('').reverse().join('');
}

// Check if the seed number is a Prime
export const checkPrime = memoize((seed) => {
  return new Promise((resolve) => {
    requestIdleCallback(() => {
      function modPow(base, exponent, modulus) {
        if (modulus === BigInt(1)) return BigInt(0);
        let result = BigInt(1);
        base = base % modulus;
        while (exponent > 0) {
          if (exponent % BigInt(2) === BigInt(1)) {
            result = (result * base) % modulus;
          }
          exponent = exponent >> BigInt(1);
          base = (base * base) % modulus;
        }
        return result;
      }
      
      function millerRabinTest(num, rounds = 5) {
        if (num <= BigInt(3)) return num > BigInt(1);
        if (num % BigInt(2) === BigInt(0)) return false;
      
        let r = BigInt(0);
        let d = num - BigInt(1);
        while (d % BigInt(2) === BigInt(0)) {
          d = d / BigInt(2);
          r++;
        }
      
        for (let i = 0; i < rounds; i++) {
          const maxVal = num - BigInt(4);
          const randomFactor = BigInt(Math.floor(Math.random() * Number(maxVal)));
          const a = BigInt(2) + randomFactor;
          
          let x = modPow(a, d, num);
          if (x === BigInt(1) || x === num - BigInt(1)) continue;
      
          let j = BigInt(0);
          while (j < r - BigInt(1)) {
            x = modPow(x, BigInt(2), num);
            if (x === num - BigInt(1)) break;
            j++;
          }
      
          if (x !== num - BigInt(1)) return false;
        }
        return true;
      }

      const workerCode = `
        onmessage = function(e) {
          const num = BigInt(e.data);
          const lowerBound = BigInt("999999999999999");
          const upperBound = BigInt("1000000000000000000000000000000"); // 10^30

          if (num <= lowerBound || num >= upperBound) {
            postMessage(false); // Not in the desired range
            return;
          }

          const result = millerRabinTest(num, 5); // Increase rounds for better accuracy
        };

        ${modPow.toString()}
        ${millerRabinTest.toString()}
      `;

      const worker = new Worker(URL.createObjectURL(new Blob([workerCode], { type: 'application/javascript' })));

      worker.onmessage = function(e) {
          resolve(e.data);
          worker.terminate();
      };

      worker.postMessage(seed.toString());

      // Use AbortController for better timeout handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      controller.signal.addEventListener('abort', () => {
          worker.terminate();
          resolve(false);
      });

      worker.onerror = () => {
          clearTimeout(timeoutId);
          controller.abort();
      };
    }, { timeout: 1500 });
  });
});

export function calculateRemainder(seed) {
    return BigInt(seed)%13n;
}

// Determine the kind of a seed based on seedList.json
const seedKindMap = new Map(seedList.map(item => [item.id, item.kind]));

export function determineKind(id: string): string {
  return seedKindMap.get(id) || "Wild";
}

// Get the mint order (index) of a seed
export function getMintOrder(id: string): number | null {
  return seedList.findIndex(item => item.id === id);
}

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

// ============  UI & UX  ============== //

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

// Hide mouse cursor after 5 seconds of inactivity and disable interactions
export function hideMouseCursor() {
  let isHidden = false;
  let timeoutId: NodeJS.Timeout | null = null;

  const hideCursor = () => {
    if (!isHidden) {
      document.body.classList.add('sleep-mode');
      isHidden = true;
    }
  };

  const showCursor = () => {
    if (isHidden) {
      document.body.classList.remove('sleep-mode');
      isHidden = false;
    }
  };

  const resetTimeout = debounce(() => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(hideCursor, 6000);
  }, 100);

  const handleInteraction = (event: Event) => {
    showCursor(); // Immediately show cursor
    resetTimeout(); // Debounced reset of the timeout
    if (isHidden) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const events = ['mousemove', 'mousedown', 'mouseup', 'keydown', 'touchstart'];
  events.forEach(eventType => {
    document.addEventListener(eventType, handleInteraction, { passive: true, capture: true });
  });

  // Initial timeout
  timeoutId = setTimeout(hideCursor, 6000);

  return () => {
    events.forEach(eventType => {
      document.removeEventListener(eventType, handleInteraction, { capture: true });
    });
    if (timeoutId) clearTimeout(timeoutId);
    document.body.classList.remove('sleep-mode');
  };
}


// ============  THEME  ============== //
 
export const themeColors = {
    creation: "#f5f5f5",
    destruction: "#e9b7bc",
    perception: "#b6e9c9",
    protection: "#ccdff9",
    passion: "#ffcefc",
    fortune: "#f7df9c",
    wisdom: "#bdb2f3",
    transformation: "#a4f3f5",
    resilience: "#dddde5",
    eternity: "#bfb8c9",
};
  
export const themeColorsRGB = {
    creation: [245, 245, 245],
    destruction: [233, 183, 188],
    perception: [182, 233, 201],
    protection: [204, 223, 249],
    passion: [255, 206, 252],
    fortune: [247, 223, 156],
    wisdom: [189, 178, 243],
    transformation: [164, 243, 245],
    resilience: [221, 221, 229],
    eternity: [191, 184, 201],
};
 
export const updateThemeColor = (theme) => {
  const color = themeColors[theme];
  const themeBkg = document.querySelector('.theme-bkg');
  themeBkg.style.background = color;
  
  document.documentElement.style.setProperty('--theme-color', color);
};

// ============  EXTRERNAL  ============== //

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export const getArtworkBaseColorRGB = (seed) => {
  const mostFrequentNumeral = calculateMostFrequentNumeral(seed);
  const color = themeColorsRGB[attunementNames[mostFrequentNumeral]];
  return color;
};

export const getArtworkPlaceholderDataURL = (seed) => {
  const color = getArtworkBaseColorRGB(seed);
  return rgbDataURL(color[0], color[1], color[2]);
};