import {AuthServiceMock} from './auth/auth-mock.service';
import {ResetPasswordServiceMock} from './reset-password-mock';
import {UserAsyncStorageService} from './storage/user-async-storage';
import {ApointmentMockService} from './appointment/apointment-mock.service';
import {AppointmentAsyncStorageService} from './storage/appointment-async-storage';
import {UserAuth} from '../../domain/use-cases/user-auth';
import {AppointmentService} from '../../domain/use-cases/appointment';
import {ItemStorage} from '../../domain/use-cases/storage';
import {IUserAppointment} from '../../domain/entities/appointment';
import {User} from '../../domain/entities/user';
import {ResetPasswordService} from '../../domain/use-cases/reset-password';

export interface ServiceCollection {
    auth: UserAuth;
    appointments: AppointmentService;
    appointmentStorage: ItemStorage<IUserAppointment[]>;
    userStorage: ItemStorage<User>;
    resetPassword: ResetPasswordService;
}

// TODO: Remover mocks
export const services: ServiceCollection = {
    auth: new AuthServiceMock(),
    appointments: new ApointmentMockService(),
    appointmentStorage: new AppointmentAsyncStorageService(),
    userStorage: new UserAsyncStorageService(),
    resetPassword: new ResetPasswordServiceMock(),
};
