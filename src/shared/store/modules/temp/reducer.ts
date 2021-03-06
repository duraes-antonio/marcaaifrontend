import {IProviderBasic} from '../../../../domain/entities/provider';
import {Nullable} from '../../../types/general';
import {ActionTempType} from './actions';
import {ReduxActionWithValue} from '../../types';
import {Service} from '../../../../domain/entities/service';

export interface TemporaryState {
    providerSelected?: IProviderBasic;
    serviceSelected?: Service;
    modalContent?: Nullable<JSX.Element>;
}

function tempReducer(
    state: TemporaryState,
    action: ReduxActionWithValue<any, ActionTempType>,
): TemporaryState {
    switch (action.type) {
        case ActionTempType.SELECT_PROVIDER:
            return {...state, providerSelected: action.value};
        case ActionTempType.SELECT_SERVICE:
            return {...state, serviceSelected: action.value};
        case ActionTempType.SET_MODAL_CONTENT:
            return {...state, modalContent: action.value};
        default:
            return {...state};
    }
}

export default tempReducer;
