export function updateSVGWithSeed(
  editorSeed: bigint,
  artwork: SVGSVGElement,
  bitsArray: boolean[],
  context: Document | DocumentFragment = document,
  removeUnusedElements: boolean = false
) {
  const lrElements = Array.from(context.querySelectorAll(".lr"));
  const subLrElements = Array.from(context.querySelectorAll(".sub"));
  const lrIndicators = Array.from(context.querySelectorAll(".pattern path"));

  lrElements.forEach((element) => {element.classList.remove("on")});
  subLrElements.forEach((element) => {element.classList.remove("on")});
  lrIndicators.forEach((element) => {element.classList.remove("on");});

  let lrCount = setLayersVisibility(BigInt(editorSeed.toString()), artwork);

  if (lrCount >= 3 && lrCount <= 20) {
    artwork.classList.add("type");
  } else {
    artwork.classList.remove("type");
  }

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

  function setLayersVisibility(seed, artwork) {
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
}