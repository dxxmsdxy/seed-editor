"use client";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { seedToBits } from '@/lib/utils';

export type Bit = {
  bit: boolean;
  index: number;
  toggleBit: (index: number) => void;
  activeSelection: boolean;
  startSelection: () => void;
  updateSelection: () => void;
  endSelection: () => void;
};

export const Bit = ({
  bit,
  index,
  toggleBit,
  activeSelection,
  startSelection,
  endSelection,
}: Bit) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startSelection();
    toggleBit(index);
  };

  const handleMouseEnter = () => {
    if (activeSelection) {
      toggleBit(index);
    }
  };

  const handleMouseUp = () => {
    if (activeSelection) {
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
  toggleBit,
}: {
  toggleBit: (index: number) => void;
}) => {
  const editorSeed = useSelector((state: RootState) => state.seed.editorSeed);
  const bitsArray = seedToBits(BigInt(editorSeed));
  const [activeSelection, setActiveSelection] = useState(false);

  const startSelection = () => {
    setActiveSelection(true);
  };

  const updateSelection = () => {
    if (!activeSelection) {
      setActiveSelection(true);
    }
  };

  const endSelection = () => {
    setActiveSelection(false);
  };

  return (
    <div className="z-layout-grid grid">
      {bitsArray.map((bit, index) => (
        <Bit
          key={index}
          bit={bit}
          index={bitsArray.length - 1 - index}  // Reverse the index
          toggleBit={(reversedIndex) => toggleBit(bitsArray.length - 1 - reversedIndex)}  // Reverse the toggle index
          activeSelection={activeSelection}
          startSelection={startSelection}
          updateSelection={updateSelection}
          endSelection={endSelection}
        />
      )).reverse()}
    </div>
  );
};
