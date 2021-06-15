import {ReduxActionWithValue} from '../../types';
import {
    IUserAppointment,
    UserAppointment,
} from '../../../../domain/entities/appointment';

export enum ActionAppointmentType {
    ADD = '@appointments/add',
    ALL = '@appointments/all',
    CANCEL = '@appointments/cancel',
}

export type ActionAppointment = ReduxActionWithValue<IUserAppointment>;

export const actionsAppointment = {
    add(value: IUserAppointment): ActionAppointment {
        return {type: ActionAppointmentType.ADD, value};
    },
    getAllSuccess(
        data: UserAppointment[],
    ): ReduxActionWithValue<UserAppointment[]> {
        return {type: ActionAppointmentType.ALL, value: data};
    },
};
