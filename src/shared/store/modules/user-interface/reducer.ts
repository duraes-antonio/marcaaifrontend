import {ReduxActionWithValue} from '../../types';
import {Nullable} from '../../../types/general';
import {ActionUIType} from './actions';

export interface UserInterfaceState {
    modalContent?: Nullable<JSX.Element>;
}

export const INITIAL_STATE: UserInterfaceState = {modalContent: null};

const userInterfaceReducer = (
    state = INITIAL_STATE,
    action: ReduxActionWithValue<Nullable<JSX.Element>>,
): UserInterfaceState => {
    switch (action.type) {
        case ActionUIType.SET_MODAL_CONTENT:
            return {...state, modalContent: action.value};
        default:
            return state;
    }
};

export default userInterfaceReducer;
