/**
 * SEEDS Artwork Mod Utility Functions
 * =================================================
 * 
 * This module provides utility functions for working with mod values in the GENESIS SEEDS system.
 * The genesis seed source file's animations synchronize on a 10-minute (600 seconds) animation cycle.
 *  These functions interpret the mod as a 3-digit sequence encoding animation initial states for looping animations.
 * * 
 * - Total Animation Duration: 600 seconds (10 minutes)
 * - Mod Value Range: 000 to 999
 * - Animation Delay Range: -0s to -600s
 * 
 * Using a 3-digit mod value (000-999), we can represent any point within the
 * 10-minute animation cycle. This mod value can be converted to a negative animation delay
 * (-0s to -600s) to control the playback position of individual elements.
 * 
 * Conversion Formula:
 * - Delay (in milliseconds) = -(Mod Value / 999) * 600000
 * - Mod Value = -(Delay / 600000) * 999
 * 
 * =================================================
 */ 

const TOTAL_ANIMATION_DURATION = 100; // seconds
const MAX_MOD_VALUE = 999;

/**
 * Calculates the normalized play position of an element's animation.
 * @param element - The element with the animation.
 * @returns The normalized play position (0 to 1).
 * 
 * @example
 * const playPosition = getNormalizedPlayPosition(document.querySelector('.animated-element'));
 * console.log(playPosition); // Output: 0.5 (halfway through the animation)
 */
export function getNormalizedPlayPosition(element: Element): number {
  const computedStyle = window.getComputedStyle(element);
  const delay = parseFloat(computedStyle.animationDelay) || 0;
  const duration = parseFloat(computedStyle.animationDuration) || TOTAL_ANIMATION_DURATION;
  const iterationCount = computedStyle.animationIterationCount === 'infinite' ? Infinity : parseFloat(computedStyle.animationIterationCount) || 1;

  const currentTime = performance.now() / 1000; // Convert to seconds
  const startTime = (element as any).animationStartTime || currentTime;
  let elapsedTime = currentTime - startTime + delay;

  // Normalize elapsed time based on duration and iteration count
  if (iterationCount === Infinity) {
    elapsedTime = elapsedTime % duration;
  } else {
    elapsedTime = Math.min(elapsedTime, duration * iterationCount);
  }

  return (elapsedTime % duration) / duration;
}

/**
 * Converts a normalized play position to a mod value.
 * @param playPosition - The normalized play position (0 to 1).
 * @returns The corresponding mod value (0 to 999).
 * 
 * @example
 * const modValue = playPositionToModValue(0.5);
 * console.log(modValue); // Output: 500
 */
export function playPositionToModValue(playPosition: number): number {
  return Math.round(playPosition * MAX_MOD_VALUE);
}

/**
 * Calculates the mod value for an element based on its current animation state.
 * @param element - The element with the animation.
 * @returns The current mod value (0 to 999).
 * 
 * @example
 * const modValue = getElementModValue(document.querySelector('.animated-element'));
 * console.log(modValue); // Output: 500
 */
export function getElementModValue(element: Element): number {
  const playPosition = getNormalizedPlayPosition(element);
  return playPositionToModValue(playPosition);
}

/**
 * Applies a mod value to an element, adjusting for its initial animation delay.
 * @param element - The element to update.
 * @param modValue - The mod value to apply (0 to 999).
 * 
 * @example
 * applyModValueToElement(document.querySelector('.animated-element'), 500);
 */

function modValueToDelay(modValue: number): number {
    return -(modValue / MAX_MOD_VALUE) * TOTAL_ANIMATION_DURATION;
}

export function applyModValueToElement(element: Element, modValue: number): void {
    const computedStyle = window.getComputedStyle(element);
    const initialDelay = parseFloat(computedStyle.animationDelay) || 0;
    const newDelay = modValueToDelay(modValue);
    const adjustedDelay = newDelay - initialDelay;
    (element as HTMLElement).style.animationDelay = `${adjustedDelay.toFixed(1)}s`;
}

/**
 * Normalizes mod values across elements with different initial delays.
 * @param elements - The elements to normalize.
 * @returns An array of normalized mod values.
 * 
 * @example
 * const elements = document.querySelectorAll('.animated-element');
 * const normalizedModValues = normalizeModValues(elements);
 * console.log(normalizedModValues); // Output: [500, 500, 500]
 */
export function normalizeModValues(elements: NodeListOf<Element> | HTMLCollectionOf<Element> | Element[]): number[] {
  const modValues = Array.from(elements).map(getElementModValue);
  const minModValue = Math.min(...modValues);
  return modValues.map(value => (value - minModValue + MAX_MOD_VALUE) % MAX_MOD_VALUE);
}

/**
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
  const delay = -(normalizedPosition * duration);

  elementsArray.forEach(element => {
    let originalDelay: number;
    if (element.hasAttribute('data-original-delay')) {
      originalDelay = parseFloat(element.getAttribute('data-original-delay') || '0');
    } else {
      originalDelay = parseFloat(window.getComputedStyle(element).animationDelay) || 0;
      element.setAttribute('data-original-delay', originalDelay.toString());
    }

    if (modValue === 0) {
      // Reset to original delay when mod value is 0
      (element as HTMLElement).style.animationDelay = `${originalDelay}s`;
    } else {
      const adjustedDelay = delay - originalDelay;
      (element as HTMLElement).style.animationDelay = `${adjustedDelay.toFixed(10)}s`;
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
    '.lr .fx'
  ];

  const elements = svg.querySelectorAll(selectors.join(', '));
  elements.forEach(element => {
    const originalDelay = element.getAttribute('data-original-delay');
    if (originalDelay) {
      (element as HTMLElement).style.animationDelay = `${originalDelay}s`;
    } else {
      (element as HTMLElement).style.animationDelay = '0s';
    }
  });
}