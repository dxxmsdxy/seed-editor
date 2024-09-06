"use client";
import { useState } from "react";

export type Bit = {
  bit: number;
  index: number;
  toggleBit: any;
  isSelecting: any;
  startSelection: any;
  updateSelection: any;
  endSelection: any;
};

export const Bit = ({
  bit,
  index,
  toggleBit,
  isSelecting,
  startSelection,
  updateSelection,
  endSelection,
}: Bit) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startSelection();
    toggleBit(index);
    setIsSelected(true);
  };

  const handleMouseEnter = () => {
    if (isSelecting) {
      toggleBit(index);
      setIsSelected(true);
    }
  };

  const handleMouseUp = () => {
    if (isSelecting) {
      endSelection();
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleMouseUp}
      className={`btn-layer z-button ${bit === 1 ? "selected" : ""}`}
    >
      {index + 1}
    </div>
  );
};

export const BitsArray = ({
  bitsArray,
  toggleBit,
}: {
  bitsArray: number[];
  toggleBit: (index: number) => void;
}) => {
  const [isSelecting, setIsSelecting] = useState(false);

  const startSelection = () => {
    setIsSelecting(true);
  };

  const updateSelection = () => {
    if (!isSelecting) {
      setIsSelecting(true);
    }
  };

  const endSelection = () => {
    setIsSelecting(false);
  };

  return (
    <div className="z-layout-grid grid">
      {bitsArray.map((bit, index) => (
        <Bit
          key={index}
          bit={bit}
          index={index}
          toggleBit={toggleBit}
          isSelecting={isSelecting}
          startSelection={startSelection}
          updateSelection={updateSelection}
          endSelection={endSelection}
        />
      ))}
    </div>
  );
};
