import {IProvider, ProviderInput} from '../entities/provider';
import {IdType} from '../../shared/store/types';
import {StringNullable} from '../../shared/types/general';

export interface ProviderService {
    create(data: ProviderInput): Promise<IProvider>;

    favoriteToggle(providerId: IdType): Promise<void>;

    get(providerId: IdType): Promise<IProvider | null>;

    search(term?: StringNullable): Promise<IProvider[]>;
}
