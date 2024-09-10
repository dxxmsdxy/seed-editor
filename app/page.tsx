"use client";

// React imports
import { useState, useRef, useCallback, useEffect } from "react";

// Third-party imports
import { useDispatch, useSelector } from 'react-redux';

// Local component imports
import { BitsArray } from "@/components/Editor/LayersUI";
import DisplaySettings from '@/components/Editor/DisplaySettingsUI';
import Artwork from "@/components/Artwork";
import InscribeModal from "@/components/Editor/InscribeModal";

// Redux imports
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { RootState } from '@/store';
import {
  setNewSeed, setNewMod, setNewAttunement, setEditorState,
  setEditorSeed, setEditorMod, setEditorAttunement,
  resetEditorChangedStatus, resetEditorState, resetEditorSeed,
  toggleBit, randomizeBits, prepareToChangeSeed,
  resetUnsavedChanges, updateDisplaySetting, updateSliderValue,
  calculateModNumber,
} from '@/store/slices/editorSlice';
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import {
  selectedIndex, updateQueueItem, resetQueueItem, updateQueueOrder,
  selectNextUnsetItem, toggleQueueItemLock, setCurrentPage,
  selectSetQueueItems
} from '@/store/slices/queueSlice';
import { connectWalletAndLoadData } from '@/store/slices/walletSlice';

// Type definitions
interface QueueItem {
  seed: bigint;
  modNumber: string | null;
  attunementNumber: number | null;
  locked: boolean;
}

// Helper functions
function selectElementContents(el: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(el);
  const sel = window.getSelection();
  if (sel) {
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

function clearSelection() {
  if (window.getSelection) {
    window.getSelection()?.removeAllRanges();
  }
  const activeEl = document.activeElement;
  if (activeEl instanceof HTMLInputElement || activeEl instanceof HTMLTextAreaElement) {
    activeEl.selectionStart = activeEl.selectionEnd;
  }
}

export default function Home() {
  const dispatch = useAppDispatch();

  // Redux state
  const {
    seed, bitsArray, modNumber, attunementNumber,
    editorSeed, editorMod, editorAttunement, hasEditorChanges
  } = useAppSelector((state: RootState) => state.seed);
  const { items: queueItems, selectedIndex: selectedQueueIndex, currentPage, itemsPerPage } = useAppSelector((state: RootState) => state.queue);
  const showInscribeModal = useAppSelector((state) => state.modal.showInscribeModal);
  const setQueueItems = useAppSelector(selectSetQueueItems);
  const isQueueModified = useAppSelector(state => state.queue.items.some(item => item.isSet));
  const walletConnected = useSelector((state: RootState) => state.wallet.connected);

  // Local state
  const [layersUIToggled, setLayersUIToggled] = useState(false);
  const [displaySettingsToggled, setDisplaySettingsToggled] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  // Refs
  const inputRef = useRef<HTMLDivElement>(null);
  const initialAttunementRef = useRef(0);
  const prevSeedRef = useRef(seed);
  const prevModNumberRef = useRef(modNumber);
  const prevAttunementNumberRef = useRef(attunementNumber);
  const updateQueueItemTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Derived state
  const totalPages = Math.ceil(queueItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = queueItems.slice(startIndex, endIndex);

  // Callbacks
  const endSelection = useCallback(() => {
    if (isSelecting) {
      setIsSelecting(false);
    }
  }, [isSelecting]);

  const selectNextUnsetQueueItem = useCallback(() => {
    const nextUnsetIndex = queueItems.findIndex(item => item.seed === BigInt(0));
    if (nextUnsetIndex !== -1) {
      dispatch(selectedIndex(nextUnsetIndex));
      const newPage = Math.floor(nextUnsetIndex / itemsPerPage) + 1;
      dispatch(setCurrentPage(newPage));
    }
  }, [queueItems, itemsPerPage, dispatch]);

  const handleEditorInteraction = useCallback(() => {
    if (selectedQueueIndex === null && seed !== BigInt(0)) {
      selectNextUnsetQueueItem();
    }
  }, [selectedQueueIndex, seed, selectNextUnsetQueueItem]);

  const enableSeedResetButton = useCallback(() => {
    if (selectedQueueIndex === null) {
      return editorSeed !== '0';
    }
    
    if (selectedQueueIndex >= queueItems.length) {
      return false;
    }
    
    const selectedItem = queueItems[selectedQueueIndex];
    const currentSeed = selectedItem.newSeed || selectedItem.seed;
    
    return editorSeed !== currentSeed;
  }, [selectedQueueIndex, queueItems, editorSeed]);

  const isSelectedItemLocked = useCallback(() => {
    if (selectedQueueIndex === null || selectedQueueIndex >= queueItems.length) return false;
    return queueItems[selectedQueueIndex].locked;
  }, [selectedQueueIndex, queueItems]);

  const handleResetEditorSeed = useCallback(() => {
    if (isSelectedItemLocked()) return;
  
    if (selectedQueueIndex === null) {
      dispatch(resetEditorSeed('0'));
    } else {
      const selectedItem = queueItems[selectedQueueIndex];
      const seedToReset = selectedItem.newSeed || selectedItem.seed;
      dispatch(resetEditorSeed(seedToReset));
    }
  }, [dispatch, selectedQueueIndex, queueItems, isSelectedItemLocked]);

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
      dispatch(resetEditorChangedStatus());
      selectNextUnsetQueueItem();
    }
  }, [selectedQueueIndex, hasEditorChanges, editorSeed, editorMod, editorAttunement, dispatch]);

  const isSetQueueItemEnabled = useCallback(() => {
    return selectedQueueIndex !== null && hasEditorChanges;
  }, [selectedQueueIndex, hasEditorChanges]);

  const resetEditorToDefaults = useCallback(() => {
    dispatch(setEditorSeed('0'));
    dispatch(setEditorMod("000000000000000"));
    dispatch(setEditorAttunement("0"));
  }, [dispatch]);

  const handleSeedChange = useCallback(() => {
    if (selectedQueueIndex === null) {
      dispatch(selectNextUnsetItem());
    }
  }, [selectedQueueIndex, dispatch]);

  const debouncedUpdateQueueItem = useCallback(() => {
    if (updateQueueItemTimeoutRef.current) {
      clearTimeout(updateQueueItemTimeoutRef.current);
    }
    updateQueueItemTimeoutRef.current = setTimeout(() => {
      if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
        const currentItem = queueItems[selectedQueueIndex];
        if (seed.toString() !== prevSeedRef.current ||
            modNumber !== prevModNumberRef.current ||
            attunementNumber !== prevAttunementNumberRef.current) {
          dispatch(updateQueueItem({
            index: selectedQueueIndex,
            item: {
              newSeed: seed.toString(),
              modNumber,
              attunementNumber
            }
          }));
          prevSeedRef.current = seed.toString();
          prevModNumberRef.current = modNumber;
          prevAttunementNumberRef.current = attunementNumber;
        }
      }
    }, 300); // Debounce for 300ms
  }, [seed, modNumber, attunementNumber, selectedQueueIndex, queueItems, dispatch]);

  const updateQueueItemWithSeed = useCallback((seed: string) => {
    if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
      const currentItem = queueItems[selectedQueueIndex];
      if (currentItem.newSeed !== seed) {
        dispatch(updateQueueItem({
          index: selectedQueueIndex,
          item: { newSeed: seed }
        }));
      }
    }
  }, [selectedQueueIndex, queueItems, dispatch]);

  // Event handlers
  const handleQueueItemSelect = (index: number) => {
    if (index >= 0 && index < queueItems.length) {
      if (index === selectedQueueIndex) {
        dispatch(selectedIndex(null));
        dispatch(resetEditorState());
      } else {
        dispatch(selectedIndex(index));
        const selectedItem = queueItems[index];
        const isSet = selectedItem.isSet;
        dispatch(setEditorState({
          seed: isSet ? selectedItem.newSeed || selectedItem.seed : selectedItem.seed || '0',
          mod: isSet ? selectedItem.newMod || selectedItem.modNumber : selectedItem.modNumber || "000000000000000",
          attunement: isSet ? selectedItem.newAttunement ?? selectedItem.attunementNumber : selectedItem.attunementNumber ?? 0
        }));
      }
  
      dispatch(resetEditorChangedStatus());
      const newPage = Math.floor(index / itemsPerPage) + 1;
      dispatch(setCurrentPage(newPage));
    } else {
      dispatch(selectedIndex(null));
      dispatch(resetEditorState());
    }
  };

  const handleQueueItemReset = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    dispatch(resetQueueItem(index));
    dispatch(updateQueueOrder());
    dispatch(selectNextUnsetItem());

    if (index === selectedQueueIndex) {
      dispatch(setEditorSeed({ seed: queueItems[index].seed, updateChanges: false }));
      dispatch(setEditorMod({ modNumber: queueItems[index].modNumber || "000000000000000", updateChanges: false }));
      dispatch(setEditorAttunement({ attunementNumber: queueItems[index].attunementNumber || 0, updateChanges: false }));
      dispatch(resetEditorChangedStatus());
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setCurrentPage(newPage));
    }
  };

  const goToFirstPage = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).classList.contains('page-value')) {
      handlePageChange(1);
    }
  };

  const handleSeedInputChange = (updatedSeed: string) => {
    if (!isSelectedItemLocked()) {
      dispatch(setEditorSeed({ seed: updatedSeed, updateChanges: true }));
    }
  };

  const handleResetEditorState = () => {
    if (!isSelectedItemLocked()) {
      dispatch(resetEditorState());
    }
  };

  const handleInscribeClick = () => {
    if (isQueueModified) {
      dispatch(setShowInscribeModal(true));
    }
  };

  const handleRandomizeBits = () => {
    if (!isSelectedItemLocked()) {
      dispatch(randomizeBits());
    }
  };

  const handleToggleBit = (index: number) => {
    if (!isSelectedItemLocked()) {
      handleSeedChange();
      dispatch(toggleBit(index));
    }
  };

  const handleConnect = async () => {
    await dispatch(connectWalletAndLoadData());
    dispatch(setCurrentPage(1));
  };

  const handleDisconnect = () => {
    dispatch(setQueueItems([]));
    dispatch(selectedIndex(null));
  };

  // Effects
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

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      endSelection();
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [endSelection]);

  useEffect(() => {
    handleEditorInteraction();
  }, [handleEditorInteraction]);

  useEffect(() => {
    const handleDoubleClickOutside = (event: MouseEvent) => {
      const editorWrapper = document.querySelector('.editor-inner');
      if (editorWrapper) {
        if (!editorWrapper.contains(event.target as Node) || event.target === editorWrapper) {
          dispatch(selectedIndex(null));
          dispatch(resetEditorState());
        }
      }
    };

    document.addEventListener('dblclick', handleDoubleClickOutside);

    return () => {
      document.removeEventListener('dblclick', handleDoubleClickOutside);
    };
  }, [dispatch, resetEditorToDefaults]);

  useEffect(() => {
    if (editorSeed === BigInt(0)) {
      dispatch(prepareToChangeSeed());
    }
  }, [editorSeed, dispatch]);

  useEffect(() => {
    if (seed === '0' && displaySettingsToggled) {
      setDisplaySettingsToggled(false);
    }
  }, [seed, displaySettingsToggled]);

  useEffect(() => {
    if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
      const selectedItem = queueItems[selectedQueueIndex];
      dispatch(setEditorState({
        seed: selectedItem.newSeed || selectedItem.seed,
        mod: selectedItem.newMod || selectedItem.modNumber || "000000000000000",
        attunement: selectedItem.newAttunement ?? selectedItem.attunementNumber ?? 0
      }));
      if (selectedItem.newSeed == editorSeed) {
        dispatch(resetEditorChangedStatus());
      }
    }
  }, [selectedQueueIndex, queueItems, dispatch]);

  useEffect(() => {
    debouncedUpdateQueueItem();
    return () => {
      if (updateQueueItemTimeoutRef.current) {
        clearTimeout(updateQueueItemTimeoutRef.current);
      }
    };
  }, [debouncedUpdateQueueItem]);

  useEffect(() => {
    updateQueueItemWithSeed(seed.toString());
  }, [seed, updateQueueItemWithSeed]);

  useEffect(() => {
    if (!walletConnected) {
      dispatch(selectedIndex(null));
      dispatch(resetEditorState());
    }
  }, [walletConnected, dispatch]);

  // Render functions
  const renderQueueItem = (item: QueueItem, index: number) => {
    const displaySeed = item.isSet ? (item.newSeed || item.seed) : item.seed || '0';
    const isSet = item.isSet;
    const isSeedZero = displaySeed === '0';

    return (
      <li
        className={`
          queue-item
          ${index === selectedQueueIndex ? "selected" : ""}
          ${isSet ? 'set' : ''}
        `}
        key={index}
        onClick={() => handleQueueItemSelect(index)}
      >
        <div className={`queued-seed-number`}>
          <span 
            className={`queue-lock ${item.locked ? 'locked' : ''} ${isSeedZero ? 'disabled' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (!isSeedZero) {
                dispatch(toggleQueueItemLock(index));
              }
            }}
          ></span>
          <strong>{displaySeed}</strong>
          <span 
            className="queue-reset"
            onClick={(e) => {
              e.stopPropagation();
              handleQueueItemReset(e, index);
            }}
          ></span>
        </div>
      </li>
    );
  };

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
                dangerouslySetInnerHTML={{ __html: editorSeed }}
              />
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
                >
                  Random
                </a>
                <a
                  id="layers-ui-button"
                  className={`ui-button advanced shrink z-button ${
                    layersUIToggled ? "selected" : ""
                  } ${isSelectedItemLocked() ? 'disabled' : ''}`}
                  onClick={() => {
                    if (!isSelectedItemLocked()) {
                      setLayersUIToggled(!layersUIToggled)
                      setDisplaySettingsToggled(false)
                    }
                  }}
                >
                  Lr
                </a>
                <a
                  id="display-settings-button"
                  className={`ui-button advanced mod-button shrink z-button ${
                    displaySettingsToggled ? "selected" : ""
                  } ${editorSeed === '0' ? "disabled" : ""} ${isSelectedItemLocked() ? 'disabled' : ''}`}
                  onClick={() => {
                    if (editorSeed !== '0' && !isSelectedItemLocked()) {
                      setLayersUIToggled(false);
                      setDisplaySettingsToggled(!displaySettingsToggled);
                    }
                  }}
                >
                  +
                </a>
              </div>
              <div className={`layer-grid-wrap ${layersUIToggled ? "show" : ""}`}>
                <BitsArray bitsArray={bitsArray} toggleBit={handleToggleBit} />
                <a
                  href="#"
                  className="ui-button reset-button reset z-button show"
                  onClick={() => dispatch(resetEditorState())}
                >
                  Reset
                </a>
              </div>
              <div className={`display-settings-wrap ${displaySettingsToggled ? "show" : ""}`}>
                {selectedQueueIndex !== null && selectedQueueIndex < queueItems.length && (
                  <DisplaySettings
                    isLocked={queueItems[selectedQueueIndex].locked}
                    selectedQueueIndex={selectedQueueIndex}
                    queueItems={queueItems}
                    updateQueueItem={updateQueueItem}
                  />
                )}
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
                >
                  Set Queue Item
                </a>
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
                    <style
                      dangerouslySetInnerHTML={{
                        __html: "#checkmark path{fill:none;stroke:#000;stroke-width:31;stroke-miterlimit:10} ",
                      }}
                    />
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
                  >
                    &lt;
                  </div>
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
                  >
                    &gt;
                  </div>
                </div>
                <ul role="list" className="queue-list">
                  {currentPageItems.map((item, index) => renderQueueItem(item, startIndex + index))}
                </ul>
                <a
                  className={`ui-button inscribe z-button ${
                    isQueueModified ? "" : "disabled"
                  }`}
                  onClick={handleInscribeClick}
                >
                  Inscribe
                  {isQueueModified && (
                    <span className="queue-count">
                      <span>(</span>
                      {queueItems.filter(item => item.isSet).length}
                      <span>)</span>
                    </span>
                  )}
                </a>
              </div>
            </div>
          </>
        </div>
        <div 
          className={`reset-editor ${layersUIToggled || displaySettingsToggled ? '' : 'hidden'}`}
          onClick={() => {
              setLayersUIToggled(false);
              setDisplaySettingsToggled(false);
          }}
        ></div>
      </div>
      <InscribeModal show={showInscribeModal} queueItems={setQueueItems} />
    </>
  );
}
