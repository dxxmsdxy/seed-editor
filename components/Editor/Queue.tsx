import React, { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import {
  getQueueItemsForRendering,
  setCurrentPage,
  toggleQueueItemLock,
  selectAndUpdateQueueItemThunk,
  resetQueueItemThunk,
} from '@/store/slices/queueSlice';
import { setShowInscribeModal } from '@/store/slices/modalSlice';

const Queue: React.FC = () => {
  const dispatch = useAppDispatch();
  const queueItemsForRendering = useAppSelector(getQueueItemsForRendering);
  const { items: queueItems, selectedIndex: selectedQueueIndex, currentPage, itemsPerPage } = useAppSelector((state) => state.queue);
  const isQueueModified = useAppSelector(state => state.queue.items.some(item => item.isSet));

  // DERIVED STATE ----------------------------------------

  const totalPages = Math.ceil(queueItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // EVENT HANDLERS ---------------------------------------

  // Update the queue page with by page number
  const handlePageChange = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setCurrentPage(newPage));
    }
  }, [dispatch, totalPages]);

  // Go to the queue's first page
  const goToFirstPage = useCallback((e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).classList.contains('page-value')) {
      handlePageChange(1);
    }
  }, [handlePageChange]);

  // Select a specified queue item by index
  const handleQueueItemSelect = useCallback((index: number) => {
    dispatch(selectAndUpdateQueueItemThunk(index));
  }, [dispatch]);

  // Reset a specified queue item by index
  const handleQueueItemReset = useCallback((e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    dispatch(resetQueueItemThunk(index));
  }, [dispatch]);

  // Begin the inscription flow
  const handleInscribeClick = useCallback(() => {
    if (isQueueModified) {
      dispatch(setShowInscribeModal(true));
    }
  }, [dispatch, isQueueModified]);

  return (
    <div className="queue-container">
      <div className={`page-selector ${totalPages > 1 ? '' : 'disabled'}`} onClick={goToFirstPage}>
        {/* Page selector content */}
        {/* You'll need to implement the page selector UI here */}
      </div>
      <ul role="list" className="queue-list">
        {queueItemsForRendering.slice(startIndex, endIndex).map((item) => (
          <li
            className={`queue-item ${item.isSelected ? "selected" : ""} ${item.isSet ? 'set' : ''}`}
            key={item.index}
            onClick={() => handleQueueItemSelect(item.index)}
          >
            <div className={`queued-seed-number`}>
              <span 
                className={`queue-lock ${item.locked ? 'locked' : ''} ${item.isSeedZero ? 'disabled' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!item.isSeedZero) {
                    dispatch(toggleQueueItemLock(item.index));
                  }
                }}
              ></span>
              <strong>{item.displaySeed}</strong>
              <span 
                className="queue-reset"
                onClick={(e) => handleQueueItemReset(e, item.index)}
              ></span>
            </div>
          </li>
        ))}
      </ul>
      <a
        className={`ui-button inscribe z-button ${isQueueModified ? "" : "disabled"}`}
        onClick={handleInscribeClick}
      >
        Inscribe
        {isQueueModified && (
          <span className="queue-count">
            <span>(</span>
            {queueItems.filter(item => item.isSet).length}
            <span>)</span>
          </span>
        )}
      </a>
    </div>
  );
};

export default Queue;