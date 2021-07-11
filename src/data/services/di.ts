import {AuthServiceMock} from './auth/auth-mock.service';
import {ResetPasswordServiceMock} from './reset-password-mock';
import {UserAsyncStorageService} from './storage/user-async-storage';
import {ApointmentServiceMock} from './appointment/apointment-service.mock';
import {AppointmentAsyncStorageService} from './storage/appointment-async-storage';
import {UserAuth} from '../../domain/use-cases/user-auth';
import {AppointmentService} from '../../domain/use-cases/appointment';
import {ItemStorage} from '../../domain/use-cases/storage';
import {IUserAppointment} from '../../domain/entities/appointment';
import {User} from '../../domain/entities/user';
import {ResetPasswordService} from '../../domain/use-cases/reset-password';
import {ProviderService} from '../../domain/use-cases/provider';
import {ProviderServiceMock} from './provider/provider-service.mock';
import {ReviewService} from '../../domain/use-cases/review';
import {ReviewServiceMock} from './review/review-service.mock';

export interface ServiceCollection {
    auth: UserAuth;
    appointments: AppointmentService;
    appointmentStorage: ItemStorage<IUserAppointment[]>;
    provider: ProviderService;
    resetPassword: ResetPasswordService;
    review: ReviewService;
    userStorage: ItemStorage<User>;
}

// TODO: Remover mocks ao finalizar API
export const services: ServiceCollection = {
    auth: new AuthServiceMock(),
    appointments: new ApointmentServiceMock(),
    appointmentStorage: new AppointmentAsyncStorageService(),
    provider: new ProviderServiceMock(),
    resetPassword: new ResetPasswordServiceMock(),
    review: new ReviewServiceMock(),
    userStorage: new UserAsyncStorageService(),
};
