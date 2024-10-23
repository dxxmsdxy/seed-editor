"use client";
import React, { useRef, useCallback, useEffect, useState, useMemo, Profiler } from "react";
import { useSwipeable, SwipeEventData } from 'react-swipeable';
import TransitionLink from '@/components/TransitionLink';
import { useAppDispatch } from '@/app/hooks';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import Artwork from "@/components/Artwork";
import Details from '@/components/Artwork/Details';
import Queue from '@/components/Editor/Queue';
import { BitsArray } from "@/components/Editor/LayersUI";
import DisplaySettings from '@/components/Editor/DisplaySettingsUI';
import InscribeModal from "@/components/Editor/InscribeModal";

import { setSelectedIndex, updateQueueItem, updateQueueOrder, updateQueueItemWithDragDrop } from '@/store/slices/queueSlice';
import { updateEditorState, resetEditorState, undo, redo, selectEditorSeed, selectEditorMod, selectEditorAttunement, selectIsAttunementOverridden, selectBitsArray, selectModValues, selectDisplaySettings, selectHasEditorChanges, setUIVisibility, selectUIVisibility, setSpinAnimationPaused } from '@/store/slices/editorSlice';
import { connectWalletAndLoadData } from '@/store/slices/walletSlice';
import { selectElementContents, clearSelection, randomizeBits, hideMouseCursor, calculateMostFrequentNumeral, sanitizeSeed, sanitizeMod, sanitizeAttunement } from '@/lib/utils/global';
import { generateName } from '@/lib/utils/nameGenerator';



const onRenderCallback: React.ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  // Log or store the profiling data
  console.log(`Profiler: ${id}`);
  console.log(`Phase: ${phase}`);
  console.log(`Actual duration: ${actualDuration}`);
  console.log(`Base duration: ${baseDuration}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
  console.log('---');
};

//============================================//

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  // STATE ----------------------------------------

  const editorSeed = useSelector(selectEditorSeed);
  const editorMod = useSelector(selectEditorMod);
  const editorAttunement = useSelector(selectEditorAttunement);
  const isAttunementOverridden = useSelector(selectIsAttunementOverridden);
  const bitsArray = useSelector(selectBitsArray);
  const modValues = useSelector(selectModValues);
  const displaySettings = useSelector(selectDisplaySettings);
  const hasEditorChanges = useSelector(selectHasEditorChanges);
  const uiVisibility = useSelector(selectUIVisibility);
  const isSpinAnimationPaused = useSelector((state: RootState) => state.editor.isSpinAnimationPaused);
  const walletConnected = useSelector((state: RootState) => state.wallet.connected);
  const queueItems = useSelector((state: RootState) => state.queue.items);
  const selectedQueueIndex = useSelector((state: RootState) => state.queue.selectedIndex);
  const showInscribeModal = useSelector((state: RootState) => state.modal.showInscribeModal);

  const handleArtworkReady = useCallback(() => {
    setIsArtworkReady(true);
  }, []);
  // Generate the seed's name
  const generatedName = useMemo(() => generateName(Number(editorSeed)), [editorSeed]);


  // REFS -------------------------------------------

  const artRef = useRef<{ updateArtwork: () => void } | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const seedInputRef = useRef<HTMLDivElement>(null);
  const dragTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartPositionRef = useRef<{ x: number; y: number } | null>(null);


  // CHECKS -----------------------------------------

  const [isLoading, setIsLoading] = useState(false);
  const [isArtworkReady, setIsArtworkReady] = useState(false);
  const [isArtworkFocused, setIsArtworkFocused] = useState(false);
  const [isOverlayToggled, setIsOverlayToggled] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);


  // CALLBACKS --------------------------------------

  // Update the editor seed number via text input
  const handleSeedInputChange = useCallback((updatedSeed: string, updateState: boolean = false) => {
    const parts = updatedSeed.split(/[.:]/);
    let seed = parts[0];
    let mod = undefined;
    let attunement = undefined;

    if (parts.length > 1) {
      if (parts[1].length === 12 && /^\d+$/.test(parts[1])) {
        mod = parts[1];
      }
      if (parts.length > 2 && /^\d+$/.test(parts[2])) {
        attunement = parseInt(parts[2]).toString();
      }
    }
    
    if (updateState) {
      dispatch(updateEditorState({ seed, mod, attunement }));
    }
    
    return seed;
  }, [dispatch]);

  // Handle the special Ctrl + Shift + Copy functionality
  const handleSpecialCopy = useCallback((event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
      event.preventDefault();
      let copyText = editorSeed;

      if (editorMod !== '000000000000') {
        copyText += '.' + editorMod;
      }

      const calculatedAttunement = calculateMostFrequentNumeral(editorSeed);
      if (editorAttunement !== calculatedAttunement) {
        copyText += ':' + editorAttunement;
      }
      navigator.clipboard.writeText(copyText);
    }
  }, [editorSeed, editorMod, editorAttunement]);

  // Reset the editor seed number
  const handleResetEditorSeed = useCallback(() => {
    dispatch(resetEditorState());
  }, [dispatch]);

  // Randomize the editor seed number
  const handleRandomizeBits = useCallback(() => {
      const { bitArray, newSeed } = randomizeBits();
      dispatch(updateEditorState({ seed: newSeed }));
  }, [dispatch]);

  // Toggle the editor UI sections
  const handleLayersUIToggle = useCallback(() => {
    dispatch(setUIVisibility(uiVisibility === 'layers' ? 'none' : 'layers'));
  }, [dispatch, uiVisibility]);
  const handleDisplaySettingsToggle = useCallback(() => {
    dispatch(setUIVisibility(uiVisibility === 'displaySettings' ? 'none' : 'displaySettings'));
  }, [dispatch, uiVisibility]);

  // Toggle artwork play/pause state
  const togglePlay = useCallback(() => {
    const artwork = document.querySelector('.seedartwork') as SVGSVGElement
    if (artwork) {
      if (!isSpinAnimationPaused) {
        dispatch(setSpinAnimationPaused(true));
        artwork.classList.remove('spin', 'depth')
      } else {
        dispatch(setSpinAnimationPaused(false));
        artwork.classList.add('spin', 'depth');
      }
    }
    setIsPlaying(prev => !prev)
  }, [dispatch, isSpinAnimationPaused]);

  // Set the selected queue item
  const handleSetQueueItem = useCallback(() => {
    if (selectedQueueIndex !== null) {
      dispatch(updateQueueItem({
        index: selectedQueueIndex,
        newValues: {
          newSeed: editorSeed,
          newMod: editorMod,
          newAttunement: parseInt(editorAttunement),
          isAttunementOverridden: isAttunementOverridden
        }
      }));
      dispatch((dispatch) => {
        dispatch(updateQueueOrder());
        dispatch(setUIVisibility('none'));
      });
    }
  }, [dispatch, selectedQueueIndex, editorSeed, editorMod, editorAttunement, isAttunementOverridden]);

  // Handle artwork preview mouse interactions
  const handleArtworkInteraction = useCallback(() => {
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      dragStartPositionRef.current = { x: event.clientX, y: event.clientY };
      dragTimeoutRef.current = setTimeout(() => {
        setIsDragging(true);
        setDragPosition({ x: event.clientX, y: event.clientY });
        document.body.classList.add('grabbing');
      }, 100);
    };
  
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      if (dragStartPositionRef.current) {
        const dx = event.clientX - dragStartPositionRef.current.x;
        const dy = event.clientY - dragStartPositionRef.current.y;
        if (Math.sqrt(dx * dx + dy * dy) > 5) {
          if (dragTimeoutRef.current) {
            clearTimeout(dragTimeoutRef.current);
            dragTimeoutRef.current = null;
          }
          setIsDragging(true);
          setDragPosition({ x: event.clientX, y: event.clientY });
          document.body.classList.add('grabbing');
        }
      }
    };
  
    const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
      if (dragTimeoutRef.current) {
        clearTimeout(dragTimeoutRef.current);
        dragTimeoutRef.current = null;
        // It's a click, not a drag
        setIsArtworkFocused(prevState => !prevState);
        setIsOverlayToggled(false);
      }
      setIsDragging(false);
      dragStartPositionRef.current = null;
      document.body.classList.remove('grabbing');
    };
  
    return {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
    };
  }, [setIsArtworkFocused, setIsOverlayToggled]);

  // Toggle the SVG Details overlay element
  const toggleArtworkOverlay = useCallback(() => {
    setIsOverlayToggled(prev => !prev);
  }, []);

  // EFFECTS ----------------------------------------

  // Load inscription data when wallet connected
  useEffect(() => {
    if (walletConnected) {
      dispatch(connectWalletAndLoadData());
      dispatch(setUIVisibility('none'));
    }
  }, [walletConnected, dispatch]);

  // Toggle changes flags on Editor element
  useEffect(() => {
    const editorElement = document.querySelector('.editor');
    if (editorElement) {

      // Check for mod changes
      if (editorMod && editorMod !== "000000000000") {
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

  // Check if the editor seed is "0"
  useEffect(() => {
    const artworkPreviewElement = document.querySelector('.artwork-preview');
    if (artworkPreviewElement) {
      if (editorSeed === '0') {
        artworkPreviewElement.classList.add('blank');
      } else {
        artworkPreviewElement.classList.remove('blank');
      }
    }
  }, [editorSeed]);


  // USER INTERACTION ----------------------------

  // Reset the editor state on click conditions
  useEffect(() => {
    const handleResetSelectionClick = (event: MouseEvent) => {
      const editorWrapper = document.querySelector('.editor-inner');
      const navbar = document.querySelector('.navbar');
      const inscribeModal = document.querySelector('.mint-modal'); 
      const artworkContainer = document.querySelector('.svg-container');
      const gardenButton = document.querySelector('.garden-button');
      
      if (editorWrapper && navbar && (!editorWrapper.contains(event.target as Node)) && (!gardenButton || !gardenButton.contains(event.target as Node)) && !navbar.contains(event.target as Node) && (!inscribeModal || !inscribeModal.contains(event.target as Node)) && (!artworkContainer || !artworkContainer.contains(event.target as Node)) && event.target !== editorWrapper && !isArtworkFocused) 
      {
        dispatch(setSelectedIndex(null));
        dispatch(resetEditorState());
        setIsOverlayToggled(false);
      }
    };
    document.addEventListener('dblclick', handleResetSelectionClick);
    return () => document.removeEventListener('dblclick', handleResetSelectionClick);
  }, [dispatch, isArtworkFocused]);

  // Keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
      const modifierKey = isMac ? event.metaKey : event.ctrlKey;

      if (modifierKey && event.key.toLowerCase() === 'z' && !event.shiftKey) {
        event.preventDefault();
        dispatch(undo());
      } else if (modifierKey && event.key.toLowerCase() === 'z' && event.shiftKey) {
        event.preventDefault();
        dispatch(redo());
      } else if ((event.key === 'r' || event.key === 'R') && !modifierKey) {
        event.preventDefault();
        handleRandomizeBits();
      } else if (event.code === 'Space' && event.target === document.body) {
        event.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch, handleRandomizeBits, togglePlay]);

  const handleSwipe = useCallback((eventData: SwipeEventData) => {
    if (eventData.event.type.startsWith('touch')) {
      if (eventData.dir === 'Left') {
        dispatch(redo());
      } else if (eventData.dir === 'Right') {
        dispatch(undo());
      }
    }
  }, [dispatch]);

  const swipeHandlers = useSwipeable({
    onSwiped: handleSwipe,
    preventScrollOnSwipe: true,
    trackMouse: false,
    trackTouch: true
  });

  useEffect(() => {
    const handleGlobalMouseUp = (e: MouseEvent) => {
      if (isDragging) {
        const queueItem = (e.target as HTMLElement).closest('.queue-item');
        if (queueItem) {
          const index = parseInt(queueItem.getAttribute('data-index') || '-1', 10);
          if (index !== -1) {
            dispatch(updateQueueItemWithDragDrop({
              index,
              newValues: {
                newSeed: editorSeed,
                newMod: editorMod,
                newAttunement: parseInt(editorAttunement),
                isAttunementOverridden: isAttunementOverridden
              }
            }));
            dispatch(setSelectedIndex(index));
            dispatch(updateQueueOrder());
          }
        }
      }
      setIsDragging(false);
      if (dragTimeoutRef.current) {
        clearTimeout(dragTimeoutRef.current);
        dragTimeoutRef.current = null;
      }
      dragStartPositionRef.current = null;
      document.body.classList.remove('grabbing');
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dispatch, editorSeed, editorMod, editorAttunement]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setDragPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging]);

  // Hide cursor after inactivity
  useEffect(() => {
    const sleeptarget = document.querySelector('body');
    if (sleeptarget) {
      const cleanup = hideMouseCursor();
      return cleanup;
    }
  }, []);

  useEffect(() => {
    console.log('Has editor changes:', hasEditorChanges);
  }, [hasEditorChanges]);


  // URL PARAMETERS ------------------------------

  const [urlParams, setUrlParams] = useState(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get('seed');
    }
    return null;
  });

  // Initialize editor state from URL parameters
  useEffect(() => {
    if (urlParams) {
      const [seedPart, attunementPart] = urlParams.split(':');
      const [seedRaw, modRaw] = seedPart.split('.');
      
      const seed = seedRaw === '?' ? '?' : sanitizeSeed(seedRaw || '0');
      const mod = modRaw === '?' ? '?' : sanitizeMod(modRaw || '000000000000');
      const attunement = attunementPart === '?' ? '?' : sanitizeAttunement(attunementPart || '0');
      const isOverridden = attunementPart !== undefined;
  
      dispatch(updateEditorState({
        seed,
        mod,
        attunement,
        isAttunementOverridden: isOverridden
      }));
    }
  }, [urlParams, dispatch]);

  // Update the url parameters with the editor state
  useEffect(() => {
    if (editorSeed || editorMod) {
      let urlValue = editorSeed;
      if (editorMod !== '000000000000') {
        const modForUrl = editorMod.slice(0, 8) + 
          (modValues.tintPercent === 100 ? '0' : (modValues.tintPercent / 10).toString()) +
          editorMod.slice(9);
        urlValue += `.${modForUrl}`;
      }
      if (isAttunementOverridden) {
        urlValue += `:${editorAttunement}`;
      }
      const newUrl = `${window.location.pathname}${urlValue ? '?seed=' + urlValue : ''}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [editorSeed, editorMod, editorAttunement, isAttunementOverridden, modValues.tintPercent]);


  // MEMOIZED VALUES --------------------------------

  // Conditions for when editor seed can be reset
  const enableSeedResetButton = useMemo(() => {
    const isNonZeroSeed = editorSeed !== '0';
    return isNonZeroSeed
  }, [editorSeed, editorMod, editorAttunement]);

  // Memoized artwork component
  const memoizedArtwork = useMemo(() => (
    <Artwork 
      ref={artRef}
      seed={editorSeed}
      mod={editorMod}
      attunement={editorAttunement.toString()}
      isPlaying={isPlaying}
      editorSeed={editorSeed}
      editorMod={editorMod}
      editorAttunement={editorAttunement}
      isAttunementOverridden={isAttunementOverridden}
      modValues={modValues}
      displaySettings={displaySettings}
      onArtworkReady={handleArtworkReady}
    />
  ), [
    editorSeed,
    editorMod,
    editorAttunement,
    isPlaying,
    selectedQueueIndex,
    isAttunementOverridden,
    modValues,
    displaySettings,
  ]);


  
  
  // STRUCTURE --------------------------------------
  
  return (
    <>
    <Profiler id="ArtworkSection" onRender={onRenderCallback}>
      <div className="editor">
        <div className="editor-inner" ref={editorRef}>
          <div className="seed-indicator">
            <div className="seed-touchable">
              <div className="label seed-label">SEED:</div>
              <span
                ref={seedInputRef}
                className={`seed-input`}
                contentEditable="true"
                inputMode="numeric"
                onClick={(e) => selectElementContents(e.currentTarget)}
                onKeyDown={(e) => {
                  handleSpecialCopy(e);
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const updatedSeed = e.currentTarget.textContent || '';
                    const sanitizedSeed = handleSeedInputChange(updatedSeed, true);
                    e.currentTarget.textContent = sanitizedSeed;
                    clearSelection();
                  }
                }}
                onInput={(e) => {
                  const updatedSeed = e.currentTarget.textContent || '';
                  handleSeedInputChange(updatedSeed, true);
                }}
                onBlur={(e) => {
                  e.preventDefault();
                  const updatedSeed = e.currentTarget.textContent || '';
                  handleSeedInputChange(updatedSeed, true);
                  e.currentTarget.textContent = editorSeed;
                  clearSelection();
                }}
                onPaste={(e) => {
                  e.preventDefault();
                  const pastedText = e.clipboardData.getData('text');
                  handleSeedInputChange(pastedText, true);
                  e.currentTarget.textContent = editorSeed;
                  clearSelection();
                }}
              >{editorSeed}</span>
              {enableSeedResetButton && (
                <div className="reset-seed reset show" onClick={handleResetEditorSeed}>
                    Reset
                </div>
              )}
            </div>
          </div>
          <>
            <div className="app-pane left">
              <div className="editor-controls">
                <div className="basic-actions">
                  <a
                    className={`ui-button randomize z-button}`}
                    onClick={handleRandomizeBits}
                  >Random</a>
                  <a
                    id="layers-ui-button"
                    className={`ui-button advanced shrink z-button ${
                        uiVisibility === 'layers' ? "selected" : ""
                    }`}
                    onClick={handleLayersUIToggle}
                  >Lr</a>
                  <a
                    id="display-settings-button"
                    className={`ui-button advanced mod-button shrink z-button ${
                        uiVisibility === 'displaySettings' ? "selected" : ""
                    } ${editorSeed === '0' ? "disabled" : ""}`}            
                    onClick={handleDisplaySettingsToggle}
                  >+<span></span></a>
                </div>
                <div className={`layer-grid-wrap ${uiVisibility === 'layers' ? "show" : ""}`}>
                  <BitsArray />
                </div>
                <div className={`display-settings-wrap ${uiVisibility === 'displaySettings' ? "show" : ""}`}>
                  <DisplaySettings/>
                </div>
              </div>
            </div>
            <div className="artwork-preview">
              <div
                style={{
                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"}}
                className="svg-aspect-ratio"
              >
                <div 
                  className={`svg-container ${isSpinAnimationPaused ? 'paused' : 'playing'}`}
                  {...swipeHandlers}
                >
                  <div className="svg-outer" {...handleArtworkInteraction()}>
                    {memoizedArtwork}
                    <div className="rgblens"></div>
                  </div>
                  <div className="seed-overlay-container">
                    <Details
                      isFocused={isArtworkFocused}
                      showOverlay={isOverlayToggled}
                      editorSeed={editorSeed ?? ''}
                      editorMod={editorMod ?? '000000000000'}
                      editorAttunement={parseInt(editorAttunement) ?? 0}
                      bitsArray={bitsArray}
                      generatedName={generatedName}
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
                  <span className="select-icon">
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
                      strokeWidth: 26,
                      strokeMiterlimit: 10}}
                    >
                      <path d="m17.5 123.8 162.2 156.6L426.6 16.1" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            {isDragging && createPortal(
              <DragPreview
                seed={editorSeed}
                mod={editorMod}
                attunement={editorAttunement}
                position={dragPosition}
              />,
              document.body
            )}
            <div className={`app-pane right $ ${
                uiVisibility === 'layers' || 'displaySettings' ? "deactivated" : ""
            }`}>
              <Queue isDropping={false}/>
              <Details
                isFocused={isArtworkFocused}
                showOverlay={isOverlayToggled}
                editorSeed={editorSeed ?? ''}
                editorMod={editorMod ?? '000000000000'}
                editorAttunement={parseInt(editorAttunement) ?? 0}
                bitsArray={bitsArray}
                generatedName={generatedName}
              />
            </div>
          </>
          <div 
            className={`reset-editor ${
              uiVisibility === 'layers' || displaySettings ? "" : "hidden"}`}
            onClick={() => {
              dispatch(setUIVisibility('none'));
              setIsOverlayToggled(false);
            }}
          >
            <svg
              data-name="icon_right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 90.67 210.1"
              width="18px"
              height="auto">
                <path d="m5.34 5.11 77.33 99.94-77.33 99.94"/>
              </svg>
          </div>
        </div>
      </div>
      <TransitionLink href='/garden' className="garden-button ui-element">
        <div onClick={(e) => e.stopPropagation()}>
          <svg data-name="icon-spiral" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.96 105.96">
            <path className="cls-1" d="M83.35 92.75c22.48-19.86 22.39-52.41 3.25-71.55-18.49-18.49-47.33-19.81-66.85-.29-17.77 17.77-17.77 45.21-.76 62.22 16.17 16.17 41.7 16.85 57.87.68 15.25-15.25 15.19-39.05.48-53.76s-34.67-14.77-49.44 0c-12.18 12.18-12.18 32.9 0 45.08 12.1 12.1 29.54 10.61 40.63-.48a25.84 25.84 0 0 0 0-36.54c-9.18-9.18-23.73-8.84-32.91.34-8.35 8.35-8.21 21.08.14 29.44 7.36 7.36 18.64 7.17 25.96-.16a15.83 15.83 0 0 0 .03-22.36c-4.83-4.83-13.69-4.51-18.43.23s-4.81 10.98-.72 15.07c3.28 3.28 8.51 3.75 12.28-.02a6.05 6.05 0 0 0 .7-8.2c-1.34-1.57-4.07-2.11-5.76-.44"/>
          </svg>
        </div>
      </TransitionLink>
      <InscribeModal show={showInscribeModal} queueItems={queueItems} />
      </Profiler>
    </>
  );
}

export default React.memo(Home);

const DragPreview: React.FC<{
  seed: string;
  mod: string;
  attunement: string;
  position: { x: number; y: number };
}> = ({ seed, mod, attunement, position }) => {
  return (
    <div
      className="draggable-state"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        borderRadius: '3px',
        pointerEvents: 'none',
        zIndex: 9999,
        cursor: "grabbing",
        opacity: 0,
      }}
    >
      {seed}.{mod}:{attunement}
    </div>
  );
};