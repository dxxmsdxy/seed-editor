import React, { useEffect, useMemo, useCallback, useRef } from 'react';
import { useAppSelector } from '@/app/hooks';
import { updateSVGWithSeed } from "@/lib/utils/artwork/updateSVGWithSeed";
import { applyModValueToElements, resetStyles } from '@/lib/utils/artwork/updateSVGWithMod';
import { selectBitsArray } from '@/store/slices/editorSlice';
import { attunementNames, updateThemeColor, checkPalindrome, calculateMostFrequentNumeral } from '@/lib/utils/global';





//===============================================//

// Artwork preview SVG state
interface ArtTransformerProps {
    svgRef: React.RefObject<SVGSVGElement>;
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
  

// COMPONENT ------------------------------------

const ArtTransformer: React.FC<ArtTransformerProps> = React.memo(({
    svgRef,
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
        flipState: false,
    });

    const elementsRef = useRef<{
        colorElements: Element[];
        spinElements: Element[];
        depthElements: Element[];
    }>({ colorElements: [], spinElements: [], depthElements: [] });
      

    // LOGIC -----------------------------------
    
    const bitsArray = useAppSelector(selectBitsArray);

    const memoizedCalculatedAttunement = useMemo(() => {
        return calculateMostFrequentNumeral(editorSeed) ?? "0";
    }, [editorSeed]);

    const applyModValues = useCallback(() => {
        const svg = svgRef.current;
        if (!svg) return;

        svg.classList.add('spin');
        svg.classList.toggle('pauseSpin', isSpinAnimationPaused);
        svg.classList.toggle('depth', modValues.depth > 0);

        if (elementsRef.current.colorElements.length === 0) {
            elementsRef.current = {
                colorElements: [svg, ...Array.from(svg.querySelectorAll('.lr.on path,.lr.on polygon'))],
                spinElements: Array.from(svg.querySelectorAll('.lr.on, .sub.on')),
                depthElements: Array.from(svg.querySelectorAll('.lr.on .fx, .sub.on .fx'))
            };
        }

        const { colorElements, spinElements, depthElements } = elementsRef.current;
            
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
    }, [modValues, isSpinAnimationPaused]);

    // Update the artwork attunement with editor state
    const applyAttunement = useCallback(() => {
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

    // Update the artwork with editor state
    const updateArtwork = useCallback(() => {
        if (!svgRef.current) return;
        const svg = svgRef.current;
      
        // Check if update is needed
        if (
          previousValuesRef.current.editorSeed === editorSeed &&
          previousValuesRef.current.editorMod === editorMod &&
          previousValuesRef.current.editorAttunement === editorAttunement &&
          previousValuesRef.current.isSpinAnimationPaused === isSpinAnimationPaused &&
          previousValuesRef.current.isAttunementOverridden === isAttunementOverridden
        ) {
          return;
        }
      
        // Batch DOM updates
        requestAnimationFrame(() => {
            // Prepare all class changes
            const classChanges = new Map();
            
            // Calculate all class changes first
            const displayClasses = ['reveal', 'flip', 'invert', 'hyper', 'grayscale', 'cmyk', 'accent-1', 'accent-2', 'accent-3'];
            displayClasses.forEach((className, index) => {
                const isActive = index === 0 ? 
                (displaySettings.value & (1 << 0)) === 0 : 
                (displaySettings.value & (1 << index)) !== 0;
                classChanges.set(className, isActive);
            });
        
            // Apply all changes in one batch
            classChanges.forEach((value, className) => {
                svg.classList.toggle(className, value);
            });
        
            // Update seed and mod values
            updateSVGWithSeed(BigInt(editorSeed), svg);
            const isPalindrome = checkPalindrome(BigInt(editorSeed));
            const isSingleDigit = editorSeed.length === 1;
            svg.classList.toggle('palindrome', isPalindrome && !isSingleDigit);

            applyModValues();
            applyAttunement();
        
            // Update previous values
            previousValuesRef.current = {
                editorSeed,
                editorMod,
                editorAttunement,
                isSpinAnimationPaused,
                modValues: { ...modValues },
                displaySettings: { ...displaySettings },
                isAttunementOverridden,
                flipState: classChanges.get('flip') || false,
            };
        });
      }, [editorSeed, editorMod, editorAttunement, isSpinAnimationPaused, isAttunementOverridden]);

    // Reset the artwork SVG to initial state
    const resetArtwork = useCallback(() => {
        if (svgRef.current) {
          const svg = svgRef.current;
          resetStyles(svg);
      
          const colorElements = svg.querySelectorAll('.seedartwork, .lr path, .lr polygon, .lr circle, .lr ellipse, .lr line, .lr rect, .lr polyline, .sub path, .sub polygon, .sub circle, .sub ellipse, .sub line, .sub rect, .sub polyline, .sub .fx');
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


    // EFFECTS ----------------------------------------

    useEffect(() => {
        if (svgRef.current) {
            resetArtwork();
            updateArtwork();
        }
    }, [updateArtwork, resetArtwork]);

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