import {IProvider, ProviderInput} from '../entities/provider';
import {IdType} from '../../shared/store/types';
import {Nullable, StringNullable} from '../../shared/types/general';
import {Location} from '../../models/location';

export interface ProviderService {
    create(data: ProviderInput): Promise<IProvider>;

    favoriteToggle(providerId: IdType): Promise<void>;

    get(providerId: IdType): Promise<IProvider | null>;

    getFavorites(): Promise<IProvider[]>;

    search(
        term?: StringNullable,
        location?: Nullable<Location>,
    ): Promise<IProvider[]>;
}
