/**
 * SEEDS Artwork Mod Utility Functions
 * =================================================
 * 
 * This module provides utility functions for working with mod values in the GENESIS SEEDS system.
 * The genesis seed source file's animations synchronize on a 10-minute (600 seconds) animation cycle.
 *  These functions interpret the mod as a 3-digit sequence encoding animation initial states for looping animations.
 * * 
 * - Mod Value Range: 000 to 999
 * 
 * Using a 3-digit mod value (000-999), we can represent any point within the
 * animation cycle. This mod value can be converted to a negative animation delay
 * to control the playback position of individual elements.
 * 
 * Conversion Formula:
 * - Delay = -(Mod Value / 999) * TOTAL_ANIMATION_DURATION
 * - Mod Value = -(Delay / TOTAL_ANIMATION_DURATION) * 999
 * 
 * =================================================
 */ 

const TOTAL_ANIMATION_DURATION = 100; // seconds
const MAX_MOD_VALUE = 999;
const DEPTH_MULTIPLIER = 3; // New constant for depth multiplier


/* APPLY MOD VALUE TO ELEMENTS
 * Applies a single mod value to multiple elements, adjusting for their individual initial delays.
 * @param elements - The elements to update.
 * @param modValue - The mod value to apply (0 to 999).
 * 
 * @example
 * const elements = document.querySelectorAll('.animated-element');
 * applyModValueToElements(elements, 500);
 */
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
          const durationMultiplier = 10 - (9.9 * normalizedPosition);
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
    
    // Adjust duration multiplier to range from 0.1 (10x shorter) to 10 (10x longer)
    const durationMultiplier = Math.pow(15, 1 - 2 * normalizedPosition * elementT);
    const adjustedDuration = originalDuration * durationMultiplier;

    // Adjust delay to maintain relative positions
    const adjustedDelay = -(normalizedPosition * TOTAL_ANIMATION_DURATION * elementT) - originalDelay;

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
  const delay = -(normalizedPosition * TOTAL_ANIMATION_DURATION * DEPTH_MULTIPLIER);

  const elementCount = elements.length;
  const curveAdjustment = Math.min(elementCount / 25, 1);
  const adjustedT = (t: number) => Math.pow(t, 1 / (1 + curveAdjustment));

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


export function flipLayers(svg: SVGSVGElement, shouldFlip: boolean): void {
  const artGroup = svg.querySelector('.art');
  if (!artGroup) return;

  const layers = Array.from(artGroup.querySelectorAll('.lr, .sub'));
  const lastNonLayerElement = artGroup.querySelector('#slot');
  
  // Always reverse the current order of layers
  const reversedLayers = layers.reverse();

  reversedLayers.forEach(layer => {
    if (lastNonLayerElement) {
      artGroup.insertBefore(layer, lastNonLayerElement);
    } else {
      artGroup.appendChild(layer);
    }
  });
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
  // Remove the depth filter style
  const depthFilterStyle = svg.querySelector('style.depth-filter');
  if (depthFilterStyle) {
    depthFilterStyle.remove();
  }
}