import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import {ActionAppointmentType, actionsAppointment} from './actions';
import {services} from '../../../../data/services/di';
import {
    RatingAppointmentInput,
    UserAppointment,
} from '../../../../domain/entities/appointment';
import {IdType, ReduxActionWithId, ReduxActionWithValue} from '../../types';
import {Optional} from '../../../types/general';
import reduxSelectors from '../../root-selector';
import {AppointmentState} from './reducer';
import {actionsUI} from '../user-interface/actions';

const {appointments: api} = services;
const {appointmentStorage: storage} = services;

function* updateAppointments(data: UserAppointment[]) {
    yield put(actionsAppointment.set(data));
    yield call(() => storage.save(data));
}

// TODO: Tratamento de erro pendente
function* cancel$(action: ReduxActionWithId) {
    yield call(() => api.cancel(action.value));
    const appointments: AppointmentState = yield select(
        reduxSelectors.appointments,
    );
    yield updateAppointments(appointments.filter(a => a.id !== action.value));
}

function* getAll$() {
    const mock: Optional<UserAppointment[]> = yield call(() => storage.load());
    yield put(actionsAppointment.set(mock.value ?? []));
    const appointments: UserAppointment[] = yield call(() => api.getAll());
    yield updateAppointments(appointments);
}

function* addReview$(action: ReduxActionWithValue<RatingAppointmentInput>) {
    const {appointmentId: id} = action.value;
    const ratingId: IdType = yield call(() => api.addReview(action.value));
    const appointments: AppointmentState = yield select(
        reduxSelectors.appointments,
    );
    yield updateAppointments(
        appointments.map(a =>
            a.id !== id ? a : new UserAppointment({...a, ratingId}),
        ),
    );
    yield put(actionsUI.setModalContent());
}

function* updateReview$(action: ReduxActionWithValue<RatingAppointmentInput>) {
    yield call(() => api.addReview(action.value));
    yield put(actionsUI.setModalContent());
}

export const appointmentsSaga$ = all([
    takeLatest(ActionAppointmentType.ALL_REQUEST, getAll$),
    takeLatest(ActionAppointmentType.CANCEL_REQUEST, cancel$),
    takeLatest(ActionAppointmentType.ADD_REVIEW_REQUEST, addReview$),
    takeLatest(ActionAppointmentType.UPDATE_REVIEW_REQUEST, updateReview$),
]);

export default appointmentsSaga$;
