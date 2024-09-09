import React, { useCallback, useMemo, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { updateDisplaySetting, updateSliderValue, calculateModNumber, setModNumber, setAttunementNumber } from '@/store/slices/editorSlice';
import { updateQueueItem } from '@/store/slices/queueSlice';
import RangeSlider from './RangeSlider';
import IconEye from "@/public/icons/seeds-editor-icons_eye.svg";
import IconRemove from "@/public/icons/seeds-editor-icons_remove.svg";
import IconInvert from "@/public/icons/seeds-editor-icons_invert.svg";
import IconFlip from "@/public/icons/seeds-editor-icons_flip.svg";
import IconBolt from "@/public/icons/seeds-editor-icons_bolt.svg";
import IconCMYK from "@/public/icons/seeds-editor-icons_cmyk.svg";
import IconRed from "@/public/icons/seeds-editor-icons_red.svg";
import IconBlue from "@/public/icons/seeds-editor-icons_blue.svg";
import IconGreen from "@/public/icons/seeds-editor-icons_green.svg";

const DisplaySettings: React.FC<DisplaySettingsProps> = React.memo(({ isLocked, selectedQueueIndex }) => {
  const dispatch = useAppDispatch();
  const seed = useAppSelector((state) => state.seed.seed);
  const modNumber = useAppSelector((state) => state.seed.modNumber);
  const attunementNumber = useAppSelector((state) => state.seed.attunementNumber);
  const displaySettings = useAppSelector((state) => state.seed.displaySettings);
  const sliderValues = useAppSelector((state) => ({
    color: state.seed.colorValue,
    depth: state.seed.depthValue,
    spin: state.seed.spinValue,
    tint: state.seed.tintValue,
    "tint%": state.seed.tintPercentValue,
  }));
  const seedState = useAppSelector((state) => state.seed);
  const queueItems = useAppSelector((state) => state.queue.items);

  const currentModNumber = useMemo(() => {
    if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
      const selectedItem = queueItems[selectedQueueIndex];
      return selectedItem.newModNumber || selectedItem.modNumber || "000000000000000";
    }
    return modNumber;
  }, [selectedQueueIndex, queueItems, modNumber]);

  useEffect(() => {
    if (currentModNumber !== modNumber) {
      dispatch(setModNumber(currentModNumber));
    }
  }, [currentModNumber, modNumber, dispatch]);

  const handleDisplaySettingToggle = useCallback((index: number) => {
    if (!isLocked) {
      dispatch(updateDisplaySetting(index));
    }
  }, [dispatch, isLocked]);

  const handleSliderChange = useCallback((name: string, value: number) => {
    if (!isLocked) {
      dispatch(updateSliderValue({ name, value }));
    }
  }, [dispatch, isLocked]);

  const updateQueueItemModNumber = useCallback((newModNumber: string) => {
    if (selectedQueueIndex !== null) {
      dispatch(updateQueueItem({
        index: selectedQueueIndex,
        item: {
          newModNumber: newModNumber,
        }
      }));
    }
  }, [dispatch, selectedQueueIndex]);

  const handleModNumberChange = useCallback((newModNumber: string) => {
    if (!isLocked) {
      dispatch(setModNumber(newModNumber));
      updateQueueItemModNumber(newModNumber);
    }
  }, [dispatch, isLocked, updateQueueItemModNumber]);

  const resetMod = useCallback(() => {
    if (!isLocked && selectedQueueIndex !== null) {
      const originalModNumber = queueItems[selectedQueueIndex].modNumber || "000000000000000";
      dispatch(setModNumber(originalModNumber));
      updateQueueItemModNumber(originalModNumber);
    }
  }, [dispatch, isLocked, selectedQueueIndex, queueItems]);

  const attunementInputRef = useRef<HTMLSpanElement>(null);

  const icons = [IconEye, IconRemove, IconInvert, IconFlip, IconBolt, IconCMYK, IconRed, IconBlue, IconGreen];

  const memoizedIcons = useMemo(() => icons.map((Icon, index) => (
    <a
      key={index}
      href="#" 
      className={`btn-display-setting ${displaySettings.includes(1 << (8 - index)) ? 'selected' : ''}`}
      onClick={() => handleDisplaySettingToggle(index)}
    >
      <Icon />
    </a>
  )), [displaySettings, handleDisplaySettingToggle]);

  const isDefaultAttunement = attunementNumber === 0;

  const incrementAttunement = useCallback(() => {
    if (!isLocked) {
      dispatch(setAttunementNumber((prevAttunement) => (prevAttunement + 1) % 10));
    }
  }, [dispatch, isLocked]);

  const decrementAttunement = useCallback(() => {
    if (!isLocked) {
      dispatch(setAttunementNumber((prevAttunement) => (prevAttunement - 1 + 10) % 10));
    }
  }, [dispatch, isLocked]);

  const handleAttunementChange = useCallback((value: string) => {
    if (!isLocked) {
      const newAttunement = parseInt(value, 10);
      if (!isNaN(newAttunement) && newAttunement >= 0 && newAttunement <= 9) {
        dispatch(setAttunementNumber(newAttunement));
      }
    }
  }, [dispatch, isLocked]);

  const clearSelection = useCallback(() => {
    if (window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
  }, []);

  const resetAttunement = useCallback(() => {
    if (!isLocked) {
      dispatch(setAttunementNumber(0));
    }
  }, [dispatch, isLocked]);

  return (
    <div className="display-settings-wrap show">
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
                handleAttunementChange(e.currentTarget.textContent || "");
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
        {memoizedIcons}
      </div>
      <RangeSlider name="color" value={sliderValues.color} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="depth" value={sliderValues.depth} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="spin" value={sliderValues.spin} onChange={handleSliderChange} min={0} max={999} defaultValue={0} disabled={isLocked} />
      <RangeSlider name="tint" value={sliderValues.tint} onChange={handleSliderChange} min={0} max={9} step={1} defaultValue={0} disabled={isLocked} />
      <RangeSlider 
        name="tint%" 
        value={sliderValues["tint%"]} 
        onChange={handleSliderChange} 
        min={0} 
        max={100} 
        disabled={sliderValues.tint === 0 || isLocked}
        defaultValue={100}
        checkDefault={false}
      />
      <div className={`mod-number-container ${currentModNumber === "000000000000000" ? 'default' : ''}`}>
        <div className="mod-number">
          <span className="mod-label">Mod:</span>
          <span
            className="mod-number-input"
            contentEditable={!isLocked}
            inputMode="numeric"
            onClick={(e) => !isLocked && selectElementContents(e.currentTarget)}
            onBlur={(e) => {
              e.preventDefault();
              if (!isLocked) {
                const newModNumber = e.currentTarget.textContent || "";
                handleModNumberChange(newModNumber);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.currentTarget.blur();
              }
            }}
          >
            {currentModNumber}
          </span>
          <span className="mod-reset" onClick={resetMod}>Reset</span>
        </div>
      </div>
    </div>
  );
});

function selectElementContents(el: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(el);
  const sel = window.getSelection();
  if (sel) {
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

export default DisplaySettings;