import React, { useMemo } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '@/app/hooks';
import { calculateRemainder, calculateMostFrequentNumeral } from '@/lib/utils/global';

interface DetailsProps {
  isFocused: boolean;
  showOverlay: boolean;
  editorSeed: string;
  editorMod: string;
  editorAttunement: number;
  bitsArray: boolean[];
  generatedName: string;
}

const selectSelectedItem = createSelector(
  (state) => state.queue.selectedIndex,
  (state) => state.queue.items,
  (selectedIndex, items) => selectedIndex !== null ? items[selectedIndex] : null
);

const getAttunementString = (attunement: number): string => {
  const attunements = [
    'creation', 'destruction', 'perception', 'protection',
    'passion', 'fortune', 'wisdom', 'resilience',
    'transformation', 'eternity'
  ];
  return `(${attunements[attunement]}) ${attunement}`;
};

const getKindClass = (kind: string): string => {
  switch (kind.toLowerCase()) {
    case 'archetype':
      return 'kind-archetype';
    case 'fossil':
      return 'kind-fossil';
    case 'doomsday':
      return 'kind-doomsday';
    default:
      return '';
  }
};

const Details: React.FC<DetailsProps> = ({
  isFocused,
  showOverlay,
  editorSeed,
  editorMod,
  editorAttunement,
  bitsArray,
  generatedName,
}) => {
  const selectedItem = useAppSelector(selectSelectedItem);

  const memoizedValues = useMemo(() => {
    const activeBits = bitsArray.filter(bit => bit).length;
    const cardinalNumber = calculateRemainder(BigInt(editorSeed));
    const naturalAttunement = calculateMostFrequentNumeral(editorSeed);
    return { activeBits, cardinalNumber, naturalAttunement };
  }, [editorSeed, bitsArray]);

  const seedState = editorMod === "000000000000" && editorAttunement == +memoizedValues.naturalAttunement ? "Natural" : "Modified";

  // Determine the kind based on the selected item
  let selectedKind = "--";
  if (selectedItem) {
    selectedKind = selectedItem.kind || "Wild";
  }

  const mintOrder = selectedItem?.mintOrder ?? null;
  const mintOrderDisplay = mintOrder !== null ? (mintOrder + 1).toString() : "--";

  const isDisabled = mintOrder === null;

  // Determine if the item is from the seedList
  const isFromSeedList = selectedItem?.id !== undefined && selectedItem?.kind !== undefined;

  return (
    <div className={`seed-details ${isFocused ? 'focused' : ''} ${showOverlay ? 'show' : ''}`}>
      <div className="seed-details-inner">
        <div className="seed-details-header-wrap">
          <div className="seed-details-header">
            SEED<span>Draft</span>
          </div>
          <div className="overlay-description">
            <span>id:</span>{mintOrderDisplay}
          </div>
        </div>  
        <div className="seed-details-metadata">
          <div className="metadata-list-container">
            <div className="metadata-title">
              Attributes
            </div>
            <li className="metadata-item">
              <span className="metadata-label">Name:</span>
              <span className="metadata-value">{generatedName !== '' ? generatedName : "--"}</span>
            </li>
            <ul className="metadata-list">
              <li className="metadata-item">
                <span className="metadata-label">Kind:</span>
                <span className={`metadata-value ${getKindClass(selectedKind)}`}>
                  <span className="metadata-icon">
                    <svg className="icon_triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.72 94.72"><path d="M47.36 14.53 9.45 80.19h75.82L47.36 14.53z"/></svg>
                  </span>
                  <span className="metadata-icon">
                    <svg className="icon_circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.72 94.72"><circle cx="47.36" cy="47.79" r="33.71"/></svg>
                  </span>
                  <span className="metadata-icon">
                    <svg className="icon_square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.72 94.72"><path d="M15.57 16h63.58v63.58H15.57z"/></svg>
                  </span>
                  {selectedKind}
                </span>
              </li>
              <li className="metadata-item">
                <span className="metadata-label">State:</span>
                <span className="metadata-value">{seedState}</span>
              </li>
              <li className="metadata-item">
                <span className="metadata-label">Attunement:</span>
                <span className="metadata-value">{getAttunementString(editorAttunement || Number(memoizedValues.naturalAttunement))}</span>
              </li>
              <li className="metadata-item">
                <span className="metadata-label">Bits:</span>
                <span className="metadata-value">{memoizedValues.activeBits}</span>
              </li>
              <li className="metadata-item">
                <span className="metadata-label">Cardinal No.:</span>
                <span className="metadata-value">{memoizedValues.cardinalNumber.toString()}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="details-actions">
          <div className="details-actions-container">
            <div className="details-actions-title">
              D/L
            </div>
            <ul className="details-actions-list">
              <li className="ui-element">PNG</li>
              <li className="ui-element">SVG</li>
              <span className="split-button">
                <li className={`ui-element details-embed ${isDisabled ? 'disabled' : ''}`}>Embed</li>
                <li className={`ui-element details-raw ${isDisabled ? 'disabled' : ''}`}>Raw</li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;