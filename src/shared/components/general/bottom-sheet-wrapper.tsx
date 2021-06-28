import React, {useEffect, useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useSelector} from 'react-redux';
import reduxSelectors from '../../store/root-selector';

export function BottomSheetWrapper() {
    const {modalContent} = useSelector(reduxSelectors.userInterface);
    const bottomSheetRef = useRef<RBSheet>(null);
    useEffect(() => {
        if (!bottomSheetRef?.current) {
            return;
        }
        if (!modalContent) {
            return bottomSheetRef?.current?.close();
        }
        bottomSheetRef?.current?.open();
    }, [modalContent]);
    return (
        <RBSheet
            ref={bottomSheetRef}
            closeOnDragDown
            closeOnPressBack
            closeOnPressMask
            height={500}
            animationType={'fade'}
            openDuration={100}
            closeDuration={100}
            customStyles={{
                container: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 'auto',
                    paddingBottom: 20,
                },
            }}>
            {modalContent}
        </RBSheet>
    );
}
