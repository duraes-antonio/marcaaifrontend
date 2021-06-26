import {all, call, put, takeLatest} from 'redux-saga/effects';
import {ActionAppointmentType, actionsAppointment} from './actions';
import {services} from '../../../../data/services/di';
import {UserAppointment} from '../../../../domain/entities/appointment';
import {ReduxActionWithId} from '../../types';
import {Optional} from '../../../types/general';

const {appointments: api} = services;
const {appointmentStorage: storage} = services;

function* cancel$(action: ReduxActionWithId) {
    const appointments: UserAppointment[] = yield call(() =>
        api.cancel(action.value),
    );
    yield put(
        actionsAppointment.set(appointments.filter(a => a.id !== action.value)),
    );
    yield call(() => storage.save(appointments));
}

function* getAll$() {
    const mock: Optional<UserAppointment[]> = yield call(() => storage.load());
    yield put(actionsAppointment.set(mock.value ?? []));

    const appointments: UserAppointment[] = yield call(() => api.getAll());
    yield put(actionsAppointment.set(appointments));
    yield call(() => storage.save(appointments));
}

export const appointmentsSaga$ = all([
    takeLatest(ActionAppointmentType.ALL_REQUEST, getAll$),
    takeLatest(ActionAppointmentType.CANCEL_REQUEST, cancel$),
]);

export default appointmentsSaga$;
