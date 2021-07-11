import {AppointmentService} from '../../../domain/use-cases/appointment';
import {
    AppointmentRating,
    AppointmentStatus,
    IUserAppointment,
    RatingAppointmentInput,
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
                service: {
                    ...baseAppointment.service,
                    name: `#${i + 1} ${baseAppointment.service.name}`,
                    imageUrl: img,
                },
                status:
                    i === 0
                        ? AppointmentStatus.DONE
                        : AppointmentStatus.WAITING,
            }),
        );
        return later(
            appointmentsMock.map(a => new UserAppointment(a)),
            Math.random() * 3000,
        );
    }

    getReview(reviewId: IdType): Promise<AppointmentRating> {
        return later<AppointmentRating>({
            value: 4,
            id: reviewId,
            comment: 'Muito bom o atendimento e tals',
            date: new Date(2021, 1, 12),
            appointmentId: this.generateGuid(),
            user: {
                id: this.generateGuid(),
                name: 'Nelson da Silva',
            },
        });
    }

    addReview(data: RatingAppointmentInput): Promise<IdType> {
        return this.mockRequest(data).then(() => this.generateGuid());
    }

    updateReview(data: RatingAppointmentInput): Promise<void> {
        return this.mockRequest(data);
    }
}
