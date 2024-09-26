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

// const color = themeColorsRGB[attunementNames[mostFrequentNumeral]]

export const updateThemeColor = (theme) => {
  const color = themeColors[theme];
  const themeBkg = document.querySelector('.theme-bkg');
  themeBkg.style.background = color;
};

// @ts
// export function setLayersVisibility(seed: bigint, artwork: Element) {
  export function setLayersVisibility(seed, artwork) {
    const lrElements = Array.from(artwork.querySelectorAll(".lr"));
    const lrIndicators = Array.from(artwork.querySelectorAll(".pattern path"));
    const subElements = Array.from(artwork.querySelectorAll(".sub"));
    const minLength = Math.min(lrElements.length, lrIndicators.length);
    let lrCount = 0;
  
    for (let i = 0; i < minLength; i++) {
      const isVisible = (seed & (BigInt(1) << BigInt(i))) !== BigInt(0);
      lrElements[i].classList.toggle("on", isVisible);
      lrIndicators[i].classList.toggle("on", isVisible);
  
      if (isVisible) {
        lrCount = lrCount + 1;
      }
    }
  
    // Special cases for sphere visibility
    const handleSphereVisibility = (parentId, childIds) => {
      const parent = artwork.querySelector(`#${parentId}`);
      if (parent && parent.classList.contains('on')) {
        childIds.forEach(childId => {
          const child = artwork.querySelector(`#${childId}`);
          if (child) {
            child.classList.add('on');
          }
        });
      }
    };
  
    handleSphereVisibility('sphere-1', ['sphere-2']);
    handleSphereVisibility('sphere-3', ['sphere-4', 'sphere-5', 'sphere-6']);
    handleSphereVisibility('sphere-7', ['sphere-8', 'sphere-9']);
  
    return lrCount;
  }

// DETERMINE NUMERAL
// @ts
// export function calculateMostFrequentNumeral(seed: BigInt) {
export function calculateMostFrequentNumeral(seed) {
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
}

// Check if the seed number is a palindrome
export function checkPalindrome(seed) {  
  // Convert the BigInt to a string for easier manipulation
  const seedString = seed.toString();

  // Check if the string is equal to its reverse
  return seedString === seedString.split('').reverse().join('');
}

// @ts
// export function updateDataAttunementAttribute(seed: BigInt, artwork: HTMLElement) {
export function updateDataAttunementAttribute(seed, artwork) {
  const mostFrequentNumeral = calculateMostFrequentNumeral(seed);
  artwork.setAttribute(
    "data-attunement",
    mostFrequentNumeral !== null ? mostFrequentNumeral.toString() : ""
  );
}

// Check if the seed number is a Prime
export function checkPrime(seed) {
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
}

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

// #11230a
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
