import {AppointmentService} from '../../../domain/use-cases/appointment';
import {
    AppointmentStatus,
    IUserAppointment,
    UserAppointment,
    UserAppointmentInput,
} from '../../../domain/entities/appointment';
import {IdType} from '../../../shared/store/types';
import {later, MockService} from '../base-mock';

export class ApointmentServiceMock
    extends MockService
    implements AppointmentService
{
    add(data: UserAppointmentInput): Promise<void> {
        return this.mockRequest(data);
    }

    cancel(id: IdType): Promise<void> {
        return this.mockRequest(id);
    }

    getAll(): Promise<UserAppointment[]> {
        const baseAppointment: IUserAppointment = {
            id: this.generateGuid(),
            service: {
                id: this.generateGuid(),
                imageUrl: '',
                name: 'Corte de cabelo com navalha e fogo',
                provider: {
                    id: this.generateGuid(),
                    name: 'Zequinha BarberShop',
                },
            },
            status: AppointmentStatus.WAITING,
            timeStart: new Date(2020, 10, 11, 12, 30),
            timeEnd: new Date(2020, 10, 11, 12, 30),
        };
        const serviceImages: string[] = [
            'https://image.freepik.com/free-vector/barbershop-logo_95982-25.jpg',
            'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/barbershop-logo-design-template-9880273b09ae6d101cae59105771f8c4_screen.jpg?ts=1584641345',
            'https://image.freepik.com/free-vector/luxury-barbershop-logo-design_313044-6.jpg',
            'https://image.freepik.com/free-vector/barbershop-logo_95982-25.jpg',
            'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/barbershop-logo-design-template-9880273b09ae6d101cae59105771f8c4_screen.jpg?ts=1584641345',
        ];
        const appointmentsMock: IUserAppointment[] = serviceImages.map(
            (img, i) => ({
                ...baseAppointment,
                id: this.generateGuid(),
                service: {...baseAppointment.service, imageUrl: img},
                status:
                    i === 0
                        ? AppointmentStatus.DONE
                        : AppointmentStatus.WAITING,
            }),
        );
        return later(
            Math.random() * 3000,
            appointmentsMock.map(a => new UserAppointment(a)),
        );
    }
}
