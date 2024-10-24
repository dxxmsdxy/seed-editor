import React, { memo } from 'react';
import { getKindClass } from '@/lib/utils/global';

interface QueueItemProps {
  item: {
    id: string;
    index: number;
    displaySeed: string;
    isSet: boolean;
    kind?: string;
  };
  isSelected: boolean;
  isDropping: boolean;
  onSelect: (index: number) => void;
  onReset: (e: React.MouseEvent, index: number) => void;
}

export const QueueItem = memo(({ 
  item, 
  isSelected, 
  isDropping,
  onSelect,
  onReset
}: QueueItemProps) => {
  return (
    <li
      className={`queue-item ${isSelected ? "selected" : ""} ${item.isSet ? 'set' : ''} ${getKindClass(item.kind)}`}
      onClick={() => onSelect(item.index)}
      data-index={item.index}
      data-dropping={isDropping}
    >
      <span className="metadata-icon">
            <svg className="icon_triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.72 94.72"><path d="M47.36 14.53 9.45 80.19h75.82L47.36 14.53z"/></svg>
        </span>
        <span className="metadata-icon">
            <svg className="icon_circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.72 94.72"><circle cx="47.36" cy="47.79" r="33.71"/></svg>
        </span>
        <span className="metadata-icon">
            <svg className="icon_square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.72 94.72"><path d="M15.57 16h63.58v63.58H15.57z"/></svg>
        </span>
      <div className={`queued-seed-number`}>
        <span className="queue-item-style-preview"></span>
        <strong>{item.displaySeed}</strong>
        <span 
          className="queue-reset"
          onClick={(e) => onReset(e, item.index)}
        />
      </div>
      <div className="tooltip">
        {item.kind || 'Unknown'}
      </div>
    </li>
  );
});

QueueItem.displayName = 'QueueItem';