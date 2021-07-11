import {later, MockService} from '../base-mock';
import {ReviewService} from '../../../domain/use-cases/review';
import {AppointmentRating} from '../../../domain/entities/appointment';
import {IdType} from '../../../shared/store/types';

export class ReviewServiceMock extends MockService implements ReviewService {
    get(
        serviceId: IdType,
        currentPage = 1,
        perPage = 10,
    ): Promise<AppointmentRating[]> {
        const reviewBase: AppointmentRating = {
            id: this.generateGuid(),
            value: Math.random() * 5,
            comment:
                'Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade.',
            date: new Date(),
            appointmentId: this.generateGuid(),
            user: {
                name: 'José da Silva',
                id: this.generateGuid(),
                imageUrl:
                    'https://assetbucketdevelopment.blob.core.windows.net/testing/45699005130334625-Male_21.jpg',
            },
        };
        const reviews: AppointmentRating[] = new Array(perPage)
            .fill(0)
            .map(() => ({
                ...reviewBase,
                id: this.generateGuid(),
            }));
        return later(reviews, 1000);
    }
}
