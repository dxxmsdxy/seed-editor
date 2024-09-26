"use client";
import { useRef, useCallback, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useSearchParams } from 'next/navigation';

import Artwork from "@/components/Artwork";
import Details from '@/components/Artwork/Details';
import Queue from '@/components/Editor/Queue';
import { BitsArray } from "@/components/Editor/LayersUI";
import DisplaySettings from '@/components/Editor/DisplaySettingsUI';
import InscribeModal from "@/components/Editor/InscribeModal";
import DiagnosticsPanel from "@/components/Editor/DiagnosticsPanel";
import { selectOTCMode } from '@/store/slices/otcSlice';

import { updateEditorState, updateEditorSeed, updateEditorMod, updateHasEditorChanges, resetEditorState, resetEditorMod, resetEditorAttunement, toggleBit, randomizeBits, undo, redo, selectLayersUIToggled, selectDisplaySettingsToggled, toggleLayersUI, toggleDisplaySettingsUI, checkEditorMatchesSelectedItem, toggleDepthAnimationPause, toggleSpinAnimationPause, overrideEditorAttunement, setUrlParams, parseModValues } from '@/store/slices/editorSlice';
import { initializeQueue, getSetQueueItems, setSelectedIndex, updateQueueItem } from '@/store/slices/queueSlice';
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import { applyModValueToElements, resetLayers } from '@/lib/utils/artwork/updateSVGWithMod';
import { selectElementContents, clearSelection, hideMouseCursor } from '@/lib/utils';
import { calculateMostFrequentNumeral } from '@/lib/utils/artwork/helpers';
import { startAudio, playAudio, pauseAudio, stopAudio, setTempo } from '@/lib/utils/seedSoundGenerator';




//=================================================//

export default function Home() {
  const dispatch = useAppDispatch();
  const artRef = useRef<SVGSVGElement | null>(null);
  const editorState = useSelector((state: RootState) => state.seed);
  const urlSeed = useAppSelector(state => state.seed.urlSeed);
  const urlMod = useAppSelector(state => state.seed.urlMod);
  const urlAttunement = useAppSelector(state => state.seed.urlAttunement);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  // REDUX STATE ------------------------------------

  const {
    seed, bitsArray, modNumber, attunementNumber,
    editorSeed, editorMod, editorAttunement, hasEditorChanges, isAttunementOverridden
  } = useAppSelector((state: RootState) => state.seed);
  const { items: queueItems, selectedIndex: selectedQueueIndex} = useAppSelector((state: RootState) => state.queue);
  const showInscribeModal = useAppSelector((state) => state.modal.showInscribeModal);
  const setQueueItems = useAppSelector(getSetQueueItems);
  const walletConnected = useSelector((state: RootState) => state.wallet.connected);
  const layersUIToggled = useSelector(selectLayersUIToggled);
  const displaySettingsToggled = useSelector(selectDisplaySettingsToggled);


  // REFS -------------------------------------------

  const inputRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);


  // CHECKS -----------------------------------------

  const [isArtworkFocused, setIsArtworkFocused] = useState(false);
  const [isOverlayToggled, setisOverlayToggled] = useState(false);
  const [isPlaying, playSVGAnimation] = useState(false);
  const isSpinAnimationPaused = useAppSelector((state: RootState) => state.seed.isSpinAnimationPaused);


  // CALLBACKS --------------------------------------

  const isSelectedItemLocked = useCallback(() => {
    if (selectedQueueIndex === null || selectedQueueIndex >= queueItems.length) return false;
    return queueItems[selectedQueueIndex].locked;
  }, [selectedQueueIndex, queueItems]);

  // React to user interaction with the Editor UI
  const handleEditorInteraction = useCallback(() => {
    if (selectedQueueIndex === null && seed !== BigInt(0)) {
      // dispatch(selectNextUnsetQueueItemThunk());
    }
  }, [selectedQueueIndex, seed]);


  // EDITOR LOGIC ---------------------------------

  // Update the Editor's seed number via the seed input
  const handleSeedInputChange = useCallback((updatedSeed: string) => {
    const parts = updatedSeed.split(/[.:]/);
    let newSeed = parts[0];
    let newMod = editorMod;
    let newAttunement = editorAttunement;

    if (parts.length > 1) {
      if (parts[1].length === 15 && /^\d+$/.test(parts[1])) {
        newMod = parts[1];
      }
      if (parts.length > 2 && /^\d+$/.test(parts[2])) {
        newAttunement = parseInt(parts[2]);
        dispatch(overrideEditorAttunement(newAttunement));
      }
    }

    if (selectedQueueIndex !== null) {
      const selectedItem = queueItems[selectedQueueIndex];
      if (newSeed === (selectedItem.newSeed || selectedItem.seed) &&
          newMod === (selectedItem.newMod || selectedItem.modNumber) &&
          newAttunement === (selectedItem.newAttunement || selectedItem.attunementNumber)) {
        dispatch(updateEditorState({ seed: newSeed, mod: newMod, attunement: newAttunement, updateChanges: false }));
      } else if (!isSelectedItemLocked()) {
        dispatch(updateEditorState({ seed: newSeed, mod: newMod, attunement: newAttunement, updateChanges: true }));
      }
    } else {
      dispatch(updateEditorSeed({ seed: newSeed, updateChanges: false }));
      dispatch(updateEditorMod({ mod: newMod, updateChanges: false }));
      if (parts.length > 2) {
        dispatch(overrideEditorAttunement(newAttunement));
      }
    }
  }, [dispatch, isSelectedItemLocked, queueItems, selectedQueueIndex, editorMod, editorAttunement]);

  // Reset the Editor's seed number
  const handleResetEditorSeed = useCallback(() => {
    if (isSelectedItemLocked()) return;
    dispatch(resetEditorState());
  }, [dispatch]);

  // Reset the Editor's mod number
  const handleResetEditorMod = useCallback(() => {
    if (isSelectedItemLocked()) return;
    dispatch(resetEditorMod());
    if (selectedQueueIndex !== null) {
      const selectedItem = queueItems[selectedQueueIndex];
      dispatch(checkEditorMatchesSelectedItem(selectedItem));
    }
  }, [dispatch, selectedQueueIndex, queueItems, isSelectedItemLocked]);

  // Reset the Editor's attunement number
  const handleResetEditorAttunement = useCallback(() => {
    if (isSelectedItemLocked()) return;
    dispatch(resetEditorAttunement());
  }, [dispatch, isSelectedItemLocked]);

  // Enable the Editor's seed reset button
  const enableSeedResetButton = useCallback(() => {
    const isNonZeroSeed = editorSeed !== '0';
    const isNonDefaultMod = editorMod !== '000000000000000';
    const isNonDefaultAttunement = editorAttunement !== calculateMostFrequentNumeral(BigInt(editorSeed));
    
    return isNonZeroSeed || isNonDefaultMod || isNonDefaultAttunement;
  }, [editorSeed, editorMod, editorAttunement]);

  // Randomize the Editor's seed number
  const handleRandomizeBits = () => {
    if (!isSelectedItemLocked()) {
      dispatch(randomizeBits());
    }
  };

  // Toggle individual bits in the Editor's seed number
  const handleToggleBit = (index: number) => {
    if (!isSelectedItemLocked()) {
      dispatch(toggleBit(index));
    }
  };

  // Set the selected queue item with the Editor's state
  const handleSetQueueItem = useCallback(() => {
    if (selectedQueueIndex !== null && hasEditorChanges) {
      dispatch(updateQueueItem({
        index: selectedQueueIndex,
        item: {
          newSeed: editorSeed,
          newMod: editorMod,
          newAttunement: editorAttunement,
        },
        isExplicitSet: true,
      }));
      dispatch(updateHasEditorChanges(false));
      dispatch(toggleLayersUI(false));
      dispatch(toggleDisplaySettingsUI(false));
      
      // Update the editor state to reflect the new queue item
      dispatch(updateEditorState({
        seed: editorSeed,
        mod: editorMod,
        attunement: editorAttunement,
      }));
    }
  }, [selectedQueueIndex, hasEditorChanges, editorSeed, editorMod, editorAttunement, dispatch]);


  // ADDITIONAL FUNCTIONALITY ----------------------

  // Toggle the SVG Details overlay element
  const toggleArtworkOverlay = useCallback(() => {
    setisOverlayToggled(prev => !prev);
  }, []);

  // Handle SVG overlay mouse interactions
  const handleSvgOverlayInteraction = useCallback(() => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (isArtworkFocused) {
        setisOverlayToggled(false);
      } else {setIsArtworkFocused(prevState => !prevState)}
      event.stopPropagation();
    };
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        clickTimerRef.current = setTimeout(() => {
          clickTimerRef.current = null;
        }, 500);
      }
    };
    const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        if (clickTimerRef.current) {
          clearTimeout(clickTimerRef.current);
          handleClick(event);
        }
      }
      event.stopPropagation();
    };

    return {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onClick: handleClick,
      onDoubleClick: handleClick,
    };
  }, []);

  /* // Initialize or crossfade audio when editorSeed changes
  useEffect(() => {
    if (editorSeed && !isNaN(parseInt(editorSeed, 10))) {
      // Start or initialize audio with the new seed
      startAudio(editorSeed);
    } else {
      // If the seed is invalid or undefined, stop audio
      stopAudio();
      setIsPlayingSound(false);
    }
    // Cleanup on component unmount
    return () => {
      stopAudio();
    };
  }, [editorSeed]);

  // Handle play/pause state changes
  useEffect(() => {
    if (isSpinAnimationPaused) {
      // Fade out the audio when pausing
      pauseAudio();
      setIsPlayingSound(false);
    } else {
      // Fade in the audio when playing
      if (editorSeed && !isNaN(parseInt(editorSeed, 10))) {
        playAudio();
        setIsPlayingSound(true);
      }
    }
  }, [isSpinAnimationPaused, editorSeed]);

  // State for tempo
  const [tempoValue, setTempoValue] = useState(60); // Default tempo

  // Handle tempo changes
  const handleTempoChange = (event) => {
    const newTempo = parseInt(event.target.value, 10);
    if (!isNaN(newTempo)) {
      setTempoValue(newTempo);
      setTempo(newTempo); // Call setTempo from soundGenerator.js
    }
  }; */
  
  // Toggle the play/pause state
  const togglePlay = useCallback(() => {
    dispatch(toggleSpinAnimationPause());
    dispatch(toggleDepthAnimationPause());

    // Additional logic for animation toggling
    const artwork = document.querySelector('.seedartwork') as SVGSVGElement;
    if (artwork) {
      if (isSpinAnimationPaused) {
        // Resume animation
        artwork.classList.add('spin');
        // Additional logic to resume layers
      } else {
        // Pause animation
        artwork.classList.remove('spin');

        // Reset layers
        resetLayers(artwork);
  
        const modValues = parseModValues(editorMod);
  
        // Apply spin mod
        const spinElements = artwork.querySelectorAll('.lr.on, .sub.on');
        applyModValueToElements(spinElements, modValues.spin, 'spin');
  
        // Add the 'spin' class back after a short delay
        setTimeout(() => {
          artwork.classList.add('spin');
        }, 50); // 50ms delay, adjust if needed
      }
    }
  }, [dispatch, isSpinAnimationPaused]);

  // Handle the special Ctrl + Shift + Copy functionality
  const handleSpecialCopy = useCallback((event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
      event.preventDefault();
      let copyText = editorSeed;

      if (editorMod !== '000000000000000') {
        copyText += '.' + editorMod;
      }

      const calculatedAttunement = calculateMostFrequentNumeral(BigInt(editorSeed));
      if (editorAttunement !== calculatedAttunement) {
        copyText += ':' + editorAttunement;
      }

      navigator.clipboard.writeText(copyText).then(() => {
        console.log('Copied to clipboard:', copyText);
      });
    }
  }, [editorSeed, editorMod, editorAttunement]);


  // EFFECTS ----------------------------------------

  // Add event listeners to editor elements
  

  // Deselect queue item on click outside of editor
  useEffect(() => {
    const handleResetSelectionClick = (event: MouseEvent) => {
      const editorWrapper = document.querySelector('.editor-inner');
      if (editorWrapper && (!editorWrapper.contains(event.target as Node) || event.target === editorWrapper)) {
        dispatch(setSelectedIndex(null));
        dispatch(resetEditorState());

        setisOverlayToggled(false);
      }
    };
    document.addEventListener('dblclick', handleResetSelectionClick);
    return () => document.removeEventListener('dblclick', handleResetSelectionClick);
  }, [setisOverlayToggled, dispatch]);

  // Toggle changes flags on Editor element
  useEffect(() => {
    const editorElement = document.querySelector('.editor');
    if (editorElement) {

      // Check for unsaved changes
      if (hasEditorChanges) {
        editorElement.classList.add('unsaved-changes');
      } else {
        editorElement.classList.remove('unsaved-changes');
      }

      // Check for mod changes
      if (editorMod && editorMod !== "000000000000000") {
        editorElement.classList.add('changed-mod');
      } else {
        editorElement.classList.remove('changed-mod');
      }

      // Check for attunement override
      if (isAttunementOverridden) {
        editorElement.classList.add('changed-attunement');
      } else {
        editorElement.classList.remove('changed-attunement');
      }
    }
  }, [hasEditorChanges, editorMod, isAttunementOverridden]);

  // Update the editor state to reflect current queue item
  useEffect(() => {
    if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
      const selectedItem = queueItems[selectedQueueIndex];
      if (!hasEditorChanges) {
        
        const newSeed = selectedItem.newSeed || selectedItem.seed || '0';
        const newMod = selectedItem.newMod || selectedItem.modNumber || "000000000000000";
        const calculatedAttunement = calculateMostFrequentNumeral(BigInt(newSeed));
        const newAttunement = calculatedAttunement !== null ? calculatedAttunement : 0;
        
        dispatch(updateEditorState({
          seed: selectedItem.newSeed || selectedItem.seed || '0',
          mod: selectedItem.newMod || selectedItem.modNumber || '000000000000000',
          attunement: selectedItem.newAttunement || selectedItem.attunementNumber || 0,
        }));
  
        // Update mod-input element
        const modInput = document.querySelector('.mod-input') as HTMLElement;
        if (modInput) {
          modInput.textContent = newMod;
        }
  
        // Update attunement-input element
        const attunementInput = document.querySelector('.attunement-input') as HTMLElement;
        if (attunementInput) {
          attunementInput.textContent = newAttunement.toString();
        }
      }
    }
  }, [selectedQueueIndex, queueItems, hasEditorChanges, dispatch]);

  /* // Update artwork preview based on mod value
  const memoizedApplyModValueToElements = useCallback(applyModValueToElements, []);
  const memoizedResetLayers = useCallback(resetLayers, []); */

  /* useEffect(() => {
    const artwork = document.querySelector('.seedartwork') as SVGSVGElement;
    if (artwork) {
      //memoizedResetLayers(artwork);

      // Update attunement class
      attunementNames.forEach(name => {
        artwork.classList.remove(name);
      });
      if (editorAttunement >= 0 && editorAttunement < attunementNames.length) {
        artwork.classList.add(attunementNames[editorAttunement]);
        updateThemeColor(attunementNames[editorAttunement]);
      }

      const layers = document.querySelectorAll('.seedartwork,.lr.on path,.lr.on polygon, .lr.on circle, .lr.on .ellipse, .lr.on line, .lr.on rect, .lr.on .polyline');
      memoizedApplyModValueToElements(layers, modValues.color, 'color');

      //const spinTargets = artwork.querySelectorAll('.lr.on');
      //memoizedApplyModValueToElements(spinTargets, modValues.spin, 'spin');

      //const depthTargets = artwork.querySelectorAll('.lr.on .fx');
      //memoizedApplyModValueToElements(depthTargets, modValues.depth, 'depth');
  

    }
  }, [modValues, memoizedApplyModValueToElements, editorMod, editorAttunement, selectedQueueIndex]); */

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Undo change
      if (event.ctrlKey && event.key === 'z' && !event.shiftKey) {
        event.preventDefault();
        dispatch(undo());
      }
      // Redo change
      else if (event.ctrlKey && event.key === 'Z' && event.shiftKey) {
        event.preventDefault();
        dispatch(redo());
      }
      // Randomize seed
      else if (event.key === 'r' && !event.ctrlKey || event.key === 'R'  && !event.ctrlKey) {
        event.preventDefault();
        handleRandomizeBits();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch, handleRandomizeBits]);

  // Reset editor state when wallet is disconnected
  useEffect(() => {
    if (!walletConnected) {
      dispatch(setSelectedIndex(null));
      dispatch(resetEditorState());
      dispatch(toggleLayersUI(false));
      dispatch(toggleDisplaySettingsUI(false));
    } else if (walletConnected) {
      dispatch(initializeQueue([]));
      dispatch(setSelectedIndex(null));
    }
  }, [walletConnected, dispatch]);

  /* // Listen for and apply Editor attunement changes
  useEffect(() => {
    const artwork = document.querySelector('.seedartwork') as SVGSVGElement;
    if (artwork) {
      // Remove all attunement classes
      attunementNames.forEach(name => {
        artwork.classList.remove(name);
      });
  
      // Add the current attunement class
      if (editorAttunement >= 0 && editorAttunement < attunementNames.length) {
        artwork.classList.add(attunementNames[editorAttunement]);
      }
    }
  }, [editorAttunement]); */
 
  // Hide cursor after inactivity
  useEffect(() => {
    const sleeptarget = document.querySelector('body');
    if (sleeptarget) {
      const cleanup = hideMouseCursor(sleeptarget);
      return cleanup;
    }
  }, []);

  

  // INITIALIZE EDITOR WITH URL PARAMETERS

  const [isArtworkReady, setIsArtworkReady] = useState(false);
  const [urlParamsProcessed, setUrlParamsProcessed] = useState(false);

  // Check if artwork preview is ready
  useEffect(() => {
    const checkArtworkReady = () => {
      const artwork = document.querySelector('.seedartwork');
      if (artwork) {
        setIsArtworkReady(true);
      } else {
        setTimeout(checkArtworkReady, 100); // Check every 100ms
      }
    };
    checkArtworkReady();
  }, []);

  // When artwork is ready, initialize it with URL parameters
  useEffect(() => {
    if (!isArtworkReady) return;
  
    const params = new URLSearchParams(window.location.search).get('seed');
    console.log('URL params:', params); // Log the raw params
  
    if (params) {
      const [seedAndMod, attunement] = params.split(':');
      const [seed, mod] = seedAndMod.includes('.') ? seedAndMod.split('.') : [seedAndMod, ''];
      
      console.log('Parsed URL params:', { seed, mod, attunement }); // Log parsed params
  
      dispatch(setUrlParams({
        seed: seed || '',
        mod: mod || '',
        attunement: attunement || ''
      }));
  
      console.log('Dispatching updateEditorState with:', {
        seed: seed || '0',
        mod: mod || '000000000000000',
        attunement: parseInt(attunement) || 0,
      });
  
      dispatch(updateEditorState({
        seed: seed || '0',
        mod: mod || '000000000000000',
        attunement: parseInt(attunement) || 0,
      }));
    }
  }, [isArtworkReady, dispatch]);

  // Update browser URL with Editor seed/mod/attunement
  const updateBrowserURL = (seed: string, mod: string, attunement: number, isAttunementOverridden: boolean) => {
    let params = seed;
  
    if (mod !== "000000000000000") {
      params += `.${mod}`; // Add the dot here
    }
  
    const defaultAttunement = calculateMostFrequentNumeral(BigInt(seed));
    const shouldIncludeAttunement = isAttunementOverridden || (attunement !== defaultAttunement && attunement !== 0);
  
    if (shouldIncludeAttunement) {
      params += `:${attunement}`;
    }
  
    const newUrl = `${window.location.pathname}?seed=${params}`;
    history.replaceState(null, '', newUrl);
  };

  // Update Browser URL state (might need depricated)
  const shouldUpdateURL = useAppSelector(state => state.seed.shouldUpdateURL);
  useEffect(() => {
      updateBrowserURL(
        editorSeed,
        editorMod || "000000000000000", 
        editorAttunement || 0, 
        isAttunementOverridden 
      );
    
  }, [shouldUpdateURL, editorSeed, editorMod, editorAttunement, isAttunementOverridden]);




  // WIP --------------------------------------
  
  // WIP claim functionality

  const isOTC = useAppSelector(selectOTCMode);
  const searchParams = useSearchParams();
  const claimId = searchParams.get('claim') ?? '';

  /* useEffect(() => {
    if (claimId && isOTC) {
      // Fetch OTC inscription data using the claimId
      // API CALL GOES HERE
      // For now, seting a dummy seed
      dispatch(updateEditorState({
        seed: '12345',
        mod: '000000000000000',
        attunement: 0,
      }));
    }
  }, [claimId, isOTC, dispatch]); */




  // STRUCTURE --------------------------------------

  return (
    <>
      <DiagnosticsPanel/>
      <div className="editor">
        <div className="editor-inner" ref={editorRef}>
          <div className="seed-indicator">
            <div className="seed-touchable">
              <div className="label seed-label">SEED:</div>
              <span
                ref={inputRef}
                className={`seed-input ${isSelectedItemLocked() ? 'disabled' : ''}`}
                contentEditable={!isSelectedItemLocked()}
                inputMode="numeric"
                onClick={(e) => !isSelectedItemLocked() && selectElementContents(e.currentTarget)}
                onKeyDown={handleSpecialCopy}
                onBlur={(e) => {
                  e.preventDefault();
                  if (!isSelectedItemLocked()) {
                    const updatedSeed = e.currentTarget.textContent || '';
                    handleSeedInputChange(updatedSeed);
                    e.currentTarget.textContent = editorSeed;
                    clearSelection();
                  }
                }}
                onPaste={(e) => {
                  e.preventDefault();
                  if (!isSelectedItemLocked()) {
                    const pastedText = e.clipboardData.getData('text');
                    handleSeedInputChange(pastedText);
                    e.currentTarget.textContent = editorSeed;
                    clearSelection();
                  }
                }}
              >{editorSeed}</span>
              {enableSeedResetButton() && !isSelectedItemLocked() && (
                <div className="reset-seed-button reset show" onClick={handleResetEditorSeed}>
                  Reset
                </div>
              )}
            </div>
          </div>
          <>
            <div className="app-pane left">
              <div className="editor-controls">
                <div style={{ opacity: 1 }} className="basic-actions">
                  <a
                    className={`ui-button randomize z-button ${isSelectedItemLocked() ? 'disabled' : ''}`}
                    onClick={handleRandomizeBits}
                  >Random</a>
                  <a
                    id="layers-ui-button"
                    className={`ui-button advanced shrink z-button ${
                      layersUIToggled ? "selected" : ""
                    } ${isSelectedItemLocked() ? 'disabled' : ''}`}
                    onClick={() => {
                      if (!isSelectedItemLocked()) {
                        dispatch(toggleLayersUI());
                        dispatch(toggleDisplaySettingsUI(false));
                      }
                    }}
                  >Lr</a>
                  <a
                    id="display-settings-button"
                    className={`ui-button advanced mod-button shrink z-button ${
                      displaySettingsToggled ? "selected" : ""
                    } ${editorSeed === '0' ? "disabled" : ""} ${isSelectedItemLocked() ? 'disabled' : ''}`}
                    onClick={() => {
                      if (editorSeed !== '0' && !isSelectedItemLocked()) {
                        dispatch(toggleLayersUI(false));
                        dispatch(toggleDisplaySettingsUI());
                      }
                    }}
                  >+<span></span></a>
                </div>
                <div className={`layer-grid-wrap ${layersUIToggled ? "show" : ""}`}>
                  <BitsArray bitsArray={bitsArray} toggleBit={handleToggleBit} />
                  <a
                    href="#"
                    className="ui-button reset-button reset z-button show"
                    onClick={handleResetEditorMod}
                  >Reset</a>
                </div>
                <div className={`display-settings-wrap ${displaySettingsToggled ? "show" : ""}`}>
                  <DisplaySettings
                    queueItems={queueItems}
                    selectedQueueIndex={selectedQueueIndex}
                    isLocked={selectedQueueIndex !== null ? queueItems[selectedQueueIndex].locked : false}
                    updateQueueItem={updateQueueItem}
                  />
                </div>
              </div>
            </div>
            <div className="artwork-preview">
              <div
                style={{
                  opacity: 1,
                  transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="svg-aspect-ratio"
              >
                <div 
                  className={`svg-container ${isSpinAnimationPaused ? 'paused' : 'playing'}`}
                >
                  <div 
                    className="svg-outer"
                    {...handleSvgOverlayInteraction()}
                  >
                    {editorState && (
                      <Artwork 
                        ref={artRef}
                        seed={editorSeed}
                        mod={editorMod}
                        attunement={editorAttunement.toString()}
                        isPlaying={isPlaying}
                        editorSeed={editorSeed}
                        editorAttunement={editorAttunement}
                        urlParamsProcessed={urlParamsProcessed}
                        urlSeed={urlSeed}
                        urlMod={urlMod}
                        urlAttunement={urlAttunement}
                      />
                    )}
                    <div class="rgblens"></div>
                  </div>
                  <div className="seed-overlay-container">
                    <Details
                      isFocused={isArtworkFocused}
                      showOverlay={isOverlayToggled}
                      editorSeed={editorSeed ?? ''}
                      editorMod={editorMod ?? '000000000000000'}
                      editorAttunement={editorAttunement ?? 0}
                      bitsArray={bitsArray}
                    />
                    <div className="toggle-overlay-wrapper">
                      <div
                        className="toggle-details-button"
                        onClick={toggleArtworkOverlay}
                      >
                        i
                      </div>
                    </div>
                    <div className="play-controls-wrapper">
                      <div
                        className="play-button"
                        onClick={togglePlay}
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="set-queue-item-container">
                <a
                  id="set-queue-item-button"
                  className={`ui-button select z-button ${
                    hasEditorChanges && selectedQueueIndex !== null ? "" : "disabled"
                  }`}
                  onClick={handleSetQueueItem}
                >
                  Set Queue Item
                  <span className="select-icon z-embed">
                    <svg
                      version="1.1"
                      id="checkmark"
                      xmlns="http://www.w3.org/2000/svg"
                      x={0}
                      y={0}
                      viewBox="0 0 442.7 312.6"
                      xmlSpace="preserve"
                      style={{
                        fill: "none",
                        stroke: "#000",
                        strokeWidth: 31,
                        strokeMiterlimit: 10,
                       
                      }}
                    >
                      <path d="m17.5 123.8 162.2 156.6L426.6 16.1" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className={`app-pane right ${(layersUIToggled || displaySettingsToggled) ? 'deactivated' : ''}`}>
              <Queue />
              <Details
                isFocused={isArtworkFocused}
                showOverlay={isOverlayToggled}
                editorSeed={editorSeed ?? ''}
                editorMod={editorMod ?? '000000000000000'}
                editorAttunement={editorAttunement ?? 0}
                bitsArray={bitsArray}
              />
            </div>
          </>
        </div>
        <div 
          className={`reset-editor ${layersUIToggled || displaySettingsToggled ? '' : 'hidden'}`}
          onClick={() => {
            dispatch(toggleLayersUI(false));
            dispatch(toggleDisplaySettingsUI(false));
          }}
        ></div>
      </div>
      <InscribeModal show={showInscribeModal} queueItems={setQueueItems} isOTC={isOTC} />
    </>
  );
}