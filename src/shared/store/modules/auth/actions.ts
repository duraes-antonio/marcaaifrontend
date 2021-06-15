import {AuthCredentials} from '../../../../models/auth';
import {ReduxActionWithValue} from '../../types';

export enum ActionAuthType {
    LOGIN_REQUEST = '@auth/login-request',
    LOGIN_SUCCESS = '@auth/login-success',
    LOGOUT = '@auth/logout',
    REFRESH = '@auth/refresh',
}

export type ActionAuth = ReduxActionWithValue<string | AuthCredentials>;

const authActionFactory = <T>(
    type: ActionAuthType,
    value: T,
): ReduxActionWithValue<T> => {
    return {
        type,
        value,
    };
};

export const actionsAuth = {
    loginSuccess(token: string): ReduxActionWithValue<string> {
        return authActionFactory(ActionAuthType.LOGIN_SUCCESS, token);
    },

    loginRequest(data: AuthCredentials): ReduxActionWithValue<AuthCredentials> {
        return authActionFactory(ActionAuthType.LOGIN_REQUEST, data);
    },

    logout(data: AuthCredentials): ReduxActionWithValue<AuthCredentials> {
        return authActionFactory(ActionAuthType.LOGOUT, data);
    },

    refreshToken(token: string): ReduxActionWithValue<string> {
        return authActionFactory<string>(ActionAuthType.REFRESH, token);
    },
};
