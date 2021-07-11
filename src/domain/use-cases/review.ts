import {AppointmentRating} from '../entities/appointment';
import {IdType} from '../../shared/store/types';

export interface ReviewService {
    get(
        serviceId: IdType,
        currentPage: number,
        perPage: number,
    ): Promise<AppointmentRating[]>;
}
