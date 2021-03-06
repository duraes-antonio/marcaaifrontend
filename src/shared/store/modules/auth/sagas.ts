import {all, call, put, takeLatest} from 'redux-saga/effects';
import {services} from '../../../../data/services/di';
import {ReduxActionWithValue} from '../../types';
import {AuthCredentials} from '../../../../models/auth';
import {ActionAuthType, actionsAuth} from './actions';
import {actionsUser} from '../user/actions';
import jwt_decode from 'jwt-decode';
import {User} from '../../../../domain/entities/user';

function* loginRequest(action: ReduxActionWithValue<AuthCredentials>) {
    const credentials = <AuthCredentials>action.value;
    const token: string = yield call(c => services.auth.signIn(c), credentials);
    const user = jwt_decode<User>(token);
    yield put(actionsAuth.loginSuccess(token));
    yield put(actionsUser.setUser(user));
    yield call(() => services.userStorage.save(user));
}

const authSagas = all([takeLatest(ActionAuthType.LOGIN_REQUEST, loginRequest)]);

export default authSagas;
