import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { updateDisplaySetting, updateEditorMod, resetEditorMod, updateEditorAttunement, overrideEditorAttunement, resetAttunementOverride, selectModValues, selectShouldShowResetMod, resetEditorAttunement, selectDisplaySettings, toggleColorAnimationPause, toggleDepthAnimationPause, toggleSpinAnimationPause, updateSliderValue, selectAttunement, updateDisplaySettingsFromMod } from '@/store/slices/editorSlice';
import { selectElementContents, clearSelection } from '@/lib/utils';
import { attunementNames } from '@/lib/utils/artwork/helpers';
import RangeSlider from './RangeSlider';
import debounce from 'lodash/debounce';



//================================================//

const iconContext = require.context('@/public/icons/settings', false, /seeds-editor-icons_.*\.svg$/);
const icons = iconContext.keys().map(iconContext);

// COMPONENT LOGIC ---------------------------------

const DisplaySettings: React.FC<{ isLocked: boolean }> = ({ isLocked }) => {
  
  const dispatch = useAppDispatch();
  const editorSeed = useAppSelector((state) => state.seed.editorSeed);
  const editorMod = useAppSelector((state) => state.seed.editorMod);
  const editorAttunement = useAppSelector((state) => state.seed.editorAttunement);
  const prevAttunementRef = useRef(editorAttunement);
  const isAttunementOverridden = useAppSelector((state) => state.seed.isAttunementOverridden);
  const modValues = useAppSelector(selectModValues);
  const displaySettings = useAppSelector(selectDisplaySettings);
  const attunement = useSelector(selectAttunement);
  const [showAttunementName, setShowAttunementName] = useState(false);
  const shouldShowResetMod = useAppSelector(selectShouldShowResetMod);


  const [activeSelection, setActiveSelection] = useState(false);
  const startSelection = useCallback(() => setActiveSelection(true), []);
  const endSelection = useCallback(() => setActiveSelection(false), []);


  // Reset the mod value
  const handleResetMod = () => {
    if (!isLocked && shouldShowResetMod) {
      dispatch(resetEditorMod());
    }
  };

  const handleResetAttunement = React.useCallback(() => {
    if (!isLocked) {
      dispatch(resetEditorAttunement());
      setShowAttunementName(false);
    }
  }, [isLocked, dispatch]);

  // Debounced function to update editor mod value
  const debouncedUpdateEditorMod = useCallback(
    debounce((mod: string, value: number) => {
      dispatch(updateEditorMod({ mod, value, isSliding: false }));
    }, 50),
    [dispatch]
  );

  // Handle display settings toggle button interaction
  const handleDisplaySettingToggle = useCallback((index: number) => {
    if (!isLocked) {
      const newDisplaySettings = displaySettings ^ (1 << index);
      dispatch(updateDisplaySetting(index));
    }
  }, [isLocked, dispatch, displaySettings]);

  // Handle display settings slider interaction
  const handleSliderChange = (mod: string, value: number, isSliding: boolean) => {
    if (!isLocked) {
      if (mod === 'tintPercent' && value === 0) {
        // If tintPercent is set to 0, set tint to 0 and update the mod
        dispatch(updateSliderValue({ name: 'tint', value: 0 }));
        dispatch(updateSliderValue({ name: 'tintPercent', value: 0 }));
        
        // Update the editorMod to set the tint segment to '00'
        const currentMod = editorMod || '000000000000000';
        const updatedMod = currentMod.slice(0, 9) + '00' + currentMod.slice(11);
        dispatch(updateEditorMod({ mod: updatedMod, updateChanges: true }));
      } else {
        dispatch(updateSliderValue({ name: mod, value }));
        
        if (mod === 'tint' && value === 0) {
          // If tint is set to 0, reset tintPercent to 100
          dispatch(updateSliderValue({ name: 'tint', value: 0 }));
          dispatch(updateSliderValue({ name: 'tintPercent', value: 100 }));
        }
      }
  
      if (!isSliding) {
        // Additional actions when sliding stops, if needed
      }
    }
  };

  // Render display setting icons
  const renderDisplaySettingIcons = () => {
    return icons.map((Icon, index) => (
      <a
        key={index}
        className={`btn-display-setting ${displaySettings & (1 << index) ? 'selected' : ''} ui-element`}
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

  // Toggle individual animations on the SVG
  const handleToggleColorAnimation = () => {
    dispatch(toggleColorAnimationPause());
  };
  const handleToggleDepthAnimation = () => {
    dispatch(toggleDepthAnimationPause());
  };
  const handleToggleSpinAnimation = () => {
    dispatch(toggleSpinAnimationPause());
  };

  useEffect(() => {
    const attunementSelector = document.querySelector('.attunement-selector');
    if (attunementSelector) {
      if (isAttunementOverridden) {
        attunementSelector.classList.remove('default');
      } else {
        attunementSelector.classList.add('default');
      }
    }
  }, [isAttunementOverridden]);

  // Handle attunement chanes
  const handleAttunementChange = React.useCallback((newAttunement: number) => {
    if (!isLocked) {
      if (!isNaN(newAttunement) && newAttunement >= 0 && newAttunement <= 9) {
        dispatch(updateEditorAttunement({ attunementNumber: newAttunement, isOverride: true }));
        setShowAttunementName(true);
      }
    }
  }, [isLocked, dispatch]);

  // Update the display settings buttons when editor mod changes
  useEffect(() => {
    dispatch(updateDisplaySettingsFromMod(editorMod ?? "000000000000000"));
  }, [editorMod, dispatch]);

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
      <div className={`attunement-selector ${isAttunementOverridden ? '' : 'default'}`}>
        <div className="attune-nav prev ui-element" onClick={() => !isLocked && handleAttunementChange((editorAttunement - 1 + 10) % 10)}>
          &lt;
        </div>
        <div className="attunement-label-container ui-element" onClick={handleResetAttunement}>
          <div className="attunement-label ui-element">
            <span className="attunement-name">
              { attunementNames[editorAttunement] + ":"}
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
              onInput={(e) => {
                const value = e.currentTarget.textContent;
                if (value === '') {
                  handleResetAttunement();
                } else {
                  handleAttunementChange(parseInt(value || "0", 10));
                }
              }}
              onBlur={(e) => {
                e.preventDefault();
                if (e.currentTarget.textContent === '') {
                  handleResetAttunement();
                } else {
                  handleAttunementChange(parseInt(e.currentTarget.textContent || "0", 10));
                  clearSelection();
                }
                e.currentTarget.textContent = editorAttunement.toString();
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
        <div className="attune-nav next ui-element" onClick={() => !isLocked && handleAttunementChange((editorAttunement + 1) % 10)}>
          &gt;
        </div>
      </div>

      {/* Display setting icons */}
      <div className="mod-controls ui-element">
        {renderDisplaySettingIcons()}
      </div>

      {/* Sliders */}
      <RangeSlider name="color" value={modValues.color} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="spin" value={modValues.spin} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="depth" value={modValues.depth} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="tint" value={modValues.tint} onChange={handleSliderChange} min={0} max={99} step={1} defaultValue={0} disabled={isLocked} />
      <RangeSlider 
        name="tintPercent" 
        value={modValues.tintPercent}
        onChange={handleSliderChange} 
        min={0} 
        max={100}
        step={10} 
        disabled={isLocked || modValues.tint === 0}
        defaultValue={100}
        displayValue={(value) => `${value}%`}
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
                dispatch(updateEditorMod({ mod: value, updateChanges: true }));
                clearSelection();
              }
            }}
            onBlur={(e) => {
              e.preventDefault();
              const value = e.currentTarget.textContent?.replace(/^\./, '') || '';
              if (value === '') {
                handleResetMod();
              } else {
                dispatch(updateEditorMod({ mod: value, updateChanges: true }));
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
          >
            .{useAppSelector(state => state.seed.editorMod)}
          </span>
          <span 
            className={`mod-reset ${shouldShowResetMod ? 'show' : ''}`} 
            onClick={handleResetMod}
          >
            Reset
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DisplaySettings);