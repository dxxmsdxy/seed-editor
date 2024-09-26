import React from 'react';
import { useAppSelector } from '@/app/hooks';
import { getMintOrder, calculateRemainder } from '@/lib/utils';

interface DetailsProps {
  isFocused: boolean;
  showOverlay: boolean;
  editorSeed: string;
  editorMod: string;
  editorAttunement: number;
  bitsArray: boolean[];
}

const getAttunementString = (attunement: number): string => {
  const attunements = [
    'creation', 'destruction', 'perception', 'protection',
    'passion', 'fortune', 'wisdom', 'resilience',
    'transformation', 'eternity'
  ];
  return `(${attunements[attunement]}) ${attunement}`;
};

const Details: React.FC<DetailsProps> = ({
  isFocused,
  showOverlay,
  editorSeed,
  editorMod,
  editorAttunement,
  bitsArray,
}) => {
  const activeBits = bitsArray.filter(bit => bit).length;
  const cardinalNumber = calculateRemainder(BigInt(editorSeed));

  const seedState = editorMod === "000000000000000" ? "Natural" : "Modified";

  // Get the selected queue item and its kind
  const selectedIndex = useAppSelector(state => state.queue.selectedIndex);
  const queueItems = useAppSelector(state => state.queue.items);
  const selectedItem = selectedIndex !== null ? queueItems[selectedIndex] : null;
  const selectedKind = selectedItem ? selectedItem.kind : "--";
 
  // Get the mint order
  const mintOrder = selectedItem ? getMintOrder(selectedItem.id) : null;
  const mintOrderDisplay = mintOrder !== null ? mintOrder.toString() : "--";


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
            <ul className="metadata-list">
              <li className="metadata-item">
                <span className="metadata-label">Kind:</span>
                <span className="metadata-value">{selectedKind}</span>
              </li>
              <li className="metadata-item">
                <span className="metadata-label">State:</span>
                <span className="metadata-value">{seedState}</span>
              </li>
              <li className="metadata-item">
              <span className="metadata-label">Attunement:</span>
              <span className="metadata-value">{getAttunementString(editorAttunement)}</span>
              </li>
              <li className="metadata-item">
                <span className="metadata-label">Bits:</span>
                <span className="metadata-value">{activeBits}</span>
              </li>
              <li className="metadata-item">
                <span className="metadata-label">Cardinal No.:</span>
                <span className="metadata-value">{cardinalNumber.toString()}</span>
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
              <li>PNG</li>
              <li>SVG</li>
              <li>Embed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;