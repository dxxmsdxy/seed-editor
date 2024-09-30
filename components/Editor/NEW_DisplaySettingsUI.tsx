import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { 
  updateEditorState, 
  selectEditorMod, 
  selectModValues, 
  selectDisplaySettings, 
  toggleDisplaySetting, 
  selectIsEditorModChanged,
  updateModValue, 
  selectIsAttunementOverridden, 
  setHasEditorChanges, 
  resetAttunementOverride,
  selectEditorSeed,
  selectEditorAttunement
} from '@/store/slices/newEditorSlice';
import { selectElementContents, clearSelection, attunementNames, sanitizeMod, sanitizeAttunement, calculateMostFrequentNumeral } from '@/lib/newUtils';
import { selectSelectedIndex } from '@/store/slices/newQueueSlice';
import RangeSlider from './RangeSlider';





//=============================================//

const iconContext = require.context('@/public/icons/settings', false, /seeds-editor-icons_.*\.svg$/);
const icons = iconContext.keys().map(iconContext);

// COMPONENT LOGIC ---------------------------------

const DisplaySettings: React.FC<{ isLocked: boolean }> = ({ isLocked }) => {
  
  // REDUX STATE -----------------------------------

  const dispatch = useAppDispatch();
  const editorSeed = useAppSelector(selectEditorSeed);
  const editorMod = useAppSelector(selectEditorMod);
  const editorAttunement = useAppSelector(selectEditorAttunement);
  const isEditorModChanged = useAppSelector(selectIsEditorModChanged);
  const isAttunementOverridden = useAppSelector(selectIsAttunementOverridden);
  const selectedQueueIndex = useAppSelector(selectSelectedIndex);
  const queueItems = useAppSelector((state: RootState) => state.newQueue.items);
  
  const displaySettings = useAppSelector(selectDisplaySettings);
  const modValues = useAppSelector(selectModValues);
  const [sliderValues, setSliderValues] = useState(modValues);
  const [showAttunementName, setShowAttunementName] = useState(false);

  const [activeSelection, setActiveSelection] = useState(false);
  const startSelection = useCallback(() => setActiveSelection(true), []);
  const endSelection = useCallback(() => setActiveSelection(false), []);

  const isDefault = useMemo(() => {
    const defaultAttunement = calculateMostFrequentNumeral(BigInt(editorSeed))?.toString() ?? "0";
    return !isAttunementOverridden && editorAttunement === defaultAttunement;
  }, [editorSeed, editorAttunement, isAttunementOverridden]);


  // Handle attunement changes
  const handleAttunementChange = React.useCallback((changingAttunement: number) => {
    if (!isNaN(changingAttunement)) {
      const sanitizedAttunement = sanitizeAttunement((changingAttunement).toString())
      dispatch(updateEditorState({ attunement: sanitizedAttunement.toString() }));
    }
  }, [dispatch]);

  // Toggle attunement override state
  const handleAttunementToggle = useCallback(() => {
    const defaultAttunement = calculateMostFrequentNumeral(BigInt(editorSeed))?.toString() ?? "0";
    if (isAttunementOverridden) {
      // If attunement is overridden, reset it to the default value
      dispatch(updateEditorState({ attunement: defaultAttunement }));
      dispatch(resetAttunementOverride());
    } else {
      // If attunement is not overridden, set isAttunementOverridden to true
      dispatch(updateEditorState({ attunement: editorAttunement }));
    }
  }, [dispatch, isAttunementOverridden, editorSeed, editorAttunement]);

  // Handle increment/decrement of attunement
  const handleAttunementIncrement = React.useCallback(() => {
    handleAttunementChange((Number(editorAttunement) + 1) % 10);
  }, [editorAttunement, handleAttunementChange]);

  const handleAttunementDecrement = React.useCallback(() => {
    handleAttunementChange((Number(editorAttunement) - 1 + 10) % 10);
  }, [editorAttunement, handleAttunementChange]);

  // Handle manual input of attunement
  const handleAttunementInput = React.useCallback((e: React.FormEvent<HTMLSpanElement>) => {
    const value = e.currentTarget.textContent;
    if (value === '') {
      handleAttunementChange(0);
    } else {
      handleAttunementChange(parseInt(value || "0", 10));
    }
  }, [handleAttunementChange]);

  // Handle manual input of mod
  const handleModInputChange = useCallback((value: string) => {
    const sanitizedMod = sanitizeMod(value);
    dispatch(updateEditorState({ mod: sanitizedMod }));
  }, [dispatch]);

  // Reset the mod value
  const handleResetMod = useCallback(() => {
    if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
      const selectedItem = queueItems[selectedQueueIndex];
      if (selectedItem.newValues.newMod !== null && editorMod !== selectedItem.newValues.newMod) {
        dispatch(updateEditorState({ mod: selectedItem.newValues.newMod }));
      } else if (selectedItem.initialMod !== null && editorMod !== selectedItem.initialMod) {
        dispatch(updateEditorState({ mod: selectedItem.initialMod }));
      } else {
        dispatch(updateEditorState({ mod: '000000000000' }));
      }
    } else {
      dispatch(updateEditorState({ mod: '000000000000' }));
    }
  }, [dispatch, editorMod, selectedQueueIndex, queueItems]);

  // Render display setting icons
  const renderDisplaySettingIcons = () => {
    return icons.map((Icon, index) => (
      <a
        key={index}
        className={`btn-display-setting ${displaySettings.array[index] ? 'selected' : ''} ui-element`}
        onMouseDown={(e) => {
          e.preventDefault();
          startSelection();
          handleDisplaySettingToggle(index);
        }}
        onMouseEnter={() => {
          if (activeSelection) {
            handleDisplaySettingToggle(index);
          }
        }}
        onMouseUp={endSelection}
      >
        <Icon.default />
      </a>
    ));
  };

  // Handle display setting toggle
  const handleDisplaySettingToggle = useCallback((index: number) => {
    dispatch(toggleDisplaySetting(index));
  }, [dispatch]);  

  // Handle slider change
  const handleSliderChange = useCallback((name: string, value: number) => {
    dispatch(updateModValue({ name, value }));
  }, [dispatch]);

  // Prevent strange behavior
  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.ctrlKey && (e.key === 'z' || e.key === 'Z')) {
      e.preventDefault();
    }
  };

  // Update local state when editorMod changes
  useEffect(() => {
    setSliderValues(modValues);
  }, [editorMod]);

  // Update the Mod Input element with the editor mod state
  useEffect(() => {
    const modInput = document.querySelector('.mod-input') as HTMLElement;
    if (modInput) {
      modInput.textContent = '.' + (editorMod || '');
    }
  }, [editorMod]);




  // STRUCTURE ---------------------------------------

  return (
    <div>
      {/* Attunement selector */}
      <div className={`attunement-selector ${isDefault ? 'default' : ''}`}>
        <div className="attune-nav prev ui-element" onClick={handleAttunementDecrement}>
          &lt;
        </div>
        <div className="attunement-label-container ui-element" onClick={handleAttunementToggle}>
          <div className="attunement-label ui-element">
            <span className="attunement-name">
              {attunementNames[Number(editorAttunement)] + ":"}
            </span>
            <span
              className="attunement-input ui-element"
              contentEditable={!isLocked}
              inputMode="numeric"
              onClick={(e) => {
                e.stopPropagation();
                selectElementContents(e.currentTarget);
              }}
              suppressContentEditableWarning={true}
              onInput={handleAttunementInput}
              onBlur={(e) => {
                e.preventDefault();
                handleAttunementInput(e);
                e.currentTarget.textContent = editorAttunement;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.currentTarget.blur();
                  clearSelection();
                }
              }}
            >
              {editorAttunement}
            </span>
            <span 
              className={`attunement-reset`}
            >
              Reset
            </span>
          </div>
        </div>
        <div className="attune-nav next ui-element" onClick={handleAttunementIncrement}>
          &gt;
        </div>
      </div>
      <div className="mod-container">
        {/* Display setting icons */}
        <div className="mod-controls ui-element">
          {renderDisplaySettingIcons()}
        </div>
        <div className="mod-sliders">
          {/* Sliders */}
          <RangeSlider name="color" value={modValues.color} onChange={handleSliderChange} min={0} max={99} defaultValue={0} disabled={isLocked} />
          <RangeSlider name="spin" value={modValues.spin} onChange={handleSliderChange} min={0} max={99} defaultValue={0} disabled={isLocked} />
          <RangeSlider name="depth" value={modValues.depth} onChange={handleSliderChange} min={0} max={99} defaultValue={0} disabled={isLocked} />
          <RangeSlider name="tint" value={modValues.tint} onChange={handleSliderChange} min={0} max={99} step={1} defaultValue={0} disabled={isLocked} />
          <RangeSlider 
            name="tintPercent" 
            value={modValues.tintPercent}
            onChange={handleSliderChange} 
            min={10} 
            max={100}
            step={10} 
            disabled={isLocked || modValues.tint === 0}
            defaultValue={100}
            displayValue={(value) => `${value}%`}
            checkDefault={modValues.tint === 0}
            label="tint%"
          />

          {/* Mod number display */}
          <div className="mod-number-container">
            <div className="mod-number">
              <span className="mod-label ui-element">Mod:</span>
              <span
                className="mod-input ui-element"
                onClick={(e) => {
                  e.stopPropagation();
                  selectElementContents(e.currentTarget);
                }}
                contentEditable="true"
                suppressContentEditableWarning={true}
                onInput={(e) => {
                  const value = e.currentTarget.textContent?.replace(/^\./, '') || '';
                  if (value === '') {
                    handleResetMod();
                  } else {
                    handleModInputChange(value);
                    clearSelection();
                  }
                }}
                onBlur={(e) => {
                  e.preventDefault();
                  const value = e.currentTarget.textContent?.replace(/^\./, '') || '';
                  if (value === '') {
                    handleResetMod();
                  } else {
                    handleModInputChange(value);
                    clearSelection();
                  }
                  e.currentTarget.textContent = '.' + (editorMod || '');
                }}
                onFocus={(e) => {
                  const textContent = e.currentTarget.textContent;
                  if (textContent && textContent.startsWith('.')) {
                    e.currentTarget.textContent = textContent.slice(1);
                  }
                }}
                onKeyDown={handleKeyDown}
              >
                .{useAppSelector(state => state.newEditor.editorMod)}
              </span>
              <span 
                className={`mod-reset ${isEditorModChanged ? 'show' : ''}`} 
                onClick={handleResetMod}
              >
                Reset
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DisplaySettings);