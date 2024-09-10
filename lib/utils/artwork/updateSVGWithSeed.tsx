import {
  setLayersVisibility,
  updateDataAttunementAttribute,
  attunementNames,
  calculateMostFrequentNumeral,
} from "./helpers";

export function updateSVGWithSeed(
  editorSeed: bigint,
  artwork: HTMLElement,
  context: Document | DocumentFragment = document,
  removeUnusedElements: boolean = false
) {
  const lrElements = Array.from(context.querySelectorAll(".lr"));
  lrElements.forEach((element) => {
    element.classList.remove("on");
    // element.remove();
  });
  const subLrElements = Array.from(context.querySelectorAll(".sub"));
  subLrElements.forEach((element) => {
    element.classList.remove("on");
    // element.remove();
  });
  const lrIndicators = Array.from(context.querySelectorAll(".pattern path"));
  lrIndicators.forEach((element) => {
    element.classList.remove("on");
    // element.remove();
  });
  const lrCount = setLayersVisibility(BigInt(editorSeed.toString()), artwork);
  if (lrCount >= 3 && lrCount <= 20) {
    artwork.classList.add("type");
  }

  // ADDRESS SUB-LAYERS
  Array.from(context.querySelectorAll(".sphere-1")).forEach((element) => {
    if (element.classList.contains("on")) {
      Array.from(context.querySelectorAll(".sphere-2")).forEach((el) => {
        el.classList.add("on");
      });
    }
  });

  Array.from(context.querySelectorAll(".sphere-3")).forEach((element) => {
    if (element.classList.contains("on")) {
      ["sphere-4", "sphere-5", "sphere-6"].forEach((className) => {
        Array.from(context.querySelectorAll(className)).forEach((el) => {
          el.classList.add("on");
        });
      });
    }
  });

  Array.from(context.querySelectorAll(".sphere-7")).forEach((element) => {
    if (element.classList.contains("on")) {
      ["sphere-8", "sphere-9"].forEach((className) => {
        Array.from(context.querySelectorAll(className)).forEach((el) => {
          el.classList.add("on");
        });
      });
    }
  });

  if (lrCount < 5) {
    artwork.classList.add("shallow");
    artwork.classList.remove("deep", "superdeep");
  } else if (lrCount >= 5 && lrCount <= 8) {
    artwork.classList.add("deep");
    artwork.classList.remove("superdeep", "shallow");
  } else if (lrCount > 8 && lrCount <= 14) {
    artwork.classList.add("superdeep");
    artwork.classList.remove("shallow", "deep");
  } else {
    artwork.classList.remove("shallow", "deep", "superdeep");
  }

  // Call the updateDataAttunementAttribute function after rendering a new seed
  updateDataAttunementAttribute(editorSeed, artwork);

  const mostFrequentNumeral = calculateMostFrequentNumeral(editorSeed);
  // Assign the appropriate attunement class to the artwork
  if (
    mostFrequentNumeral !== null &&
    mostFrequentNumeral >= 0 &&
    mostFrequentNumeral <= 9
  ) {
    const currentAttunementIndex = mostFrequentNumeral;

    attunementNames.forEach((className) => {
      artwork.classList.remove(className);
    });
    const currentAttunement = attunementNames[currentAttunementIndex];
    artwork.classList.add(currentAttunement);

    // TODO
    // currentAttunementIndex = mostFrequentNumeral;
    // toggleAttunement();

    artwork.classList.add("js");
    artwork.classList.add("reveal");
    artwork.classList.add("pauseColor");
  }

  const seedText = context.getElementById("seednumber");
  if (seedText) {
    seedText.innerHTML = editorSeed.toString();
  }

  let seedRemainder = BigInt(editorSeed) % BigInt(13);
  let charElements = artwork.getElementsByClassName("char");
  for (let i = 0; i < charElements.length; i++) {
    let charElement = charElements[i] as HTMLElement;

    if (seedRemainder !== undefined && seedRemainder !== null) {
      charElement.innerHTML = seedRemainder.toString();
    }
  }

  // REMOVE UNUSED ELEMENTS FROM THE ARTWORK
  if (removeUnusedElements && editorSeed && artwork) {
    const nonOnElements = Array.from(
      artwork.querySelectorAll(
        ".lr:not(.on), .pattern path:not(.on), .sub:not(.on)"
      )
    );

    nonOnElements.forEach((element) => {
      element.remove();
    });
  }
}
