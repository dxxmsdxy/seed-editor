"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { useSeed } from "@/context";
import { BitsArray } from "@/components/Editor/LayersUI";
import DisplaySettings from '@/components/Editor/DisplaySettingsUI';
import Artwork from "@/components/Artwork";
import InscribeModal from "@/components/Editor/InscribeModal";

import { useAppSelector, useAppDispatch } from '@/app/hooks';
import {
  setSeed,
  setModNumber,
  setAttunementNumber,
  resetSeed,
  toggleBit,
  randomizeBits,
  saveSeed,
  deleteSaved,
  setSavedSeeds,
  prepareToChangeSeed,
  resetUnsavedChanges,
  updateDisplaySetting,
  updateSliderValue,
  calculateModNumber,
} from '@/store/slices/editorSlice';
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import { RootState } from '@/store/store';
import { setSelectedIndex, updateQueueItem, resetQueueItem, updateQueueOrder, selectNextUnsetItem, initializeQueue, toggleQueueItemLock, setCurrentPage } from '@/store/slices/queueSlice';
import { selectSetQueueItems } from '@/store/slices/queueSlice';
import { useDispatch, useSelector } from 'react-redux';
import { connectWalletAndLoadData } from '@/store/slices/walletSlice';

// Custom debounce function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

interface QueueItem {
  seed: bigint;
  modNumber: string | null;
  attunementNumber: number | null;
  locked: boolean;
}

export default function Home() {
  const dispatch = useAppDispatch();
  const { seed, bitsArray, modNumber, attunementNumber, savedSeeds } = useAppSelector((state: RootState) => state.seed);
  const { items: queueItems, selectedIndex: selectedQueueIndex, currentPage, itemsPerPage } = useAppSelector((state: RootState) => state.queue);
  const showInscribeModal = useAppSelector((state) => state.modal.showInscribeModal);
  const setQueueItems = useAppSelector(selectSetQueueItems);
  const isQueueModified = setQueueItems.length > 0;
  const walletConnected = useSelector((state: RootState) => state.wallet.connected);
  const hasUnsavedChanges = useAppSelector((state) => state.seed.hasUnsavedChanges);

  const [layersUIToggled, setLayersUIToggled] = useState(false);
  const [displaySettingsToggled, setDisplaySettingsToggled] = useState(false);

  const [isSelecting, setIsSelecting] = useState(false);
  const [tempSelectedButtons, setTempSelectedButtons] = useState<Set<number>>(new Set());
  const initialSelectionRef = useRef<Set<number>>(new Set());

  const endSelection = useCallback(() => {
    if (isSelecting) {
      setIsSelecting(false);
    }
  }, [isSelecting]);

  const selectNextUnsetQueueItem = useCallback(() => {
    const nextUnsetIndex = queueItems.findIndex(item => item.seed === BigInt(0));
    if (nextUnsetIndex !== -1) {
      dispatch(setSelectedIndex(nextUnsetIndex));
      // Update the current page to show the selected item
      const newPage = Math.floor(nextUnsetIndex / itemsPerPage) + 1;
      dispatch(setCurrentPage(newPage));
    }
  }, [queueItems, itemsPerPage, dispatch]);

  const handleEditorInteraction = useCallback(() => {
    if (selectedQueueIndex === null && seed !== BigInt(0)) {
      selectNextUnsetQueueItem();
    }
  }, [selectedQueueIndex, seed, selectNextUnsetQueueItem]);

  useEffect(() => {
    // Set up event listeners for editor interactions
    const editorElements = document.querySelectorAll('.editor .app-pane *');
    editorElements.forEach(element => {
      element.addEventListener('click', handleEditorInteraction);
    });

    return () => {
      // Clean up event listeners
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

  const toggleButton = useCallback((index: number) => {
    setTempSelectedButtons(prev => {
      const newSet = new Set(prev);
      if (initialSelectionRef.current.has(index)) {
        newSet.delete(index);
      } else {
        // Limit the color lens classes to one active at a time
        if (index >= 6 && index <= 8) {
          [6, 7, 8].forEach(i => newSet.delete(i));
        }
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  const startSelection = useCallback((index: number) => {
    setIsSelecting(true);
    initialSelectionRef.current = new Set();
    setTempSelectedButtons(new Set());
    toggleButton(index);
  }, [toggleButton]);

  const debouncedHandleSliderChange = useCallback(
    debounce((name: string, value: number) => {
      setSliderValues(prev => ({ ...prev, [name]: value }));
    }, 100),
    []
  );

  const incrementAttunement = () => {
    dispatch(setAttunementNumber((prevAttunement) => {
      const newAttunement = prevAttunement === 9 ? 0 : prevAttunement + 1;
      return newAttunement;
    }));
  };

  const decrementAttunement = () => {
    dispatch(setAttunementNumber((prevAttunement) => {
      const newAttunement = prevAttunement === 0 ? 9 : prevAttunement - 1;
      return newAttunement;
    }));
  };

  const [sliderValues, setSliderValues] = useState({
    attune: 0,
    color: 0,
    depth: 0,
    spin: 0,
    tint: 0,
    "tint%": 100
  });

  const initialAttunementRef = useRef(0);

  const handleQueueItemSelect = (index: number) => {
    if (index >= 0 && index < queueItems.length) {
      if (index === selectedQueueIndex) {
        dispatch(setSelectedIndex(null));
        dispatch(resetSeed());
        resetEditorToDefaults();
      } else {
        dispatch(setSelectedIndex(index));
        const selectedItem = queueItems[index];
        dispatch(setSeed(selectedItem.newSeed || selectedItem.seed));
        dispatch(setModNumber(selectedItem.newModNumber || selectedItem.modNumber || "000000000000000"));
        dispatch(setAttunementNumber(selectedItem.newAttunementNumber || selectedItem.attunementNumber || initialAttunementRef.current));
        updateUIFromModNumber(selectedItem.newModNumber || selectedItem.modNumber || "000000000000000");
      }

      // Update the current page to show the selected item
      const newPage = Math.floor(index / itemsPerPage) + 1;
      dispatch(setCurrentPage(newPage));
    } else {
      dispatch(setSelectedIndex(null));
      dispatch(resetSeed());
    }
  };

  const isSelectButtonEnabled = () => {
    return hasUnsavedChanges && seed !== '0';
  };

  const handleSelectButtonClick = () => {
    if (isSelectButtonEnabled()) {
      handleSetQueueItem();
      dispatch(resetUnsavedChanges());
    }
  };

  const handleSetQueueItem = useCallback(() => {
    if (selectedQueueIndex !== null) {
      dispatch(updateQueueItem({
        index: selectedQueueIndex,
        item: {
          newSeed: seed,
          newModNumber: modNumber,
          newAttunementNumber: attunementNumber,
        },
        isExplicitSet: true,
      }));
    }
  }, [dispatch, selectedQueueIndex, seed, modNumber, attunementNumber]);

  const handleQueueItemReset = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    dispatch(resetQueueItem(index));
    dispatch(updateQueueOrder());
    dispatch(selectNextUnsetItem());
    updateSavedSeeds();

    if (index === selectedQueueIndex) {
      resetEditorToDefaults();
      dispatch(setSeed('0'));
    }
  };

  const handleQueueItemLock = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    dispatch(toggleQueueItemLock(index));
  };

  const updateSavedSeeds = () => {
    const validSeeds = queueItems
      .filter(item => item.seed !== BigInt(0))
      .map(item => ({ seed: item.seed.toString() }));
    dispatch(setSavedSeeds(validSeeds));
  };

  useEffect(() => {
    const validSeeds = queueItems
      .filter(item => item.seed !== BigInt(0))
      .map(item => ({ seed: item.seed.toString() }));
    dispatch(setSavedSeeds(validSeeds));
  }, [queueItems, dispatch]);

  const isDefaultModNumber = modNumber === "000000000000000";

  const updateUIFromModNumber = (modNumber: string) => {
    // Parse the mod number and update UI state
    const displaySettings = parseInt(modNumber.slice(0, 3), 10);
    const newSelectedButtons = new Set<number>();
    [256, 128, 64, 32, 16, 8, 4, 2, 1].forEach((value, index) => {
      if (displaySettings & value) newSelectedButtons.add(index);
    });
    setTempSelectedButtons(newSelectedButtons);

    setSliderValues({
      color: parseInt(modNumber.slice(3, 6), 10),
      depth: parseInt(modNumber.slice(6, 9), 10),
      spin: parseInt(modNumber.slice(9, 12), 10),
      tint: parseInt(modNumber.slice(12, 13), 10),
      "tint%": modNumber.slice(13) === "99" ? 100 : parseInt(modNumber.slice(13), 10)
    });
  };

  

  const resetAttunement = (e: React.MouseEvent) => {
    // Check if the click target is not the attunement-label or its children
    if (!e.currentTarget.querySelector('.attunement-label')?.contains(e.target as Node)) {
      dispatch(setAttunementNumber(initialAttunementRef.current));
    }
  };

  const isSeedSet = seed !== "0";

  const modNumberInputRef = useRef<HTMLSpanElement>(null);
  const attunementInputRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Update UI elements based on state changes
    if (modNumberInputRef.current) {
      modNumberInputRef.current.textContent = modNumber;
    }
    if (attunementInputRef.current) {
      attunementInputRef.current.textContent = attunementNumber.toString();
    }
    // Update other UI elements as needed
  }, [modNumber, attunementNumber]);

  const resetEditorToDefaults = useCallback(() => {
    dispatch(resetSeed());
    dispatch(setModNumber("000000000000000"));
    dispatch(setAttunementNumber(initialAttunementRef.current));
    setTempSelectedButtons(new Set());
    setSliderValues({
      attune: 0,
      color: 0,
      depth: 0,
      spin: 0,
      tint: 0,
      "tint%": 100
    });
  }, [dispatch, initialAttunementRef]);

  useEffect(() => {
    // Call handleEditorInteraction when the component mounts
    handleEditorInteraction();
  }, [handleEditorInteraction]);

  const totalPages = Math.ceil(queueItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = queueItems.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setCurrentPage(newPage));
    }
  };

  const goToFirstPage = (e: React.MouseEvent) => {
    // Check if the click target is not the page-value input
    if (!(e.target as HTMLElement).classList.contains('page-value')) {
      handlePageChange(1);
    }
  };

  useEffect(() => {
    const handleDoubleClickOutside = (event: MouseEvent) => {
      const editorWrapper = document.querySelector('.editor-inner');
      if (editorWrapper) {
        // Check if the double-click is outside editor-inner or directly on it
        if (!editorWrapper.contains(event.target as Node) || event.target === editorWrapper) {
          // Deselect the queue item
          dispatch(setSelectedIndex(null));
          resetEditorToDefaults();
        }
      }
    };

    document.addEventListener('dblclick', handleDoubleClickOutside);

    return () => {
      document.removeEventListener('dblclick', handleDoubleClickOutside);
    };
  }, [dispatch, resetEditorToDefaults]);

  const isSelectedItemLocked = useCallback(() => {
    if (selectedQueueIndex === null || selectedQueueIndex >= queueItems.length) return false;
    return queueItems[selectedQueueIndex].locked;
  }, [selectedQueueIndex, queueItems]);

  const inputRef = useRef<HTMLDivElement>(null);

  const handleSeedInputChange = (updatedSeed: string) => {
    if (!isSelectedItemLocked()) {
      dispatch(setSeed(updatedSeed));
      
      if (selectedQueueIndex === null || queueItems[selectedQueueIndex].seed === '0') {
        const nextUnsetIndex = queueItems.findIndex(item => item.seed === '0');
        if (nextUnsetIndex !== -1) {
          dispatch(setSelectedIndex(nextUnsetIndex));
        }
      }
    }
  };

  const handleResetSeed = () => {
    if (!isSelectedItemLocked()) {
      dispatch(resetSeed());
      updateQueueItemWithSeed('0');
    }
  };

  const handleInscribeClick = () => {
    if (isQueueModified) {
      dispatch(setShowInscribeModal(true));
    }
  };

  const handleSeedChange = useCallback(() => {
    if (selectedQueueIndex === null) {
      dispatch(selectNextUnsetItem());
    }
  }, [selectedQueueIndex, dispatch]);

  useEffect(() => {
    if (seed === BigInt(0)) {
      dispatch(prepareToChangeSeed());
    }
  }, [seed, dispatch]);

  // Modify the randomizeBits and toggleBit handlers
  const handleRandomizeBits = () => {
    if (!isSelectedItemLocked()) {
      handleSeedChange();
      dispatch(randomizeBits());
    }
  };

  const handleToggleBit = (index: number) => {
    if (!isSelectedItemLocked()) {
      handleSeedChange();
      dispatch(toggleBit(index));
    }
  };

  useEffect(() => {
    // Initialize the queue when the component mounts
    dispatch(initializeQueue());
  }, [dispatch]);

  // Effect to handle displaySettingsToggled state based on seed value
  useEffect(() => {
    if (seed === '0' && displaySettingsToggled) {
      setDisplaySettingsToggled(false);
    }
  }, [seed, displaySettingsToggled]);

  const renderQueueItem = (item: QueueItem, index: number) => {
    const displaySeed = item.newSeed !== null ? item.newSeed : item.seed;
    const isSet = item.isSet;
    const isSeedZero = displaySeed === '0';

    return (
      <li
        className={`queue-item ${
          index === selectedQueueIndex ? "selected" : ""
        } ${isSet ? 'set' : ''}`}
        key={index}
        onClick={() => handleQueueItemSelect(index)}
      >
        <div className={`queued-seed-number ${isSet ? 'set' : ''}`}>
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
            className="queue-remove"
            onClick={(e) => {
              e.stopPropagation();
              handleQueueItemReset(e, index);
            }}
          ></span>
        </div>
      </li>
    );
  };

  const handleConnect = async () => {
    await dispatch(connectWalletAndLoadData());
    // Force a re-render of the queue items
    dispatch(setCurrentPage(1));
  };

  const handleDisconnect = () => {
    dispatch(setWalletConnected(false));
    dispatch(setQueueItems([])); // Clear the queue when disconnecting
    dispatch(setSelectedIndex(null)); // Reset the selected index
  };

  const prevSeedRef = useRef(seed);
  const prevModNumberRef = useRef(modNumber);
    const prevAttunementNumberRef = useRef(attunementNumber);
  const updateQueueItemTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    debouncedUpdateQueueItem();
    return () => {
      if (updateQueueItemTimeoutRef.current) {
        clearTimeout(updateQueueItemTimeoutRef.current);
      }
    };
  }, [debouncedUpdateQueueItem]);

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

  useEffect(() => {
    updateQueueItemWithSeed(seed.toString());
  }, [seed, updateQueueItemWithSeed]);

  // Add this check
  useEffect(() => {
    if (!walletConnected || queueItems.length === 0) {
      dispatch(setSelectedIndex(null));
      dispatch(resetSeed());
    }
  }, [walletConnected, queueItems, dispatch]);

  return (
    <>
      <div className="editor">
        <div className="editor-inner">
          <div className="seed-indicator">
            <div className="seed-touchable">
              <div className="label seed-label">SEED:</div>
              <div
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
                dangerouslySetInnerHTML={{ __html: seed }}
              />
              {seed !== '0' && !isSelectedItemLocked() && (
                <div className="reset-seed-button reset show" onClick={handleResetSeed}>
                  Reset
                </div>
              )}
            </div>
          </div>
          <>
            <div className="app-pane">
              <div
                style={{
                  opacity: 1
                }}
                className="basic-actions"
              >
                <a
                  className={`ui-button randomize z-button ${isSelectedItemLocked() ? 'disabled' : ''}`}
                  onClick={handleRandomizeBits}
                >
                  Random
                </a>
                <a
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
                  className={`ui-button advanced mod-button shrink z-button ${
                    displaySettingsToggled ? "selected" : ""
                  } ${seed !== '0' ? "" : "disabled"} ${isSelectedItemLocked() ? 'disabled' : ''}`}
                  onClick={() => {
                    if (seed !== '0' && !isSelectedItemLocked()) {
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
                  onClick={() => dispatch(resetSeed())}
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
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="svg-aspect-ratio"
              >
                <div className="svg-container">
                  <Artwork seed={seed} />
                </div>
              </div>
              <div className="set-queue-item-container">
                <a
                  id="set-queue-item-button"
                  className={`ui-button select z-button ${
                    isSelectButtonEnabled() ? "" : "disabled"
                  }`}
                  onClick={handleSelectButtonClick}
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
                    // style={{ enableBackground: "new 0 0 442.7 312.6" }}
                    xmlSpace="preserve"
                  >
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "#checkmark path{fill:none;stroke:#000;stroke-width:31;stroke-miterlimit:10} ",
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
                      {queueItems.filter(item => item.seed !== '0').length}
                      <span>)</span>
                    </span>
                  )}
                </a>
              </div>
            </div>
          </>
        </div>
        <div 
          className="btn-centralize"
          className={`btn-centralize ${layersUIToggled || displaySettingsToggled ? '' : 'hidden'}`}
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