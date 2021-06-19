import {
    IdType,
    ReduxAction,
    ReduxActionWithId,
    ReduxActionWithValue,
} from '../../types';
import {
    IUserAppointment,
    UserAppointment,
} from '../../../../domain/entities/appointment';

export enum ActionAppointmentType {
    ADD "@appointments/add"d',
    SET "@appointments/set"t',
    ALL_REQUEST "@appointments/all-request"t',
    CANCEL_REQUEST "@appointments/cancel-request"t',
    CANCEL "@appointments/cancel"l',
}

export type ActionAppointment = ReduxActionWithValue<IUserAppointment>;

export const actionsAppointment = {
    add(value: IUserAppointment): ActionAppointment {
        return { type: ActionAppointmentType.ADD, value };
    },
    allRequest(): ReduxAction {
        return { type: ActionAppointmentType.ALL_REQUEST };
    },
    cancelRequest(id: IdType): ReduxActionWithId {
        return { type: ActionAppointmentType.CANCEL_REQUEST, value: id };
    },
    set(data: UserAppointment[]): ReduxActionWithValue<UserAppointment[]> {
        return { type: ActionAppointmentType.SET, value: data };
    }
};
