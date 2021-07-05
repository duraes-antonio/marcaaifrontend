import {AppointmentState} from './modules/appointments/reducer';
import {AuthState} from './modules/auth/reducers';
import {SalonState} from './modules/salon/reducers';
import {UserState} from './modules/user/reducers';
import {UserInterfaceState} from './modules/user-interface/reducer';
import {TemporaryState} from './modules/temp/reducer';

export type IdType = string;

export interface ReduxAction {
    type: string;
}

export interface ReduxActionWithValue<V, A = string> extends ReduxAction {
    value: V;
}

export interface ReduxActionWithId extends ReduxActionWithValue<IdType> {
    value: IdType;
}

export interface RootState {
    appointments: AppointmentState;
    auth: AuthState;
    salon: SalonState;
    user: UserState;
    userInterface: UserInterfaceState;
    temp: TemporaryState;
}

export type State<T> = any;

export type Reducer = <T>(state: State<T>, action: ReduxAction) => State<T>;
