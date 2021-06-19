import {StringNullable} from '../../../types/general';
import {ActionAuthType} from './actions';
import {ReduxActionWithValue} from '../../types';

export interface AuthState {
    authenticated: boolean;
    token?: StringNullable;
}

export const INITIAL_STATE: AuthState = {
    authenticated: false,
    token: null,
};

const authReducer = (
    state = INITIAL_STATE,
    action: ReduxActionWithValue<StringNullable>,
): AuthState => {
    switch (action.type as ActionAuthType) {
        case ActionAuthType.LOGIN_SUCCESS:
        case ActionAuthType.REFRESH:
            return {...state, authenticated: true, token: action.value};
        case ActionAuthType.LOGOUT:
            return {...state, authenticated: false, token: null};
        default:
            return {...state};
    }
};

export default authReducer;
