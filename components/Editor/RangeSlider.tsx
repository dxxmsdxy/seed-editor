import React, { useState, useEffect } from 'react';

interface RangeSliderProps {
  name: string;
  value: number;
  onChange: (name: string, value: number) => void;
  min: number;
  max: number;
  step?: number;
  disabled?: boolean;
  displayValue?: (value: number) => string;
  defaultValue?: number;
  checkDefault?: boolean;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ 
  name, 
  value, 
  onChange, 
  min, 
  max, 
  step = 1, 
  disabled = false, 
  displayValue = (value) => value.toString(), 
  defaultValue = 0, 
  checkDefault = true
}) => {
  const isDefault = checkDefault ? value === defaultValue : false;
  const [localValue, setLocalValue] = useState(value);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setLocalValue(newValue);
    onChange(name, newValue);
  };

  return (
    <div className={`setting-slider ${disabled ? 'disabled' : ''} ${isDefault && !isActive ? 'default' : ''}`}>
      <div className="setting-label">{name}:</div>
      <div className="range-slider-container">
        <div className="range-slider">
          <input
            className="range-slider__range"
            type="range"
            value={localValue}
            min={min}
            max={max}
            step={step}
            onChange={handleChange}
            disabled={disabled}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onTouchStart={() => setIsActive(true)}
            onTouchEnd={() => setIsActive(false)}
          />
          <span className="range-slider__value">
            {displayValue(localValue)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;