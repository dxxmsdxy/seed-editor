"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { debounce } from 'lodash';
import { updateEditorState, updateEditorSeed, updateEditorMod, updateHasEditorChanges, resetEditorState, resetEditorMod, resetEditorAttunement, toggleBit, randomizeBits, undo, redo, selectLayersUIToggled, selectDisplaySettingsToggled, toggleLayersUI, toggleDisplaySettingsUI, checkEditorMatchesSelectedItem, toggleDepthAnimationPause, toggleSpinAnimationPause, overrideEditorAttunement, setUrlParams } from '@/store/slices/editorSlice';
import { initializeQueue, getSetQueueItems, setSelectedIndex, updateQueueItem } from '@/store/slices/queueSlice';
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import { selectElementContents, clearSelection, hideMouseCursor } from '@/lib/utils';
import { selectModValues } from '@/store/slices/editorSlice';
import { applyModValueToElements, resetLayers } from '@/lib/utils/artwork/updateSVGWithMod';
import { attunementNames, updateThemeColor, calculateMostFrequentNumeral } from '@/lib/utils/artwork/helpers';



interface DiagnosticValues {
    seed: {
      svg: string;
      editor: string;
      new: string;
      initial: string;
    };
    mod: {
      svg: string;
      editor: string;
      new: string;
      initial: string;
    };
    attunement: {
      svg: string;
      editor: string;
      new: string;
      initial: string;
    };
}


export default function DiagnosticsPanel() {
  
    //=======================================================
    //================== DIAGNOSTICS ========================
    //=======================================================

    const [diagnosticValues, setDiagnosticValues] = useState<DiagnosticValues>({
        seed: { svg: '', editor: '', new: '', initial: '' },
        mod: { svg: '', editor: '', new: '', initial: '' },
        attunement: { svg: '', editor: '', new: '', initial: '' },
    });

    const diagnosticWalletConnected = useSelector((state: RootState) => state.wallet.connected);
    const editorState = useSelector((state: RootState) => state.seed);
    console.log('Current editorState:', editorState);

    // Ref for the SVG element
    const artRef = useRef<SVGSVGElement | null>(null);

    // Effect to update the diagnostic display
    useEffect(() => {
        if (!diagnosticWalletConnected) return;

        const updateDiagnostic = () => {
        const svg = artRef.current;
        
        setDiagnosticValues({
            seed: {
            svg: svg?.getAttribute('data-seed') || '',
            editor: editorState.editorSeed || '',
            new: editorState.newSeed || '',
            initial: editorState.seed || '',
            },
            mod: {
            svg: svg?.getAttribute('data-mod') || '',
            editor: editorState.editorMod || '',
            new: editorState.newMod || '',
            initial: editorState.modNumber || '',
            },
            attunement: {
            svg: svg?.getAttribute('data-attunement') || '',
            editor: editorState.editorAttunement?.toString() || '',
            new: editorState.newAttunement?.toString() || '',
            initial: editorState.attunementNumber?.toString() || '',
            },
        });
        };

        // Run the update immediately
        updateDiagnostic();

        // Set up a MutationObserver to watch for changes in the SVG attributes
        const observer = new MutationObserver(updateDiagnostic);
        if (artRef.current) {
        observer.observe(artRef.current, { attributes: true, attributeFilter: ['data-seed', 'data-mod', 'data-attunement'] });
        }

        // Clean up the observer when the component unmounts or wallet disconnects
        return () => observer.disconnect();
    }, [diagnosticWalletConnected, editorState, artRef]);

    //=======================================================
    //================== DIAGNOSTICS ========================
    //=======================================================



    return (
        <>
          <div className="diagnostic">
            <ul>
              <li><span className="diagnostic-seed">SEED</span>
                svg: <span>{diagnosticValues.seed.svg || 'N/A'}</span> | 
                editor: <span>{diagnosticValues.seed.editor || 'N/A'}</span> | 
                new: <span>{diagnosticValues.seed.new || 'N/A'}</span> | 
                initial: <span>{diagnosticValues.seed.initial || 'N/A'}</span>
              </li>
              <li><span className="diagnostic-mod">MOD</span>
                svg: <span>{diagnosticValues.mod.svg || 'N/A'}</span> | 
                editor: <span>{diagnosticValues.mod.editor || 'N/A'}</span> | 
                new: <span>{diagnosticValues.mod.new || 'N/A'}</span> | 
                initial: <span>{diagnosticValues.mod.initial || 'N/A'}</span>
              </li>
              <li><span className="diagnostic-attunement">ATTUNEMENT</span>
                svg: <span>{diagnosticValues.attunement.svg || 'N/A'}</span> | 
                editor: <span>{diagnosticValues.attunement.editor || 'N/A'}</span> | 
                new: <span>{diagnosticValues.attunement.new || 'N/A'}</span> | 
                initial: <span>{diagnosticValues.attunement.initial || 'N/A'}</span>
              </li>
            </ul>
          </div>
        </>
    )
}
