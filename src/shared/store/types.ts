import {AppointmentState} from './modules/appointments/appointments.reducer';
import {AuthState} from './modules/auth/reducers';
import {SalonState} from './modules/salon/reducers';
import {UserState} from './modules/user/reducers';

export type IdType = string;

export interface ReduxAction {
    type: string;
}

export interface ReduxActionWithValue<T> extends ReduxAction {
    value?: T | null | undefined;
}

export interface ReduxActionWithId extends ReduxActionWithValue<IdType> {
    value: IdType;
}

export interface RootState {
    appointments: AppointmentState;
    auth: AuthState;
    salon: SalonState;
    user: UserState;
}

export type State<T> = any;

export type Reducer = <T>(state: State<T>, action: ReduxAction) => State<T>;
