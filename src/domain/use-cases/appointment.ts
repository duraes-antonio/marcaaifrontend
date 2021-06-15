import {UserAppointment, UserAppointmentInput} from '../entities/appointment';
import {IdType} from '../../shared/store/types';

export interface AppointmentService {
    add(data: UserAppointmentInput): Promise<void>;

    cancel(id: IdType): Promise<void>;

    getAll(): Promise<UserAppointment[]>;
}
