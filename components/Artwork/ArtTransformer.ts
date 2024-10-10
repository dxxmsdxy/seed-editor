import React, { useLayoutEffect, useEffect, useRef, useCallback } from 'react';
import { useAppSelector } from '@/app/hooks';
import { updateSVGWithSeed } from "@/lib/utils/artwork/updateSVGWithSeed";
import { applyModValueToElements, resetLayers, flipLayers } from '@/lib/utils/artwork/updateSVGWithMod';
import { selectEditorSeed, selectEditorMod, selectEditorAttunement, selectBitsArray, selectIsAttunementOverridden, selectModValues, selectDisplaySettings } from '@/store/slices/editorSlice';
import { attunementNames, updateThemeColor, checkPalindrome, calculateMostFrequentNumeral } from '@/lib/utils/global';





//===============================================//

// Artwork preview SVG state
interface ArtTransformerProps {
    svgRef: React.RefObject<SVGSVGElement>;
    updateArtworkRef: React.MutableRefObject<(() => void) | undefined>;
    isSpinAnimationPaused: boolean;
}

// LOGIC -----------------------------------------

const ArtTransformer: React.FC<ArtTransformerProps> = ({
    svgRef,
    updateArtworkRef,
    isSpinAnimationPaused,
}) => {

    // REDUX STATE -------------------------------
    
    const editorSeed = useAppSelector(selectEditorSeed);
    const bitsArray = useAppSelector(selectBitsArray);
    const editorMod = useAppSelector(selectEditorMod);
    const editorAttunement = useAppSelector(selectEditorAttunement);
    const isAttunementOverridden = useAppSelector(selectIsAttunementOverridden);
    const modValues = useAppSelector(selectModValues);
    const displaySettings = useAppSelector(selectDisplaySettings);
    const urlSeed = useAppSelector((state) => state.editor.urlSeed);
    const urlMod = useAppSelector((state) => state.editor.urlMod);
    const urlAttunement = useAppSelector((state) => state.editor.urlAttunement);


    // CALLBACKS ----------------------------------

    const memoizedApplyModValueToElements = useCallback(applyModValueToElements, []);

    // Reset the SVG's layers to initial state
    const resetLayersCallback = useCallback(() => {
        if (svgRef.current) {
            const svg = svgRef.current;
            resetLayers(svg);

            const colorElements = document.querySelectorAll('.seedartwork,.lr path,.lr polygon, .lr circle, .lr .ellipse, .lr line, .lr rect, .lr .polyline,.sub path,.sub polygon,.sub circle,.sub ellipse,.sub line,.sub rect,.sub polyline,.sub .fx');
            const spinElements = svg.querySelectorAll('.lr, .sub');
            const depthElements = svg.querySelectorAll('.lr .fx, .sub .fx');
            
            memoizedApplyModValueToElements(colorElements, modValues.color, 'color');
            memoizedApplyModValueToElements(spinElements, modValues.spin, 'spin');
            memoizedApplyModValueToElements(depthElements, modValues.depth, 'depth');
        }
    }, [svgRef, memoizedApplyModValueToElements, modValues]);

    // Update the artwork with editor state
    const updateArtwork = useCallback(() => {
        if (!svgRef.current) return;
        const svg = svgRef.current;

        requestAnimationFrame(() => {

            resetLayers(svg);
            updateSVGWithSeed(BigInt(editorSeed), svg, bitsArray);
    
            const classesToAdd = ['seedartwork', 'js', 'reveal', 'pauseColor', 'pauseDepth', 'spin'];
            svg.classList.add(...classesToAdd);
        
            svg?.setAttribute("width", "100%");
            svg?.setAttribute("height", "100%");
            svg?.setAttribute("tabIndex", "0");
        
            const displayClasses = ['reveal', 'flip', 'invert', 'hyper', 'grayscale', 'cmyk', 'accent-1', 'accent-2', 'accent-3'];
            displayClasses.forEach((className, index) => {
                const isActive = index === 0 ? (displaySettings.value & (1 << 0)) === 0 : (displaySettings.value & (1 << index)) !== 0;
                svg.classList.toggle(className, isActive);
                if (className === 'flip') {
                    flipLayers(svg, isActive);
                }
            });
        
            const isPalindrome = checkPalindrome(BigInt(editorSeed));
            const isSingleDigit = editorSeed.length === 1;
            svg.classList.toggle('palindrome', isPalindrome && !isSingleDigit);
            svg.classList.toggle('depth', modValues.depth > 0);
            svg.classList.toggle('pauseSpin', isSpinAnimationPaused);
            
            const colorElements = document.querySelectorAll('.seedartwork,.lr.on path,.lr.on polygon, .lr.on circle, .lr.on .ellipse, .lr.on line, .lr.on rect, .lr.on .polyline,.sub.on path,.sub.on polygon,.sub.on circle,.sub.on ellipse,.sub.on line,.sub.on rect,.sub.on polyline,.sub.on .fx');
            const spinElements = svg.querySelectorAll('.lr.on, .sub.on');
            const depthElements = svg.querySelectorAll('.lr.on .fx, .sub.on .fx');

            memoizedApplyModValueToElements(colorElements, modValues.color, 'color');
            memoizedApplyModValueToElements(spinElements, modValues.spin, 'spin');
            memoizedApplyModValueToElements(depthElements, modValues.depth, 'depth');
        
            const rgblens = document.querySelector('.rgblens') as HTMLElement;
            if (rgblens) {
                if (modValues.tint === 0) {
                    rgblens.style.backgroundColor = 'transparent';
                    rgblens.style.opacity = '0';
                } else {
                    const hue = (modValues.tint - 1) * (360 / 98);
                    rgblens.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
                    rgblens.style.opacity = modValues.tintPercent === 100 ? '1' : (modValues.tintPercent / 100).toString();
                }
            }
        });
    }, [editorSeed, modValues, editorMod, editorAttunement, isSpinAnimationPaused]);

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
            const calculatedAttunement = calculateMostFrequentNumeral(BigInt(editorSeed))?.toString() ?? "0";
            svg.classList.add(attunementNames[Number(calculatedAttunement)]);
            updateThemeColor(attunementNames[Number(calculatedAttunement)]);
          }
        }
    }, [svgRef, editorAttunement, editorSeed, isAttunementOverridden]);


    // EFFECTS ----------------------------------------


    useLayoutEffect(() => {
        if (svgRef.current) {
            updateArtwork();
            updateAttunement();
        }
    }, [svgRef, editorSeed, editorAttunement, isAttunementOverridden, isSpinAnimationPaused]);

    useLayoutEffect(() => {
        if (svgRef.current) {
            resetLayersCallback();
            updateArtwork();
        }
    }, [svgRef, resetLayersCallback, updateArtwork, modValues, editorMod]);

    useEffect(() => {
        updateArtworkRef.current = updateArtwork;
    }, [updateArtwork]);

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
 
    return null
}

export default React.memo(ArtTransformer)