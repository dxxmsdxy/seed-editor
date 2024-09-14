import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { debounce } from 'lodash';
import { setEditorMod, setEditorAttunement, updateSliderValue } from '@/store/slices/editorSlice';
import RangeSlider from './RangeSlider';
const iconContext = require.context('@/public/icons/settings', false, /seeds-editor-icons_.*\.svg$/);
const icons = iconContext.keys().map(iconContext);
import { applyModValueToElements } from '@/lib/utils/artwork/updateSVGWithMod';
import { selectElementContents, clearSelection } from '@/lib/utils';




//================================================//

interface DisplaySettingsProps {
  isLocked: boolean;
  selectedQueueIndex: number | null;
}


// COMPONENT LOGIC ---------------------------------

const DisplaySettings: React.FC<DisplaySettingsProps> = React.memo(({ isLocked, selectedQueueIndex }) => {
  const dispatch = useAppDispatch();
  const {
    editorSeed,
    editorMod,
    editorAttunement,
    actualTintPercentValue,
  } = useAppSelector((state) => state.seed);

  const queueItems = useAppSelector((state) => state.queue.items);

  // Parse display settings and slider values from editorMod
  const displaySettings = useMemo(() => parseInt(editorMod.slice(0, 3), 10), [editorMod]);
  const sliderValues = useMemo(() => ({
    color: parseInt(editorMod.slice(3, 6), 10),
    depth: parseInt(editorMod.slice(6, 9), 10),
    spin: parseInt(editorMod.slice(9, 12), 10),
    tint: parseInt(editorMod.slice(12, 13), 10),
    "tint%": editorMod.slice(13) === "99" ? 100 : parseInt(editorMod.slice(13), 10),
  }), [editorMod]);

  const colorValueRef = useRef(sliderValues.color);
  const depthValueRef = useRef(sliderValues.depth);
  const spinValueRef = useRef(sliderValues.spin);

  useEffect(() => {
    colorValueRef.current = sliderValues.color;
    depthValueRef.current = sliderValues.depth;
    spinValueRef.current = sliderValues.spin;
  }, [sliderValues.spin]);

  const adjustAnimationState = useCallback(() => {
    const layers = document.querySelectorAll('.seedartwork:has(g.on),.lr.on path,.lr.on polygon, .lr.on circle, .lr.on .ellipse, .lr.on line, .lr.on rect, .lr.on .polyline');
    applyModValueToElements(layers, spinValueRef.current);
  }, []);

  // Render display setting icons
  const renderDisplaySettingIcons = () => icons.map((Icon, index) => (
    <a
      key={index}
      href="#" 
      className={`btn-display-setting ${displaySettings & (1 << (8 - index)) ? 'selected' : ''}`}
      onClick={() => handleDisplaySettingToggle(index)}
    >
      <Icon.default /> {/* Note the .default here */}
    </a>
  ));

  // Handle mod number change via text input
  const handleModNumberChange = useCallback(
    debounce((newMod: string) => {
      dispatch(setEditorMod({ modNumber: newMod, updateChanges: true }));
    }, 200),
    [dispatch]
  );

  // Toggle Display Settings buttons
  const handleDisplaySettingToggle = useCallback((index: number) => {
    if (!isLocked) {
      let newDisplaySettingsValue = displaySettings;
      
      if (index >= 6) {
        // For the last three buttons (index 6, 7, 8)
        // Turn off all three buttons
        newDisplaySettingsValue &= ~(0b111);
        // Then turn on the clicked button if it was previously off
        if (!(displaySettings & (1 << (8 - index)))) {
          newDisplaySettingsValue |= (1 << (8 - index));
        }
      } else {
        newDisplaySettingsValue ^= (1 << (8 - index));
      }
      
      const newMod = newDisplaySettingsValue.toString().padStart(3, '0') + editorMod.slice(3);
      dispatch(setEditorMod({ modNumber: newMod, updateChanges: true }));
    }
  }, [isLocked, editorMod, displaySettings, dispatch]);

  // Handle slider change
  const handleSliderChange = useCallback((name: string, value: number, isSliding: boolean) => {
    if (!isLocked) {
      dispatch(updateSliderValue({ name, value }));
      if (!isSliding) {
        let newMod = editorMod;
        switch (name) {
          case 'color':
            newMod = newMod.slice(0, 3) + value.toString().padStart(3, '0') + newMod.slice(6);
            break;
          case 'depth':
            newMod = newMod.slice(0, 6) + value.toString().padStart(3, '0') + newMod.slice(9);
            break;
          case 'spin':
            newMod = newMod.slice(0, 9) + value.toString().padStart(3, '0') + newMod.slice(12);
            handleModNumberChange(newMod);
            adjustAnimationState();
            break;
          case 'tint':
            newMod = newMod.slice(0, 12) + value.toString() + (value === 0 ? "00" : newMod.slice(13));
            break;
          case 'tint%':
            if (sliderValues.tint !== 0) {
              newMod = newMod.slice(0, 13) + (value === 100 ? "99" : value.toString().padStart(2, '0'));
            }
            break;
        }
        handleModNumberChange(newMod);
      }
    }
  }, [isLocked, editorMod, dispatch, sliderValues.tint, handleModNumberChange, adjustAnimationState]);

  // Handle attunement change via text input
  const handleAttunementChange = React.useCallback((value: string) => {
    if (!isLocked) {
      const newAttunement = parseInt(value, 10);
      if (!isNaN(newAttunement) && newAttunement >= 0 && newAttunement <= 9) {
        dispatch(setEditorAttunement({ attunementNumber: newAttunement, updateChanges: true }));
      }
    }
  }, [isLocked, dispatch]);

  // Reset mod number
  const resetMod = React.useCallback(() => {
    if (!isLocked) {
      dispatch(setEditorMod({ modNumber: "000000000000000", updateChanges: true }));
    }
  }, [isLocked, dispatch]);

  // Reset attunement
  const resetAttunement = React.useCallback(() => {
    if (!isLocked) {
      dispatch(setEditorAttunement({ attunementNumber: 0, updateChanges: true }));
    }
  }, [isLocked, dispatch]);





  // STRUCTURE -------------------------------------

  return (
    <div className="display-settings-wrap show">
      {/* Attunement selector */}
      <div className={`attunement-selector ${editorAttunement === 0 ? 'default' : ''}`}>
        <div className="attune-nav prev" onClick={() => !isLocked && dispatch(setEditorAttunement({ attunementNumber: (editorAttunement - 1 + 10) % 10, updateChanges: true }))}>
          &lt;
        </div>
        <div className="attunement-label-container" onClick={resetAttunement}>
          <div className="attunement-label">
            Attunement: 
            <span
              className="attunement-input"
              contentEditable={!isLocked}
              inputMode="numeric"
              onClick={(e) => {
                e.stopPropagation();
                selectElementContents(e.currentTarget);
              }}
              onBlur={(e) => {
                e.preventDefault();
                handleAttunementChange(e.currentTarget.textContent || "");
                e.currentTarget.textContent = editorAttunement.toString();
                clearSelection();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
              }}
            >
              {editorAttunement}
            </span>
          </div>
        </div>
        <div className="attune-nav next" onClick={() => !isLocked && dispatch(setEditorAttunement({ attunementNumber: (editorAttunement + 1) % 10, updateChanges: true }))}>
          &gt;
        </div>
      </div>

      {/* Display setting icons */}
      <div className="mod-controls">
        {renderDisplaySettingIcons()}
      </div>

      {/* Sliders */}
      <RangeSlider name="color" value={sliderValues.color} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="depth" value={sliderValues.depth} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="spin" value={sliderValues.spin} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="tint" value={sliderValues.tint} onChange={handleSliderChange} min={0} max={9} step={1} defaultValue={0} disabled={isLocked} />
      <RangeSlider 
        name="tint%" 
        value={actualTintPercentValue} 
        onChange={handleSliderChange} 
        min={0} 
        max={100} 
        disabled={isLocked || sliderValues.tint === 0}
        defaultValue={100}
        checkDefault={false}
      />
      <div className={`mod-number-container ${editorMod === "000000000000000" ? 'default' : ''}`}>
        <div className="mod-number">
          <span className="mod-label">Mod:</span>
          <span
            className="mod-input"
            contentEditable={!isLocked}
            inputMode="numeric"
            onClick={(e) => !isLocked && selectElementContents(e.currentTarget)}
            onBlur={(e) => {
              e.preventDefault();
              if (!isLocked) {
                const newMod = e.currentTarget.textContent || "";
                handleModNumberChange(newMod);
                clearSelection();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.currentTarget.blur();
              }
            }}
          >
            {editorMod}
          </span>
          <span className="mod-reset" onClick={resetMod}>Reset</span>
        </div>
      </div>
    </div>
  );
});

export default React.memo(DisplaySettings);