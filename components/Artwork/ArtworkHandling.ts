import React, { useEffect, useRef, useCallback } from 'react';
import { useAppSelector } from '@/app/hooks';
import { applyModValueToElements, resetLayers, flipLayers } from '@/lib/utils/artwork/updateSVGWithMod';
import { clearShouldResetLayers, parseModValues } from '@/store/slices/editorSlice';
import { attunementNames, updateThemeColor, checkPalindrome } from '@/lib/utils/artwork/helpers';

interface ArtworkHandlingProps {
    svgRef: React.RefObject<SVGSVGElement>;
    isFlippedRef: React.MutableRefObject<boolean>;
    editorSeed: string;
    editorMod: string;
    editorAttunement: number;
    isColorAnimationPaused: boolean;
    isDepthAnimationPaused: boolean;
    isSpinAnimationPaused: boolean;
    selectedQueueItem: any;
    shouldResetLayers: boolean;
    dispatch: any;
    urlSeed: string | null;
    urlMod: string | null;
    urlAttunement: string | null;
    urlParamsProcessed: boolean;
    displaySettings: number;
}

export const ArtworkHandling: React.FC<ArtworkHandlingProps> = ({
    svgRef,
    editorSeed,
    editorMod,
    editorAttunement,
    isColorAnimationPaused,
    isDepthAnimationPaused,
    isSpinAnimationPaused,
    selectedQueueItem,
    shouldResetLayers,
    dispatch,
    urlSeed,
    urlMod,
    urlAttunement,
    displaySettings,
}) => {

    const prevEditorModRef = useRef(editorMod);
    const modValues = useAppSelector(state => parseModValues(state.seed.editorMod));

    // Memoize the reset function with useCallback
    const resetLayersCallback = useCallback(() => {
        if (svgRef.current) {
            resetLayers(svgRef.current);
            
            // Apply mod values after resetting
            const layers = svgRef.current.querySelectorAll('.lr');
            const modValues = parseModValues(editorMod);
            applyModValueToElements(layers, modValues.color, 'color');
            applyModValueToElements(layers, modValues.spin, 'spin');
            applyModValueToElements(layers, modValues.depth, 'depth');

            dispatch(clearShouldResetLayers());
        }
    }, [svgRef, editorMod, dispatch]);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = svgRef.current;
        const artGroup = svg.querySelector('.art');
        if (!artGroup) return;
        
        const updateSVGClasses = () => {

            // Always ensure these classes are present
            svg.classList.add('seedartwork', 'pauseColor', 'pauseDepth');
        
            // Update display settings
            const displayClasses = ['reveal', 'flip', 'invert', 'removebkg', 'hyper', 'grayscale', 'cmyk', 'red', 'green', 'blue'];
            displayClasses.forEach((className, index) => {
                if (index === 0) {
                    // Invert the behavior for the 'reveal' class
                    svg.classList.toggle(className, (displaySettings & (1 << index)) === 0);
                } else if (index === 1) {
                    // Apply layer flipping
                   
                } else {
                    svg.classList.toggle(className, (displaySettings & (1 << index)) !== 0);
                }
            });

            // Ensure only one of red, green, or blue is active
            const colorClasses = ['red', 'green', 'blue'];
            const activeColorClass = colorClasses.find(color => svg.classList.contains(color));
            if (activeColorClass) {
                colorClasses.forEach(color => {
                if (color !== activeColorClass) svg.classList.remove(color);
                });
            }

            // Check for palindrome
            const isPalindrome = checkPalindrome(BigInt(editorSeed));
            const isSingleDigit = editorSeed.length === 1;
            
            if (isPalindrome && !isSingleDigit) {
                svg.classList.add('palindrome');
            } else {
                svg.classList.remove('palindrome');
            }

            // Prepare attunement for change
            attunementNames.forEach(name => {
                svg.classList.remove(name);
            });
          
            // Add the current attunement class
            if (editorAttunement >= 0 && editorAttunement < attunementNames.length) {
                svg.classList.add(attunementNames[editorAttunement]);
                updateThemeColor(attunementNames[editorAttunement]);
            }

            if (svgRef.current) {
                const artwork = svgRef.current;
                
                // Apply color mod
                const colorElements = document.querySelectorAll('.seedartwork,.lr.on path,.lr.on polygon, .lr.on circle, .lr.on .ellipse, .lr.on line, .lr.on rect, .lr.on .polyline,.sub,.sub path,.sub polygon,.sub circle,.sub ellipse,.sub line,.sub rect,.sub polyline,.sub .fx');
                applyModValueToElements(colorElements, modValues.color, 'color');
            
                // Apply spin mod
                const spinElements = artwork.querySelectorAll('.lr.on, .sub.on');
                applyModValueToElements(spinElements, modValues.spin, 'spin');
            
                // Apply depth mod
                const depthElements = artwork.querySelectorAll('.lr.on .fx');
                applyModValueToElements(depthElements, modValues.depth, 'depth');
            
                // Apply tint
                const rgblens = document.querySelector('.rgblens') as HTMLElement;
                if (rgblens) {
                    if (modValues.tint === 0) {
                        rgblens.style.backgroundColor = 'transparent';
                        rgblens.style.opacity = '0';
                    } else {
                        const hue = (modValues.tint - 1) * (360 / 98);
                        rgblens.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
                        
                        // Special case: if tintPercent is 0, set opacity to 1
                        if (modValues.tintPercent === 0) {
                            rgblens.style.opacity = '1';
                        } else {
                            rgblens.style.opacity = (modValues.tintPercent / 10).toString();
                        }
                    }
                }
                // Handle spin and depth classes
                if (modValues.spin > 0) {
                    svg.classList.add('spin');
                } else {
                    svg.classList.remove('spin');
                }
            
                if (modValues.depth > 0) {
                    svg.classList.add('depth');
                } else {
                    svg.classList.remove('depth');
                }
                // Apply paused state based on Redux state
                svg.classList.toggle('pauseColor', isColorAnimationPaused);
                svg.classList.toggle('pauseDepth', isDepthAnimationPaused);
                svg.classList.toggle('pauseSpin', isSpinAnimationPaused);
            }
        };
        
        updateSVGClasses();

    }, [editorMod, editorSeed, modValues, isColorAnimationPaused, isDepthAnimationPaused, isSpinAnimationPaused, urlSeed, urlMod, urlAttunement ]);


    useEffect(() => {
        if (!svgRef.current) return;
        const svg = svgRef.current;

        const safeEditorMod = editorMod || '000000000000000';

        // Reset all display settings when queue item changes
        const displayClasses = ['reveal', 'grayscale', 'flip', 'invert', 'hyper', 'cmyk', 'red', 'green', 'blue'];
        displayClasses.forEach(className => {
            svg.classList.remove(className);
        });

        // Re-apply current display settings
        const displaySettings = parseInt(safeEditorMod.slice(12), 10);
        displayClasses.forEach((className, index) => {
            const isActive = index === 0 ? (displaySettings & (1 << 0)) === 0 : (displaySettings & (1 << index)) !== 0;
            if (isActive) svg.classList.add(className);
        });
    }, [selectedQueueItem, editorMod]);

    // Reset the animation delays to initial
    useEffect(() => {
        if (shouldResetLayers && svgRef.current) {
            resetLayersCallback();
            
            // Apply mod values after resetting
            const layers = svgRef.current.querySelectorAll('.lr');
            const modValues = parseModValues(editorMod);
            applyModValueToElements(layers, modValues.color, 'color');
            applyModValueToElements(layers, modValues.spin, 'spin');
            applyModValueToElements(layers, modValues.depth, 'depth');

            dispatch(clearShouldResetLayers());
        }
    }, [shouldResetLayers, resetLayersCallback, editorMod, dispatch]);

    return null;
};