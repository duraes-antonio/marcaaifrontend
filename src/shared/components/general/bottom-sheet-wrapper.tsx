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
import {StyleSheet} from 'react-native';
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
        ({
            nativeEvent: {
                layout: {height},
            },
        }) => setContentHeight(height),
        [],
    );
    const handleChange = useCallback(
        (index: number) => {
            if (!index && state === BottomSheetState.OPENED) {
                bottomSheetRef.current?.close();
                setState(BottomSheetState.CLOSED);
                dispatch(actionsUI.setModalContent());
            }
        },
        [dispatch, state],
    );

    useEffect(() => {
        if (!bottomSheetRef.current || !modalContent) {
            return;
        }
        bottomSheetRef.current.expand();
        setState(BottomSheetState.OPENED);
    }, [modalContent, bottomSheetRef]);

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
