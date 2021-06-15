import {all, call, put, takeLatest} from 'redux-saga/effects';
import {services} from '../../../../data/services/di';
import {ReduxActionWithValue} from '../../types';
import {AuthCredentials} from '../../../../models/auth';
import {actionsAuth, ActionAuthType} from './actions';
import {actionsUser} from '../user/actions';
import jwt_decode from 'jwt-decode';
import {User} from '../../../../domain/entities/user';

function* loginRequest(action: ReduxActionWithValue<AuthCredentials>) {
    const credentials = <AuthCredentials>action.value;
    const token: string = yield call(c => services.auth.signIn(c), credentials);
    const {email, name} = jwt_decode<User>(token);
    yield put(actionsAuth.loginSuccess(token));
    yield put(actionsUser.setUser({name, email}));
    yield call(() => services.userStorage.save({email, name}));
}

const authSagas = all([takeLatest(ActionAuthType.LOGIN_REQUEST, loginRequest)]);

export default authSagas;
