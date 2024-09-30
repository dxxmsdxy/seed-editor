import React, { useLayoutEffect, useEffect, useRef, useCallback } from 'react'
import { useAppSelector } from '@/app/hooks'
import { updateSVGWithSeed } from "@/lib/utils/artwork/updateSVGWithSeed";
import { applyModValueToElements, resetLayers, flipLayers } from '@/lib/utils/artwork/updateSVGWithMod'
import { selectEditorSeed, selectEditorMod, selectEditorAttunement, selectBitsArray, selectIsAttunementOverridden, selectModValues, selectDisplaySettings } from '@/store/slices/newEditorSlice'
import { attunementNames, updateThemeColor, checkPalindrome } from '@/lib/newUtils'





//===============================================//

// Artwork preview SVG state
interface NewArtworkHandlingProps {
    svgRef: React.RefObject<SVGSVGElement>
    isColorAnimationPaused: boolean
    isDepthAnimationPaused: boolean
    isSpinAnimationPaused: boolean
}

// LOGIC -----------------------------------------

const NewArtworkHandling: React.FC<NewArtworkHandlingProps> = ({
    svgRef,
    isColorAnimationPaused,
    isDepthAnimationPaused,
    isSpinAnimationPaused,
}) => {

    // REDUX STATE -------------------------------
    
    const editorSeed = useAppSelector(selectEditorSeed);
    const bitsArray = useAppSelector(selectBitsArray);
    const editorMod = useAppSelector(selectEditorMod);
    const editorAttunement = useAppSelector(selectEditorAttunement);
    const modValues = useAppSelector(selectModValues);
    const displaySettings = useAppSelector(selectDisplaySettings);
    const isFlippedRef = useRef(false);
    const urlSeed = useAppSelector((state) => state.newEditor.urlSeed);
    const urlMod = useAppSelector((state) => state.newEditor.urlMod);
    const urlAttunement = useAppSelector((state) => state.newEditor.urlAttunement);


    // CALLBACKS ----------------------------------

    const memoizedApplyModValueToElements = useCallback(applyModValueToElements, []);

    // Reset the SVG's layers to initial state
    const resetLayersCallback = useCallback(() => {
        if (svgRef.current) {
        resetLayers(svgRef.current);
        
        const layers = svgRef.current.querySelectorAll('.lr');
        memoizedApplyModValueToElements(layers, modValues.color, 'color');
        memoizedApplyModValueToElements(layers, modValues.spin, 'spin');
        memoizedApplyModValueToElements(layers, modValues.depth, 'depth');
        }
    }, [svgRef, memoizedApplyModValueToElements, modValues]);

    // Update the artwork with editor state
    const updateArtwork = useCallback(() => {
        if (!svgRef.current) return;
        const svg = svgRef.current;
        
            svg.classList.add('seedartwork');
            svg?.classList.add("js");
            svg?.classList.add("reveal");
            svg?.classList.add("pauseColor");
            svg?.classList.add("spin");
        
            svg?.setAttribute("width", "100%");
            svg?.setAttribute("height", "100%");
            svg?.setAttribute("tabIndex", "0");
        
            const displayClasses = ['reveal', 'flip', 'invert', 'hyper', 'grayscale', 'cmyk', 'accent-1', 'accent-2', 'accent-3'];
            displayClasses.forEach((className, index) => {
                const isActive = index === 0 ? (displaySettings.value & (1 << 0)) === 0 : (displaySettings.value & (1 << index)) !== 0;
                svg.classList.toggle(className, isActive);
                    
                if (className === 'flip') {
                    const shouldFlip = isActive;
                    if (shouldFlip !== isFlippedRef.current) {
                        flipLayers(svg, shouldFlip);
                        isFlippedRef.current = shouldFlip;
                    }
                }
            });
        
            const isPalindrome = checkPalindrome(BigInt(editorSeed))
            const isSingleDigit = editorSeed.length === 1
            svg.classList.toggle('palindrome', isPalindrome && !isSingleDigit);
            
            if (svgRef.current) {
                const artwork = svgRef.current
                
                const colorElements = document.querySelectorAll('.seedartwork,.lr.on path,.lr.on polygon, .lr.on circle, .lr.on .ellipse, .lr.on line, .lr.on rect, .lr.on .polyline,.sub.on path,.sub.on polygon,.sub.on circle,.sub.on ellipse,.sub.on line,.sub.on rect,.sub.on polyline,.sub.on .fx')
                memoizedApplyModValueToElements(colorElements, modValues.color, 'color')
            
                const spinElements = artwork.querySelectorAll('.lr.on, .sub.on')
                memoizedApplyModValueToElements(spinElements, modValues.spin, 'spin')
            
                const depthElements = artwork.querySelectorAll('.lr.on .fx, .sub.on .fx')
                memoizedApplyModValueToElements(depthElements, modValues.depth, 'depth')
            
                const rgblens = document.querySelector('.rgblens') as HTMLElement
                if (rgblens) {
                    if (modValues.tint === 0) {
                        rgblens.style.backgroundColor = 'transparent'
                        rgblens.style.opacity = '0'
                    } else {
                        const hue = (modValues.tint - 1) * (360 / 98)
                        rgblens.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
                        rgblens.style.opacity = modValues.tintPercent === 100 ? '1' : (modValues.tintPercent / 100).toString()
                    }
                }
            
                svg.classList.toggle('depth', modValues.depth > 0);
            
                svg.classList.toggle('pauseColor', isColorAnimationPaused)
                svg.classList.toggle('pauseDepth', isDepthAnimationPaused)
                svg.classList.toggle('pauseSpin', isSpinAnimationPaused)
            }
    }, [displaySettings, modValues, editorMod, editorAttunement, isColorAnimationPaused, isDepthAnimationPaused, isSpinAnimationPaused]);

    // Update the artwork attunement with editor state
    const updateAttunement = useCallback(() => {
        if (svgRef.current) {
          const svg = svgRef.current;
          attunementNames.forEach((className) => {
            svg.classList.remove(className);
          });
          svg.classList.add(attunementNames[Number(editorAttunement)]);
          updateThemeColor(attunementNames[Number(editorAttunement)]);
        }
    }, [svgRef, editorAttunement]);


    // EFFECTS ----------------------------------------

    useEffect(() => {
        if (svgRef.current) {
        const svg = svgRef.current;
        updateSVGWithSeed(BigInt(editorSeed.toString()), svg as SVGSVGElement, bitsArray);
        updateAttunement();
        }
    }, [svgRef, editorSeed, urlSeed, editorAttunement, urlAttunement]);

    useEffect(() => {
        if (svgRef.current) {
            resetLayersCallback();
            updateArtwork();
        }
    }, [svgRef, resetLayersCallback, updateArtwork, modValues, editorMod]);
 
    return null
}

export default React.memo(NewArtworkHandling)