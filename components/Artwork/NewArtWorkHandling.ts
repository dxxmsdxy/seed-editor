import React, { useLayoutEffect, useEffect, useRef, useCallback, useMemo } from 'react';
import { useAppSelector } from '@/app/hooks';
import { applyModValueToElements, resetLayers, flipLayers } from '@/lib/utils/artwork/updateSVGWithMod';
import { selectModValues, selectDisplaySettings } from '@/store/slices/newEditorSlice';
import { attunementNames, updateThemeColor, checkPalindrome } from '@/lib/newUtils';

interface NewArtworkHandlingProps {
    svgRef: React.RefObject<SVGSVGElement>;
    editorSeed: string;
    editorMod: string;
    editorAttunement: number;
    isColorAnimationPaused: boolean;
    isDepthAnimationPaused: boolean;
    isSpinAnimationPaused: boolean;
    shouldResetLayers: boolean;
    dispatch: any;
}

const NewArtworkHandling: React.FC<NewArtworkHandlingProps> = ({
    svgRef,
    editorSeed,
    editorMod,
    editorAttunement,
    isColorAnimationPaused,
    isDepthAnimationPaused,
    isSpinAnimationPaused,
    shouldResetLayers,
    dispatch,
}) => {
    const modValues = useAppSelector(selectModValues);
    const displaySettings = useAppSelector(selectDisplaySettings);
    const isFlippedRef = useRef(false);

    const memoizedApplyModValueToElements = useCallback(applyModValueToElements, []);

    const resetLayersCallback = useCallback(() => {
        if (svgRef.current) {
            resetLayers(svgRef.current);
            
            const layers = svgRef.current.querySelectorAll('.lr');
            memoizedApplyModValueToElements(layers, modValues.color, 'color');
            memoizedApplyModValueToElements(layers, modValues.spin, 'spin');
            memoizedApplyModValueToElements(layers, modValues.depth, 'depth');
        }
    }, [svgRef, editorMod, dispatch, memoizedApplyModValueToElements, modValues]);

    const updateArtwork = useCallback(() => {
        if (!svgRef.current) return;
        const svg = svgRef.current;
        const artGroup = svg.querySelector('.art');
        if (!artGroup) return;
        
        svg.classList.add('seedartwork', 'pauseColor', 'pauseDepth', 'spin');
    
        const displayClasses = ['reveal', 'flip', 'invert', 'removebkg', 'hyper', 'grayscale', 'cmyk', 'accent-1', 'accent-2', 'accent-3'];
        displayClasses.forEach((className, index) => {
            const isActive = index === 0 ? (displaySettings & (1 << 0)) === 0 : (displaySettings & (1 << index)) !== 0;
            svg.classList.toggle(className, isActive);
            
            if (className === 'flip') {
                const shouldFlip = isActive;
                if (shouldFlip !== isFlippedRef.current) {
                    flipLayers(svg, shouldFlip);
                    isFlippedRef.current = shouldFlip;
                    artGroup.setAttribute('data-flipped', shouldFlip.toString());
                }
            }
        });
    
        const isPalindrome = checkPalindrome(BigInt(editorSeed));
        const isSingleDigit = editorSeed.length === 1;
        
        svg.classList.toggle('palindrome', isPalindrome && !isSingleDigit);
    
        attunementNames.forEach(name => svg.classList.remove(name));
      
        if (editorAttunement >= 0 && editorAttunement < attunementNames.length) {
            svg.classList.add(attunementNames[editorAttunement]);
            updateThemeColor(attunementNames[editorAttunement]);
        }
    
        if (svgRef.current) {
            const artwork = svgRef.current;
            
            const colorElements = artwork.querySelectorAll('.seedartwork,.lr.on path,.lr.on polygon, .lr.on circle, .lr.on .ellipse, .lr.on line, .lr.on rect, .lr.on .polyline,.sub,.sub path,.sub polygon,.sub circle,.sub ellipse,.sub line,.sub rect,.sub polyline,.sub .fx');
            memoizedApplyModValueToElements(colorElements, modValues.color, 'color');
        
            const spinElements = artwork.querySelectorAll('.lr.on, .sub.on');
            memoizedApplyModValueToElements(spinElements, modValues.spin, 'spin');
        
            const depthElements = artwork.querySelectorAll('.lr.on .fx');
            memoizedApplyModValueToElements(depthElements, modValues.depth, 'depth');
        
            const rgblens = document.querySelector('.rgblens') as HTMLElement;
            if (rgblens) {
                if (modValues.tint === 0) {
                    rgblens.style.backgroundColor = 'transparent';
                    rgblens.style.opacity = '0';
                } else {
                    const hue = (modValues.tint - 1) * (360 / 98);
                    rgblens.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
                    rgblens.style.opacity = modValues.tintPercent === 100 ? '1' : (modValues.tintPercent / 100).toString();
                }
            }
    
            svg.classList.toggle('depth', modValues.depth > 0);
    
            svg.classList.toggle('pauseColor', isColorAnimationPaused);
            svg.classList.toggle('pauseDepth', isDepthAnimationPaused);
            svg.classList.toggle('pauseSpin', isSpinAnimationPaused);
        }
    }, [displaySettings, modValues, editorSeed, editorAttunement, isColorAnimationPaused, isDepthAnimationPaused, isSpinAnimationPaused, memoizedApplyModValueToElements]);

    useLayoutEffect(() => {
        updateArtwork();
    }, [updateArtwork]);

    useEffect(() => {
        if (shouldResetLayers && svgRef.current) {
            resetLayersCallback();
        }
    }, [shouldResetLayers, resetLayersCallback]);

    return null;
};

export default React.memo(NewArtworkHandling, (prevProps, nextProps) => {
    return (
        prevProps.editorSeed === nextProps.editorSeed &&
        prevProps.editorMod === nextProps.editorMod &&
        prevProps.editorAttunement === nextProps.editorAttunement &&
        prevProps.isColorAnimationPaused === nextProps.isColorAnimationPaused &&
        prevProps.isDepthAnimationPaused === nextProps.isDepthAnimationPaused &&
        prevProps.isSpinAnimationPaused === nextProps.isSpinAnimationPaused &&
        prevProps.shouldResetLayers === nextProps.shouldResetLayers
    );
});