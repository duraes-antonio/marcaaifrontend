import {NamedEntity} from './general';

export interface IProvider extends NamedEntity {
    imageUrl?: string;
    averageRating: number;
    category: ProviderCategory;
}

export type ProviderInput = Omit<IProvider, 'id'>;

export enum ProviderCategory {
    BARBER,
    BARBERSHOP,
    BEAUTY_SALON,
    BEAUTY_CENTER,
    HAIRDRESSERS,
    MANICURE,
}

export const providerCategoryName: {[key in ProviderCategory]: string} = {
    [ProviderCategory.BARBER]: 'Barbeiro',
    [ProviderCategory.BARBERSHOP]: 'Barbearia',
    [ProviderCategory.BEAUTY_CENTER]: 'Centro de Tratamento Estético',
    [ProviderCategory.BEAUTY_SALON]: 'Salão de Beleza',
    [ProviderCategory.HAIRDRESSERS]: 'Cabeleireiro',
    [ProviderCategory.MANICURE]: 'Manicure',
};
