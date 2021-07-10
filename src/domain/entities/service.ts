import {NamedEntity} from './general';
import {ServiceProvider} from './appointment';

export interface SalonService extends NamedEntity {
    imageUrl?: string;
    provider: ServiceProvider;
}

export interface Service extends SalonService {
    coversUrl: string[];
    description: string;
    price: number;
    rating: number;
}
