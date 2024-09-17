const useEditorState = () => {
    const dispatch = useAppDispatch();

    const updateSeed = useCallback((seed: string) => {
        dispatch(updateEditorState({ seed, mod: editorMod, attunement: editorAttunement }));
    }, [dispatch, editorMod, editorAttunement]);

    const updateMod = useCallback((mod: string) => {
        dispatch(updateEditorMod({ mod }));
    }, [dispatch]);

    const updateAttunement = useCallback((attunement: number) => {
        dispatch(updateEditorAttunement({ attunementNumber: attunement }));
    }, [dispatch]);

    const toggleBit = useCallback((index: number) => {
        dispatch(toggleBit(index));
    }, [dispatch]);

    const randomizeBits = useCallback(() => {
        dispatch(randomizeBits());
    }, [dispatch]);

    return { updateSeed, updateMod, updateAttunement, toggleBit, randomizeBits };
};