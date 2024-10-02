import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { selectEditorSeed, selectEditorMod, selectEditorAttunement, selectModValues } from '@/store/slices/editorSlice';
import { selectSelectedIndex, selectQueueItems } from '@/store/slices/queueSlice';





//=================================================//

// Diagnostic panel state
interface DiagnosticValues {
    seed: {
      editor: string;
      new: string;
      initial: string;
    };
    mod: {
      editor: string;
      new: string;
      initial: string;
    };
    attunement: {
      editor: string;
      new: string;
      initial: string;
    };
    modValues: {
      color: number;
      spin: number;
      depth: number;
      tint: number;
      tintPercent: number;
      displaySettings: number;
    };
}


// MODULE --------------------------------------

export default function DiagnosticsPanel() {
    const [diagnosticValues, setDiagnosticValues] = useState<DiagnosticValues>({
        seed: { editor: '', new: '', initial: '' },
        mod: { editor: '', new: '', initial: '' },
        attunement: { editor: '', new: '', initial: '' },
        modValues: { color: 0, spin: 0, depth: 0, tint: 0, tintPercent: 0, displaySettings: 0 },
    });

    const walletConnected = useSelector((state: RootState) => state.wallet.connected);
    const editorSeed = useSelector(selectEditorSeed);
    const editorMod = useSelector(selectEditorMod);
    const editorAttunement = useSelector(selectEditorAttunement);
    const selectedIndex = useSelector(selectSelectedIndex);
    const queueItems = useSelector(selectQueueItems);
    const modValues = useSelector(selectModValues);

    useEffect(() => {
        if (!walletConnected) return;

        const selectedItem = selectedIndex !== null ? queueItems[selectedIndex] : null;

        setDiagnosticValues({
            seed: {
                editor: editorSeed,
                new: selectedItem?.newValues.newSeed || '',
                initial: selectedItem?.initialSeed || '',
            },
            mod: {
                editor: editorMod,
                new: selectedItem?.newValues.newMod || '',
                initial: selectedItem?.initialMod || '',
            },
            attunement: {
                editor: editorAttunement,
                new: selectedItem?.newValues.newAttunement?.toString() || '',
                initial: selectedItem?.initialAttunement?.toString() || '',
            },
            modValues: modValues,
        });
    }, [walletConnected, editorSeed, editorMod, editorAttunement, selectedIndex, queueItems, modValues]);

    if (!walletConnected) return null;




    // STRUCTURE ----------------------------------

    return (
        <div className="diagnostic">
            <ul>
                <li><span className="diagnostic-seed">Editor: </span>
                  seed: <span>{diagnosticValues.seed.editor || 'N/A'}</span> | mod: <span>{diagnosticValues.mod.editor || 'N/A'}</span> | attunement: <span>{diagnosticValues.attunement.editor || 'N/A'}</span>
                </li>
                <li><span className="diagnostic-mod">New: </span>
                  seed: <span>{diagnosticValues.seed.new || 'N/A'}</span> | 
                  mod: <span>{diagnosticValues.mod.new || 'N/A'}</span> | attunement: <span>{diagnosticValues.attunement.new || 'N/A'}</span>
                </li>
                <li><span className="diagnostic-attunement">Initial: </span>
                    seed: <span>{diagnosticValues.seed.initial || 'N/A'}</span> | mod: <span>{diagnosticValues.mod.initial || 'N/A'}</span> | 
                    attunement: <span>{diagnosticValues.attunement.initial || 'N/A'}</span>
                </li>
                <li><span className="diagnostic-modvalues">ModValues: </span>
                    color: <span>{diagnosticValues.modValues.color}</span> | 
                    spin: <span>{diagnosticValues.modValues.spin}</span> | 
                    depth: <span>{diagnosticValues.modValues.depth}</span> | 
                    tint: <span>{diagnosticValues.modValues.tint}</span> | 
                    tintPercent: <span>{diagnosticValues.modValues.tintPercent}</span> | 
                    displaySettings: <span>{diagnosticValues.modValues.displaySettings}</span>
                </li>
            </ul>
        </div>
    );
}