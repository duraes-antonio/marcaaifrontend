import React, {
    memo,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import reduxSelectors from '../../store/root-selector';
import {BackHandler, LayoutChangeEvent, StyleSheet} from 'react-native';
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import {actionsUI} from '../../store/modules/user-interface/actions';

enum BottomSheetState {
    OPENED,
    CLOSED,
}

function BottomSheetWrapper() {
    const {modalContent} = useSelector(reduxSelectors.userInterface);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const dispatch = useDispatch();
    const [state, setState] = useState(BottomSheetState.CLOSED);
    const [contentHeight, setContentHeight] = useState(0);

    const handleOnLayout = useCallback(
        (e: LayoutChangeEvent) => setContentHeight(e.nativeEvent.layout.height),
        [],
    );
    const handleChange = useCallback(
        (index: number): boolean => {
            if (!index && state === BottomSheetState.OPENED) {
                bottomSheetRef.current?.close();
                setState(BottomSheetState.CLOSED);
                dispatch(actionsUI.setModalContent());
                return true;
            }
            return false;
        },
        [dispatch, state],
    );

    // Verificar se o modal deve ser expandido
    useEffect(() => {
        if (!bottomSheetRef.current || !modalContent) {
            return;
        }
        bottomSheetRef.current.expand();
        setState(BottomSheetState.OPENED);
    }, [modalContent, bottomSheetRef]);

    // Ação de fechar após pressionar botão de voltar
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => handleChange(0),
        );

        return () => backHandler.remove();
    }, [handleChange]);

    const snapPoints = useMemo(() => [0, contentHeight], [contentHeight]);
    return !modalContent ? null : (
        <BottomSheet
            enableContentPanningGesture
            enableOverDrag
            enableHandlePanningGesture
            backdropComponent={backdropProps => (
                <BottomSheetBackdrop
                    {...backdropProps}
                    enableTouchThrough
                    closeOnPress
                    style={styles.container}
                />
            )}
            onChange={handleChange}
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}>
            <BottomSheetView onLayout={handleOnLayout}>
                {modalContent}
            </BottomSheetView>
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: '100%',
        bottom: 0,
        top: 0,
        position: 'absolute',
    },
});

export default memo(BottomSheetWrapper);
