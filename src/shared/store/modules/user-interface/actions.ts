import {ReduxActionWithValue} from '../../types';
import {Nullable} from '../../../types/general';

export enum ActionUIType {
    SET_MODAL_CONTENT = '@ui/set_modal_content',
}

export const actionsUI = {
    setModalContent(
        content?: Nullable<JSX.Element>,
    ): ReduxActionWithValue<Nullable<JSX.Element>> {
        return {type: ActionUIType.SET_MODAL_CONTENT, value: content};
    },
};
