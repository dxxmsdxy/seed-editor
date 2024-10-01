import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import seedList from '@/public/seedList.json';
import { memoize } from 'lodash';





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
export function seedToBits(seed: bigint): boolean[] {
  return seed.toString(2).padStart(100, '0').split('').reverse().map(bit => bit === '1');
}

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

export const calculateMostFrequentNumeral = memoize((seed) => {
    var seedStr = seed.toString();
    // @ts
    // const numeralFrequencies: Record<string, number> = {};
    const numeralFrequencies = {};
  
    // Iterate through each numeral in the string and count its frequency
    for (const numeral of seedStr) {
      if (numeralFrequencies[numeral]) {
        numeralFrequencies[numeral]++;
      } else {
        numeralFrequencies[numeral] = 1;
      }
    }
  
    // Find the most frequent numeral
    let mostFrequentNumeral = null;
    let highestFrequency = 0;
  
    for (const numeral in numeralFrequencies) {
      const frequency = numeralFrequencies[numeral];
      if (
        frequency > highestFrequency ||
        (frequency === highestFrequency && numeral > (mostFrequentNumeral || ""))
      ) {
        mostFrequentNumeral = numeral;
        highestFrequency = frequency;
      }
    }
    return mostFrequentNumeral !== null ? parseInt(mostFrequentNumeral) : null;
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

    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const worker = new Worker(URL.createObjectURL(blob));

    worker.onmessage = function(e) {
      resolve(e.data);
      worker.terminate(); // Move termination here
    };
    worker.postMessage(seed.toString());

    // Add a timeout to ensure the worker doesn't run indefinitely
    setTimeout(() => {
      worker.terminate();
      resolve(false); // Resolve with false if the computation takes too long
    }, 3000); // Adjust the timeout as needed
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