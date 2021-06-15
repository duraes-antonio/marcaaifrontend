import {NamedEntity} from './general';
import {ServiceProvider} from './appointment';

export interface SalonService extends NamedEntity {
    imageUrl: string;
    provider: ServiceProvider;
}
