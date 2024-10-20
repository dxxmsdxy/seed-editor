import React, { useLayoutEffect, useEffect, useMemo, useCallback, useRef } from 'react';
import { useAppSelector } from '@/app/hooks';
import { updateSVGWithSeed } from "@/lib/utils/artwork/updateSVGWithSeed";
import { applyModValueToElements, resetLayers, flipLayers } from '@/lib/utils/artwork/updateSVGWithMod';
import { selectBitsArray } from '@/store/slices/editorSlice';
import { attunementNames, updateThemeColor, checkPalindrome, calculateMostFrequentNumeral } from '@/lib/utils/global';
import { isEqual } from 'lodash';





//===============================================//

// Artwork preview SVG state
interface ArtTransformerProps {
    svgRef: React.RefObject<SVGSVGElement>;
    updateArtworkRef: React.MutableRefObject<(() => void) | undefined>;
    isSpinAnimationPaused: boolean;
    editorSeed: string;
    editorMod: string;
    editorAttunement: string;
    isAttunementOverridden: boolean;
    modValues: {
        color: number;
        spin: number;
        depth: number;
        tint: number;
        tintPercent: number;
    };
    displaySettings: {
        value: number;
        array: boolean[];
    };
}
  

// LOGIC -----------------------------------------

const ArtTransformer: React.FC<ArtTransformerProps> = React.memo(({
    svgRef,
    updateArtworkRef,
    isSpinAnimationPaused,
    editorSeed,
    editorMod,
    editorAttunement,
    isAttunementOverridden,
    modValues,
    displaySettings,
}) => {
    const previousValuesRef = useRef({
        editorSeed: '',
        editorMod: '',
        editorAttunement: '',
        isSpinAnimationPaused: false,
        modValues: { ...modValues },
        displaySettings: { ...displaySettings },
        isAttunementOverridden: isAttunementOverridden,
    });

    // REDUX STATE -------------------------------
    
    const bitsArray = useAppSelector(selectBitsArray);


    // CALLBACKS ----------------------------------

    const memoizedCalculatedAttunement = useMemo(() => {
        return calculateMostFrequentNumeral(editorSeed) ?? "0";
      }, [editorSeed]);

    const applyModValues = useCallback(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const colorElements = [
            svg,
            ...Array.from(svg.querySelectorAll('.lr.on path,.lr.on polygon, .lr.on circle, .lr.on .ellipse, .lr.on line, .lr.on rect, .lr.on .polyline,.sub.on path,.sub.on polygon,.sub.on circle,.sub.on ellipse,.sub.on line,.sub.on rect,.sub.on polyline,.sub.on .fx'))
        ];
        const spinElements = Array.from(svg.querySelectorAll('.lr.on, .sub.on'));
        const depthElements = Array.from(svg.querySelectorAll('.lr.on .fx, .sub.on .fx'));

        if (modValues.color !== undefined) {
            applyModValueToElements(colorElements, modValues.color, 'color');
        }
        if (modValues.spin !== undefined) {
            applyModValueToElements(spinElements, modValues.spin, 'spin');
        }
        if (modValues.depth !== undefined) {
            applyModValueToElements(depthElements, modValues.depth, 'depth');
        }

        const rgblens = document.querySelector('.rgblens') as HTMLElement;
        if (rgblens) {
            if (modValues.tint === 0) {
                rgblens.style.cssText = 'background-color: transparent; opacity: 0;';
            } else {
                const hue = (modValues.tint - 1) * (360 / 98);
                rgblens.style.cssText = `background-color: hsl(${hue}, 100%, 50%); opacity: ${modValues.tintPercent === 100 ? '1' : (modValues.tintPercent / 100).toString()};`;
            }
        }
    }, [modValues]);

    // Reset the SVG's layers to initial state
    const resetLayersCallback = useCallback(() => {
        if (svgRef.current) {
            const svg = svgRef.current;
            resetLayers(svg);

            const colorElements = svg.querySelectorAll('.seedartwork,.lr path,.lr polygon, .lr circle, .lr .ellipse, .lr line, .lr rect, .lr .polyline,.sub path,.sub polygon,.sub circle,.sub ellipse,.sub line,.sub rect,.sub polyline,.sub .fx');
            const spinElements = svg.querySelectorAll('.lr, .sub');
            const depthElements = svg.querySelectorAll('.lr .fx, .sub .fx');

            if (modValues.color !== undefined) {
                applyModValueToElements(colorElements, modValues.color, 'color');
            }
            if (modValues.spin !== undefined) {
                applyModValueToElements(spinElements, modValues.spin, 'spin');
            }
            if (modValues.depth !== undefined) {
                applyModValueToElements(depthElements, modValues.depth, 'depth');
            }
        }
    }, [modValues]);

    const artworkState = useMemo(() => ({
        editorSeed,
        editorMod,
        editorAttunement,
        isSpinAnimationPaused
    }), [editorSeed, editorMod, editorAttunement, isSpinAnimationPaused]);

    // Update the artwork with editor state
    const updateArtwork = useCallback(() => {
        
            if (!svgRef.current) return;
            const svg = svgRef.current;

            requestAnimationFrame(() => {

                const previousValues = previousValuesRef.current;
                if (
                    previousValuesRef.current.editorSeed === editorSeed &&
                    previousValuesRef.current.editorMod === editorMod &&
                    previousValuesRef.current.editorAttunement === editorAttunement &&
                    previousValuesRef.current.isSpinAnimationPaused === isSpinAnimationPaused &&
                    previousValuesRef.current.isAttunementOverridden === isAttunementOverridden &&
                    isEqual(previousValuesRef.current.modValues, modValues) &&
                    isEqual(previousValuesRef.current.displaySettings, displaySettings)
                ) {
                    return; // No changes, skip update
                }

                previousValuesRef.current = {
                    editorSeed,
                    editorMod,
                    editorAttunement,
                    isSpinAnimationPaused,
                    modValues: { ...modValues },
                    displaySettings: { ...displaySettings },
                    isAttunementOverridden,
                };

                const updates = () => {
                    
                    const displayClasses = ['reveal', 'flip', 'invert', 'hyper', 'grayscale', 'cmyk', 'accent-1', 'accent-2', 'accent-3'];
                    const isPalindrome = checkPalindrome(BigInt(editorSeed));
                    const isSingleDigit = editorSeed.length === 1;
                    
                    updateSVGWithSeed(BigInt(editorSeed), svg, bitsArray);
                    svg.classList.add('spin');

                    displayClasses.forEach((className, index) => {
                        const isActive = index === 0 ? (displaySettings.value & (1 << 0)) === 0 : (displaySettings.value & (1 << index)) !== 0;
                        svg.classList.toggle(className, isActive);
                        if (className === 'flip') {
                            flipLayers(svg, isActive);
                        }
                    });

                    svg.classList.toggle('palindrome', isPalindrome && !isSingleDigit);
                    svg.classList.toggle('depth', modValues.depth > 0);
                    svg.classList.toggle('pauseSpin', isSpinAnimationPaused);
                    
                    applyModValues();
                };
                updates();
            });
            
    }, [artworkState]);

    // Update the artwork attunement with editor state
    const updateAttunement = useCallback(() => {
        if (svgRef.current) {
          const svg = svgRef.current;
          attunementNames.forEach((className) => {
            svg.classList.remove(className);
          });
          if (isAttunementOverridden || editorAttunement !== '0') {
            svg.classList.add(attunementNames[Number(editorAttunement)]);
            updateThemeColor(attunementNames[Number(editorAttunement)]);
          } else {
            svg.classList.add(attunementNames[Number(memoizedCalculatedAttunement)]);
            updateThemeColor(attunementNames[Number(memoizedCalculatedAttunement)]);
          }
        }
    }, [editorAttunement, editorSeed, isAttunementOverridden]);


    // EFFECTS ----------------------------------------

    useEffect(() => {
        if (svgRef.current) {
            updateArtwork();
            updateAttunement();
            resetLayersCallback();
        }
    }, [updateArtwork, updateAttunement, resetLayersCallback]);

    

    useEffect(() => {
        if (svgRef.current) {
            const artGroup = svgRef.current.querySelector('.art');
            if (artGroup) {
                const layers = artGroup.querySelectorAll('.lr, .sub');
                layers.forEach((layer, index) => {
                    layer.setAttribute('data-original-index', index.toString());
                });
            }
        }
    }, []);

    return null
});

export default ArtTransformer;