"use client";
import { useState, useMemo } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { seedToBits } from '@/lib/utils';




//================================================//

// Initial bit state
export type Bit = {
  bit: boolean;
  index: number;
  toggleBit: (index: number) => void;
  activeSelection: boolean;
  startSelection: () => void;
  updateSelection: () => void;
  endSelection: () => void;
};

// The individual bit buttons in the layer grid
export const Bit = ({
  bit, index, toggleBit, activeSelection, startSelection, endSelection, decimalValue
}: Bit & { decimalValue: number }) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startSelection();
    toggleBit(index);
  };

  const handleMouseEnter = () => {
    if (activeSelection) {toggleBit(index)}
  };

  const handleMouseUp = () => {
    if (activeSelection) {endSelection()}
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleMouseUp}
      className={`btn-layer z-button ${bit ? "selected" : ""}`}
      title={`Decimal value: ${decimalValue}`}
    >
      {100 - index} {/* Change this line */}
    </div>
  );
};

// Generate a bit array with a seed
export const BitsArray = ({ toggleBit }: { toggleBit: (index: number) => void }) => {
  const editorSeed = useSelector((state: RootState) => state.seed.editorSeed);
  const bitsArray = useMemo(() => seedToBits(BigInt(editorSeed)), [editorSeed]);
  const [activeSelection, setActiveSelection] = useState(false);

  const startSelection = () => setActiveSelection(true);
  const updateSelection = () => !activeSelection && setActiveSelection(true);
  const endSelection = () => setActiveSelection(false);

  // STRUCTURE --------------------------------

  // Return structure for the LayersUI grid
  return (
    <div className="z-layout-grid grid">
      {bitsArray.map((bit, index) => {
        const decimalValue = 2 ** (99 - index); // Change this line
        return (
          <Bit
            key={index}
            bit={bit}
            index={99 - index} // Change this line
            toggleBit={toggleBit}
            activeSelection={activeSelection}
            startSelection={startSelection}
            updateSelection={updateSelection}
            endSelection={endSelection}
            decimalValue={decimalValue}
          />
        );
      })}
    </div>
  );
};
