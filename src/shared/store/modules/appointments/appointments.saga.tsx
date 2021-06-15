import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
    ActionAppointmentType,
    actionsAppointment,
} from './appointments.actions';
import {services} from '../../../../data/services/di';
import {UserAppointment} from '../../../../domain/entities/appointment';
import {ReduxActionWithId} from '../../types';

function* cancel(action: ReduxActionWithId) {
    const appointments: UserAppointment[] = yield call(() =>
        services.appointments.cancel(action.value),
    );
    // TODO: Opcionalmente substituir por uma Action de REMOVE
    yield put(
        actionsAppointment.getAllSuccess(
            appointments.filter(a => a.id !== action.value),
        ),
    );
    yield call(() => services.appointmentStorage.save(appointments));
}

function* getAll() {
    const appointments: UserAppointment[] = yield call(() =>
        services.appointments.getAll(),
    );
    yield put(actionsAppointment.getAllSuccess(appointments));
    yield call(() => services.appointmentStorage.save(appointments));
}

export const appointmentSagas = all([
    takeLatest(ActionAppointmentType.ALL, getAll),
    takeLatest(ActionAppointmentType.CANCEL, cancel),
]);
