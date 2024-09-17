import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { updateDisplaySetting, updateEditorMod, resetEditorMod, updateEditorAttunement, overrideEditorAttunement, resetAttunementOverride, selectModValues, resetEditorAttunement, selectDisplaySettings, toggleColorAnimationPause, toggleDepthAnimationPause, toggleSpinAnimationPause, updateSliderValue, selectAttunement } from '@/store/slices/editorSlice';
import { selectElementContents, clearSelection } from '@/lib/utils';
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


  const [activeSelection, setActiveSelection] = useState(false);
  const startSelection = useCallback(() => setActiveSelection(true), []);
  const endSelection = useCallback(() => setActiveSelection(false), []);


  // Reset the mod value
  const handleResetMod = () => {
    if (!isLocked) {
      dispatch(resetEditorMod("000000000000000"));
    }
  };

  const handleResetAttunement = React.useCallback(() => {
    if (!isLocked) {
      dispatch(resetEditorAttunement());
    }
  }, [isLocked, dispatch]);

  // Debounced function to update editor mod value
  const debouncedUpdateEditorMod = useCallback(
    debounce((mod: string, value: number) => {
      dispatch(updateEditorMod({ mod, value, isSliding: false }));
    }, 50),
    [dispatch]
  );

  // Debounced function for updating the attunement
  const debouncedUpdateAttunement = useCallback(
    debounce((attunement: number) => {
      dispatch(updateEditorAttunement({ attunementNumber: attunement, updateChanges: false }));
    }, 100),
    [dispatch]
  );

  // Handle display settings toggle button interaction
  const handleDisplaySettingToggle = useCallback((index: number) => {
    if (!isLocked) {
      dispatch(updateDisplaySetting(index));
    }
  }, [isLocked, dispatch]);

  // Handle display settings slider interaction
  const handleSliderChange = (mod: string, value: number, isSliding: boolean) => {
    if (!isLocked) {
      if (isSliding) {
      } else {
        // Update mod when sliding stops
        dispatch(updateSliderValue({ name: mod, value }));
      }
    }
  };

  // Render display setting icons
  const renderDisplaySettingIcons = () => {
    return icons.map((Icon, index) => (
      <a
        key={index}
        href="#" 
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
  
  // Updating attunement from the SVG's attunement attribute
  useEffect(() => {
    const updateAttunementFromSVG = () => {
      if (!isAttunementOverridden) {
        const artworkSVG = document.querySelector('.seedartwork') as HTMLElement;
        if (artworkSVG) {
          const svgAttunement = parseInt(artworkSVG.getAttribute('data-attunement') || '0', 10);
          const svgSeed = artworkSVG.getAttribute('data-seed') || '0';
          if (svgSeed === editorSeed && svgAttunement !== editorAttunement) {
            debouncedUpdateAttunement(svgAttunement);
            prevAttunementRef.current = svgAttunement;
          }
        }
      }
    };

    updateAttunementFromSVG();
    // Might add an event listener here for dynamic changes
  }, [dispatch, editorSeed, editorAttunement, isAttunementOverridden, debouncedUpdateAttunement]);

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
      }
    }
  }, [isLocked, dispatch]);


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
            Attunement: 
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
          <span
            className="mod-input ui-element"
            onClick={(e) => {
              e.stopPropagation();
              selectElementContents(e.currentTarget);
            }}
            suppressContentEditableWarning={true}
            onInput={(e) => {
              const value = e.currentTarget.textContent;
              if (value === '') {
                handleResetMod();
              } else {
                handleAttunementChange(parseInt(value || "000000000000000"));
              }
            }}
            onBlur={(e) => {
              e.preventDefault();
              if (e.currentTarget.textContent === '') {
                handleResetMod();
              } else {
                handleAttunementChange(parseInt(e.currentTarget.textContent || "0", 10));
                clearSelection();
              }
              e.currentTarget.textContent = editorAttunement.toString();
            }}
          >
            {useAppSelector(state => state.seed.editorMod)}
          </span>
          <span className="mod-reset" onClick={handleResetMod}>Reset</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DisplaySettings);