"use client";
import { useRef, useCallback, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import Artwork from "@/components/Artwork";
import Queue from '@/components/Editor/Queue';
import { BitsArray } from "@/components/Editor/LayersUI";
import DisplaySettings from '@/components/Editor/DisplaySettingsUI';
import InscribeModal from "@/components/Editor/InscribeModal";

import { setEditorState, setEditorSeed, updateHasEditorChanges, resetEditorState, resetEditorSeed, toggleBit, randomizeBits, undo, redo, selectLayersUIToggled, selectDisplaySettingsToggled, toggleLayersUI, toggleDisplaySettings, checkEditorMatchesSelectedItem } from '@/store/slices/editorSlice';
import { initializeQueue, getSetQueueItems, setSelectedIndex, updateQueueItem } from '@/store/slices/queueSlice';
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import { selectElementContents, clearSelection } from '@/lib/utils';




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


  // REFS -------------------------------------------

  const inputRef = useRef<HTMLDivElement>(null);

  const [isSvgOverlayFocused, setIsSvgOverlayFocused] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const svgOverlayRef = useRef<HTMLDivElement>(null);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [showSvgOverlay, setShowSvgOverlay] = useState(false);


  // CALLBACKS --------------------------------------

  // Enable the Editor's seed reset button
  const enableSeedResetButton = useCallback(() => {
    if (selectedQueueIndex === null) {
      return editorSeed !== '0';
    }

    if (selectedQueueIndex >= queueItems.length) {return false;}

    const selectedItem = queueItems[selectedQueueIndex];
    
    return editorSeed !== selectedItem.seed;
  }, [selectedQueueIndex, queueItems, editorSeed]);

  // Check if selected queue item is locked
  const isSelectedItemLocked = useCallback(() => {
    if (selectedQueueIndex === null || selectedQueueIndex >= queueItems.length) return false;
    return queueItems[selectedQueueIndex].locked;
  }, [selectedQueueIndex, queueItems]);

  // Reset the Editor's seed number
  const handleResetEditorSeed = useCallback(() => {
    if (isSelectedItemLocked()) return;
  
    let seedToReset: string;
    if (selectedQueueIndex === null) {
      seedToReset = '0';
      dispatch(resetEditorSeed(seedToReset));
    } else {
      const selectedItem = queueItems[selectedQueueIndex];
      seedToReset = selectedItem.seed;
      // Check if editor matches selected queue item
      dispatch(resetEditorSeed(seedToReset));
      dispatch(checkEditorMatchesSelectedItem(selectedItem));
    }
  }, [dispatch, selectedQueueIndex, queueItems, isSelectedItemLocked]);

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

  // React to user interaction with the Editor UI
  const handleEditorInteraction = useCallback(() => {
    if (selectedQueueIndex === null && seed !== BigInt(0)) {
      // dispatch(selectNextUnsetQueueItemThunk());
    }
  }, [selectedQueueIndex, seed]);

  // Handle SVG overlay interactions
  const handleSvgOverlayInteraction = useCallback(() => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      // Only toggle if the click is directly on the seed-overlay, not its children
      if (event.target === event.currentTarget) {
        setIsSvgOverlayFocused(prevState => !prevState);
      }
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      // Only start the timer if the mousedown is directly on the seed-overlay
      if (event.target === event.currentTarget) {
        clickTimerRef.current = setTimeout(() => {
          clickTimerRef.current = null;
        }, 500);
      }
    };

    const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
      // Only process if the mouseup is directly on the seed-overlay
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
      onClick: (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation(),
      onDoubleClick: (event: React.MouseEvent<HTMLDivElement>) => {
        // Only toggle if the double-click is directly on the seed-overlay
        if (event.target === event.currentTarget) {
          handleClick(event);
        }
      },
    };
  }, []);


  // EVENT HANDLERS ---------------------------------

  // Update the Editor's seed number via the seed input
  const handleSeedInputChange = useCallback((updatedSeed: string) => {
    if (selectedQueueIndex !== null) {
      const selectedItem = queueItems[selectedQueueIndex];
      if (updatedSeed === (selectedItem.newSeed || selectedItem.seed)) {
        dispatch(setEditorSeed({ seed: updatedSeed, updateChanges: false }));
      } else if (!isSelectedItemLocked()) {
        dispatch(setEditorSeed({ seed: updatedSeed, updateChanges: true }));
      }
    } else {
      dispatch(setEditorSeed({ seed: updatedSeed, updateChanges: false }));
    }
  }, [dispatch, isSelectedItemLocked, queueItems, selectedQueueIndex]);

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

  // Toggle the SVG Overlay element
  const toggleSvgOverlay = useCallback(() => {
    setShowSvgOverlay(prev => !prev);
  }, []);

  
  // EFFECTS ----------------------------------------

  // Add event listeners editor elements
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

  // Double-click listener
  useEffect(() => {
    const handleDoubleClickOutside = (event: MouseEvent) => {
      const editorWrapper = document.querySelector('.editor-inner');
      if (editorWrapper && (!editorWrapper.contains(event.target as Node) || event.target === editorWrapper)) {
        dispatch(setSelectedIndex(null));
        dispatch(resetEditorState());
      }
    };

    document.addEventListener('dblclick', handleDoubleClickOutside);
    return () => document.removeEventListener('dblclick', handleDoubleClickOutside);
  }, [dispatch]);

  // Hide Display Settings when the seed is "0"
  useEffect(() => {
    const selectedItem = queueItems[selectedQueueIndex];
    if (editorSeed === '0' || selectedQueueIndex !== null && selectedItem.newSeed === '0') {
      dispatch(toggleDisplaySettings(false));
    }
  }, [queueItems, selectedQueueIndex, seed, modNumber, editorSeed, editorMod]);

  // Update selected queue item's Editor preview
  useEffect(() => {
    if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
      const selectedItem = queueItems[selectedQueueIndex];
      if (!hasEditorChanges) {
        dispatch(setEditorState({
          seed: selectedItem.newSeed || selectedItem.seed,
          mod: selectedItem.newMod || selectedItem.modNumber || "000000000000000",
          attunement: selectedItem.newAttunement ?? selectedItem.attunementNumber ?? 0
        }));
      }
    }
  }, [selectedQueueIndex, queueItems, dispatch, editorSeed]);

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
  
  // Handle clicks anywhere in the document
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const editorElement = editorRef.current;
      const svgOverlay = svgOverlayRef.current;

      if (!editorElement || !svgOverlay) {return}

      if (!editorElement.contains(event.target as Node)) {
        setIsSvgOverlayFocused(false);
        dispatch(toggleLayersUI(false));
        dispatch(toggleDisplaySettings(false));
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, [dispatch]);




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
                  onClick={() => dispatch(resetEditorModOnly())}
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
                <div className="svg-container">
                  <Artwork seed={editorSeed} mod={editorMod} attunement={editorAttunement} />
                  <div ref={svgOverlayRef} className="seed-overlay-wrapper" {...handleSvgOverlayInteraction()}>
                    <div
                      className={`seed-overlay ${isSvgOverlayFocused ? 'focused' : ''} ${showSvgOverlay ? 'show' : ''}`}
                    >
                      <div className="seed-overlay-inner">
                        <div class="seed-overlay-header-wrap">
                          <div className="seed-overlay-header">
                            SEEDS
                          </div>
                          <div className="overlay-description">
                            Art is the future.
                          </div>
                        </div>  
                        <div className="seed-overlay-metadata">
                          <div className="metadata-list-container">
                            <div className="metadata-title">
                              Attributes
                            </div>
                            <ul className="metadata-list">
                              <li className="metadata-item">
                                <span className="metadata-label">
                                  Kind:
                                </span>
                                <span className="metadata-value">
                                  Genesis
                                </span>
                              </li>
                              <li className="metadata-item">
                                <span className="metadata-label">
                                  Attunement:
                                </span>
                                <span className="metadata-value">
                                  Creation
                                </span>
                              </li>
                              <li className="metadata-item">
                                <span className="metadata-label">
                                  Bits:
                                </span>
                                <span className="metadata-value">
                                  0
                                </span>
                              </li>
                              <li className="metadata-item">
                                <span className="metadata-label">
                                  Cardinal No.:
                                </span>
                                <span className="metadata-value">
                                  0
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="overlay-actions">
                          <div className="overlay-actions-container">
                            <div className="overlay-actions-title">
                              D/L
                            </div>
                            <ul className="overlay-actions-list">
                              <li>PNG</li>
                              <li>SVG</li>
                              <li>Embed</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="toggle-overlay-wrapper">
                      <div
                        className="toggle-details-button"
                        onClick={toggleSvgOverlay}
                      >
                        i
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
                >Set Queue Item</a>
                <div className="select-icon z-embed">
                  <svg
                    version="1.1"
                    id="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    x={0}
                    y={0}
                    viewBox="0 0 442.7 312.6"
                    xmlSpace="preserve"
                  >
                    <style dangerouslySetInnerHTML={{__html: "#checkmark path{fill:none;stroke:#000;stroke-width:31;stroke-miterlimit:10} "}}/>
                    <path d="m17.5 123.8 162.2 156.6L426.6 16.1" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={`app-pane right ${(layersUIToggled || displaySettingsToggled) ? 'deactivated' : ''}`}>
              <Queue />
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
    </>
  );
}