import React, { useCallback, useMemo, useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { 
  setEditorState,
  updateDisplaySetting, 
  updateSliderValue, 
  calculateModNumber, 
  setEditorSeed,
  setEditorMod, 
  setEditorAttunement,
  randomizeBits,
  toggleBit
} from '@/store/slices/editorSlice';
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
  const {
    editorSeed,
    editorMod,
    editorAttunement,
    hasEditorChanges,
    bitsArray
  } = useAppSelector((state) => state.seed);
  const queueItems = useAppSelector((state) => state.queue.items);
  const seedState = useAppSelector((state) => state.seed);

  // Update local state when selected queue item changes
  useEffect(() => {
    if (selectedQueueIndex !== null && selectedQueueIndex < queueItems.length) {
      const selectedItem = queueItems[selectedQueueIndex];
      const newSeed = selectedItem.newSeed || selectedItem.seed;
      const newMod = selectedItem.newMod || selectedItem.modNumber || "000000000000000";
      const newAttunement = selectedItem.newAttunement || selectedItem.attunementNumber || 0;
  
      dispatch(setEditorState({ seed: newSeed, mod: newMod, attunement: newAttunement }));
    } else {
      dispatch(setEditorState({ 
        seed: seedState.seed, 
        mod: seedState.modNumber, 
        attunement: seedState.attunementNumber 
      }));
    }
  }, [selectedQueueIndex, queueItems, dispatch]);

  const displaySettings = useMemo(() => {
    const displaySettingsValue = parseInt(editorMod.slice(0, 3), 10);
    return Array.from({ length: 9 }, (_, i) => !!(displaySettingsValue & (1 << (8 - i))));
  }, [editorMod]);

  const sliderValues = useMemo(() => ({
    color: parseInt(editorMod.slice(3, 6), 10),
    depth: parseInt(editorMod.slice(6, 9), 10),
    spin: parseInt(editorMod.slice(9, 12), 10),
    tint: parseInt(editorMod.slice(12, 13), 10),
    "tint%": editorMod.slice(13) === "99" ? 100 : parseInt(editorMod.slice(13), 10),
  }), [editorMod]);

  const handleDisplaySettingToggle = useCallback((index: number) => {
    if (!isLocked) {
      const displaySettingsValue = parseInt(editorMod.slice(0, 3), 10);
      const newDisplaySettingsValue = displaySettingsValue ^ (1 << (8 - index));
      const newMod = newDisplaySettingsValue.toString().padStart(3, '0') + editorMod.slice(3);
      setEditorMod(newMod);
    }
  }, [isLocked, editorMod]);

  const handleSliderChange = useCallback((name: string, value: number) => {
    if (!isLocked) {
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
          break;
        case 'tint':
          newMod = newMod.slice(0, 12) + value.toString() + newMod.slice(13);
          break;
        case 'tint%':
          newMod = newMod.slice(0, 13) + (value === 100 ? "99" : value.toString().padStart(2, '0'));
          break;
      }
      setEditorMod(newMod);
    }
  }, [isLocked, editorMod]);

  const handleModNumberChange = useCallback((newMod: string) => {
    if (!isLocked) {
      setEditorMod(newMod);
    }
  }, [isLocked]);

  const resetMod = useCallback(() => {
    if (!isLocked) {
      setEditorMod("000000000000000");
    }
  }, [isLocked]);

  const icons = [IconEye, IconRemove, IconInvert, IconFlip, IconBolt, IconCMYK, IconRed, IconBlue, IconGreen];

  const memoizedIcons = useMemo(() => icons.map((Icon, index) => (
    <a
      key={index}
      href="#" 
      className={`btn-display-setting ${displaySettings[index] ? 'selected' : ''}`}
      onClick={() => handleDisplaySettingToggle(index)}
    >
      <Icon />
    </a>
  )), [displaySettings, handleDisplaySettingToggle]);

  const attunementInputRef = useRef<HTMLSpanElement>(null);

  const isDefaultAttunement = editorAttunement === 0;

  const incrementAttunement = useCallback(() => {
    if (!isLocked) {
      setEditorAttunement((prevAttunement) => (prevAttunement + 1) % 10);
    }
  }, [isLocked]);

  const decrementAttunement = useCallback(() => {
    if (!isLocked) {
      setEditorAttunement((prevAttunement) => (prevAttunement - 1 + 10) % 10);
    }
  }, [isLocked]);

  const handleAttunementChange = useCallback((value: string) => {
    if (!isLocked) {
      const newAttunement = parseInt(value, 10);
      if (!isNaN(newAttunement) && newAttunement >= 0 && newAttunement <= 9) {
        setEditorAttunement(newAttunement);
      }
    }
  }, [isLocked]);

  const clearSelection = useCallback(() => {
    if (window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
  }, []);

  const resetAttunement = useCallback(() => {
    if (!isLocked) {
      setEditorAttunement(0);
    }
  }, [isLocked]);

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
              className="attunement-input"
              contentEditable="true"
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
            >{editorAttunement}</span>
          </div>
        </div>
        <div className="attune-nav next" onClick={incrementAttunement}>&gt;</div>
      </div>
      <div className="mod-controls">
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