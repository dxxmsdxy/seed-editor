"use client";
import { useState, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleBit, selectBitsArray, selectReversedBitsArray, resetEditorState, selectEditorSeed } from '@/store/slices/editorSlice';




//================================================//

// Generate a bit array with a seed
export const BitsArray = () => {
  const dispatch = useDispatch();
  const bitsArray = useSelector(selectBitsArray);
  const reversedBitsArray = useSelector(selectReversedBitsArray);
  const editorSeed = useSelector(selectEditorSeed);
  const [activeSelection, setActiveSelection] = useState(false);

  const startSelection = () => setActiveSelection(true);
  const updateSelection = () => !activeSelection && setActiveSelection(true);
  const handleEndSelection = () => setActiveSelection(false);

  const handleToggleBit = (index: number) => {
    dispatch(toggleBit(index));
  };

  const handleResetEditorSeed = () => {
    dispatch(resetEditorState());
  };

  return (
    <>
      <div className="z-layout-grid grid">
        {[...Array(100)].map((_, index) => {
          const arrayIndex = index + 1;
          const reversedIndex = index;
          return (
            <Bit
              key={arrayIndex}
              bit={bitsArray[reversedIndex]}
              visualIndex={arrayIndex}
              activeSelection={activeSelection}
              startSelection={() => {
                startSelection();
                handleToggleBit(index);
              }}
              updateSelection={() => {
                updateSelection();
                if (activeSelection) {
                  handleToggleBit(index);
                }
              }}
              endSelection={handleEndSelection}
            />
          );
        })}
      </div>
      <button
        className={`ui-button reset-button reset ${editorSeed !== '0' ? 'show' : ''}`}
        onClick={handleResetEditorSeed}
      >Reset</button>
    </>
  );
};

// Initial bit state
export type BitProps = {
  bit: boolean;
  visualIndex: number;
  activeSelection: boolean;
  startSelection: () => void;
  updateSelection: () => void;
  endSelection: () => void;
};

export const Bit = ({
  bit, visualIndex, activeSelection, startSelection, updateSelection, endSelection
}: BitProps) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startSelection();
  };

  const handleMouseEnter = () => {
    if (activeSelection) {
      updateSelection();
    }
  };

  const handleMouseUp = () => {
    endSelection();
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleMouseUp}
      className={`btn-layer z-button ${bit ? "selected" : ""}`}
    >
      {visualIndex}
    </div>
  );
};