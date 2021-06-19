import {ActionAppointmentType} from './appointments.actions';
import {UserAppointment} from '../../../../domain/entities/appointment';
import {ReduxActionWithValue} from '../../types';

export type AppointmentState = UserAppointment[];

export const INITIAL_STATE: AppointmentState = [];

const appointmentReducer = (
    state = INITIAL_STATE,
    action: ReduxActionWithValue<UserAppointment | UserAppointment[]>,
): AppointmentState => {
    switch (action.type) {
        case ActionAppointmentType.SET:
            return [...(action.value as UserAppointment[])];
        case ActionAppointmentType.ADD:
            return [...state, <UserAppointment>action.value];
        default:
            return state;
    }
};

export default appointmentReducer;
