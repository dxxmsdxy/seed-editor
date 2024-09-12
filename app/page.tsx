"use client";
import { useRef, useCallback, useEffect } from "react";
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

// IMPORTED LOGIC & COMPONENTS ----------------------------

import { BitsArray } from "@/components/Editor/LayersUI";
import DisplaySettings from '@/components/Editor/DisplaySettingsUI';
import Artwork from "@/components/Artwork";
import InscribeModal from "@/components/Editor/InscribeModal";
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import {
  getQueueItemsForRendering,
  getSetQueueItems,
  setCurrentPage,
  setSelectedIndex,
  updateQueueItem,
  toggleQueueItemLock,
  selectAndUpdateQueueItemThunk,
  resetQueueItemThunk,
} from '@/store/slices/queueSlice';
import {
  setEditorState,
  setEditorSeed,
  setEditorMod,
  setEditorAttunement,
  updateHasEditorChanges,
  resetEditorState,
  resetEditorSeed,
  toggleBit,
  randomizeBits,
  undo,
  redo,
  selectLayersUIToggled,
  selectDisplaySettingsToggled,
  toggleLayersUI,
  toggleDisplaySettings,
  checkEditorMatchesSelectedItem,
} from '@/store/slices/editorSlice';
import { selectElementContents, clearSelection } from '@/lib/utils';

// PAGE LOGIC ---------------------------------------------

export default function Home() {
  const dispatch = useAppDispatch();

  // REDUX STATE ------------------------------------------

  const {
    seed, bitsArray, modNumber, attunementNumber,
    editorSeed, editorMod, editorAttunement, hasEditorChanges
  } = useAppSelector((state: RootState) => state.seed);
  const { items: queueItems, selectedIndex: selectedQueueIndex, currentPage, itemsPerPage } = useAppSelector((state: RootState) => state.queue);
  const showInscribeModal = useAppSelector((state) => state.modal.showInscribeModal);
  const setQueueItems = useAppSelector(getSetQueueItems);
  const isQueueModified = useAppSelector(state => state.queue.items.some(item => item.isSet));
  const walletConnected = useSelector((state: RootState) => state.wallet.connected);
  const layersUIToggled = useSelector(selectLayersUIToggled);
  const displaySettingsToggled = useSelector(selectDisplaySettingsToggled);

  // REFS -------------------------------------------------

  const inputRef = useRef<HTMLDivElement>(null);

  // DERIVED STATE ----------------------------------------

  const totalPages = Math.ceil(queueItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const queueItemsForRendering = useAppSelector(getQueueItemsForRendering);

  // CALLBACKS --------------------------------------------

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
    } else {
      const selectedItem = queueItems[selectedQueueIndex];
      seedToReset = selectedItem.seed;

      // Check if editor matches selected item
      if (dispatch(checkEditorMatchesSelectedItem(selectedItem))) {
        dispatch(updateHasEditorChanges(false));
      }
    }
  
    dispatch(resetEditorSeed(seedToReset));
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

  // Trigger selection of the next unset queue item
  const handleEditorInteraction = useCallback(() => {
    if (selectedQueueIndex === null && seed !== BigInt(0)) {
      // dispatch(selectNextUnsetQueueItemThunk());
    }
  }, [selectedQueueIndex, seed]);

  // EVENT HANDLERS ---------------------------------------

  // Update the Editor's seed number via the seed input
  const handleSeedInputChange = useCallback((updatedSeed: string) => {
    if (!isSelectedItemLocked()) {
      dispatch(setEditorSeed({ seed: updatedSeed, updateChanges: true }));
    }
  }, [dispatch, isSelectedItemLocked]);

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

  // Select a specified queue item by index
  const handleQueueItemSelect = useCallback((index: number) => {
    dispatch(selectAndUpdateQueueItemThunk(index));
  }, [dispatch]);

  // Reset a specified queue item by index
  const handleQueueItemReset = useCallback((e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    dispatch(resetQueueItemThunk(index));
  }, [dispatch]);

  // Update the queue page with by page number
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setCurrentPage(newPage));
    }
  };

  // Go to the queue's first page
  const goToFirstPage = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).classList.contains('page-value')) {
      handlePageChange(1);
    }
  };

  // Begin the inscription flow
  const handleInscribeClick = () => {
    if (isQueueModified) {
      dispatch(setShowInscribeModal(true));
    }
  };
  
  // EFFECTS ----------------------------------------------

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
    if (editorSeed === '0' || seed === '0' || queueItems[selectedQueueIndex].newSeed === '0') {
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





  // STRUCTURE --------------------------------------------

  return (
    <>
      <div className="editor">
        <div className="editor-inner">
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
                    const updatedSeed = e.currentTarget.textContent?.trim() || '0';
                    handleSeedInputChange(updatedSeed);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
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
            <div className="app-pane">
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
              <div className="queue-container">
                <div className={`page-selector ${totalPages > 1 ? '' : 'disabled'}`}>
                  <div 
                    className={`page-nav prev ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  >&lt;</div>
                  <div className="page-label-container" onClick={goToFirstPage}>
                    <div className="page-label">
                      <span 
                        className="page-value"
                        contentEditable="true"
                        inputMode="numeric"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectElementContents(e.currentTarget);
                        }}
                        onBlur={(e) => {
                          e.preventDefault();
                          const newPage = parseInt(e.currentTarget.textContent || "1", 10);
                          handlePageChange(newPage);
                          e.currentTarget.textContent = currentPage.toString();
                          clearSelection();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            e.currentTarget.blur();
                          }
                        }}
                      >{currentPage}</span> / {totalPages}
                    </div>
                  </div>
                  <div 
                    className={`page-nav next ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  >&gt;</div>
                </div>
                <ul role="list" className="queue-list">
                  {queueItemsForRendering.slice(startIndex, endIndex).map((item) => (
                    <li
                      className={`
                        queue-item
                        ${item.isSelected ? "selected" : ""}
                        ${item.isSet ? 'set' : ''}
                      `}
                      key={item.index}
                      onClick={() => handleQueueItemSelect(item.index)}
                    >
                      <div className={`queued-seed-number`}>
                        <span 
                          className={`queue-lock ${item.locked ? 'locked' : ''} ${item.isSeedZero ? 'disabled' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!item.isSeedZero) {
                              dispatch(toggleQueueItemLock(item.index));
                            }
                          }}
                        ></span>
                        <strong>{item.displaySeed}</strong>
                        <span 
                          className="queue-reset"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQueueItemReset(e, item.index);
                          }}
                        ></span>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  className={`ui-button inscribe z-button ${isQueueModified ? "" : "disabled"}`}
                  onClick={handleInscribeClick}
                >Inscribe{isQueueModified && (
                    <span className="queue-count"><span>(</span>
                      {queueItems.filter(item => item.isSet).length}
                    <span>)</span></span>
                  )}
                </a>
              </div>
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