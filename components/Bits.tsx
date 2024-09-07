"use client";
import { useState } from "react";

export type Bit = {
  bit: boolean;  // Change this to boolean
  index: number;
  toggleBit: (index: number) => void;
  isSelecting: boolean;
  startSelection: () => void;
  updateSelection: () => void;
  endSelection: () => void;
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
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startSelection();
    toggleBit(index);
  };

  const handleMouseEnter = () => {
    if (isSelecting) {
      toggleBit(index);
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
      className={`btn-layer z-button ${bit ? "selected" : ""}`}
    >
      {index + 1}
    </div>
  );
};

export const BitsArray = ({
  bitsArray,
  toggleBit,
}: {
  bitsArray: boolean[];  // Change this to boolean[]
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
          index={bitsArray.length - 1 - index}  // Reverse the index
          toggleBit={(reversedIndex) => toggleBit(bitsArray.length - 1 - reversedIndex)}  // Reverse the toggle index
          isSelecting={isSelecting}
          startSelection={startSelection}
          updateSelection={updateSelection}
          endSelection={endSelection}
        />
      )).reverse()}
    </div>
  );
};
