"use client";
import React, { useRef, useCallback, useEffect, useState, useMemo } from "react";
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { debounce } from 'lodash';

import Artwork from "@/components/Artwork";
import Details from '@/components/Artwork/Details';
import Queue from '@/components/Editor/Queue';
import { BitsArray } from "@/components/Editor/LayersUI";
import DisplaySettings from '@/components/Editor/DisplaySettingsUI';
import InscribeModal from "@/components/Editor/InscribeModal";
import DiagnosticsPanel from "@/components/Editor/DiagnosticsPanel";

import { 
  updateEditorState,
  toggleBit,
  resetEditorState,
  overrideAttunement,
  resetAttunementOverride,
  undo, 
  redo, 
  selectEditorSeed,
  selectEditorMod,
  selectEditorAttunement,
  selectIsAttunementOverridden,
  selectBitsArray,
  selectModValues,
  selectDisplaySettings,
  selectHasEditorChanges,
  setUrlParams,
  setUIVisibility,
  selectUIVisibility,
  toggleColorAnimationPause,
  toggleDepthAnimationPause,
  toggleSpinAnimationPause,
} from '@/store/slices/newEditorSlice';
import { initializeQueue, setSelectedIndex, updateQueueItem,selectSetQueueItems } from '@/store/slices/newQueueSlice';
import { selectElementContents, clearSelection, randomizeBits } from '@/lib/newUtils';
import PreviewLoader from '@/components/Artwork/PreviewLoader';
import { calculateMostFrequentNumeral } from "@/lib/utils/artwork/helpers";




const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  

  // REDUX STATE ------------------------------------
  const editorSeed = useSelector(selectEditorSeed);
  const editorMod = useSelector(selectEditorMod);
  const editorAttunement = useSelector(selectEditorAttunement);
  const isAttunementOverridden = useSelector(selectIsAttunementOverridden);
  const bitsArray = useSelector(selectBitsArray);
  const modValues = useSelector(selectModValues);
  const displaySettings = useSelector(selectDisplaySettings);
  const hasEditorChanges = useSelector((state: RootState) => 
    selectHasEditorChanges(state, { seed: editorSeed, mod: editorMod, attunement: editorAttunement })
  );
  const uiVisibility = useSelector(selectUIVisibility);

  const { items: queueItems, selectedIndex: selectedQueueIndex} = useAppSelector((state: RootState) => state.newQueue);
  const showInscribeModal = useAppSelector((state) => state.modal.showInscribeModal);
  const getSetQueueItems = useAppSelector(selectSetQueueItems);
  const walletConnected = useSelector((state: RootState) => state.wallet.connected);

  // REFS -------------------------------------------
  const artRef = useRef<SVGSVGElement | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const seedInputRef = useRef<HTMLDivElement>(null);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  // CHECKS -----------------------------------------
  const [isLoading, setIsLoading] = useState(false);
  const [isArtworkFocused, setIsArtworkFocused] = useState(false);
  const [isOverlayToggled, setIsOverlayToggled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // CALLBACKS --------------------------------------
  const isSelectedItemLocked = useCallback(() => {
    if (selectedQueueIndex === null || selectedQueueIndex >= queueItems.length) return false;
    return queueItems[selectedQueueIndex].locked;
  }, [selectedQueueIndex, queueItems]);

  const handleSetQueueItem = useCallback(() => {
    if (selectedQueueIndex !== null && !isSelectedItemLocked()) {
      dispatch(updateQueueItem({
        index: selectedQueueIndex,
        item: {
          newSeed: editorSeed,
          newMod: editorMod,
          newAttunement: editorAttunement,
        },
        isExplicitSet: true
      }));
    }
  }, [dispatch, selectedQueueIndex, isSelectedItemLocked, editorSeed, editorMod, editorAttunement]);

  // Handle SVG overlay mouse interactions
  const handleArtworkInteraction = useCallback(() => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (isArtworkFocused) {
        setIsOverlayToggled(false);
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

  // Toggle the SVG Details overlay element
  const toggleArtworkOverlay = useCallback(() => {
    setIsOverlayToggled(prev => !prev);
  }, []);

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
        newAttunement = parseInt(parts[2]).toString();
        dispatch(overrideAttunement(newAttunement));
      }
    }

    dispatch(updateEditorState({ seed: newSeed, mod: newMod, attunement: newAttunement }));
  }, [dispatch, editorMod, editorAttunement]);

  const handleResetEditorSeed = useCallback(() => {
    if (!isSelectedItemLocked()) {
      dispatch(resetEditorState());
    }
  }, [dispatch, isSelectedItemLocked]);

  const handleToggleBit = (index: number) => {
    if (!isSelectedItemLocked()) {
      toggleBit(index);
    }
  };

  const handleRandomizeBits = useCallback(() => {
    if (!isSelectedItemLocked()) {
      const { bitArray, newSeed } = randomizeBits();
      dispatch(updateEditorState({ seed: newSeed }));
    }
  }, [dispatch, isSelectedItemLocked]);

  // Handle the special Ctrl + Shift + Copy functionality
  const handleSpecialCopy = useCallback((event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
      event.preventDefault();
      let copyText = editorSeed;

      if (editorMod !== '000000000000000') {
        copyText += '.' + editorMod;
      }

      const calculatedAttunement = calculateMostFrequentNumeral(BigInt(editorSeed));
      if (Number(editorAttunement) !== calculatedAttunement) {
        copyText += ':' + editorAttunement;
      }

      navigator.clipboard.writeText(copyText);
    }
  }, [editorSeed, editorMod, editorAttunement]);

  const handleLayersUIToggle = useCallback(() => {
    dispatch(setUIVisibility(uiVisibility === 'layers' ? 'none' : 'layers'));
  }, [dispatch, uiVisibility]);

  const handleDisplaySettingsToggle = useCallback(() => {
    dispatch(setUIVisibility(uiVisibility === 'displaySettings' ? 'none' : 'displaySettings'));
  }, [dispatch, uiVisibility]);

  const togglePlay = useCallback(() => {},[]);

  // EFFECTS ----------------------------------------

  useEffect(() => {
    const handleResetSelectionClick = (event: MouseEvent) => {
      const editorWrapper = document.querySelector('.editor-inner');
      const navbar = document.querySelector('.navbar');
      const inscribeModal = document.querySelector('.mint-modal'); 
      const artworkContainer = document.querySelector('.svg-container');
      
      if (
        editorWrapper && 
        navbar && 
        !editorWrapper.contains(event.target as Node) && 
        !navbar.contains(event.target as Node) && 
        (!inscribeModal || !inscribeModal.contains(event.target as Node)) && 
        (!artworkContainer || !artworkContainer.contains(event.target as Node)) &&
        event.target !== editorWrapper &&
        !isArtworkFocused
      ) {
        dispatch(setSelectedIndex(null));
        dispatch(resetEditorState());
        setIsOverlayToggled(false);
      }
    };
    
    document.addEventListener('click', handleResetSelectionClick);
    return () => document.removeEventListener('click', handleResetSelectionClick);
  }, [dispatch, isArtworkFocused]);

  useEffect(() => {
    if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
      const selectedItem = queueItems[selectedQueueIndex];
      if (!hasEditorChanges) {
        dispatch(updateEditorState({
          seed: selectedItem.newValues.newSeed || selectedItem.initialSeed || '0',
          mod: selectedItem.newValues.newMod || selectedItem.initialMod || '000000000000000',
          attunement: selectedItem.newValues.newAttunement || selectedItem.initialAttunement || 0,
        }));
      }
    }
  }, [selectedQueueIndex, queueItems, hasEditorChanges, dispatch]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'z' && !event.shiftKey) {
        event.preventDefault();
        dispatch(undo());
      } else if (event.ctrlKey && event.key === 'Z' && event.shiftKey) {
        event.preventDefault();
        dispatch(redo());
      } else if ((event.key === 'r' || event.key === 'R') && !event.ctrlKey) {
        event.preventDefault();
        handleRandomizeBits();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch, handleRandomizeBits]);

  useEffect(() => {
    if (editorSeed || editorMod || editorAttunement) {
      dispatch(setUrlParams({ seed: editorSeed, mod: editorMod, attunement: editorAttunement.toString() }));
    }
  }, [dispatch, editorSeed, editorMod, editorAttunement]);

  // MEMOIZED VALUES --------------------------------

  const enableSeedResetButton = useMemo(() => {
    const isNonZeroSeed = editorSeed !== '0';
    const isNonDefaultMod = editorMod !== '000000000000000';
    const isNonDefaultAttunement = editorAttunement !== calculateMostFrequentNumeral(BigInt(editorSeed));
    
    return isNonZeroSeed || isNonDefaultMod || isNonDefaultAttunement;
  }, [editorSeed, editorMod, editorAttunement]);
  
  // RENDER -----------------------------------------
  
  return (
    <>
      <DiagnosticsPanel/>
        <div className="editor">
          <div className="editor-inner" ref={editorRef}>
            <div className="seed-indicator">
              <div className="seed-touchable">
                <div className="label seed-label">SEED:</div>
                <span
                  ref={seedInputRef}
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
                    clearSelection()}
                  }}
                >{editorSeed}</span>
                {enableSeedResetButton && !isSelectedItemLocked() && (
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
                          uiVisibility === 'layers' ? "selected" : ""
                      } ${isSelectedItemLocked() ? 'disabled' : ''}`}
                      onClick={handleLayersUIToggle}
                    >Lr</a>
                    <a
                      id="display-settings-button"
                      className={`ui-button advanced mod-button shrink z-button ${
                          uiVisibility === 'displaySettings' ? "selected" : ""
                      } ${editorSeed === '0' ? "disabled" : ""} ${isSelectedItemLocked() ? 'disabled' : ''}`}            
                      onClick={handleDisplaySettingsToggle}
                    >+<span></span></a>
                  </div>
                  <div className={`layer-grid-wrap ${uiVisibility === 'layers' ? "show" : ""}`}>
                    <BitsArray bitsArray={bitsArray} toggleBit={handleToggleBit} />
                  </div>
                  <div className={`display-settings-wrap ${uiVisibility === 'displaySettings' ? "show" : ""}`}>
                    <DisplaySettings
                      isLocked={isSelectedItemLocked()}
                    />
                  </div>
                </div>
              </div>
              <div className="artwork-preview">
                <div
                  style={{
                  opacity: 1,
                  transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d"}}
                  className="svg-aspect-ratio"
                >
                  <div 
                    className="svg-container paused"
                  >
                    <div 
                      className="svg-outer"
                      {...handleArtworkInteraction()}
                    >
                      {editorSeed && (
                        <Artwork 
                          ref={artRef}
                          seed={editorSeed}
                          mod={editorMod}
                          attunement={editorAttunement.toString()}
                          isPlaying={isPlaying}
                          editorSeed={editorSeed}
                          editorAttunement={editorAttunement}
                        />
                      )}
                    <div className="rgblens"></div>
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
                      strokeMiterlimit: 10}}
                    >
                      <path d="m17.5 123.8 162.2 156.6L426.6 16.1" />
                    </svg>
                  </span>
                  <PreviewLoader loading={isLoading} size="small" customClass="editorLoader_" />
                </a>
              </div>
            </div>
            <div className={`app-pane right $ ${
                uiVisibility === 'layers' || 'displaySettings' ? "deactivated" : ""
            }`}>
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
          <div 
            className={`reset-editor ${
              uiVisibility === 'layers' || displaySettings ? "" : "hidden"}`}
            onClick={() => {dispatch(setUIVisibility('none'))}}
          ></div>
        </div>
      </div>
      <InscribeModal show={showInscribeModal} queueItems={getSetQueueItems} />
    </>
  );
}

export default React.memo(Home);