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
  document.body.style.background = color;
};

// @ts
// export function setLayersVisibility(seed: bigint, artwork: Element) {
export function setLayersVisibility(seed, artwork) {
  const lrElements = Array.from(artwork.querySelectorAll(".lr"));
  const lrIndicators = Array.from(artwork.querySelectorAll(".pattern path"));
  const minLength = Math.min(lrElements.length, lrIndicators.length);
  let lrCount = 0; // Moved inside the function
  for (let i = 0; i < minLength; i++) {
    const isVisible = (seed & (BigInt(1) << BigInt(i))) !== BigInt(0);
    lrElements[i].classList.toggle("on", isVisible);
    lrIndicators[i].classList.toggle("on", isVisible);
    if (isVisible) {
      lrCount = lrCount + 1;
    }
  }
  return lrCount; // Return the count
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

// @ts
// export function updateDataAttunementAttribute(seed: BigInt, artwork: HTMLElement) {
export function updateDataAttunementAttribute(seed, artwork) {
  const mostFrequentNumeral = calculateMostFrequentNumeral(seed);
  artwork.setAttribute(
    "data-attunement",
    mostFrequentNumeral !== null ? mostFrequentNumeral.toString() : ""
  );
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
