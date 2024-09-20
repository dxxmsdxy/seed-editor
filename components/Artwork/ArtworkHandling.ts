import React, { useEffect, useCallback } from 'react';
import { applyModValueToElements, resetLayers } from '@/lib/utils/artwork/updateSVGWithMod';
import { clearShouldResetLayers, updateEditorState } from '@/store/slices/editorSlice';
import { attunementNames, updateThemeColor } from '@/lib/utils/artwork/helpers';

interface ArtworkHandlingProps {
    svgRef: React.RefObject<SVGSVGElement>;
    isFlippedRef: React.MutableRefObject<boolean>;
    mod: string;
    modValues: any;
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
}

export const ArtworkHandling: React.FC<ArtworkHandlingProps> = ({
    svgRef,
    isFlippedRef,
    mod,
    modValues,
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
    urlAttunement
}) => {

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = svgRef.current;
        const artGroup = svg.querySelector('.art');
        if (!artGroup) return;

        
        
        const updateSVGClasses = () => {
            // Always ensure these classes are present
            svg.classList.add('seedartwork', 'pauseColor');
        
            // Apply paused state based on Redux state
            svg.classList.toggle('pauseColor', isColorAnimationPaused);
            svg.classList.toggle('pauseDepth', isDepthAnimationPaused);
            svg.classList.toggle('pauseSpin', isSpinAnimationPaused);
        
            // Handle spin and depth classes
            svg.classList.toggle('spin', parseInt(mod.slice(3, 6), 10) > 0);
            svg.classList.toggle('depth', parseInt(mod.slice(6, 9), 10) > 0);    
    
            // Update display settings
            const displaySettings = parseInt(mod.slice(12), 10);
            const displayClasses = ['reveal', 'grayscale', 'flip', 'invert', 'hyper', 'cmyk', 'red', 'green', 'blue'];
            displayClasses.forEach((className, index) => {
                const isActive = index === 0 ? (displaySettings & (1 << 0)) === 0 : (displaySettings & (1 << index)) !== 0;
                svg.classList.toggle(className, isActive);
            });

            // Ensure only one of red, green, or blue is active
            const colorClasses = ['red', 'green', 'blue'];
            const activeColorClass = colorClasses.find(color => svg.classList.contains(color));
            if (activeColorClass) {
                colorClasses.forEach(color => {
                if (color !== activeColorClass) svg.classList.remove(color);
                });
            }

            if (editorAttunement >= 0 && editorAttunement < attunementNames.length) {
                updateThemeColor(attunementNames[editorAttunement]);
            }
        };

        const updateAnimations = () => {
            const colorElements = svg.querySelectorAll('.lr.on');
            const depthElements = svg.querySelectorAll('.lr .fx');
            const spinElements = svg.querySelectorAll('.spin');

            applyModValueToElements(colorElements, modValues.color, 'color');
            applyModValueToElements(depthElements, modValues.depth, 'depth');
            applyModValueToElements(spinElements, modValues.spin, 'spin');
        };
        updateSVGClasses();
        updateAnimations();
        

    }, [mod, modValues, isColorAnimationPaused, isDepthAnimationPaused, isSpinAnimationPaused, editorSeed, editorMod, editorAttunement, urlSeed, urlMod, urlAttunement, dispatch]);

    useEffect(() => {
        if (!svgRef.current) return;
        const svg = svgRef.current;

        // Reset all display settings when queue item changes
        const displayClasses = ['reveal', 'grayscale', 'flip', 'invert', 'hyper', 'cmyk', 'red', 'green', 'blue'];
        displayClasses.forEach(className => {
            svg.classList.remove(className);
        });

        // Re-apply current display settings
        const displaySettings = parseInt(mod.slice(12), 10);
        displayClasses.forEach((className, index) => {
        const isActive = index === 0 ? (displaySettings & (1 << 0)) === 0 : (displaySettings & (1 << index)) !== 0;
        if (isActive) svg.classList.add(className);
        });
    }, [selectedQueueItem, mod]);

    // Reset the animation delays to initial
    useEffect(() => {
        if (shouldResetLayers && svgRef.current) {
            resetLayers(svgRef.current);
            
            // Apply mod values after resetting
            const layers = svgRef.current.querySelectorAll('.lr');
            applyModValueToElements(layers, modValues.color, 'color');
            applyModValueToElements(layers, modValues.spin, 'spin');
            applyModValueToElements(layers, modValues.depth, 'depth');

            dispatch(clearShouldResetLayers());
        }
    }, [shouldResetLayers, modValues, dispatch]);

    return null;

};