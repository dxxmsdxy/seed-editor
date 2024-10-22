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
    
    // REDUX STATE -------------------------------
    const bitsArray = useAppSelector(selectBitsArray);

    // CALLBACKS ----------------------------------

    const memoizedCalculatedAttunement = useMemo(() => {
        return calculateMostFrequentNumeral(editorSeed) ?? "0";
    }, [editorSeed]);

    const resetMod = useCallback(() => {
        if (svgRef.current) {
            const svg = svgRef.current;
            // Only reset layers if flip class is not present
            if (!svg.classList.contains('flip')) {
                resetLayers(svg);
            }
        }
    }, [svgRef]);

    const applyModValues = useCallback(() => {
        const svg = svgRef.current;
        if (!svg) return;

        // Exclude 'flip' from the classes to avoid unnecessary flipping
        const displayClasses = ['reveal', 'invert', 'hyper', 'grayscale', 'cmyk', 'accent-1', 'accent-2', 'accent-3'];
        displayClasses.forEach((className, index) => {
            // Adjust index because 'flip' is at index 1 in the original array
            const classIndex = index >= 1 ? index + 1 : index;
            const isActive = classIndex === 0 ? (displaySettings.value & (1 << 0)) === 0 : (displaySettings.value & (1 << classIndex)) !== 0;
            svg.classList.toggle(className, isActive);
        });
        svg.classList.toggle('depth', modValues.depth > 0);

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
    }, [modValues, displaySettings, svgRef]);

    // Track the previous flip state
    const previousFlipActiveRef = useRef<boolean>((displaySettings.value & (1 << 1)) !== 0);

    // Separate useEffect for handling 'flip' class
    useEffect(() => {
        const flipIndex = 1; // index of 'flip' in displayClasses
        const currentFlipActive = (displaySettings.value & (1 << flipIndex)) !== 0;
        const previousFlipActive = previousFlipActiveRef.current;

        if (currentFlipActive !== previousFlipActive) {
            const svg = svgRef.current;
            if (svg) {
                svg.classList.toggle('flip', currentFlipActive);
                flipLayers(svg, currentFlipActive);
            }
        }

        previousFlipActiveRef.current = currentFlipActive;
    }, [displaySettings.value, svgRef]);

    // EFFECTS ----------------------------------------

    // Update the artwork seed
    useEffect(() => {
        if (svgRef.current) {
            const svg = svgRef.current;
            const isPalindrome = checkPalindrome(BigInt(editorSeed));
            const isSingleDigit = editorSeed.length === 1;

            updateSVGWithSeed(BigInt(editorSeed), svg, bitsArray);

            svg.classList.add('spin');
            svg.classList.toggle('pauseSpin', isSpinAnimationPaused);
            svg.classList.toggle('palindrome', isPalindrome && !isSingleDigit);
        }
    }, [editorSeed, isSpinAnimationPaused]);

    // Reset mod when editorMod or isAttunementOverridden changes
    useEffect(() => {
        resetMod();
        applyModValues();
    }, [editorMod, isAttunementOverridden, resetMod, applyModValues]);

    // Apply mod values when they change
    useEffect(() => {
        applyModValues();
    }, [applyModValues]);

    // Update the artwork attunement
    useEffect(() => {
        if (svgRef.current) {
            const svg = svgRef.current;
            attunementNames.forEach((className) => {
                svg.classList.remove(className);
            });
            const attunementValue = isAttunementOverridden || editorAttunement !== '0' ? editorAttunement : memoizedCalculatedAttunement;
            svg.classList.add(attunementNames[Number(attunementValue)]);
            updateThemeColor(attunementNames[Number(attunementValue)]);
        }
    }, [editorAttunement, isAttunementOverridden, memoizedCalculatedAttunement, svgRef]);

    // Set original layer indices on mount
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
    }, [svgRef]);

    return null;
});

export default ArtTransformer;