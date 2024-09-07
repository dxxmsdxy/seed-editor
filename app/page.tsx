"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { useSeed } from "@/context";
import { BitsArray } from "@/components/Bits";
import Artwork from "@/components/Artwork";
import InscribeModal from "@/components/InscribeModal";
import IconEye from "@/public/icons/seeds-editor-icons_eye.svg";
import IconInvert from "@/public/icons/seeds-editor-icons_invert.svg";
import IconFlip from "@/public/icons/seeds-editor-icons_flip.svg";
import IconRemove from "@/public/icons/seeds-editor-icons_remove.svg";
import IconLayers from "@/public/icons/seeds-editor-icons_layers.svg";
import IconRed from "@/public/icons/seeds-editor-icons_red.svg";
import IconBlue from "@/public/icons/seeds-editor-icons_blue.svg";
import IconGreen from "@/public/icons/seeds-editor-icons_green.svg";
import IconCMYK from "@/public/icons/seeds-editor-icons_cmyk.svg";
import IconBolt from "@/public/icons/seeds-editor-icons_bolt.svg";

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
} from '@/store/slices/seedSlice';
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import { RootState } from '@/store/store';
import { setSelectedIndex, updateQueueItem, resetQueueItem, updateQueueOrder, selectNextUnsetItem, initializeQueue, toggleQueueItemLock, setCurrentPage } from '@/store/slices/queueSlice';
import { selectSetQueueItems } from '@/store/slices/queueSlice';
import { useDispatch, useSelector } from 'react-redux';
import { connectWalletAndLoadData } from '@/store/slices/walletSlice';

// Add this custom debounce function at the top of your file or in a separate utils file
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

  const [advancedToggled, setAdvancedToggled] = useState(false);
  const [modToggled, setModToggled] = useState(false);

  const [selectedButtons, setSelectedButtons] = useState<Set<number>>(new Set());

  const [isSelecting, setIsSelecting] = useState(false);
  const [tempSelectedButtons, setTempSelectedButtons] = useState<Set<number>>(new Set());
  const initialSelectionRef = useRef<Set<number>>(new Set());

  const endSelection = useCallback(() => {
    if (isSelecting) {
      setIsSelecting(false);
      setSelectedButtons(tempSelectedButtons);
    }
  }, [isSelecting, tempSelectedButtons]);

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
    const editorElements = document.querySelectorAll('.editor-v2 .options-v2 *');
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
    initialSelectionRef.current = new Set(selectedButtons);
    setTempSelectedButtons(new Set(selectedButtons));
    toggleButton(index);
  }, [selectedButtons, toggleButton]);

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

  const updateModNumber = useCallback(() => {
    const displaySettingsValue = Array.from(selectedButtons)
      .reduce((sum, index) => sum + [256, 128, 64, 32, 16, 8, 4, 2, 1][index], 0)
      .toString()
      .padStart(3, '0');

    const colorValue = sliderValues.color.toString().padStart(3, '0');
    const depthValue = sliderValues.depth.toString().padStart(3, '0');
    const spinValue = sliderValues.spin.toString().padStart(3, '0');
    const tintValue = sliderValues.tint.toString();
    
    // If tint is 0, set tintPercentValue to "00", otherwise calculate as before
    const tintPercentValue = sliderValues.tint === 0
      ? "00"
      : sliderValues["tint%"] === 100 
        ? "99" 
        : sliderValues["tint%"].toString().padStart(2, '0');

    const newModNumber = `${displaySettingsValue}${colorValue}${depthValue}${spinValue}${tintValue}${tintPercentValue}`;
    dispatch(setModNumber(newModNumber));
  }, [selectedButtons, sliderValues, dispatch]);

  useEffect(() => {
    updateModNumber();
  }, [selectedButtons, sliderValues, updateModNumber]);

  const handleQueueItemSelect = (index: number) => {
    if (index === selectedQueueIndex) {
      dispatch(setSelectedIndex(null));
      dispatch(resetSeed());
      resetEditorToDefaults();
      
    } else {
      dispatch(setSelectedIndex(index));
      dispatch(setSeed(queueItems[index].seed.toString()));
      if (queueItems[index].seed !== '0') {
        dispatch(setModNumber(queueItems[index].modNumber || "000000000000000"));
        dispatch(setAttunementNumber(queueItems[index].attunementNumber || initialAttunementRef.current));
        updateUIFromModNumber(queueItems[index].modNumber || "000000000000000");
      } else {
        resetEditorToDefaults();
      }
    }

    // Update the current page to show the selected item
    const newPage = Math.floor(index / itemsPerPage) + 1;
    dispatch(setCurrentPage(newPage));
  };

  const isSelectButtonEnabled = useCallback(() => {
    if (selectedQueueIndex === null) return false;
    
    const currentQueueItem = queueItems[selectedQueueIndex];
    
    // If the item is locked, only allow changes to mod and attunement
    if (currentQueueItem.locked) {
      return modNumber !== (currentQueueItem.modNumber || "000000000000000") ||
             attunementNumber !== (currentQueueItem.attunementNumber ?? initialAttunementRef.current);
    }
    
    // If not locked, allow all changes
    return seed !== currentQueueItem.seed.toString() ||
           modNumber !== (currentQueueItem.modNumber || "000000000000000") ||
           attunementNumber !== (currentQueueItem.attunementNumber ?? initialAttunementRef.current);
  }, [selectedQueueIndex, queueItems, seed, modNumber, attunementNumber]);

  const handleSelectButtonClick = () => {
    if (selectedQueueIndex !== null) {
      const currentItem = queueItems[selectedQueueIndex];
      
      const selectedItem = {
        seed: currentItem.locked ? currentItem.seed : seed,
        modNumber: modNumber !== "000000000000000" ? modNumber : null,
        attunementNumber: attunementNumber !== initialAttunementRef.current ? attunementNumber : null,
        locked: currentItem.locked
      };

      dispatch(updateQueueItem({ index: selectedQueueIndex, item: selectedItem }));
      dispatch(updateQueueOrder());

      // Check if all items are set after updating the current item
      const allItemsSet = queueItems.every((item, index) => 
        index === selectedQueueIndex ? selectedItem.seed !== '0' : item.seed !== '0'
      );

      if (allItemsSet) {
        // If all items are set, clear the selection but don't reset the editor
        dispatch(setSelectedIndex(null));
      } else {
        // If not all items are set, try to select the next unset item
        resetEditorToDefaults();
        dispatch(selectNextUnsetItem());
      }

      // Reset UI toggles
      setAdvancedToggled(false);
      setModToggled(false);
    }
  };

  const handleQueueItemReset = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    dispatch(resetQueueItem(index));
    dispatch(updateQueueOrder());
    dispatch(selectNextUnsetItem());
    updateSavedSeeds();

    resetEditorToDefaults();
    dispatch(setSeed('0'));
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
    setSelectedButtons(newSelectedButtons);
    setTempSelectedButtons(newSelectedButtons); // Update tempSelectedButtons as well

    setSliderValues({
      color: parseInt(modNumber.slice(3, 6), 10),
      depth: parseInt(modNumber.slice(6, 9), 10),
      spin: parseInt(modNumber.slice(9, 12), 10),
      tint: parseInt(modNumber.slice(12, 13), 10),
      "tint%": modNumber.slice(13) === "99" ? 100 : parseInt(modNumber.slice(13), 10)
    });
  };

  const isDefaultAttunement = attunementNumber === initialAttunementRef.current;

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
  }, [modNumber, attunementNumber, selectedButtons, sliderValues]);

  const resetEditorToDefaults = useCallback(() => {
    dispatch(resetSeed());
    dispatch(setModNumber("000000000000000"));
    dispatch(setAttunementNumber(initialAttunementRef.current));
    setSelectedButtons(new Set());
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
      const editorWrapper = document.querySelector('.editor-wrapper-v2');
      if (editorWrapper) {
        // Check if the double-click is outside editor-wrapper-v2 or directly on it
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
    if (selectedQueueIndex === null) return false;
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

  // Effect to handle modToggled state based on seed value
  useEffect(() => {
    if (seed === '0' && modToggled) {
      setModToggled(false);
    }
  }, [seed, modToggled]);

  const renderQueueItem = (item: QueueItem, index: number) => {
    const isSeedZero = item.seed === '0';

    return (
      <li
        className={`queue-item ${
          index === selectedQueueIndex ? "selected" : ""
        } ${!isSeedZero ? 'set' : ''}`}
        key={index}
        onClick={() => handleQueueItemSelect(index)}
      >
        <div className={`queued-seed-number ${!isSeedZero ? 'set' : ''}`}>
          <span 
            className={`queue-lock ${item.locked ? 'locked' : ''} ${isSeedZero ? 'disabled' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (!isSeedZero) {
                dispatch(toggleQueueItemLock(index));
              }
            }}
          ></span>
          <strong>{item.seed}</strong>
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

  const handleConnect = () => {
    dispatch(connectWalletAndLoadData());
  };

  const handleDisconnect = () => {
    dispatch(setWalletConnected(false));
    // Optionally, clear the queue here if needed
  };

  return (
    <>
      <div className="editor-v2">
        <div className="editor-wrapper-v2">
          <div className="seed-indicator-v2">
            <div className="seed-touchable">
              <div className="label navlabel">SEED:</div>
              <div
                ref={inputRef}
                className={`seed navseed ${isSelectedItemLocked() ? 'disabled' : ''}`}
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
                <div className="reset-text-button reset show" onClick={handleResetSeed}>
                  Reset
                </div>
              )}
            </div>
          </div>
          <>
            <div className="options-v2">
              <div
                style={{
                  opacity: 1
                }}
                className="seed-buttons-container"
              >
                <a
                  className={`ui-button randomize z-button ${isSelectedItemLocked() ? 'disabled' : ''}`}
                  onClick={handleRandomizeBits}
                >
                  Random
                </a>
                <a
                  className={`ui-button advanced shrink z-button ${
                    advancedToggled ? "selected" : ""
                  } ${isSelectedItemLocked() ? 'disabled' : ''}`}
                  onClick={() => {
                    if (!isSelectedItemLocked()) {
                      setAdvancedToggled(!advancedToggled)
                      setModToggled(false)
                    }
                  }}
                >
                  Lr
                </a>
                <a
                  className={`ui-button advanced mod-button shrink z-button ${
                    modToggled ? "selected" : ""
                  } ${seed !== '0' ? "" : "disabled"} ${isSelectedItemLocked() ? 'disabled' : ''}`}
                  onClick={() => {
                    if (seed !== '0' && !isSelectedItemLocked()) {
                      setAdvancedToggled(false);
                      setModToggled(!modToggled);
                    }
                  }}
                >
                  +
                </a>
              </div>
              <div className={`grid-wrap ${advancedToggled ? "show" : ""}`}>
                <BitsArray bitsArray={bitsArray} toggleBit={handleToggleBit} />
                <a
                  href="#"
                  className="ui-button reset-button reset z-button show"
                  onClick={() => dispatch(resetSeed())}
                >
                  Reset
                </a>
              </div>
              <div className={`settings-wrap ${modToggled ? "show" : ""}`}>
                <div className={`attunement-selector ${isDefaultAttunement ? 'default' : ''}`}>
                  <div className="attune-nav prev" onClick={decrementAttunement}>&lt;</div>
                  <div 
                    className="attunement-label-container"
                    onClick={resetAttunement}
                  >
                    <div className="attunement-label">
                      Attunement: 
                      <span
                        ref={attunementInputRef}
                        className="attunement-value"
                        contentEditable="true"
                        inputMode="numeric"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectElementContents(e.currentTarget);
                        }}
                        onBlur={(e) => {
                          e.preventDefault();
                          const newValue = parseInt(e.currentTarget.textContent || "0", 10);
                          dispatch(setAttunementNumber(isNaN(newValue) ? 0 : newValue));
                          e.currentTarget.textContent = attunementNumber.toString();
                          clearSelection();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            e.currentTarget.blur();
                          }
                        }}
                      >{attunementNumber}</span>
                    </div>
                  </div>
                  <div className="attune-nav next" onClick={incrementAttunement}>&gt;</div>
                </div>
                <div className="display-settings-grid">
                  {[IconEye, IconRemove, IconInvert, IconFlip, IconBolt, IconCMYK, IconRed, IconBlue, IconGreen].map((Icon, index) => (
                    <a
                      key={index}
                      href="#" 
                      className={`btn-display-setting ${selectedButtons.has(index) ? 'selected' : ''}`}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        startSelection(index);
                      }}
                      onMouseEnter={() => {
                        if (isSelecting) {
                          toggleButton(index);
                        }
                      }}
                      onMouseUp={(e) => e.preventDefault()} // Prevent default to avoid text selection
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
                <RangeSlider name="color" value={sliderValues.color} onChange={debouncedHandleSliderChange} min={0} max={999} defaultValue={0} />
                <RangeSlider name="depth" value={sliderValues.depth} onChange={debouncedHandleSliderChange} min={0} max={999} defaultValue={0} />
                <RangeSlider name="spin" value={sliderValues.spin} onChange={debouncedHandleSliderChange} min={0} max={999} defaultValue={0} />
                <RangeSlider name="tint" value={sliderValues.tint} onChange={debouncedHandleSliderChange} min={0} max={9} step={1} defaultValue={0} />
                <RangeSlider 
                  name="tint%" 
                  value={sliderValues["tint%"]} 
                  onChange={debouncedHandleSliderChange} 
                  min={0} 
                  max={100} 
                  disabled={sliderValues.tint === 0}
                  defaultValue={100}
                  checkDefault={false}
                />
                <div className={`mod-number-container ${isDefaultModNumber ? 'default' : ''}`}>
                  <div className="mod-number">
                    <span className="mod-label">Mod:</span>
                    <span
                      ref={modNumberInputRef}
                      className="mod-number-input"
                      contentEditable="true"
                      inputMode="numeric"
                      onClick={(e) => selectElementContents(e.currentTarget)}
                      onBlur={(e) => {
                        e.preventDefault();
                        dispatch(setModNumber(e.currentTarget.textContent || ""));
                        e.currentTarget.textContent = modNumber; // Update the input to reflect the current modNumber
                        clearSelection();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          e.currentTarget.blur();
                        }
                      }}
                    >
                      {modNumber}
                    </span>
                    <span className="mod-reset" onClick={() => {
                      dispatch(setModNumber("000000000000000"));
                      updateUIFromModNumber("000000000000000");
                    }}>Reset</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="ui-button reset-button reset z-button show"
                  onClick={() => dispatch(resetSeed())}
                >
                  Reset
                </a>
              </div>
            </div>
            <div className="artwork-preview-v2">
              <div
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="svg-ratio-v2"
              >
                <div className="svg-image-container-v2">
                  <Artwork seed={seed} />
                </div>
              </div>
              <div className="select-button-container">
                <a
                  className={`ui-button select z-button ${
                    isSelectButtonEnabled() ? "" : "disabled"
                  }`}
                  onClick={handleSelectButtonClick}
                >
                  Select
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
            <div className={`options-v2 right ${(advancedToggled || modToggled) ? 'deactivated' : ''}`}>
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
                <ul role="list" className="seed-queue">
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
      </div>
      <InscribeModal show={showInscribeModal} queueItems={setQueueItems} />
    </>
  );
}

interface RangeSliderProps {
  name: string;
  value: number;
  onChange: (name: string, value: number) => void;
  min: number;
  max: number;
  step?: number;
  disabled?: boolean;
  displayValue?: (value: number) => string;
  defaultValue?: number;
  checkDefault?: boolean;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ 
  name, 
  value, 
  onChange, 
  min, 
  max, 
  step = 1, 
  disabled = false, 
  displayValue = (value) => value.toString(), 
  defaultValue = 0, 
  checkDefault = true
}) => {
  const isDefault = checkDefault ? value === defaultValue : false;
  const [localValue, setLocalValue] = useState(value);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setLocalValue(newValue);
    onChange(name, newValue);
  };

  return (
    <div className={`setting-slider ${disabled ? 'disabled' : ''} ${isDefault && !isActive ? 'default' : ''}`}>
      <div className="setting-label">{name}:</div>
      <div className="range-slider-container">
        <div className="range-slider">
          <input
            className="range-slider__range"
            type="range"
            value={localValue}
            min={min}
            max={max}
            step={step}
            onChange={handleChange}
            disabled={disabled}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onTouchStart={() => setIsActive(true)}
            onTouchEnd={() => setIsActive(false)}
          />
          <span className="range-slider__value">
            {displayValue(localValue)}
          </span>
        </div>
      </div>
    </div>
  );
};

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