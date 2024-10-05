import React, { useCallback, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import {
  selectCurrentPageItems,
  selectTotalPages,
  selectCurrentPage,
  selectItemsPerPage,
  selectIsQueueModified,
  selectSelectedIndex,
  updateQueueItem,
  updateQueueOrder,
  resetQueueItem,
  selectQueueItems,
  setSelectedIndex,
  setCurrentPage,
} from '@/store/slices/queueSlice';
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import { selectElementContents, clearSelection } from '@/lib/utils/global';
import { updateEditorState, resetEditorState, selectEditorSeed, selectEditorMod, selectEditorAttunement } from '@/store/slices/editorSlice';





//================================================//

interface QueueProps {
  isDropping: boolean;
}


// COMPONENT ---------------------------------------

const Queue: React.FC<QueueProps> = ({ isDropping }) => {
  const dispatch = useAppDispatch();
  const editorSeed = useSelector(selectEditorSeed);
  const editorMod = useSelector(selectEditorMod);
  const editorAttunement = useSelector(selectEditorAttunement);
  
  const totalPages = useAppSelector(selectTotalPages);
  const currentPage = useAppSelector(selectCurrentPage);
  const itemsPerPage = useAppSelector(selectItemsPerPage);
  const customEqual = (a, b) => {
    return a.length === b.length && a.every((item, index) => {
      return item.id === b[index].id && 
             item.isSet === b[index].isSet && 
             item.displaySeed === b[index].displaySeed &&
             item.index === b[index].index;  // Add this line
    });
  };
  const queueItems = useAppSelector(selectQueueItems);
  const currentPageItems = useAppSelector(selectCurrentPageItems, customEqual);
  const isQueueModified = useAppSelector(selectIsQueueModified);
  const selectedQueueIndex = useAppSelector(selectSelectedIndex);
  

  // EVENT HANDLERS --------------------------------

  // Change queue page
  const handlePageChange = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setCurrentPage(newPage));
    }
  }, [dispatch, totalPages]);

  // Go to first page of the queue
  const goToFirstPage = useCallback((e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).classList.contains('page-value')) {
      handlePageChange(1);
    }
  }, [handlePageChange]);

  // Select a queue item
  const handleQueueItemSelect = useCallback((index: number) => {
    console.log('Selecting queue item:', index, queueItems[index]);
    if (selectedQueueIndex === index) {
      dispatch(setSelectedIndex(null));
      dispatch(resetEditorState());
    } else {
      dispatch(setSelectedIndex(index));
      const selectedItem = queueItems[index];
      if (selectedItem) {
        console.log('Updating editor state with:', {
          seed: selectedItem.newValues.newSeed || selectedItem.initialSeed,
          mod: selectedItem.newValues.newMod || selectedItem.initialMod || '000000000000',
          attunement: selectedItem.newValues.newAttunement?.toString() ?? selectedItem.initialAttunement?.toString() ?? '0',
          isAttunementOverridden: selectedItem.newValues.isAttunementOverridden ?? selectedItem.isAttunementOverridden
        });
        dispatch(updateEditorState({
          seed: selectedItem.newValues.newSeed || selectedItem.initialSeed,
          mod: selectedItem.newValues.newMod || selectedItem.initialMod || '000000000000',
          attunement: selectedItem.newValues.newAttunement?.toString() ?? selectedItem.initialAttunement?.toString() ?? '0',
          isAttunementOverridden: selectedItem.newValues.isAttunementOverridden ?? selectedItem.isAttunementOverridden
        }));
      }
    }
  }, [dispatch, queueItems, selectedQueueIndex]);

  // Reset a queue item to its initial state
  const handleQueueItemReset = useCallback((e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const item = currentPageItems.find(item => item.index === index);
    if (item) {
      dispatch(resetQueueItem(index));
      if (index === selectedQueueIndex) {
        dispatch(updateEditorState({
          seed: item.initialSeed,
          mod: item.initialMod || '000000000000',
          attunement: item.initialAttunement?.toString() || '0',
        }));
      }
      dispatch(updateQueueOrder());
    }
  }, [dispatch, selectedQueueIndex, currentPageItems]);

  // Click the inscribe button
  const handleInscribeClick = useCallback(() => {
    if (isQueueModified) {
      dispatch(setShowInscribeModal(true));
    }
  }, [dispatch, isQueueModified]);


  // DERIVED STATE ---------------------------------

  // Determine where to place "set items" divider
  const getDividerIndex = useCallback((items: typeof currentPageItems) => {
    const lastSetItemIndex = items.findLastIndex(item => item.isSet);
    return lastSetItemIndex + 1;
  }, []);

  // Store divider index
  const dividerIndex = useMemo(() => getDividerIndex(currentPageItems), [currentPageItems, getDividerIndex]);


  // EFFECTS --------------------------------------

  useEffect(() => {
    // This effect will run whenever the queue items change
  }, [queueItems.length]);

  

  // STRUCTURE -------------------------------------

  if (currentPageItems.length === 0) {
    return (
      <div className="queue-container">
        <a
            className={`ui-button inscribe z-button ${isQueueModified ? "" : "disabled"}`}
            onClick={handleInscribeClick}
          >
            --
          </a>
      </div>
    )
  } else {
    return (
      <div className="queue-container">
        <div className={`page-selector ${totalPages > 1 ? '' : 'disabled'}`} onClick={goToFirstPage}>
          <div 
            className={`page-nav prev ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
          >&lt;</div>
          <div className="page-label-container" onClick={goToFirstPage}>
            <div className="page-label">
              <span 
                className="page-value"
                contentEditable="true"
                inputMode="numeric"
                onClick={(e) => {
                  e.stopPropagation();
                  selectElementContents(e.currentTarget);
                }}
                onBlur={(e) => {
                  e.preventDefault();
                  const newPage = parseInt(e.currentTarget.textContent || "1", 10);
                  handlePageChange(newPage);
                  e.currentTarget.textContent = currentPage.toString();
                  clearSelection();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.currentTarget.blur();
                  }
                }}
              >{currentPage}</span> / {totalPages}
            </div>
          </div>
          <div 
            className={`page-nav next ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
          >&gt;</div>
        </div>
        <ul role="list" className="queue-list">
          {currentPageItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {index === dividerIndex && <span className="queue-divider"></span>}
              <li
                className={`queue-item ${item.index === selectedQueueIndex ? "selected" : ""} ${item.isSet ? 'set' : ''}`}
                onClick={() => handleQueueItemSelect(item.index)}
                data-index={item.index}
                data-dropping={isDropping}
              >
                <div className={`queued-seed-number`}>
                  <span className="queue-item-style-preview"></span>
                  <strong>{item.displaySeed}</strong>
                  <span 
                    className="queue-reset"
                    onClick={(e) => handleQueueItemReset(e, item.index)}
                  ></span>
                </div>
              </li>
            </React.Fragment>
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
              {currentPageItems.filter(item => item.isSet).length}
              <span>)</span>
            </span>
          )}
        </a>
      </div>
    );
  }
};

export default Queue;