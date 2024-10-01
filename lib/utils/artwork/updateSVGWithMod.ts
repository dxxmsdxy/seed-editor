/**
 * SEEDS Artwork Mod Utility Functions
 * =================================================
 * - Mod Value Range: 00 to 99
 * 
 * Using a 2-digit mod value (00-99), we can represent a point within the
 * animation cycle. This mod value can be converted to a negative animation delay
 * to control the playback position of individual elements.
 * 
 * Conversion Formula:
 * - Delay = -(Mod Value / 99) * TOTAL_ANIMATION_DURATION
 * - Mod Value = -(Delay / TOTAL_ANIMATION_DURATION) * 99
 * =================================================
 */


const TOTAL_ANIMATION_DURATION = 140; // seconds
const MAX_MOD_VALUE = 99;
const DEPTH_MULTIPLIER = 3; // New constant for depth multiplier


// APPLY MOD VALUE TO ELEMENTS
export function applyModValueToElements(elements: NodeListOf<Element> | HTMLCollectionOf<Element> | Element[], modValue: number, modType: 'color' | 'depth' | 'spin'): void {
  const elementsArray = Array.from(elements);
  if (elementsArray.length === 0) {
    console.warn('applyModValueToElements called with empty elements array');
    return;
  }

  const normalizedPosition = modValue / MAX_MOD_VALUE;
  const firstElement = elementsArray[0];
  const computedStyle = window.getComputedStyle(firstElement);
  const duration = parseFloat(computedStyle.animationDuration) || TOTAL_ANIMATION_DURATION;

  if (modType === 'depth') {
    applyDepthMod(elementsArray, modValue);
  } else if (modType === 'spin') {
    applySpinMod(elementsArray, modValue);
  } else {
    let delay = -(normalizedPosition * duration);

    elementsArray.forEach((element, index) => {
      let originalDelay: number;
      let originalDuration: number;

      if (element.hasAttribute('data-original-delay') && element.hasAttribute('data-original-duration')) {
        originalDelay = parseFloat(element.getAttribute('data-original-delay') || '0');
        originalDuration = parseFloat(element.getAttribute('data-original-duration') || duration.toString());
      } else {
        originalDelay = parseFloat(window.getComputedStyle(element).animationDelay) || 0;
        originalDuration = parseFloat(window.getComputedStyle(element).animationDuration) || duration;
        element.setAttribute('data-original-delay', originalDelay.toString());
        element.setAttribute('data-original-duration', originalDuration.toString());
      }

      if (modValue === 0) {
        // Reset to original delay and duration when mod value is 0
        (element as HTMLElement).style.animationDelay = `${originalDelay}s`;
        (element as HTMLElement).style.animationDuration = `${originalDuration}s`;
      } else {
        const adjustedDelay = delay - originalDelay;
        (element as HTMLElement).style.animationDelay = `${adjustedDelay.toFixed(10)}s`;
        
        if (modType === 'spin') {
          // Linear interpolation between 1 and 0.2 (1/5 of original duration)
          const durationMultiplier = 1 - (0.8 * normalizedPosition);
          const adjustedDuration = originalDuration * durationMultiplier;
          (element as HTMLElement).style.animationDuration = `${adjustedDuration.toFixed(10)}s`;
        } else {
          // For color mod, keep the original duration
          (element as HTMLElement).style.animationDuration = `${originalDuration}s`;
        }
      }
    });
  }
}


function applySpinMod(elements: Element[], spinModValue: number): void {
  const normalizedPosition = spinModValue / MAX_MOD_VALUE;
  const elementCount = elements.length;
  const curveAdjustment = Math.min(elementCount / 25, 1);
  const adjustedT = (t: number) => Math.pow(t, 1 / (1 + curveAdjustment));

  // Function to calculate multiplier when spin mod is 0
  const calculateMultiplier = (index: number, count: number) => {
    // Create a range of multipliers
    return 1 + (2 * index / (count - 1));
  };

  elements.forEach((element, index) => {
    let originalDelay: number;
    let originalDuration: number;

    if (element.hasAttribute('data-original-delay') && element.hasAttribute('data-original-duration')) {
      originalDelay = parseFloat(element.getAttribute('data-original-delay') || '0');
      originalDuration = parseFloat(element.getAttribute('data-original-duration') || TOTAL_ANIMATION_DURATION.toString());
    } else {
      originalDelay = parseFloat(window.getComputedStyle(element).animationDelay) || 0;
      originalDuration = parseFloat(window.getComputedStyle(element).animationDuration) || TOTAL_ANIMATION_DURATION;
      element.setAttribute('data-original-delay', originalDelay.toString());
      element.setAttribute('data-original-duration', originalDuration.toString());
    }

    const elementT = adjustedT((index + 1) / elementCount);
    
    let adjustedDuration: number;
    let adjustedDelay: number;

    if (spinModValue === 0) {
      // Use multiplier when spin mod is 0
      const multiplier = calculateMultiplier(index, elementCount);
      adjustedDuration = originalDuration * multiplier;
      adjustedDelay = originalDelay;
    } else {
      // Adjust duration multiplier to range
      const durationMultiplier = Math.pow(10, 1 - 2 * normalizedPosition * elementT);
      adjustedDuration = originalDuration * durationMultiplier;
      
      // Adjust delay based on the normalized position and element index
      adjustedDelay = -(normalizedPosition * TOTAL_ANIMATION_DURATION * elementT) + originalDelay;
    }

    // Only update if there's a significant change
    if (Math.abs(parseFloat((element as HTMLElement).style.animationDuration) - adjustedDuration) > 0.01 ||
        Math.abs(parseFloat((element as HTMLElement).style.animationDelay) - adjustedDelay) > 0.01) {
      (element as HTMLElement).style.animationDuration = `${adjustedDuration.toFixed(2)}s`;
      (element as HTMLElement).style.animationDelay = `${adjustedDelay.toFixed(2)}s`;
    }
  });
}


function applyDepthMod(elements: Element[], depthModValue: number): void {
  const normalizedPosition = depthModValue / MAX_MOD_VALUE;
  const delay = -(normalizedPosition * TOTAL_ANIMATION_DURATION * DEPTH_MULTIPLIER );

  const elementCount = elements.length;
  const curveAdjustment = Math.min(elementCount / 25, 1);
  const adjustedT = (t: number) => Math.pow(t, 1 / (1 + curveAdjustment));

  elements.forEach((element, index) => {
    let originalDelay: number;
    let originalDuration: number;

    if (element.hasAttribute('data-original-delay') && element.hasAttribute('data-original-duration')) {
      originalDelay = parseFloat(element.getAttribute('data-original-delay') || '0');
      originalDuration = 60;
    } else {
      originalDelay = parseFloat(window.getComputedStyle(element).animationDelay) || 0;
      originalDuration = parseFloat(window.getComputedStyle(element).animationDuration) || TOTAL_ANIMATION_DURATION;
      element.setAttribute('data-original-delay', originalDelay.toString());
      element.setAttribute('data-original-duration', originalDuration.toString());
    }

    if (depthModValue === 0) {
      // Reset to original delay and duration when mod value is 0
      (element as HTMLElement).style.animationDelay = `${originalDelay}s`;
      (element as HTMLElement).style.animationDuration = `${originalDuration}s`;
    } else {
      const elementT = adjustedT((index + 1) / elementCount);
      const adjustedDelay = delay * elementT - originalDelay;
      (element as HTMLElement).style.animationDelay = `${adjustedDelay.toFixed(10)}s`;
      // Keep the original duration for depth mod
      (element as HTMLElement).style.animationDuration = `${originalDuration}s`;
    }
  });

  // Apply drop-shadow filter for depth mod
  const svg = elements[0].closest('svg');
  if (svg instanceof SVGSVGElement) {
    applyDropShadowFilter(svg, depthModValue);
  }
}


function applyDropShadowFilter(svg: SVGSVGElement, depthModValue: number) {
  const minShadow = { x: 0, y: 0, blur: 1, alpha: 0.01 };
  const maxShadow = { x: 0, y: 4, blur: 999, alpha: 1 };

  const elements = svg.querySelectorAll('g.on .fx');
  const elementCount = elements.length;

  const interpolate = (min: number, max: number, t: number) => min + (max - min) * t;
  const t = depthModValue / MAX_MOD_VALUE;

  // Adjust the curve based on the number of elements
  const curveAdjustment = Math.min(elementCount / 25, 1);
  const adjustedT = (t: number) => Math.pow(t, 1 / (1 + curveAdjustment));

  let styleContent = '';

  elements.forEach((element, index) => {
    const elementT = adjustedT((index + 1) / elementCount);
    const shadowT = Math.min(elementT * t, 1); // Ensure we don't exceed the maximum

    const x = interpolate(minShadow.x, maxShadow.x, shadowT);
    const y = interpolate(minShadow.y, maxShadow.y, shadowT);
    const blur = interpolate(minShadow.blur, maxShadow.blur, shadowT);
    const alpha = interpolate(minShadow.alpha, maxShadow.alpha, shadowT);

    const dropShadowFilter = `drop-shadow(${x.toFixed(1)}px ${y.toFixed(1)}px ${blur.toFixed(1)}px rgba(0, 0, 0, ${alpha.toFixed(2)}))`;

    styleContent += `
      .seedartwork.depth:not(.reveal) g.on .fx:nth-child(${index + 1}) {
        filter: ${dropShadowFilter};
      }
    `;
  });

  const style = document.createElement('style');
  style.textContent = styleContent;

  // Remove any existing style element with the same class
  const existingStyle = svg.querySelector('style.depth-filter');
  if (existingStyle) {
    existingStyle.remove();
  }

  // Add the class to the new style element and append it to the SVG
  style.classList.add('depth-filter');
  svg.appendChild(style);
}


export function flipLayers(svg: SVGSVGElement, isFlipped: boolean): void {
  const artGroup = svg.querySelector('.art');
  if (!artGroup) return;

  const layers = Array.from(artGroup.querySelectorAll('.lr, .sub'));
  const lastNonLayerElement = artGroup.querySelector('#slot');
  
  if (isFlipped) {
    // Reverse the current order of layers
    const reversedLayers = layers.reverse();
    reversedLayers.forEach(layer => {
      if (lastNonLayerElement) {
        artGroup.insertBefore(layer, lastNonLayerElement);
      } else {
        artGroup.appendChild(layer);
      }
    });
  } else {
    // Restore original order
    layers.sort((a, b) => {
      const indexA = parseInt(a.getAttribute('data-original-index') || '0', 10);
      const indexB = parseInt(b.getAttribute('data-original-index') || '0', 10);
      return indexA - indexB;
    });
    layers.forEach(layer => {
      if (lastNonLayerElement) {
        artGroup.insertBefore(layer, lastNonLayerElement);
      } else {
        artGroup.appendChild(layer);
      }
    });
  }
}


export function resetLayers(svg: SVGSVGElement | null): void {
  if (!svg) return;

  const selectors = [
    '.lr',
    '.lr path',
    '.lr polygon',
    '.lr circle',
    '.lr ellipse',
    '.lr line',
    '.lr rect',
    '.lr polyline',
    '.lr .fx',
    '.sub',
    '.sub path',
    '.sub polygon',
    '.sub circle',
    '.sub ellipse',
    '.sub line',
    '.sub rect',
    '.sub polyline',
    '.sub .fx'
  ];

  const elements = svg.querySelectorAll(selectors.join(', '));

  elements.forEach(element => {
    const originalDelay = element.getAttribute('data-original-delay');
    const originalDuration = element.getAttribute('data-original-duration');
    if (originalDelay) {
      (element as HTMLElement).style.animationDelay = `${originalDelay}s`;
    }
    if (originalDuration) {
      (element as HTMLElement).style.animationDuration = `${originalDuration}s`;
    }
  });

  // Reset layer order
  const artGroup = svg.querySelector('.art');
  if (artGroup) {
    const layers = Array.from(artGroup.querySelectorAll('.lr, .sub'));
    const lastNonLayerElement = artGroup.querySelector('#slot');
    
    // Sort layers based on their original order (you may need to add a data attribute for this)
    layers.sort((a, b) => {
      const indexA = parseInt(a.getAttribute('data-original-index') || '0', 10);
      const indexB = parseInt(b.getAttribute('data-original-index') || '0', 10);
      return indexA - indexB;
    });

    // Reinsert layers in the original order
    layers.forEach(layer => {
      if (lastNonLayerElement) {
        artGroup.insertBefore(layer, lastNonLayerElement);
      } else {
        artGroup.appendChild(layer);
      }
    });
  }

  // Remove the depth filter style
  const depthFilterStyle = svg.querySelector('style.depth-filter');
  if (depthFilterStyle) {
    depthFilterStyle.remove();
  }
}