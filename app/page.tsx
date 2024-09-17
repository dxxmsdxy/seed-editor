"use client";
import { useRef, useCallback, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { debounce } from 'lodash';

import Artwork from "@/components/Artwork";
import SeedDetails from '@/components/Artwork/SeedDetails';
import Queue from '@/components/Editor/Queue';
import { BitsArray } from "@/components/Editor/LayersUI";
import DisplaySettings from '@/components/Editor/DisplaySettingsUI';
import InscribeModal from "@/components/Editor/InscribeModal";

import { updateEditorState, updateEditorSeed, updateHasEditorChanges, resetEditorState, resetEditorSeed, resetEditorMod, toggleBit, randomizeBits, undo, redo, selectLayersUIToggled, selectDisplaySettingsToggled, toggleLayersUI, toggleDisplaySettings, checkEditorMatchesSelectedItem, toggleColorAnimationPause, toggleDepthAnimationPause, toggleSpinAnimationPause } from '@/store/slices/editorSlice';
import { initializeQueue, getSetQueueItems, setSelectedIndex, updateQueueItem } from '@/store/slices/queueSlice';
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import { selectElementContents, clearSelection } from '@/lib/utils';
import { selectModValues, selectDisplaySettings } from '@/store/slices/editorSlice';
import { applyModValueToElements, resetLayers } from '@/lib/utils/artwork/updateSVGWithMod';




//=================================================//

export default function Home() {
  const dispatch = useAppDispatch();


  // REDUX STATE ------------------------------------

  const {
    seed, bitsArray, modNumber, attunementNumber,
    editorSeed, editorMod, editorAttunement, hasEditorChanges
  } = useAppSelector((state: RootState) => state.seed);
  const { items: queueItems, selectedIndex: selectedQueueIndex} = useAppSelector((state: RootState) => state.queue);
  const showInscribeModal = useAppSelector((state) => state.modal.showInscribeModal);
  const setQueueItems = useAppSelector(getSetQueueItems);
  const walletConnected = useSelector((state: RootState) => state.wallet.connected);
  const layersUIToggled = useSelector(selectLayersUIToggled);
  const displaySettingsToggled = useSelector(selectDisplaySettingsToggled);
  const modValues = useAppSelector(selectModValues);
  



  // REFS -------------------------------------------

  const inputRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const svgOverlayRef = useRef<HTMLDivElement>(null);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);



  // CHECKS -----------------------------------------

  const [isArtworkFocused, setIsArtworkFocused] = useState(false);

  const [isOverlayToggled, setisOverlayToggled] = useState(false);

  const [isPlaying, playSVGAnimation] = useState(false);

  const isSelectedItemLocked = useCallback(() => {
    if (selectedQueueIndex === null || selectedQueueIndex >= queueItems.length) return false;
    return queueItems[selectedQueueIndex].locked;
  }, [selectedQueueIndex, queueItems]);



  // CALLBACKS --------------------------------------

  // Editor initialization --------------------------

  // React to user interaction with the Editor UI
  const handleEditorInteraction = useCallback(() => {
    if (selectedQueueIndex === null && seed !== BigInt(0)) {
      // dispatch(selectNextUnsetQueueItemThunk());
    }
  }, [selectedQueueIndex, seed]);

  // Add event listeners to editor elements
  useEffect(() => {
    const editorElements = document.querySelectorAll('.editor .app-pane *');
    editorElements.forEach(element => {
      element.addEventListener('click', handleEditorInteraction);
    });

    return () => {
      editorElements.forEach(element => {
        element.removeEventListener('click', handleEditorInteraction);
      });
    };
  }, [handleEditorInteraction]);

  // Editor logic ---------------------------------

  // Update the Editor's seed number via the seed input
  const handleSeedInputChange = useCallback((updatedSeed: string) => {
    if (selectedQueueIndex !== null) {
      const selectedItem = queueItems[selectedQueueIndex];
      if (updatedSeed === (selectedItem.newSeed || selectedItem.seed)) {
        dispatch(updateEditorSeed({ seed: updatedSeed, updateChanges: false }));
      } else if (!isSelectedItemLocked()) {
        dispatch(updateEditorSeed({ seed: updatedSeed, updateChanges: true }));
      }
    } else {
      dispatch(updateEditorSeed({ seed: updatedSeed, updateChanges: false }));
    }
  }, [dispatch, isSelectedItemLocked, queueItems, selectedQueueIndex]);

  // Reset the Editor's seed number
  const handleResetEditorSeed = useCallback(() => {
    if (isSelectedItemLocked()) return;
    
    let seedToResetTo: string;
    if (selectedQueueIndex === null) {
      seedToResetTo = '0';
      dispatch(resetEditorSeed(seedToResetTo));
    } else {
      const selectedItem = queueItems[selectedQueueIndex];
      seedToResetTo = selectedItem.seed;
      // Reset the seed, confirm it matches the selected queue item
      dispatch(resetEditorSeed(seedToResetTo));
      dispatch(checkEditorMatchesSelectedItem(selectedItem));
    }
  }, [dispatch, selectedQueueIndex, queueItems, isSelectedItemLocked]);

  // Reset the Editor's mod number
  const handleResetEditorMod = useCallback(() => {
    if (isSelectedItemLocked()) return;
    dispatch(resetEditorMod());
    if (selectedQueueIndex !== null) {
      const selectedItem = queueItems[selectedQueueIndex];
      dispatch(checkEditorMatchesSelectedItem(selectedItem));
    }
  }, [dispatch, selectedQueueIndex, queueItems, isSelectedItemLocked]);

  // Enable the Editor's seed reset button
  const enableSeedResetButton = useCallback(() => {
    if (selectedQueueIndex === null) {
      return editorSeed !== '0';
    }

    if (selectedQueueIndex >= queueItems.length) {return false;}

    const selectedItem = queueItems[selectedQueueIndex];
    
    return editorSeed !== selectedItem.seed;
  }, [selectedQueueIndex, queueItems, editorSeed]);

  // Randomize the Editor's seed number
  const handleRandomizeBits = () => {
    if (!isSelectedItemLocked()) {
      dispatch(randomizeBits());
    }
  };

  // Toggle individual bits in the seed number
  const handleToggleBit = (index: number) => {
    if (!isSelectedItemLocked()) {
      dispatch(toggleBit(index));
    }
  };

  // Artwork Preview logic --------------------------

  // Apply display style to artwork preview
  const debouncedApplyModValueToElements = useCallback(
    debounce((elements, modValue, modType) => {
      applyModValueToElements(elements, modValue, modType);
    }, 50),
    []
  );

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

  // Toggle the SVG Overlay element
  const toggleSvgOverlay = useCallback(() => {
    setisOverlayToggled(prev => !prev);
  }, []);

  const togglePlay = useCallback(() => {
    playSVGAnimation(prev => !prev);
  }, []);

  // Queue logic ---------------------------------

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
      dispatch(toggleDisplaySettings(false));
    }
  }, [selectedQueueIndex, hasEditorChanges, editorSeed, editorMod, editorAttunement, dispatch]);


  
  // EFFECTS ----------------------------------------

   // Handle clicks anywhere in the document
   useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const editorElement = editorRef.current;
      const svgOverlay = svgOverlayRef.current;

      if (!editorElement || !svgOverlay) {return}

      if (!editorElement.contains(event.target as Node)) {
        setIsArtworkFocused(false);
        dispatch(toggleLayersUI(false));
        dispatch(toggleDisplaySettings(false));
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, [dispatch]);

  // Double-click listener
  useEffect(() => {
    const handleDoubleClickOutside = (event: MouseEvent) => {
      const editorWrapper = document.querySelector('.editor-inner');
      const SeedDetails = document.querySelector('.seed-details');
      if (editorWrapper && (!editorWrapper.contains(event.target as Node) || event.target === editorWrapper)) {
        dispatch(setSelectedIndex(null));
        dispatch(resetEditorState());

        setisOverlayToggled(false);
      }
    };
    document.addEventListener('dblclick', handleDoubleClickOutside);
    return () => document.removeEventListener('dblclick', handleDoubleClickOutside);
  }, [setisOverlayToggled, dispatch]);

  // Toggle changes flag on Editor element
  useEffect(() => {
    const editorElement = document.querySelector('.editor');
    if (editorElement) {
      if (hasEditorChanges) {
        editorElement.classList.add('unsaved-changes');
      } else {
        editorElement.classList.remove('unsaved-changes');
      }
    }
  }, [hasEditorChanges]);
  
  // Hide Display Settings when the seed is "0"
  useEffect(() => {
    const selectedItem = queueItems[selectedQueueIndex];
    if (editorSeed === '0' || selectedQueueIndex !== null && selectedItem.newSeed === '0') {
      dispatch(toggleDisplaySettings(false));
    }
  }, [queueItems, selectedQueueIndex, seed, modNumber, editorSeed, editorMod]);

  // Update the editor state to reflect current queue item
  useEffect(() => {
    if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
      const selectedItem = queueItems[selectedQueueIndex];
      if (!hasEditorChanges) {
        const newMod = selectedItem.newMod || selectedItem.modNumber || "000000000000000";
        const newAttunement = selectedItem.newAttunement ?? selectedItem.attunementNumber ?? 0;
        
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

  // Update artwork preview based on mod value
  const memoizedApplyModValueToElements = useCallback(applyModValueToElements, []);
  const memoizedResetLayers = useCallback(resetLayers, []);

  useEffect(() => {
    const artwork = document.querySelector('.seedartwork') as SVGSVGElement;
    if (artwork) {
      memoizedResetLayers(artwork);

      const layers = document.querySelectorAll('.seedartwork,.lr.on path,.lr.on polygon, .lr.on circle, .lr.on .ellipse, .lr.on line, .lr.on rect, .lr.on .polyline');
      memoizedApplyModValueToElements(layers, modValues.color, 'color');
  
      const spinTargets = artwork.querySelectorAll('.lr.on');
      memoizedApplyModValueToElements(spinTargets, modValues.spin, 'spin');
  
      const depthTargets = artwork.querySelectorAll('.lr.on .fx');
      memoizedApplyModValueToElements(depthTargets, modValues.depth, 'depth');
    }
  }, [modValues, memoizedApplyModValueToElements, editorMod]);

  // Keyboard shortcuts for Undo/Redo
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'z' && !event.shiftKey) {
        event.preventDefault();
        dispatch(undo());
      } else if (event.ctrlKey && event.key === 'Z' && event.shiftKey) {
        event.preventDefault();
        dispatch(redo());
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  // Reset editor state when wallet is disconnected
  useEffect(() => {
    if (!walletConnected) {
      dispatch(setSelectedIndex(null));
      dispatch(resetEditorState());
      dispatch(toggleLayersUI(false));
      dispatch(toggleDisplaySettings(false));
    } else if (walletConnected) {
      dispatch(initializeQueue([]));
      dispatch(setSelectedIndex(null));
    }
  }, [walletConnected, dispatch]);





  // STRUCTURE --------------------------------------

  return (
    <>
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
                onBlur={(e) => {
                  e.preventDefault();
                  if (!isSelectedItemLocked()) {
                    const updatedSeed = e.currentTarget.textContent || '';
                    handleSeedInputChange(updatedSeed);
                    e.currentTarget.textContent = updatedSeed.trim() || '0';
                    clearSelection();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (!isSelectedItemLocked()) {
                      const updatedSeed = e.currentTarget.textContent || '';
                      handleSeedInputChange(updatedSeed);
                      e.currentTarget.textContent = updatedSeed.trim() || '0';
                      clearSelection();
                    }
                    e.currentTarget.blur();
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
                      dispatch(toggleDisplaySettings(false));
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
                      dispatch(toggleDisplaySettings());
                    }
                  }}
                >+</a>
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
            <div className="artwork-preview">
              <div
                style={{
                  opacity: 1,
                  transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="svg-aspect-ratio"
              >
                <div className={`svg-container ${isPlaying ? 'playing' : ''}`}>
                  <div 
                    className="svg-outer"
                    {...handleSvgOverlayInteraction()}
                  >
                    <Artwork 
                      seed={editorSeed} 
                      mod={editorMod} 
                      attunement={editorAttunement} 
                      isPlaying={isPlaying} 
                    />
                  </div>
                  <div className="seed-overlay-container">
                    <SeedDetails
                      isFocused={isArtworkFocused}
                      showOverlay={isOverlayToggled}
                      editorSeed={editorSeed}
                      editorAttunement={editorAttunement}
                      bitsArray={bitsArray}
                    />
                    <div className="toggle-overlay-wrapper">
                      <div
                        className="toggle-details-button"
                        onClick={toggleSvgOverlay}
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
                  disabled={!hasEditorChanges || selectedQueueIndex === null}
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
              <SeedDetails
                isFocused={isArtworkFocused}
                showOverlay={isOverlayToggled}
                editorSeed={editorSeed}
                editorAttunement={editorAttunement}
                bitsArray={bitsArray}
              />
            </div>
          </>
        </div>
        <div 
          className={`reset-editor ${layersUIToggled || displaySettingsToggled ? '' : 'hidden'}`}
          onClick={() => {
            dispatch(toggleLayersUI(false));
            dispatch(toggleDisplaySettings(false));
          }}
        ></div>
      </div>
      <InscribeModal show={showInscribeModal} queueItems={setQueueItems} />
      <div className="diagnostic">
        <ul>
          <li><span className="diagnostic-seed">SEED</span>
            SEED
          </li>
        </ul>
      </div>
    </>
  );
}