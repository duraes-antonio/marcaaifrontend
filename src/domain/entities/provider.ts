import {NamedEntity} from './general';
import {IdType} from '../../shared/store/types';
import {Workday, WorkdayStatus} from './schedule';
import {utilDate} from '../../shared/util/date';

export enum ProviderCategory {
    BARBER,
    BARBERSHOP,
    BEAUTY_SALON,
    BEAUTY_CENTER,
    HAIRDRESSERS,
    MANICURE,
    OTHER,
}

export interface IProviderBasic extends NamedEntity {
    coverUrl?: string;
    imageUrl?: string;
    category: ProviderCategory;
    workStatus?: WorkdayStatus;
    distanceInMeters?: number;
}

export interface IProvider extends IProviderBasic {
    routine?: Workday;
    exceptionalDays?: Workday[];
}

export type ProviderInput = Omit<IProvider, 'id'>;

export class Provider implements IProvider {
    readonly category = ProviderCategory.OTHER;
    readonly coverUrl?: string;
    readonly id!: IdType;
    readonly imageUrl?: string;
    readonly name!: string;
    readonly routine!: Workday;
    readonly exceptionalDays: Workday[] = [];
    readonly workStatus: WorkdayStatus = WorkdayStatus.UNKNOWN;

    constructor(data: IProvider) {
        Object.assign(this, data);
        this.workStatus = this.identifyWorkdayStatus();
    }

    private identifyWorkdayStatus(): WorkdayStatus {
        const exceptionalDay = this.exceptionalDays.find(d =>
            utilDate.isToday(d.officeHour.start),
        );
        return exceptionalDay?.status ?? this.routine.status;
    }
}

export const providerCategoryName: {[key in ProviderCategory]: string} = {
    [ProviderCategory.BARBER]: 'Barbeiro',
    [ProviderCategory.BARBERSHOP]: 'Barbearia',
    [ProviderCategory.BEAUTY_CENTER]: 'Centro Estético',
    [ProviderCategory.BEAUTY_SALON]: 'Salão de Beleza',
    [ProviderCategory.HAIRDRESSERS]: 'Cabeleireiro',
    [ProviderCategory.MANICURE]: 'Manicure',
    [ProviderCategory.OTHER]: 'Outros',
};
