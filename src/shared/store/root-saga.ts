import {all} from 'redux-saga/effects';
import authSagas from './modules/auth/sagas';
import {salonSagas} from './modules/salon/sagas';
import {appointmentsSaga$} from './modules/appointments/appointments.saga';

// TODO: Tipar
export default function* rootSaga() {
    yield all({
        appointments: appointmentsSaga$,
        auth: authSagas,
        salon: salonSagas,
    });
}
