import React, {useEffect, useRef} from 'react';
import RBSheet, {RBSheetProps} from 'react-native-raw-bottom-sheet';
import {useSelector} from 'react-redux';
import reduxSelectors from '../../store/root-selector';

export function BottomSheetWrapper(props: RBSheetProps) {
    const {modalContent} = useSelector(reduxSelectors.userInterface);
    const bottomSheetRef = useRef<RBSheet>(null);
    useEffect(() => {
        if (modalContent && bottomSheetRef?.current) {
            bottomSheetRef?.current?.open();
        }
    }, [modalContent]);
    return (
        <RBSheet
            ref={bottomSheetRef}
            closeOnDragDown
            closeOnPressBack
            closeOnPressMask
            customStyles={{
                container: {borderTopLeftRadius: 20, borderTopRightRadius: 20},
            }}>
            {modalContent}
        </RBSheet>
    );
}
