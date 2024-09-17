import React, { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { updateDisplaySetting, updateEditorMod, resetEditorMod, resetMod, selectModValues, resetEditorAttunement, selectDisplaySettings, toggleColorAnimationPause, toggleDepthAnimationPause, toggleSpinAnimationPause, updateSliderValue } from '@/store/slices/editorSlice';
import RangeSlider from './RangeSlider';
import debounce from 'lodash/debounce';




//================================================//

const iconContext = require.context('@/public/icons/settings', false, /seeds-editor-icons_.*\.svg$/);
const icons = iconContext.keys().map(iconContext);

// COMPONENT LOGIC ---------------------------------

const DisplaySettings: React.FC<{ isLocked: boolean }> = ({ isLocked }) => {
  
  const dispatch = useAppDispatch();
  const modValues = useAppSelector(selectModValues);
  const displaySettings = useAppSelector(selectDisplaySettings);

  const debouncedUpdateEditorMod = useCallback(
    debounce((mod: string, value: number) => {
      dispatch(updateEditorMod({ mod, value, isSliding: false }));
    }, 50),
    [dispatch]
  );

  const handleDisplaySettingToggle = (index: number) => {
    if (!isLocked) {
      dispatch(updateDisplaySetting(index));
    }
  };

  const handleSliderChange = (mod: string, value: number, isSliding: boolean) => {
    if (!isLocked) {
      if (isSliding) {
      } else {
        // Update mod when sliding stops
        dispatch(updateSliderValue({ name: mod, value }));
      }
    }
  };

  // Reset the mod value
  const handleResetMod = () => {
    if (!isLocked) {
      dispatch(resetEditorMod("000000000000000"));
    }
  };

  // Render display setting icons
  const renderDisplaySettingIcons = () => {
    return icons.map((Icon, index) => (
      <a
        key={index}
        href="#" 
        className={`btn-display-setting ${index === 0 ? (displaySettings & (1 << 8) ? '' : 'selected') : (displaySettings & (1 << (8 - index)) ? 'selected' : '')} ui-element`}
        onClick={() => handleDisplaySettingToggle(index)}
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

  return (
    <div>
      {/* Display setting icons */}
      <div className="mod-controls ui-element">
        {renderDisplaySettingIcons()}
      </div>

      {/* Sliders */}
      <RangeSlider name="color" value={modValues.color} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="depth" value={modValues.depth} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="spin" value={modValues.spin} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="tint" value={modValues.tint} onChange={handleSliderChange} min={0} max={9} step={1} defaultValue={0} disabled={isLocked} />
      <RangeSlider 
        name="tintPercent" 
        value={modValues.tintPercent} 
        onChange={handleSliderChange} 
        min={0} 
        max={100} 
        disabled={isLocked || modValues.tint === 0}
        defaultValue={100}
      />

      {/* Mod number display */}
      <div className="mod-number-container">
        <div className="mod-number">
          <span className="mod-label ui-element">Mod:</span>
          <span className="mod-input ui-element">{useAppSelector(state => state.seed.editorMod)}</span>
          <span className="mod-reset" onClick={handleResetMod}>Reset</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DisplaySettings);