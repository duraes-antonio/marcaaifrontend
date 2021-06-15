import {combineReducers} from 'redux';
import {ActionAppointment, ActionAppointmentType} from './appointments.actions';
import {
    IUserAppointment,
    UserAppointment,
} from '../../../../domain/entities/appointment';

export type AppointmentState = UserAppointment[];

export const INITIAL_STATE: AppointmentState = [];

const appointmentReducer = (
    state = INITIAL_STATE,
    action: ActionAppointment,
): AppointmentState => {
    switch (action.type) {
        case ActionAppointmentType.ADD:
            return [
                ...state,
                new UserAppointment(<IUserAppointment>action.value),
            ];
        default:
            return state;
    }
};

export default combineReducers([appointmentReducer]);
