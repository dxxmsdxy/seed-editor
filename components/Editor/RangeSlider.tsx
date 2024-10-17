import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';





//================================================//

interface RangeSliderProps {
  name: string;
  value: number;
  onChange: (name: string, value: number, isSliding: boolean) => void;
  min: number;
  max: number;
  step?: number;
  disabled?: boolean;
  displayValue?: (value: number) => string;
  defaultValue?: number;
  checkDefault?: boolean;
  label?: string;
}


// COMPONENT LOGIC ---------------------------------

const RangeSlider: React.FC<RangeSliderProps> = React.memo(({
  name, 
  value, 
  onChange, 
  min, 
  max, 
  step = 1, 
  disabled = false, 
  displayValue = (value) => value.toString(), 
  defaultValue = 0, 
  checkDefault = true,
  label
}) => {
  RangeSlider.displayName = 'RangeSlider';
  const isDefault = checkDefault ? value === defaultValue : false;
  const [isActive, setIsActive] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [displayedValue, setDisplayedValue] = useState(value);

  // Debounced slider changes
  const debouncedOnChange = useCallback(
    debounce((name: string, value: number) => {
      onChange(name, value, false);
    }, 50),
    [onChange]
  );

  // Update mod value from slider
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setLocalValue(newValue);
    setDisplayedValue(newValue);
  };
  const handleSlideEnd = () => {
    setIsActive(false);
    onChange(name, localValue, false);
    debouncedOnChange.flush();
  };

  // Keyboard incrementing slider position
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    let newValue = localValue;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      newValue = Math.min(max, localValue + step);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      newValue = Math.max(min, localValue - step);
    } else {
      return;
    }

    setLocalValue(newValue);
    setDisplayedValue(newValue);
    debouncedOnChange(name, newValue);
  }, [localValue, max, min, step, disabled, name, debouncedOnChange]);


  // EFFECTS ---------------------------------------

  useEffect(() => {
    setLocalValue(value);
    setDisplayedValue(value);
  }, [value]);



  
  // STRUCTURE -------------------------------------

  return (
    <div className={`setting-slider ${disabled ? 'disabled' : ''} ${isDefault && !isActive ? 'default' : ''}`}>
      <div className="setting-label ui-element">{label || name}:</div>
      <div className="range-slider-container">
        <div className="range-slider">
          <input
            className="range-slider__range slider-ui"
            type="range"
            value={localValue}
            min={min}
            max={max}
            step={step}
            onChange={handleChange}
            disabled={disabled}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={handleSlideEnd}
            onTouchStart={() => setIsActive(true)}
            onTouchEnd={handleSlideEnd}
            onKeyDown={handleKeyDown}
          />
          <span className="range-slider__value">
            {displayValue(displayedValue)}
          </span>
        </div>
      </div>
    </div>
  );
});

export default RangeSlider;