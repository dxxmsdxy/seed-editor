import React, { useCallback, useMemo } from 'react';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import {
  selectCurrentPageItems,
  selectTotalPages,
  selectIsQueueModified,
  updateQueueOrder,
  resetQueueItemAndUpdateEditor,
  selectQueueItems,
  setSelectedIndex,
  setCurrentPage,
} from '@/store/slices/queueSlice';
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import { selectElementContents, clearSelection } from '@/lib/utils/global';
import { updateEditorState, resetEditorState, pushCurrentStateToHistory } from '@/store/slices/editorSlice';





//================================================//

interface QueueProps {
  isDropping: boolean;
}

const getKindClass = (kind: string | undefined): string => {
  switch (kind?.toLowerCase()) {
    case 'archetype':
      return 'kind-archetype';
    case 'fossil':
      return 'kind-fossil';
    case 'doomsday':
      return 'kind-doomsday';
    case 'wild':
    case undefined:
    case null:
      return 'kind-wild';
    default:
      return '';
  }
};


// COMPONENT ---------------------------------------

const Queue: React.FC<QueueProps> = React.memo(({ isDropping }) => {
  const dispatch = useAppDispatch();
  
  const queueState = useAppSelector(useMemo(() => (state: RootState) => ({
    totalPages: selectTotalPages(state),
    currentPage: state.queue.currentPage,
    isModified: selectIsQueueModified(state),
    selectedIndex: state.queue.selectedIndex
  }), []));

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
  

  // EVENT HANDLERS --------------------------------

  // Change queue page
  const handlePageChange = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= queueState.totalPages) {
      dispatch(setCurrentPage(newPage));
    }
  }, [dispatch, queueState.totalPages]);

  // Go to first page of the queue
  const goToFirstPage = useCallback((e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).classList.contains('page-value')) {
      handlePageChange(1);
    }
  }, [handlePageChange]);

  // Select a queue item
  const handleQueueItemSelect = useCallback((index: number) => {
    console.log('Selecting queue item:', index, queueItems[index]);
    if (queueState.selectedIndex === index) {
      dispatch(setSelectedIndex(null));
      dispatch(resetEditorState());
    } else {
      dispatch(pushCurrentStateToHistory());
      const selectedItem = queueItems[index];
      if (selectedItem) {
        const newState = {
          seed: selectedItem.newValues.newSeed || selectedItem.initialSeed,
          mod: selectedItem.newValues.newMod || selectedItem.initialMod || '000000000000',
          attunement: selectedItem.newValues.newAttunement?.toString() ?? selectedItem.initialAttunement?.toString() ?? '0',
          isAttunementOverridden: selectedItem.newValues.isAttunementOverridden ?? selectedItem.isAttunementOverridden
        };
        console.log('Updating editor state with:', newState);
        dispatch(updateEditorState(newState));
      }
      // Move this dispatch after updating the editor state
      dispatch(setSelectedIndex(index));
    }
  }, [dispatch, queueState.selectedIndex, queueItems]);

  // Reset a queue item to its initial state
  const handleQueueItemReset = useCallback((e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    dispatch(resetQueueItemAndUpdateEditor(index));
    dispatch(updateQueueOrder());
  }, [dispatch]);

  // Click the inscribe button
  const handleInscribeClick = useCallback(() => {
    if (queueState.isModified) {
      dispatch(setShowInscribeModal(true));
    }
  }, [dispatch, queueState.isModified]);


  // DERIVED STATE ---------------------------------

  // Store divider index
  const dividerIndex = useMemo(() => 
    currentPageItems.findLastIndex(item => item.isSet) + 1
  , [currentPageItems]);
  

  // STRUCTURE -------------------------------------

  if (currentPageItems.length === 0) {
    return (
      <div className="queue-container">
        <a
            className={`ui-button inscribe z-button ${queueState.isModified ? "" : "disabled"}`}
            onClick={handleInscribeClick}
          >
            --
          </a>
      </div>
    )
  } else {
    return (
      <div className="queue-container">
        <div className={`page-selector ${queueState.totalPages > 1 ? '' : 'disabled'}`} onClick={goToFirstPage}>
          <div 
            className={`page-nav prev ${queueState.currentPage === 1 ? 'disabled' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (queueState.currentPage > 1) handlePageChange(queueState.currentPage - 1);
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
                  e.currentTarget.textContent = queueState.currentPage.toString();
                  clearSelection();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.currentTarget.blur();
                  }
                }}
              >{queueState.currentPage}</span> / {queueState.totalPages}
            </div>
          </div>
          <div 
            className={`page-nav next ${queueState.currentPage === queueState.totalPages ? 'disabled' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              if (queueState.currentPage < queueState.totalPages) handlePageChange(queueState.currentPage + 1);
            }}
          >&gt;</div>
        </div>
        <ul role="list" className="queue-list">
          {currentPageItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {index === dividerIndex && <span className="queue-divider"></span>}
              <li
                className={`queue-item ${item.index === queueState.selectedIndex ? "selected" : ""} ${item.isSet ? 'set' : ''} ${getKindClass(item.kind)}`}
                onClick={() => handleQueueItemSelect(item.index)}
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
                    onClick={(e) => handleQueueItemReset(e, item.index)}
                  ></span>
                </div>
                <div className="tooltip">
                  {item.kind || 'Unknown'}
                </div>
              </li>
            </React.Fragment>
          ))}
        </ul>
        <a
          className={`ui-button inscribe z-button ${queueState.isModified ? "" : "disabled"}`}
          onClick={handleInscribeClick}
        >
          Inscribe
          {queueState.isModified && (
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
});

export default Queue;