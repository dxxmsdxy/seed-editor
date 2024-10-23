import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { 
  updateEditorState,
  selectModValues, 
  selectDisplaySettings, 
  toggleDisplaySetting,
  selectIsEditorModChanged,
  updateModValue,
  resetAttunementOverride,
} from '@/store/slices/editorSlice';
import { selectElementContents, clearSelection, attunementNames, calculateMostFrequentNumeral } from '@/lib/utils/global';
import { selectSelectedIndex } from '@/store/slices/queueSlice';
import RangeSlider from './RangeSlider';
import { isEqual } from 'lodash';




//=============================================//

const iconContext = require.context('@/public/icons/settings', false, /seeds-editor-icons_.*\.svg$/);
const icons = iconContext.keys().map(iconContext);

// COMPONENT LOGIC ---------------------------------

const DisplaySettings: React.FC = () => {
  
  // REDUX STATE -----------------------------------

  const dispatch = useAppDispatch();
  const editorState = useAppSelector(useMemo(() => (state: RootState) => ({
    seed: state.editor.editorSeed,
    mod: state.editor.editorMod,
    attunement: state.editor.editorAttunement,
    isEditorModChanged: selectIsEditorModChanged(state),
    isAttunementOverridden: state.editor.isAttunementOverridden,
  }), []));

  const selectedQueueIndex = useAppSelector(selectSelectedIndex);
  const queueItems = useAppSelector((state: RootState) => state.queue.items);
  
  const displaySettings = useAppSelector(selectDisplaySettings);
  const modValues = useAppSelector(selectModValues, isEqual);
  const [sliderValues, setSliderValues] = useState(modValues);

  const [activeSelection, setActiveSelection] = useState(false);
  const startSelection = useCallback(() => setActiveSelection(true), []);
  const endSelection = useCallback(() => setActiveSelection(false), []);

  const calculatedAttunement = useMemo(() => 
    calculateMostFrequentNumeral(editorState.seed) ?? "0"
  ,[editorState.seed]);

  const currentAttunement = editorState.isAttunementOverridden ? 
    editorState.attunement : 
    calculatedAttunement;

  const isDefault = useMemo(() => {
    return !editorState.isAttunementOverridden;
  }, [editorState.isAttunementOverridden]);

  // Handle attunement changes
  const handleAttunementChange = useCallback((changingAttunement: number) => {
    if (!isNaN(changingAttunement)) {
      dispatch(updateEditorState({ 
        attunement: changingAttunement.toString(),
        isAttunementOverridden: true
      }));
    }
  }, [dispatch]);

  // Toggle attunement override state
  const handleAttunementToggle = useCallback(() => {
    if (editorState.isAttunementOverridden) {
      dispatch(updateEditorState({
        attunement: calculatedAttunement,
        isAttunementOverridden: false
      }));
    } else {
      dispatch(updateEditorState({
        attunement: currentAttunement,
        isAttunementOverridden: true
      }));
    }
  }, [dispatch, editorState.isAttunementOverridden, calculatedAttunement, currentAttunement]);

  // Handle increment/decrement of attunement
  const handleAttunementIncrement = useCallback(() => {
    const nextAttunement = (Number(currentAttunement) + 1) % 10;
    handleAttunementChange(nextAttunement);
  }, [currentAttunement, handleAttunementChange]);

  const handleAttunementDecrement = React.useCallback(() => {
    const prevAttunement = (Number(currentAttunement) - 1 + 10) % 10;
    handleAttunementChange(prevAttunement);
  }, [currentAttunement, handleAttunementChange]);

  // Handle manual input of attunement
  const handleAttunementInput = React.useCallback((e: React.FormEvent<HTMLSpanElement>) => {
    const value = e.currentTarget.textContent;
    if (value === '') {
      handleAttunementChange(0);
    } else if (value === '?') {
      dispatch(updateEditorState({ attunement: value }));
    } else {
      handleAttunementChange(parseInt(value || "0", 10));
    }
    clearSelection();
  }, [handleAttunementChange]);

  // Handle manual input of mod
  const handleModInputChange = useCallback((value: string) => {
    dispatch(updateEditorState({ mod: value }));
  }, [dispatch]);

  // Reset the mod value
  const handleResetMod = useCallback(() => {
    if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
      const selectedItem = queueItems[selectedQueueIndex];
      if (selectedItem.newValues.newMod !== null && editorState.mod !== selectedItem.newValues.newMod) {
        dispatch(updateEditorState({ mod: selectedItem.newValues.newMod }));
      } else if (selectedItem.initialMod !== null && editorState.mod !== selectedItem.initialMod) {
        dispatch(updateEditorState({ mod: selectedItem.initialMod }));
      } else {
        dispatch(updateEditorState({ mod: '000000000000' }));
      }
    } else {
      dispatch(updateEditorState({ mod: '000000000000' }));
    }
  }, [dispatch, editorState.mod, selectedQueueIndex, queueItems]);

  // Handle display setting toggle
  const handleDisplaySettingToggle = useCallback((index: number) => {
    dispatch(toggleDisplaySetting(index));
  }, [dispatch]);

  // Handle slider change
  const handleSliderChange = useCallback((name: string, value: number) => {
    dispatch(updateModValue({ name, value }));
  }, [dispatch]);

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

  // Update local state when editorMod changes
  useEffect(() => {
    setSliderValues(modValues);
  }, [editorState.mod]);

  // Update the Mod Input element with the editor mod state
  useEffect(() => {
    const modInput = document.querySelector('.mod-input') as HTMLElement;
    if (modInput) {
      modInput.textContent = '.' + (editorState.mod || '');
    }
  }, [editorState.mod]);




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
              {attunementNames[Number(currentAttunement)] + ":"}
            </span>
            <span
              className="attunement-input ui-element"
              contentEditable="true"
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
                e.currentTarget.textContent = currentAttunement;
                clearSelection();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.currentTarget.blur();
                  clearSelection();
                }
              }}
            >
              {currentAttunement}
            </span>
            <span 
              className={`reset-attunement ${editorState.isAttunementOverridden ? 'show' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(resetAttunementOverride());
              }}
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
          <div className="mod-style-picker ui-element">
            <span className="mod-style-picker-label">
              Browse
            </span>
          </div>
          {renderDisplaySettingIcons()}
        </div>
        <div className="mod-sliders">
          {/* Sliders */}
          <RangeSlider name="color" value={modValues.color} onChange={handleSliderChange} min={0} max={99} defaultValue={0} />
          <RangeSlider name="spin" value={modValues.spin} onChange={handleSliderChange} min={0} max={99} defaultValue={0} />
          <RangeSlider name="depth" value={modValues.depth} onChange={handleSliderChange} min={0} max={99} defaultValue={0} />
          <RangeSlider name="tint" value={modValues.tint} onChange={handleSliderChange} min={0} max={99} step={1} defaultValue={0} />
          <RangeSlider 
            name="tintPercent" 
            value={modValues.tintPercent}
            onChange={handleSliderChange} 
            min={10} 
            max={100}
            step={10} 
            disabled={modValues.tint === 0}
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
                inputMode="numeric"
                onFocus={(e) => {
                  const textContent = e.currentTarget.textContent;
                  if (textContent && textContent.startsWith('.')) {
                    e.currentTarget.textContent = textContent.slice(1);
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
                  e.currentTarget.textContent = '.' + (editorState.mod || '');
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.currentTarget.blur();
                    clearSelection();
                  }
                }}
              >
                .{editorState.mod}
              </span>
              <span 
                className={`reset-mod ${editorState.isEditorModChanged && editorState.mod !== '000000000000' || editorState.mod !== '000000000000' ? 'show' : ''}`}
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