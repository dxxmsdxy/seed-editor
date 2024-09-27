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

const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  
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
  